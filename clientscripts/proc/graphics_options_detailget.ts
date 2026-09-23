/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_detailget]

function graphics_options_detailget(intArg0: struct): number {
    switch (intArg0) {
        case Struct.struct_830:
            return bool_to_int(detailGetRemoveroofsOption());
        case Struct.struct_831:
            return bool_to_int(detailGetGrounddecorOn());
        case Struct.struct_833:
            return detailGetIdleanims();
        case Struct.struct_834:
            return bool_to_int(detailGetFlickeringOn());
        case Struct.struct_836:
            return bool_to_int(detailGetSpotshadowsOn());
        case Struct.struct_837:
            return detailGetHardshadows();
        case Struct.struct_838:
            return bool_to_int(detailGetLightdetailHigh());
        case Struct.struct_839:
            return detailGetWaterDetailHigh();
        case Struct.struct_840:
            return bool_to_int(detailGetFogOn());
        case Struct.struct_841:
            return detailGetAntialiasing();
        case Struct.struct_842:
            return detailGetParticles();
        case Struct.struct_843:
            return bool_to_int(detailGetGroundblending());
        case Struct.struct_844:
            return bool_to_int(varc_987);
        case Struct.struct_845:
            return varc_178;
        case Struct.struct_908:
            return detailGetCpuusage();
        case Struct.struct_963:
            return bool_to_int(detailGetTexturing());
        case Struct.struct_1009:
            return detailGetMaxScreenSize();
        case Struct.struct_2430:
            if (detailcanmodSkydetail() == 1) {
                return detailGetSkydetail();
            }
            return -1;
        case Struct.struct_2858:
            return detailGetBloom();
        case Struct.struct_2840:
            return bool_to_int(varc_1686);
        case Struct.struct_2841:
            return varc_1701;
        default:
            return -1;
    }
}
