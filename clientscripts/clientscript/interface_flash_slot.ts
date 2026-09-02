/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_flash_slot]

function interface_flash_slot(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    if (ifGetScrollWidth(intArg0) > 0) {
        int6 = (ifGetScrollWidth(intArg0) - 36 * intArg1) / (intArg1 - 1);
    } else {
        int6 = (ifGetWidth(intArg0) - 36 * intArg1) / (intArg1 - 1);
    }

    if (ifGetScrollHeight(intArg0) > 0) {
        int7 = (ifGetScrollHeight(intArg0) - 32 * intArg2) / (intArg2 - 1);
    } else {
        int7 = (ifGetHeight(intArg0) - 32 * intArg2) / (intArg2 - 1);
    }
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetGraphic(Graphic.exclamation_mark);
    ccSetSize(10, 32, 0, 0);
    ccSetPosition((36 + int6) * (intArg3 % intArg1) + 13, intArg3 / intArg1 * (32 + int7), 0, 0);
    ccSetHide(false);
    ccSetOnTimer(hook(interface_flash_fade, "Iiii", [intArg0, event_comsubid, clientClock(), clientClock() + 750]));
}
