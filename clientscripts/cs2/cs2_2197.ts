/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2197

function cs2_2197(intArg0: component, intArg1: number, strArg0: string): void {
    let int2: number = 0;

    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (varc_flashing_int != 1) {
            ccSetOnTimer(noHook(""));
            ccSetText(strArg0);
            return;
        }
        if (clientClock() % 20 > 9) {
            ccSetText("");
        } else {
            ccSetText(strArg0);
        }
    }
}
