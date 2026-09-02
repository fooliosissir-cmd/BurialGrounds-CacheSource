/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6116

function cs2_6116(intArg0: component, intArg1: number, intArg2: number): void {
    ifSetHide(false, intArg0);

    switch (varc_fremsaga_thok2_ending_montage_last_direction) {
        case 0:
            ifSetPosition(16383, ifGetY(intArg0), 5, 0, intArg0);
            break;
        case 1:
            ifSetPosition(ifGetX(intArg0), 16383, 0, 5, intArg0);
            break;
        case 2:
            ifSetPosition(16383, ifGetY(intArg0), 3, 0, intArg0);
            break;
        case 3:
            ifSetPosition(ifGetX(intArg0), 16383, 0, 3, intArg0);
            break;
    }
    ifSetOnTimer(hook(cs2_6117, "Iiiii", [event_com, intArg1, 0, intArg2, 0]), intArg0);
}
