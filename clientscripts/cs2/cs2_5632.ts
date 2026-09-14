/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5632

function cs2_5632(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: number = structParam(intArg1, Param.rs3tli_button_layer_type);

    if (int2 == 2) {
        ifSetOnMouseOver(hook(cs2_4159, "Iii", [event_com, 0, 0]), intArg0);
        ifSetOnMouseLeave(hook(cs2_4159, "Iii", [event_com, 1, 0]), intArg0);
    } else if (int2 == 3) {
        ifSetOnClick(hook(cs2_4162, "I", [event_com]), intArg0);
        ifSetOnRelease(hook(cs2_4163, "I", [event_com]), intArg0);
        ifSetOnMouseLeave(hook(cs2_4163, "I", [event_com]), intArg0);
    }

    if (int2 == 5) {
        ccDeleteAll(intArg0);
        ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 0, 0);
        ccSetColour(colour(0x000000));
        ccSetTrans(128);
        ccSetfill(true);
        ifSetHide(true, intArg0);
        ifSetnoclickthrough(true, intArg0);
    } else {
        cs2_4204(intArg0, intArg1);
    }

    if (int2 == 4 || int2 == 5) {
        cs2_4161(intArg0, 0);
        ifSetHide(true, intArg0);
    }
}
