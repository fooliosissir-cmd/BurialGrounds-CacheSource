/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5979

function cs2_5979(intArg0: component): void {
    if (intArg0 == -1) {
        return;
    }
    ccDeleteAll(intArg0);
    let int1: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetColour(colour(0x000000));
    ccSetfill(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(2, 2, 0, 0);
    ccSetSize(4, 4, 1, 1);
    ccSetColour(colour(0xEECCEE));
    ccSetfill(false);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(4, 4, 0, 0);
    ccSetSize(8, 8, 1, 1);
    ccSetColour(colour(0x3B2925));
    ccSetfill(true);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(2, 2, 0, 0);
    ccSetSize(4, 4, 1, 1);
    ccSetColour(colour(0xFFFFFF));
    ccSetfill(true);
    ccHookMouseEnter(hook(cc_settrans, "Iii", [event_com, int1, 128]));
    ccHookMouseExit(hook(cc_settrans, "Iii", [event_com, int1, 255]));
    ccSetTrans(255);
    int1 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 3, int1);
    ccSetPosition(2, 2, 0, 0);
    ccSetSize(4, 4, 1, 1);
    ccSetColour(colour(0x000000));
    ccSetfill(true);
    ccSetOnClick(hook(cc_settrans, "Iii", [event_com, int1, 128]));
    ccSetOnRelease(hook(cc_settrans, "Iii", [event_com, int1, 255]));
    ccSetTrans(255);
}
