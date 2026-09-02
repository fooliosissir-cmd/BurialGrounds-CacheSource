/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_select_item]

function rcsiphonxp_select_item(intArg0: number, intArg1: component): void {
    let int2: number = 0;

    varc_rcsiphonxp_selected_item = intArg0;

    while (int2 < enumGetoutputcount(Enum.rcsiphonxp_item_iterator)) {
        if (ccFind(intArg1, int2) == 1 && int2 != intArg0) {
            ccSetGraphic(Graphic.aif_runecrafting_bkgrd_button2_0);
        }
        int2 = int2 + 1;
    }

    if (ccFind(intArg1, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_runecrafting_bkgrd_button2_1);
    }
}
