/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6388

function cs2_6388(intArg0: number, intArg1: number, intArg2: number, intArg3: obj, intArg4: component, intArg5: component): void {
    let str0: string = "";
    let int6: graphic = -1;

    ccCreate(intArg4, 5, intArg2);
    ccSetSize(36, 36, 0, 0);
    ccSetPosition(intArg0, intArg1, 0, 0);
    ccSetGraphic(Graphic.graphic_11756);
    ccCreate(intArg5, 5, intArg2);
    ccSetSize(36, 32, 0, 0);
    ccSetPosition(2 + intArg0, 2 + intArg1, 0, 0);

    if (intArg3 != -1) {
        str0 = "<col=ff981f>" + ocName(intArg3);
        ccSetObject(intArg3, 1);
        ccSetOpBase(str0);
        int6 = Graphic.graphic_11755;
        ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [intArg4, intArg2, int6]));
        int6 = Graphic.graphic_11756;
        ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [intArg4, intArg2, int6]));
    }
}
