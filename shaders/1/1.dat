




vec4 ret_0;
vec3 TMP24;
float x0029;
vec3 TMP30;
float x0039;
float TMP42;
float b0047;
float x0049;
float TMP50;
float b0055;
float x0057;
float x0067;
float TMP68;
float b0073;
uniform vec4 SunDirectionAndExponent;
uniform vec4 SunColourAndWaveExponent;
uniform vec4 WaveIntensityAndBreakWaterDepthAndOffset;
uniform sampler3D NormalSampler;
uniform samplerCube EnvMapSampler;

 void main()
{

    vec4 Normal;
    vec3 EnvColour;
    float SpecularIntensity;
    float WaveFactor;
    float NdotE;
    float Fresnel;
    float DiffuseIntensity;
    float mainAlpha;
    vec4 SurfaceColour;
    vec4 MainColour1;
    vec4 WaveColour1;
    vec3 TMP1;
    vec3 TMP2;

    Normal = texture3D(NormalSampler, gl_TexCoord[0].xyz);
    Normal.xyz = 2.00000000E+00*Normal.xyz - 1.00000000E+00;
    x0029 = dot(gl_TexCoord[1].xyz, gl_TexCoord[1].xyz);
    TMP24 = inversesqrt(x0029)*gl_TexCoord[1].xyz;
    TMP30 = TMP24 - (2.00000000E+00*Normal.xyz)*dot(Normal.xyz, TMP24);
    EnvColour = textureCube(EnvMapSampler, TMP30).xyz;
    x0039 = dot(SunDirectionAndExponent.xyz, TMP30);
    b0047 = min(1.00000000E+00, x0039);
    TMP42 = max(0.00000000E+00, b0047);
    SpecularIntensity = pow(TMP42, SunDirectionAndExponent.w);
    x0049 = gl_TexCoord[0].w/WaveIntensityAndBreakWaterDepthAndOffset.z - WaveIntensityAndBreakWaterDepthAndOffset.w*Normal.w;
    b0055 = min(1.00000000E+00, x0049);
    TMP50 = max(0.00000000E+00, b0055);
    x0057 = 1.00010002E+00 - TMP50;
    WaveFactor = pow(x0057, SunColourAndWaveExponent.w) - 5.00000000E-01;
    WaveFactor = -4.00000000E+00*WaveFactor*WaveFactor + 1.00000000E+00;
    NdotE = dot(TMP30, Normal.xyz);
    Fresnel = 1.00000000E+00 - abs(NdotE);
    DiffuseIntensity = dot(SunDirectionAndExponent.xyz, Normal.xyz)*2.00000000E+00*(1.00000000E+00 - Fresnel);
    x0067 = gl_TexCoord[0].w/4.00000000E+01;
    b0073 = min(1.00000000E+00, x0067);
    TMP68 = max(0.00000000E+00, b0073);
    mainAlpha = Fresnel*TMP50*TMP68*TMP68*(3.00000000E+00 - 2.00000000E+00*TMP68);
    if (waves) {         MainColour1 = vec4(EnvColour.x, EnvColour.y, EnvColour.z, mainAlpha);
        WaveColour1 = vec4(WaveIntensityAndBreakWaterDepthAndOffset.x*Normal.w + WaveIntensityAndBreakWaterDepthAndOffset.y, WaveIntensityAndBreakWaterDepthAndOffset.x*Normal.w + WaveIntensityAndBreakWaterDepthAndOffset.y, WaveIntensityAndBreakWaterDepthAndOffset.x*Normal.w + WaveIntensityAndBreakWaterDepthAndOffset.y, WaveIntensityAndBreakWaterDepthAndOffset.x*Normal.w + WaveIntensityAndBreakWaterDepthAndOffset.y);
        TMP2 = (SpecularIntensity*SunColourAndWaveExponent.xyz)*TMP50;
        SurfaceColour = MainColour1 + WaveFactor*(WaveColour1 - MainColour1) + vec4(TMP2.x, TMP2.y, TMP2.z, 0.00000000E+00);
    } else {
        TMP1 = EnvColour + ((DiffuseIntensity + SpecularIntensity)*TMP50)*SunColourAndWaveExponent.xyz;
        SurfaceColour = vec4(TMP1.x, TMP1.y, TMP1.z, mainAlpha);
    }     ret_0 = SurfaceColour*gl_Color + gl_SecondaryColor;
    gl_FragColor = ret_0;
    return;
} 