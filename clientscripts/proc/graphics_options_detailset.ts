/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_detailset]

function graphics_options_detailset(intArg0: struct, intArg1: number, intArg2: number): number {
    switch (intArg0) {
        case Struct.struct_830:
            detailRemoveroofsOption(int_to_bool(intArg1));
            break;
        case Struct.struct_831:
            detailGrounddecorOn(int_to_bool(intArg1));
            break;
        case Struct.struct_833:
            detailIdleanims(intArg1);
            break;
        case Struct.struct_834:
            detailFlickeringOn(int_to_bool(intArg1));
            break;
        case Struct.struct_836:
            detailSpotshadowsOn(int_to_bool(intArg1));
            break;
        case Struct.struct_837:
            if (intArg1 > 0 && detailGetTexturing() == 0) {
                detailTexturing(1);
            }
            detailHardshadows(intArg1);
            break;
        case Struct.struct_838:
            detailLightdetailHigh(int_to_bool(intArg1));
            break;
        case Struct.struct_839:
            if (graphics_options_detailavailable(intArg0, intArg1) == false) {
                return 0;
            }
            detailWaterDetailHigh(intArg1);
            break;
        case Struct.struct_840:
            if (intArg1 == 0 && detailGetToolkit() == 0) {
                detailWaterDetailHigh(0);
                detailFogOn(0);
            } else {
                if (detailGetGroundblending() == 0) {
                    detailGroundblending(1);
                }
                detailFogOn(int_to_bool(intArg1));
            }
            break;
        case Struct.struct_841:
            detailAntialiasing(intArg1);
            if (intArg1 > 0 && detailGetToolkit() != 0) {
                cs2_2700(4, intArg2, false, true);
                return 2;
            }
            detailAntialiasingDefault(intArg1);
            break;
        case Struct.struct_842:
            if (detailcanmodParticles() == 0 || detailcansetParticles(intArg1) == 0) {
                return 0;
            }
            detailParticles(intArg1);
            return 1;
        case Struct.struct_843:
            if (intArg1 == 0 && detailGetToolkit() == 0) {
                detailWaterDetailHigh(0);
                detailFogOn(0);
                detailTexturing(0);
                detailGroundblending(0);
            } else {
                detailGroundblending(int_to_bool(intArg1));
            }
            break;
        case Struct.struct_844:
            varc_987 = int_to_bool(intArg1);
            detailCustomcursors(varc_987);
            break;
        case Struct.struct_845:
            varc_178 = intArg1;
            if (getWindowMode() == 3) {
                if (fullScreenEnter(...fullScreenGetMode(intArg1)) == 1) {
                    cs2_2700(2, intArg2, false, false);
                    return 2;
                }
                return 0;
            }
            break;
        case Struct.struct_908:
            detailCpuusage(intArg1);
            break;
        case Struct.struct_963:
            if (intArg1 == 0) {
                detailHardshadows(0);
            } else if (detailGetGroundblending() == 0) {
                detailGroundblending(1);
            }
            detailTexturing(int_to_bool(intArg1));
            break;
        case Struct.struct_1009:
            if (detailcanmodMaxScreenSize() == 1 && detailcansetMaxScreenSize(intArg1) == 1) {
                detailMaxScreenSize(intArg1);
                return 1;
            } else {
                return 0;
            }
            break;
        case Struct.struct_2430:
            if (detailcanmodSkydetail() == 1) {
                if (detailcansetSkydetail(intArg1) == 3) {
                    return 0;
                }
                detailSkydetail(intArg1);
            } else {
                return 0;
            }
            break;
        case Struct.struct_2858:
            detailBloom(intArg1);
            break;
        case Struct.struct_2840:
            varc_1686 = int_to_bool(intArg1);
            break;
        case Struct.struct_2841:
            varc_1701 = intArg1;
            if (intArg1 == 1) {
                ifSetnoclickthrough(false, Component.interface_746.component_746_22);
            } else {
                ifSetnoclickthrough(true, Component.interface_746.component_746_22);
            }
            break;
        default:
            return 0;
    }
    return 1;
}
