/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5062

function cs2_5062(intArg0: component, intArg1: number, intArg2: boolean): void {
    let int3: number = intArg1 * 12;

    if (intArg2 == true) {
        if (ccFind(intArg0, int3 + 2) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_4);
        }
        if (ccFind(intArg0, int3 + 3) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_3);
        }
        if (ccFind(intArg0, int3 + 4) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_5);
        }
    } else {
        if (ccFind(intArg0, int3 + 2) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_1);
        }
        if (ccFind(intArg0, int3 + 3) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_0);
        }
        if (ccFind(intArg0, int3 + 4) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_2);
        }
    }
}
