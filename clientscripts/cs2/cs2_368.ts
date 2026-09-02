/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_368

function cs2_368(intArg0: component, strArg0: string, intArg1: number, strArg1: string): void {
    ccDeleteAll(intArg0);
    ifSetSize(intArg1, 27, 0, 0, intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(52, 26, 1, 0);
    ccSetPosition(-1, 0, 1, 1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(3, 0, 2, 1);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, -2, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    cs2_370(intArg0, false);
    ifSetOp(1, strArg0, intArg0);
    hookMouseEnter(hook(cs2_369, "I1", [intArg0, true]), intArg0);

    if (stringLength(strArg1) > 0) {
        ifSetOnMouseOver(hook(cs2_378, "sIii", [strArg1, event_com, -1, event_mousex]), intArg0);
    }
    hookMouseExit(hook(cs2_369, "I1", [intArg0, false]), intArg0);
}
