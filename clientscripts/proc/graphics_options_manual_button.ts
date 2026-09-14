/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_manual_button]

function graphics_options_manual_button(intArg0: number, intArg1: boolean, intArg2: component, intArg3: number, strArg0: string, intArg4: number, strArg1: string): void {
    ccDeleteAll(intArg2);
    ifSetSize(intArg4, 27, 0, 0, intArg2);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(6, 26, 1, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSettiling(true);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(3, 0, 2, 1);
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, -3, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    proc_graphics_options_manual_button_highlight(intArg2, intArg3, false);

    if (intArg3 == -1) {
        ifSetOnMouseLeave(hook(cs2_3930, "Ii1", [intArg2, intArg3, false]), intArg2);
        ifSetOnMouseOver(hook(cs2_3930, "Ii1", [intArg2, intArg3, true]), intArg2);
    } else {
        ifSetOnMouseLeave(hook(clientscript_graphics_options_manual_button_highlight, "Ii1", [intArg2, intArg3, false]), intArg2);
        ifSetOnMouseOver(hook(clientscript_graphics_options_manual_button_highlight, "Ii1", [intArg2, intArg3, true]), intArg2);
    }

    if (intArg0 == 0) {
        ifSetOnClick(hook(cs2_3388, "ii1", [intArg3, intArg0, intArg1]), intArg2);
    } else {
        ifSetOp(1, strArg0, intArg2);
        ifSetOnOp(hook(cs2_3388, "ii1", [intArg3, intArg0, intArg1]), intArg2);
    }
}
