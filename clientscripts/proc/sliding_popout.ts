/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,sliding_popout]

function proc_sliding_popout(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: number, intArg5: number, intArg6: number, intArg7: number): void {
    let int8: component = ifGetLayer(intArg0);

    if (int8 == -1) {
        return;
    }

    if (intArg6 == 0 || intArg6 == 1) {
        if (ifGetWidth(int8) == intArg4) {
            ifSetOnTimer(hook(cs2_4545, "IiiIdi", [event_com, intArg5, intArg6, intArg1, intArg2, intArg7]), int8);
        } else if (ifGetWidth(int8) == intArg5) {
            ifSetOnTimer(hook(cs2_4546, "IiiIdi", [event_com, intArg4, intArg6, intArg1, intArg3, intArg7]), int8);
        }
    } else if (intArg6 == 2 || intArg6 == 3) {
        if (ifGetHeight(int8) == intArg4) {
            ifSetOnTimer(hook(cs2_4545, "IiiIdi", [event_com, intArg5, intArg6, intArg1, intArg2, intArg7]), int8);
        } else if (ifGetHeight(int8) == intArg5) {
            ifSetOnTimer(hook(cs2_4546, "IiiIdi", [event_com, intArg4, intArg6, intArg1, intArg3, intArg7]), int8);
        }
    }
}
