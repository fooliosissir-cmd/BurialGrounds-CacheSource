/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5063

function cs2_5063(intArg0: component, intArg1: number, intArg2: boolean): void {
    let int3: number = intArg1 * 12;

    if (intArg2 == true) {
        if (ccFind(intArg0, int3 + 5) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_4);
        }
        if (ccFind(intArg0, int3 + 6) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_3);
        }
        if (ccFind(intArg0, int3 + 7) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_5);
        }
    } else {
        if (ccFind(intArg0, int3 + 5) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_1);
        }
        if (ccFind(intArg0, int3 + 6) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_0);
        }
        if (ccFind(intArg0, int3 + 7) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_2);
        }
    }

    if (ccFind(intArg0, int3 + 10) == 1) {
        ccSetGraphic(Graphic.aif_settings_icon_1);
    }
}
