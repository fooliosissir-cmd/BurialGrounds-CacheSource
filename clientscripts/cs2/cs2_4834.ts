/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4834

function cs2_4834(intArg0: component): void {
    let int1: number = ifGetNextSubId(intArg0) - 1;

    while (int1 >= 0) {
        if (ccFind(intArg0, int1) == 1) {
            ccSetGraphic(Graphic.aif_checkbox_large_5);
        }
        int1 = int1 - 1;
    }
}
