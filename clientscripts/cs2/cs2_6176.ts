/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6176

function cs2_6176(intArg0: component, intArg1: number, intArg2: graphic): void {
    if (varc_rcsiphonxp_selected_item != intArg1 && ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(intArg2);
    }
}
