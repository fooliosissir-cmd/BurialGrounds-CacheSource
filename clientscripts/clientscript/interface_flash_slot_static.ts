/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_flash_slot_static]

function interface_flash_slot_static(intArg0: component): void {
    ccCreate(intArg0, 5, 4);
    ccSetGraphic(Graphic.exclamation_mark);
    ccSetSize(10, 32, 0, 0);
    ccSetPosition(0, 0, 1, 1);
    ccSetHide(false);
    ccSetOnTimer(hook(interface_flash_fade, "Iiii", [intArg0, 4, clientClock(), clientClock() + 750]));
}
