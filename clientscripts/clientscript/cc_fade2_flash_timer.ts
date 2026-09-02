/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cc_fade2_flash_timer]

function cc_fade2_flash_timer(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number): void {
    let int9: number = 0;
    let int10: number = 0;

    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (intArg7 > 0) {
            ccSetOnTimer(hook(cc_fade2_flash_timer, "Iiiiiiii\xab", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7 - 1, intArg8]));
            return;
        }
        int9 = ccGetTrans();
        int10 = min(max(int9 + intArg2, intArg4), intArg5);
        if (int10 == intArg4 || int10 == intArg5) {
            if (int10 == intArg5) {
                intArg7 = intArg6;
            }
            if (int10 == intArg4 && intArg8 != -1) {
                soundVorbisVolume(intArg8, 1, 50, 255);
            }
            ccSetOnTimer(hook(cc_fade2_flash_timer, "Iiiiiiii\xab", [intArg0, intArg1, intArg3, intArg2, intArg4, intArg5, intArg6, intArg7, intArg8]));
        }
        ccSetTrans(int10);
    }
}
