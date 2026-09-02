/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5453

function cs2_5453(intArg0: number, intArg1: number): void {
    let int2: component = -1;
    let int3: component = -1;

    switch (intArg1) {
        case 1:
            int2 = Component.interface_1156.component_1156_90;
            int3 = Component.interface_1156.component_1156_89;
            break;
        case 2:
            int2 = Component.interface_1156.component_1156_200;
            int3 = Component.interface_1156.component_1156_198;
            break;
        case 3:
            int2 = Component.interface_1156.component_1156_206;
            int3 = Component.interface_1156.component_1156_204;
            break;
        case 4:
            int2 = Component.interface_1156.component_1156_212;
            int3 = Component.interface_1156.component_1156_210;
            break;
        case 5:
            int2 = Component.interface_1156.component_1156_218;
            int3 = Component.interface_1156.component_1156_216;
            break;
        case 6:
            int2 = Component.interface_1156.component_1156_224;
            int3 = Component.interface_1156.component_1156_222;
            break;
        case 7:
            int2 = Component.interface_1156.component_1156_230;
            int3 = Component.interface_1156.component_1156_228;
            break;
        case 8:
            int2 = Component.interface_1156.component_1156_236;
            int3 = Component.interface_1156.component_1156_234;
            break;
        case 9:
            int2 = Component.interface_1156.component_1156_242;
            int3 = Component.interface_1156.component_1156_240;
            break;
        case 10:
            int2 = Component.interface_1156.component_1156_248;
            int3 = Component.interface_1156.component_1156_246;
            break;
        case 11:
            int2 = Component.interface_1156.component_1156_254;
            int3 = Component.interface_1156.component_1156_252;
            break;
        case 12:
            int2 = Component.interface_1156.component_1156_260;
            int3 = Component.interface_1156.component_1156_258;
            break;
        case 13:
            int2 = Component.interface_1156.component_1156_266;
            int3 = Component.interface_1156.component_1156_264;
            break;
        case 14:
            int2 = Component.interface_1156.component_1156_272;
            int3 = Component.interface_1156.component_1156_270;
            break;
        case 15:
            int2 = Component.interface_1156.component_1156_278;
            int3 = Component.interface_1156.component_1156_276;
            break;
        case 16:
            int2 = Component.interface_1156.component_1156_284;
            int3 = Component.interface_1156.component_1156_282;
            break;
        case 17:
            int2 = Component.interface_1156.component_1156_290;
            int3 = Component.interface_1156.component_1156_288;
            break;
        case 18:
            int2 = Component.interface_1156.component_1156_296;
            int3 = Component.interface_1156.component_1156_294;
            break;
        case 19:
            int2 = Component.interface_1156.component_1156_302;
            int3 = Component.interface_1156.component_1156_300;
            break;
        case 20:
            int2 = Component.interface_1156.component_1156_308;
            int3 = Component.interface_1156.component_1156_306;
            break;
        case 21:
            int2 = Component.interface_1156.component_1156_314;
            int3 = Component.interface_1156.component_1156_312;
            break;
        case 22:
            int2 = Component.interface_1156.component_1156_326;
            int3 = Component.interface_1156.component_1156_324;
            break;
    }

    if (intArg0 == 1) {
        if (intArg1 == 4 || intArg1 == 5 || intArg1 == 9 || intArg1 == 12 || intArg1 == 15 || intArg1 == 20 || intArg1 == 21 || intArg1 == 22) {
            ifSetText("<col=37addd>" + "Claim", int2);
        } else if (intArg1 == 16 || intArg1 == 17 || intArg1 == 18 || intArg1 == 19) {
            ifSetText("<col=37addd>" + "Claim (" + tostring(varbit_dom_purchase_tally) + " set avail)", int2);
        } else {
            ifSetText("Unlocked !", int2);
        }
        ifSetHide(true, int3);
        ifSetColour(colour(0xF5B241), int2);
    } else {
        ifSetText("Locked", int2);
    }
}
