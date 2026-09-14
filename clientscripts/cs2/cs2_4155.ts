/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4155

function cs2_4155(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic): void {
    ifSetOnMouseOver(hook(cs2_4159, "Iii", [event_com, 0, 0]), intArg0);
    ifSetOnMouseLeave(hook(cs2_4159, "Iii", [event_com, 255, 0]), intArg0);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(24, 22, 1, 1);
    ccSetGraphic(intArg6);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(24, 12, 1, 0);
    ccSetGraphic(intArg2);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(24, 12, 1, 0);
    ccSetGraphic(intArg4);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(12, 24, 0, 1);
    ccSetGraphic(intArg5);
    ccSethflip(true);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(12, 24, 0, 1);
    ccSetGraphic(intArg5);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(intArg1);
    ccSethflip(true);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(intArg3);
    ccSethflip(true);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(intArg1);
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(intArg3);
    ccSetTrans(255);
}
