/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1594

function cs2_1594(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number, strArg0: string): void {
    if (ccFind(intArg1, intArg2) == 1 || (intArg2 == -1 && ifFind(intArg1) == 1)) {
        if (cc_gety_absolute() < scale(3, 5, 261)) {
            aif_tooltip(intArg0, intArg1, intArg2, strArg0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 2, intArg3, intArg4);
        } else {
            aif_tooltip(intArg0, intArg1, intArg2, strArg0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, intArg3, intArg4);
        }
    }
}
