/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_worldswitcher_bots_icon]

function lobby_worldswitcher_bots_icon(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    cc_add_graphic(intArg0, intArg1, 16, 16, intArg2, intArg3, Graphic.world_select_bots, false, false, false, 0);
    ccSetPosition(intArg2, intArg3, intArg4, 0);

    if (testBit(intArg5, 2) == 0) {
        ccSetHide(true);
        return;
    }
    ccHookMouseEnter(hook(cs2_3149, "Iis", [intArg0, intArg1, "Bots are allowed on this world."]));
    ccHookMouseExit(hook(cs2_3153, "Ii", [intArg0, intArg1]));
}
