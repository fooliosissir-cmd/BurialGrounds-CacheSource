/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_checkbox_build_layer]

function aif_checkbox_build_layer(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: graphic): void {
    if (intArg0 == -1) {
        return;
    }
    ccDeleteAll(intArg0);
    let int4: number = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int4);
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(intArg1);
    int4 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int4);
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(intArg2);
    ccSetTrans(255);
    ccHookMouseEnter(hook(cs2_4410, "Iii", [intArg0, int4, 0]));
    ccHookMouseExit(hook(cs2_4410, "Iii", [intArg0, int4, 1]));
    int4 = ifGetNextSubId(intArg0);
    ccCreate(intArg0, 5, int4);
    ccSetSize(16384, 16384, 2, 2);
    ccSetPosition(0, 0, 1, 1);
    ccSetGraphic(intArg3);
    ccSetTrans(255);
    ccSetOnClick(hook(cs2_5362, "Iii", [intArg0, int4, 0]));
    ccSetOnRelease(hook(cs2_5362, "Iii", [intArg0, int4, 255]));
}
