/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4166

function cs2_4166(intArg0: component, intArg1: component, intArg2: number, intArg3: number, strArg0: string, strArg1: string): void {
    ccDeleteAll(intArg0);
    cs2_4178(0, intArg2, 0);

    if (mapMembers() == 0 && intArg3 == 1) {
        ifSetHide(true, intArg0);
        return;
    }
    ccCreate(intArg0, 3, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetfill(true);
    ccSetColour(colour(0xFF0000));
    ccSetHide(true);
    ifSetOnTimer(hook(cs2_4175, "Iii1", [event_com, ccGetId(), intArg2, false]), intArg0);
    ccCreate(intArg0, 5, 1);
    ccSetSize(15, 15, 0, 0);
    ccSetPosition(10, 0, 0, 1);
    cs2_4169(intArg2);
    ifSetOnVarTransmit(hook(cs2_4168, "IiiY", [event_com, ccGetId(), intArg2], [286]), intArg0);
    ccCreate(intArg0, 4, 2);
    ccSetSize(35, 0, 1, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(strArg0);
    hookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId(), colour(0xFFFFFF)]), intArg0);
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, intArg1, strArg1, 25, 200]), intArg0);
    hookMouseExit(hook(cs2_4167, "IiI", [event_com, ccGetId(), intArg1]), intArg0);
}
