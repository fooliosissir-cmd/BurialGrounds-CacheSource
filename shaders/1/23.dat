


struct VS_OUT {
    vec4 MulColour;
    vec4 AddColour;
};

struct PS_OUT {
    vec4 Colour;
};

VS_OUT TMP2;
PS_OUT ret_0;
vec3 TMP25;
vec3 TMP27;
float x0032;
float x0038;
float x0042;
float TMP43;
float b0048;
vec3 b0050;
vec4 a0054;
float x0056;
float TMP57;
float b0062;
uniform sampler2D DiffuseSampler;
uniform samplerCube EnvironmentSampler;
uniform vec3 DistanceFogColour;
uniform vec4 HeightFogPlane;
uniform vec3 HeightFogColour;
uniform vec4 SpecularExponent;

 void main()
{

    PS_OUT Out;
    vec4 DiffuseColour;
    vec3 SpecColour1;
    vec3 TMP1;

    TMP2.MulColour = gl_Color;
    TMP2.AddColour = gl_SecondaryColor;
    DiffuseColour = texture2D(DiffuseSampler, gl_TexCoord[0].xy);
    if (ShaderMode == 1) {         x0038 = dot(gl_TexCoord[1].xyz, gl_TexCoord[1].xyz);
        TMP25 = inversesqrt(x0038)*gl_TexCoord[1].xyz;
        x0042 = dot(gl_TexCoord[2].xyz, gl_TexCoord[2].xyz);
        TMP27 = inversesqrt(x0042)*gl_TexCoord[2].xyz;
        x0032 = dot(TMP25, TMP27);
        b0048 = min(1.00000000E+00, x0032);
        TMP43 = max(0.00000000E+00, b0048);
        SpecColour1 = vec3(pow(TMP43, SpecularExponent.x), pow(TMP43, SpecularExponent.x), pow(TMP43, SpecularExponent.x));
        b0050 = DiffuseColour.xyz*gl_Color.xyz;
        TMP1 = ((SpecColour1*gl_TexCoord[2].w)*(vec3( 1.00000000E+00, 1.00000000E+00, 1.00000000E+00) + SpecularExponent.y*(b0050 - vec3( 1.00000000E+00, 1.00000000E+00, 1.00000000E+00))))*DiffuseColour.w;
        TMP2.AddColour = gl_SecondaryColor + vec4(TMP1.x, TMP1.y, TMP1.z, 0.00000000E+00);
    }     if (ShaderMode == 2) {         TMP2.AddColour.xyz = TMP2.AddColour.xyz + textureCube(EnvironmentSampler, gl_TexCoord[1].xyz).xyz*DiffuseColour.w*TMP2.AddColour.w;
        TMP2.MulColour.xyz = gl_Color.xyz*vec3(1.00000000E+00 - DiffuseColour.w, 1.00000000E+00 - DiffuseColour.w, 1.00000000E+00 - DiffuseColour.w);
    }     if (IgnoreAlpha) {         DiffuseColour.w = 1.00000000E+00;
    }     if (ShaderMode == 4) {         a0054 = vec4(0.00000000E+00, gl_TexCoord[0].z, 0.00000000E+00, 0.00000000E+00);
        x0056 = dot(a0054, HeightFogPlane);
        b0062 = min(1.00000000E+00, x0056);
        TMP57 = max(0.00000000E+00, b0062);
        TMP2.MulColour.xyz = TMP2.MulColour.xyz*(1.00000000E+00 - TMP57);
        TMP2.AddColour.xyz = TMP2.AddColour.xyz*(1.00000000E+00 - TMP57) + HeightFogColour.xyz*TMP57;
        TMP2.MulColour.xyz = TMP2.MulColour.xyz*(1.00000000E+00 - gl_TexCoord[0].w);
        TMP2.AddColour.xyz = TMP2.AddColour.xyz*(1.00000000E+00 - gl_TexCoord[0].w) + DistanceFogColour.xyz*gl_TexCoord[0].w;
    }     Out.Colour = DiffuseColour*TMP2.MulColour + vec4(TMP2.AddColour.x, TMP2.AddColour.y, TMP2.AddColour.z, 0.00000000E+00);
    if (ShaderMode == 2 || ShaderMode == 1) {         Out.Colour.w = gl_Color.w;
    }     ret_0.Colour = Out.Colour;
    gl_FragColor = Out.Colour;
    return;
} 