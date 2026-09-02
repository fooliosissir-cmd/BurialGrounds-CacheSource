/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3342

function cs2_3342(intArg0: component): void {
    let int1: graphic = -1;
    let int2: graphic = -1;
    let int3: graphic = -1;

    if (mapLang() == 1) {
        if (varc_1178 == 0) {
            int1 = Graphic.rand_xp_but_7;
            int2 = Graphic.rand_xp_but_6;
            int3 = Graphic.rand_xp_but_8;
        } else {
            int1 = Graphic.rand_xp_but_10;
            int2 = Graphic.rand_xp_but_9;
            int3 = Graphic.rand_xp_but_11;
        }
    } else if (varc_1178 == 0) {
        int1 = Graphic.rand_xp_but_1;
        int2 = Graphic.rand_xp_but_0;
        int3 = Graphic.rand_xp_but_2;
    } else {
        int1 = Graphic.rand_xp_but_4;
        int2 = Graphic.rand_xp_but_3;
        int3 = Graphic.rand_xp_but_5;
    }
    ifSetGraphic(int2, intArg0);
    hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
    hookMouseExit(hook(graphic_swapper, "Id", [event_com, int2]), intArg0);
    ifSetOnClick(hook(graphic_swapper, "Id", [event_com, int3]), intArg0);
    deltooltip_action(Component.interface_939.component_939_114);
}
