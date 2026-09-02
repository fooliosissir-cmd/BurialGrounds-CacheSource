/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4180

function cs2_4180(intArg0: number, intArg1: component, strArg0: string, intArg2: number): number {
    let int3: number = paraheight(strArg0, ifGetWidth(intArg1), Graphic.p11_full) * 10 + 2;
    let int4: number = clientClock() - intArg2;

    if (intArg2 > 0 && int4 < 255) {
        ccCreate(intArg1, 3, ifGetNextSubId(intArg1));
        ccSetSize(0, int3, 1, 0);
        ccSetPosition(0, intArg0, 1, 0);
        ccSetfill(true);
        ccSetColour(colour(0xFF0000));
        ccSetTrans(max(int4, 0));
        ccSetOnTimer(hook(cs2_4181, "Ii", [event_com, event_comsubid]));
    }
    ccCreate(intArg1, 4, ifGetNextSubId(intArg1));
    ccSetSize(0, int3, 1, 0);
    ccSetPosition(0, intArg0, 1, 0);
    ccSetColour(colour(0xAAAAAA));
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetText(strArg0);
    return intArg0 + int3 + 2;
}
