/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2464

function cs2_2464(intArg0: number, intArg1: component): void {
    if (intArg0 > clientClock() - 5) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg1);

    if (cs2_2465(cs2_1305()) == 0) {
        if (getWindowMode() >= 2) {
            cs2_71(-1);
            return;
        }
        if (cs2_2465(4) == 1) {
            cs2_71(4);
        } else if (cs2_2465(9) == 1) {
            cs2_71(9);
        } else if (cs2_2465(12) == 1 && varp_tutorial > 3) {
            cs2_71(12);
        }
    }
}
