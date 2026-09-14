/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5779

function cs2_5779(intArg0: number, intArg1: number, intArg2: component): void {
    if (ccFind(intArg2, intArg1 - 1) == 1) {
        if (intArg0 == 1) {
            ccSetGraphic(Graphic.aif_help_button_0);
        } else {
            ccSetGraphic(Graphic.aif_help_button_3);
        }
        ccSetOnMouseOver(hook(cs2_4009, "iiIi", [1, intArg0, event_com, intArg1 - 1]));
        ccSetOnMouseLeave(hook(cs2_4009, "iiIi", [0, intArg0, event_com, intArg1 - 1]));
    }
}
