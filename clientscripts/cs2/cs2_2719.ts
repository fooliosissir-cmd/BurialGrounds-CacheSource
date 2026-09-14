/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2719

function cs2_2719(intArg0: component, strArg0: string, intArg1: number, strArg1: string, intArg2: boolean): void {
    ccDeleteAll(intArg0);
    ifSetSize(intArg1, 27, 0, 0, intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(50, 25, 1, 0);
    ccSetPosition(-1, 0, 1, 1);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(25, 25, 0, 0);
    ccSetPosition(0, 0, 0, 1);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(25, 25, 0, 0);
    ccSetPosition(3, 0, 2, 1);
    ccSethflip(true);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(1, 0, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0x000000));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, -1, 1, 1);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextAlign(1, 1, 0);
    ccSetTextShadow(false);
    ccSetText(strArg0);
    cs2_2722(intArg0, false, intArg2);
    ifSetOp(1, strArg0, intArg0);
    ifSetOnMouseOver(hook(cs2_2721, "I11", [intArg0, true, intArg2]), intArg0);

    if (stringLength(strArg1) > 0) {
        ifSetOnMouseRepeat(hook(cs2_378, "sIii", [strArg1, event_com, -1, event_mousex]), intArg0);
    }
    ifSetOnMouseLeave(hook(cs2_2721, "I11", [intArg0, false, intArg2]), intArg0);
}
