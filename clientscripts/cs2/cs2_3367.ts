/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3367

function cs2_3367(strArg0: string, intArg0: number, intArg1: number): void {
    ccCreate(Component.interface_1216.component_1216_3, 4, ifGetNextSubId(Component.interface_1216.component_1216_3));
    ccSetPosition(0, 25, 1, 2);
    ccSetSize(0, 33, 1, 0);
    let int2: number = stringWidth(strArg0, Graphic.graphic_3795) + stringWidth("New", Graphic.graphic_3795);
    ccSetOnTimer(hook(cs2_3368, "isi", [event_comsubid, strArg0, clientClock() + intArg0 * intArg1]));
    let int3: number = ccGetX();
    ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
    ccSetPosition(0, 24, 1, 2);
    ccSetSize(int2, 33, 0, 0);
    ccSettiling(true);
    let int4: graphic = Graphic.graphic_9240;
    ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int4, clientClock() + intArg0 * intArg1]));
    ccSendtoback();
    int3 = ccGetX();
    int2 = ccGetWidth();
    ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
    ccSetPosition(int3 - 50, 24, 0, 2);
    ccSetSize(50, 33, 0, 0);
    int4 = Graphic.graphic_9239;
    ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int4, clientClock() + intArg0 * intArg1]));
    ccSendtoback();
    ccCreate(Component.interface_1216.component_1216_3, 5, ifGetNextSubId(Component.interface_1216.component_1216_3));
    ccSetPosition(int3 + int2, 24, 0, 2);
    ccSetSize(50, 33, 0, 0);
    int4 = Graphic.graphic_9241;
    ccSetOnTimer(hook(cs2_4226, "idi", [event_comsubid, int4, clientClock() + intArg0 * intArg1]));
    ccSendtoback();
}
