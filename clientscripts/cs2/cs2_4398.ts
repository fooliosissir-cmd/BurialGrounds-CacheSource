/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4398

function cs2_4398(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = 0;

    while (int3 < intArg2) {
        if (ccFind(intArg1, int3) == 1) {
            ccSetGraphic(Graphic.aif_bronze_icon_button_1_0);
        }
        int3 = int3 + 1;
    }

    if (ccFind(intArg1, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_bronze_icon_button_1_3);
    }
}
