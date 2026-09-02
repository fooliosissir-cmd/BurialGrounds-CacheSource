/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3125

function cs2_3125(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string): void {
    cc_add_graphic(intArg0, 0, 11, 11, 0, 0, Graphic.world_select_updown_arrows_2, false, false, false, 0);
    ccHookMouseEnter(hook(cs2_3126, "Ii", [intArg0, 0]));
    ccHookMouseExit(hook(cs2_3127, "Ii", [intArg0, 0]));
    ccSetOp(1, "Sort");
    ccSetOpBase(strArg0);
    ccSetOnOpt(hook(cs2_3148, "i", [intArg1]));
    cc_add_graphic(intArg0, 1, 11, 11, 0, 0, Graphic.world_select_updown_arrows_3, false, false, false, 0);
    ccSetPosition(0, 0, 2, 0);
    ccHookMouseEnter(hook(cs2_3126, "Ii", [intArg0, 1]));
    ccHookMouseExit(hook(cs2_3127, "Ii", [intArg0, 1]));
    ccSetOp(1, "Sort");
    ccSetOpBase(strArg1);
    ccSetOnOpt(hook(cs2_3148, "i", [intArg2]));
}
