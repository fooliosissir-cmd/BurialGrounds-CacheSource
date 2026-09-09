/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,graphics_options_renderer_button]

function graphics_options_renderer_button(intArg0: number, intArg1: component, intArg2: number, strArg0: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg1);
    ifSetPosition(intArg4, 0, 0, 0, intArg1);
    ifSetSize(intArg3, 27, 0, 0, intArg1);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetSize(6, 26, 1, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSettiling(true);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(3, 0, 2, 1);
    ccCreate(intArg1, 4, ifGetNextSubId(intArg1));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, -3, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    proc_graphics_options_renderer_button_highlight(intArg1, intArg2, false);
    hookMouseExit(hook(clientscript_graphics_options_renderer_button_highlight, "Ii1", [intArg1, intArg2, false]), intArg1);
    hookMouseEnter(hook(clientscript_graphics_options_renderer_button_highlight, "Ii1", [intArg1, intArg2, true]), intArg1);
    if (intArg0 == 0) {
        ifSetOnClick(hook(cs2_2697, "ii", [intArg2, intArg0]), intArg1);
    } else {
        ifSetOp(1, strArg0, intArg1);
        ifSetOnOpt(hook(cs2_2697, "ii", [intArg2, intArg0]), intArg1);
    }
}
