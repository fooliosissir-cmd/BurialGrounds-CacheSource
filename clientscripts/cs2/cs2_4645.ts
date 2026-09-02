/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4645

function cs2_4645(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;

    let [int3, int4] = fremsaga_completed(intArg0);

    switch (intArg0) {
        case 1:
            int1 = Component.interface_153.component_153_16;
            int2 = Component.interface_153.component_153_175;
            break;
        case 2:
            int1 = Component.interface_153.component_153_13;
            int2 = Component.interface_153.component_153_14;
            break;
        case 4:
            int1 = Component.interface_153.component_153_10;
            int2 = Component.interface_153.component_153_11;
            break;
        case 5:
            int1 = Component.interface_153.component_153_1;
            int2 = Component.interface_153.component_153_2;
            break;
        case 3:
            int1 = Component.interface_153.component_153_201;
            int2 = Component.interface_153.component_153_202;
            break;
        case 6:
            int1 = Component.interface_153.component_153_185;
            int2 = Component.interface_153.component_153_186;
            break;
        default:
            return;
    }

    if (fremsaga_unabridged(intArg0) == 1) {
        if (int3 == 1) {
            if (int4 == 1) {
                ifSetGraphic(Graphic.aif_fremsaga_quality_icons_2, int1);
                ifSetHide(false, int1);
                ifSetGraphic(Graphic.aif_fremsaga_quality_icons_3, int2);
                ifSetHide(false, int2);
            } else {
                ifSetGraphic(Graphic.aif_fremsaga_quality_icons_0, int1);
                ifSetHide(false, int1);
                ifSetGraphic(Graphic.aif_fremsaga_quality_icons_3, int2);
                ifSetHide(false, int2);
            }
        } else {
            ifSetGraphic(Graphic.aif_fremsaga_quality_icons_0, int1);
            ifSetHide(false, int1);
        }
    } else if (int3 == 1) {
        ifSetGraphic(Graphic.aif_fremsaga_quality_icons_3, int1);
        ifSetHide(false, int1);
    } else {
        ifSetGraphic(Graphic.aif_fremsaga_quality_icons_1, int1);
        ifSetHide(false, int1);
    }
}
