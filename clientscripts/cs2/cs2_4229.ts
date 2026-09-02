/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4229

function cs2_4229(intArg0: number, strArg0: string): void {
    if ((invTotal(Inv.inv, Obj.ogre_bow) > 0 || invGetobj(94, 3) == Obj.ogre_bow || invTotal(Inv.inv, Obj.obj_4827) > 0 || invGetobj(94, 3) == Obj.obj_4827) && varp_cbmulti >= intArg0) {
        ccSetText<1>(strArg0 + "<br>" + "Kills: " + tostring(intArg0));
        return;
    }
    ccSetText<1>(strArg0 + "<br>" + "<col=ff0000>" + "Kills: " + tostring(intArg0));
}
