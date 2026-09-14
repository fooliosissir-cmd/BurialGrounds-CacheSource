/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4910

function cs2_4910(intArg0: component): void {
    let int1: number = 24;
    let int2: number = 24;

    if (ifGetWidth(intArg0) < int1) {
        ifSetSize(int1, ifGetHeight(intArg0), 0, 0, intArg0);
    }

    if (ifGetHeight(intArg0) < int2) {
        ifSetSize(ifGetWidth(intArg0), int2, 0, 0, intArg0);
    }
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(int1, int2, 0, 0);
    ccSetGraphic(Graphic.aif_teleport_button_1_0);
    let int3: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(int1, int2, 0, 0);
    ccSetGraphic(Graphic.aif_teleport_button_1_1);
    ccSetOnMouseOver(hook(cs2_4410, "Iii", [intArg0, int3, 0]));
    ccSetOnMouseLeave(hook(cs2_4410, "Iii", [intArg0, int3, 1]));
    ccSetTrans(255);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(int1, int2, 0, 0);
    ccSetGraphic(Graphic.aif_teleport_button_1_2);
    ccSetOnClick(hook(cs2_4207, "Ii", [event_com, 0]));
    ccSetOnRelease(hook(cs2_4207, "Ii", [event_com, 1]));
    ccSetTrans(255);
}
