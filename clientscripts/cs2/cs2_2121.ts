/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2121

function cs2_2121(intArg0: component, intArg1: component): void {
    cs2_2122("Mime outfit", 1, intArg0);
    cs2_2122("Frog kit", 11, intArg0);
    cs2_2122("Zombie outfit (Gravedigger reward)", 21, intArg0);
    cs2_2122("Camo kit (Drill Demon reward)", 31, intArg0);
    cs2_2122("Lederhosen outfit (Freaky Forester reward)", 41, intArg0);
    ifSetScrollSize(0, 320, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);

    if (ccFind(intArg1, 1) == 1) {
        scrollbar_vertical_doscroll(intArg1, intArg0, ifGetScrollY(intArg0), true);
    }
}
