/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6425

function cs2_6425(intArg0: number, intArg1: number): void {
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;

    switch (intArg0) {
        case 85786644:
            int2 = Component.interface_1309.component_1309_33;
            int3 = Component.interface_1309.component_1309_34;
            int4 = Component.interface_1309.component_1309_35;
            break;
        case 85786646:
            int2 = Component.interface_1309.component_1309_25;
            int3 = Component.interface_1309.component_1309_26;
            int4 = Component.interface_1309.component_1309_27;
            break;
        case 85786648:
            int2 = Component.interface_1309.component_1309_29;
            int3 = Component.interface_1309.component_1309_30;
            int4 = Component.interface_1309.component_1309_31;
            break;
        case 85721153:
            int2 = Component.interface_1308.component_1308_66;
            int3 = Component.interface_1308.component_1308_67;
            int4 = Component.interface_1308.component_1308_68;
            break;
        case 85721280:
            int2 = Component.interface_1308.component_1308_56;
            int3 = Component.interface_1308.component_1308_57;
            int4 = Component.interface_1308.component_1308_58;
            break;
        case 85721285:
            int2 = Component.interface_1308.component_1308_198;
            int3 = Component.interface_1308.component_1308_199;
            int4 = Component.interface_1308.component_1308_200;
            break;
        case 85721293:
            int2 = Component.interface_1308.component_1308_206;
            int3 = Component.interface_1308.component_1308_207;
            int4 = Component.interface_1308.component_1308_208;
            break;
        case 85721301:
            int2 = Component.interface_1308.component_1308_214;
            int3 = Component.interface_1308.component_1308_215;
            int4 = Component.interface_1308.component_1308_216;
            break;
        case 85721320:
            int2 = Component.interface_1308.component_1308_233;
            int3 = Component.interface_1308.component_1308_234;
            int4 = Component.interface_1308.component_1308_235;
            break;
        case 85721404:
            int2 = Component.interface_1308.component_1308_317;
            int3 = Component.interface_1308.component_1308_318;
            int4 = Component.interface_1308.component_1308_319;
            break;
        case 85721423:
            int2 = Component.interface_1308.component_1308_336;
            int3 = Component.interface_1308.component_1308_337;
            int4 = Component.interface_1308.component_1308_338;
            break;
        case 85721344:
            int2 = Component.interface_1308.component_1308_257;
            int3 = Component.interface_1308.component_1308_258;
            int4 = Component.interface_1308.component_1308_259;
            break;
        case 85721366:
            int2 = Component.interface_1308.component_1308_279;
            int3 = Component.interface_1308.component_1308_280;
            int4 = Component.interface_1308.component_1308_281;
            break;
        case 85721385:
            int2 = Component.interface_1308.component_1308_298;
            int3 = Component.interface_1308.component_1308_299;
            int4 = Component.interface_1308.component_1308_300;
            break;
        case 85721510:
            int2 = Component.interface_1308.component_1308_432;
            int3 = Component.interface_1308.component_1308_433;
            int4 = Component.interface_1308.component_1308_434;
            break;
        case 85721536:
            int2 = Component.interface_1308.component_1308_449;
            int3 = Component.interface_1308.component_1308_450;
            int4 = Component.interface_1308.component_1308_451;
            break;
        case 85721555:
            int2 = Component.interface_1308.component_1308_468;
            int3 = Component.interface_1308.component_1308_469;
            int4 = Component.interface_1308.component_1308_470;
            break;
        case 85721576:
            int2 = Component.interface_1308.component_1308_489;
            int3 = Component.interface_1308.component_1308_490;
            int4 = Component.interface_1308.component_1308_491;
            break;
        case 85721599:
            int2 = Component.interface_1308.component_1308_512;
            int3 = Component.interface_1308.component_1308_513;
            int4 = Component.interface_1308.component_1308_514;
            break;
        case 85721618:
            int2 = Component.interface_1308.component_1308_531;
            int3 = Component.interface_1308.component_1308_532;
            int4 = Component.interface_1308.component_1308_533;
            break;
        default:
            return;
    }

    if (int2 == -1 || int3 == -1 || int4 == -1) {
        return;
    }

    if (ifGetGraphic(int2) == Graphic.aif_button_standard_text_blue_12) {
        return;
    }

    switch (intArg1) {
        case 1:
            cs2_6426(int2, int3, int4);
            break;
        case 2:
            cs2_6427(int2, int3, int4, intArg0);
            break;
        case 3:
            cs2_6428(int2, int3, int4);
            break;
        default:
            return;
    }
}
