/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_243

function cs2_243(intArg0: number, intArg1: number): void {
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;
    let int5: number = 1;

    switch (intArg0) {
        case 38928641:
            int2 = Component.interface_594.component_594_253;
            int3 = Component.interface_594.component_594_254;
            int4 = Component.interface_594.component_594_255;
            break;
        case 38928642:
            int2 = Component.interface_594.component_594_284;
            int3 = Component.interface_594.component_594_285;
            int4 = Component.interface_594.component_594_286;
            break;
        case 38928643:
            int2 = Component.interface_594.component_594_260;
            int3 = Component.interface_594.component_594_261;
            int4 = Component.interface_594.component_594_262;
            break;
        case 38928648:
            int2 = Component.interface_594.component_594_280;
            int3 = Component.interface_594.component_594_281;
            int4 = Component.interface_594.component_594_282;
            break;
        case 38928649:
            int2 = Component.interface_594.component_594_276;
            int3 = Component.interface_594.component_594_277;
            int4 = Component.interface_594.component_594_278;
            break;
        case 38928650:
            int2 = Component.interface_594.component_594_267;
            int3 = Component.interface_594.component_594_268;
            int4 = Component.interface_594.component_594_269;
            break;
        case 38928655:
            int2 = Component.interface_594.component_594_272;
            int3 = Component.interface_594.component_594_273;
            int4 = Component.interface_594.component_594_274;
            break;
        case 38928672:
            int2 = Component.interface_594.component_594_237;
            int3 = Component.interface_594.component_594_238;
            int4 = Component.interface_594.component_594_239;
            break;
        case 38928673:
            int2 = Component.interface_594.component_594_295;
            int3 = Component.interface_594.component_594_296;
            int4 = Component.interface_594.component_594_297;
            break;
        case 38928674:
            int2 = Component.interface_594.component_594_291;
            int3 = Component.interface_594.component_594_292;
            int4 = Component.interface_594.component_594_293;
            break;
        case 38928683:
            int2 = Component.interface_594.component_594_241;
            int3 = Component.interface_594.component_594_242;
            int4 = Component.interface_594.component_594_243;
            break;
        case 38928684:
            int2 = Component.interface_594.component_594_245;
            int3 = Component.interface_594.component_594_246;
            int4 = Component.interface_594.component_594_247;
            break;
        case 38928690:
            int2 = Component.interface_594.component_594_249;
            int3 = Component.interface_594.component_594_250;
            int4 = Component.interface_594.component_594_251;
            break;
        case 38928685:
            int2 = Component.interface_594.component_594_302;
            int3 = Component.interface_594.component_594_303;
            int4 = Component.interface_594.component_594_304;
            break;
        case 38928386:
            int2 = Component.interface_594.component_594_11;
            int3 = Component.interface_594.component_594_12;
            int4 = Component.interface_594.component_594_13;
            int5 = 0;
            break;
        case 38928460:
            int2 = Component.interface_594.component_594_77;
            int3 = Component.interface_594.component_594_78;
            int4 = Component.interface_594.component_594_79;
            int5 = 0;
            break;
        case 38928387:
            int2 = Component.interface_594.component_594_4;
            int3 = Component.interface_594.component_594_5;
            int4 = Component.interface_594.component_594_6;
            int5 = 0;
            break;
        case 38928438:
            int2 = Component.interface_594.component_594_55;
            int3 = Component.interface_594.component_594_56;
            int4 = Component.interface_594.component_594_57;
            int5 = 0;
            break;
        case 38928509:
            int2 = Component.interface_594.component_594_126;
            int3 = Component.interface_594.component_594_127;
            int4 = Component.interface_594.component_594_128;
            int5 = 0;
            break;
        case 38928514:
            int2 = Component.interface_594.component_594_131;
            int3 = Component.interface_594.component_594_132;
            int4 = Component.interface_594.component_594_133;
            int5 = 0;
            break;
        default:
            cs2_675();
            break;
    }

    if (intArg1 == 0) {
        if (int5 == 1) {
            if (int2 != -1) {
                ifSetGraphic(Graphic.graphic_1750, int2);
            }
            if (int3 != -1) {
                ifSetGraphic(Graphic.graphic_1751, int3);
            }
            if (int4 != -1) {
                ifSetGraphic(Graphic.graphic_1752, int4);
            }
        } else {
            if (int2 != -1) {
                ifSetGraphic(Graphic.graphic_1756, int2);
            }
            if (int3 != -1) {
                ifSetGraphic(Graphic.graphic_1757, int3);
            }
            if (int4 != -1) {
                ifSetGraphic(Graphic.graphic_1758, int4);
            }
        }
    } else if (int5 == 1) {
        if (int2 != -1) {
            ifSetGraphic(Graphic.graphic_1753, int2);
        }
        if (int3 != -1) {
            ifSetGraphic(Graphic.graphic_1754, int3);
        }
        if (int4 != -1) {
            ifSetGraphic(Graphic.graphic_1755, int4);
        }
    } else {
        if (int2 != -1) {
            ifSetGraphic(Graphic.graphic_1759, int2);
        }
        if (int3 != -1) {
            ifSetGraphic(Graphic.graphic_1760, int3);
        }
        if (int4 != -1) {
            ifSetGraphic(Graphic.graphic_1761, int4);
        }
    }
}
