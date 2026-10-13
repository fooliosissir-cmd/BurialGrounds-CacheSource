import gzip, json
from collections import Counter

SIZE=64
class ConversionError(RuntimeError): pass

def smart(b,p):
    if p>=len(b): raise ConversionError(f'EOF smart {p}/{len(b)}')
    a=b[p]; p+=1
    if a<128: return a,p
    if p>=len(b): raise ConversionError('EOF smart2')
    return ((a<<8)|b[p])-32768,p+1

def decode_tiles(b,levels):
    p=0; out=[]; st=Counter(); mx=Counter()
    for level in range(levels):
        for x in range(SIZE):
            for y in range(SIZE):
                rec=[]
                while True:
                    if p>=len(b): raise ConversionError(f'EOF tile {level},{x},{y} {p}/{len(b)}')
                    op=b[p]; p+=1
                    if op==0:
                        if not rec: st['empty']+=1
                        break
                    if op==1:
                        if p>=len(b): raise ConversionError('EOF height')
                        h=b[p]; p+=1; rec.append(('h',h)); st['height']+=1; mx['height']=max(mx['height'],h); st['h0']+=(h==0); break
                    if op<=49:
                        if p>=len(b): raise ConversionError('EOF overlay')
                        v=b[p]; p+=1; shape=(op-2)//4; rot=(op-2)&3; rec.append(('o',v,shape,rot,op)); st['overlay']+=1
                        mx['overlay']=max(mx['overlay'],v); mx['shape']=max(mx['shape'],shape); mx['rotation']=max(mx['rotation'],rot)
                    elif op<=81:
                        v=op-49; rec.append(('s',v)); st['settings']+=1; mx['settings']=max(mx['settings'],v)
                    else:
                        v=op-81; rec.append(('u',v)); st['underlay']+=1; mx['underlay']=max(mx['underlay'],v)
                out.append((level,x,y,rec)); st['tiles']+=1
    return p,out,st,mx

def encode_tiles(ts):
    out=bytearray()
    for _,_,_,rec in ts:
        for r in rec:
            if r[0]=='o': out+=bytes((r[4],r[1]))
            elif r[0]=='s': out.append(r[1]+49)
            elif r[0]=='u': out.append(r[1]+81)
            elif r[0]=='h': out+=bytes((1,r[1]))
        if not rec or rec[-1][0]!='h': out.append(0)
    return bytes(out)

def u16(b,p):
    if p+2>len(b): raise ConversionError('EOF u16')
    return (b[p]<<8)|b[p+1],p+2

def s16(b,p):
    v,p=u16(b,p); return (v-65536 if v>=32768 else v),p

def i32(b,p):
    if p+4>len(b): raise ConversionError('EOF i32')
    return int.from_bytes(b[p:p+4],'big',signed=True),p+4

def decode_effects(b,p):
    out=[]
    while p<len(b):
        at=p; op=b[p]; p+=1
        if op==0:
            if p>=len(b): raise ConversionError('truncated environment')
            f=b[p]; p+=1; e={'type':'environment'}
            if f&1: e['sunColour'],p=i32(b,p)
            if f&2: e['sunAmbient'],p=u16(b,p)
            if f&4: e['sunLight'],p=u16(b,p)
            if f&8: e['sunBacklight'],p=u16(b,p)
            if f&16:
                a=[]
                for _ in range(3): v,p=s16(b,p); a.append(v)
                e['sunPosition']=a
            if f&32: e['fogColour'],p=i32(b,p)
            if f&64: e['fogDepth'],p=u16(b,p)
            if f&128:
                a=[]
                for _ in range(6): v,p=u16(b,p); a.append(v)
                e['cubeTexture']=a
            out.append(e)
        elif op==1:
            if p>=len(b): raise ConversionError('truncated lights')
            n=b[p]; p+=1; lights=[]
            for _ in range(n):
                if p>=len(b): raise ConversionError('light EOF')
                level=b[p]; p+=1; x,p=u16(b,p); z,p=u16(b,p); height,p=u16(b,p); radius=b[p]; p+=1; ranges=[]
                for _ in range(radius*2+1): v,p=u16(b,p); ranges.append(v)
                colour,p=u16(b,p); packed=b[p]; p+=1
                e={'packedLevel':level,'x':x,'z':z,'heightOffset':height,'packedRadius':radius,'ranges':ranges,'colour':colour,'packedType':packed}
                if packed&31==31: e['lightType'],p=u16(b,p)
                lights.append(e)
            out.append({'type':'lights','lights':lights})
        elif op==2:
            if p+3>len(b): raise ConversionError('HDR EOF')
            out.append({'type':'hdr','bloom':b[p],'brightpass':b[p+1],'whitePoint':b[p+2]}); p+=3
        elif op==128:
            ident,p=u16(b,p); x,p=s16(b,p); y,p=s16(b,p); z,p=s16(b,p); rot,p=u16(b,p)
            out.append({'type':'skybox','id':ident,'x':x,'y':y,'z':z,'rotation':rot})
        elif op==129:
            levels=[]
            for _ in range(4):
                if p>=len(b): raise ConversionError('grid EOF')
                mode=b[p]; p+=1; mode=mode-256 if mode>=128 else mode; e={'mode':mode}
                if mode==1:
                    if p+256>len(b): raise ConversionError('grid sample EOF')
                    a=[v-256 if v>=128 else v for v in b[p:p+256]]; p+=256; e['samples']=[a[i:i+16] for i in range(0,256,16)]
                levels.append(e)
            out.append({'type':'lightGrid','levels':levels})
        else: raise ConversionError(f'effect opcode {op} at {at}')
    return out,p

def decode_locs(b):
    p=0; oid=-1; out=[]; groups=[]
    while True:
        start=p; delta=0
        while True:
            part,p=smart(b,p); delta+=part
            if part!=32767: break
        if delta==0: break
        oid+=delta; packed=0; count=0
        while True:
            d,p=smart(b,p)
            if d==0: break
            packed+=d-1
            if p>=len(b): raise ConversionError('loc EOF')
            info=b[p]; p+=1; out.append((oid,(packed>>6)&63,packed&63,packed>>12,info>>2,info&3)); count+=1
        groups.append((oid,start,p,count))
    return out,groups,p

def write_smart(v):
    if not 0<=v<=32767: raise ConversionError(f'smart range {v}')
    return bytes((v,)) if v<128 else (v+32768).to_bytes(2,'big')
def write_sum(v):
    out=bytearray()
    while v>=32767: out+=write_smart(32767); v-=32767
    return bytes(out)+write_smart(v)
def encode_locs(a):
    a=sorted(a,key=lambda r:(r[0],(r[3]<<12)|(r[1]<<6)|r[2])); out=bytearray(); last=-1; i=0
    while i<len(a):
        oid=a[i][0]; out+=write_sum(oid-last); last=oid; prev=0
        while i<len(a) and a[i][0]==oid:
            _,x,y,level,shape,rot=a[i]; packed=(level<<12)|(x<<6)|y; out+=write_smart(packed-prev+1); prev=packed; out.append((shape<<2)|rot); i+=1
        out+=write_smart(0)
    return bytes(out)+write_smart(0)

def check_limits(st,mx,name):
    bad=[]
    if mx['underlay']>174: bad.append(f"underlay {mx['underlay']}")
    if mx['settings']>32: bad.append(f"settings {mx['settings']}")
    if mx['shape']>11: bad.append(f"shape {mx['shape']}")
    if st['h0']: bad.append(f"height-zero {st['h0']}")
    if bad: raise ConversionError(name+': '+', '.join(bad))

def decode_surface(b,name):
    p,t,st,mx=decode_tiles(b,4); check_limits(st,mx,name); ef=[]
    if p<len(b): ef,end=decode_effects(b,p); assert end==len(b)
    if encode_tiles(t)!=b[:p]: raise ConversionError(name+': tile round-trip failed')
    return t,ef,mx,p

def decode_underwater(b,name):
    try:
        p,t,st,mx=decode_tiles(b,4); ef=[]; end=p
        if p<len(b): ef,end=decode_effects(b,p)
        if end==len(b) and all(not r for _,_,_,r in t[SIZE*SIZE:]):
            one=t[:SIZE*SIZE]; raw=encode_tiles(one); p,one,st,mx=decode_tiles(raw,1); check_limits(st,mx,name)
            return one,ef,mx,p,'dropped three blank legacy underwater planes'
    except Exception: pass
    p,t,st,mx=decode_tiles(b,1); check_limits(st,mx,name); ef=[]
    if p<len(b): ef,end=decode_effects(b,p); assert end==len(b)
    return t,ef,mx,p,'source already one-plane underwater'

def token(rec):
    if not rec: return '-'
    return ','.join(f'o{r[1]}/{r[2]}/{r[3]}' if r[0]=='o' else f'{r[0]}{r[1]}' for r in rec)
def terrain_json(region,levels,ts,ef):
    grid=[[['']*SIZE for _ in range(SIZE)] for _ in range(levels)]
    for level,x,y,rec in ts:
        if level<levels: grid[level][x][y]=token(rec)
    return {'region':region,'levels':levels,'tiles':[[' '.join(row) for row in plane] for plane in grid],'effects':ef}
def locs_json(region,a):
    a=sorted(a,key=lambda r:(r[0],(r[3]<<12)|(r[1]<<6)|r[2]))
    return {'region':region,'locs':[{'id':i,'x':x,'y':y,'level':l,'shape':s,'rotation':r} for i,x,y,l,s,r in a]}
def payload(path):
    b=path.read_bytes(); return gzip.decompress(b) if path.suffix.lower()=='.gz' else b
def write_json(path,value):
    path.parent.mkdir(parents=True,exist_ok=True); path.write_text(json.dumps(value,indent=2)+'\n',encoding='utf-8')
