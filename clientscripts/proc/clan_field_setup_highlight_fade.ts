/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_field_setup_highlight_fade]

function proc_clan_field_setup_highlight_fade(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    if (ccFind<1>(intArg0, ccGetId() + 4) == 1) {
        int2 = ccGetTrans<1>();
        if (intArg1 == 0) {
            int2 = max(int2 - 22, 0);
            ccSetTrans<1>(int2);
            if (ccFind<1>(intArg0, ccGetId() + 6) == 1) {
                ccSetTrans<1>(int2);
            }
            if (ccFind<1>(intArg0, ccGetId() + 8) == 1) {
                ccSetTrans<1>(int2);
            }
            if (int2 <= 0) {
                ccSetOnTimer(noHook(""));
            }
        } else {
            int2 = min(int2 + 22, 255);
            ccSetTrans<1>(int2);
            if (ccFind<1>(intArg0, ccGetId() + 6) == 1) {
                ccSetTrans<1>(int2);
            }
            if (ccFind<1>(intArg0, ccGetId() + 8) == 1) {
                ccSetTrans<1>(int2);
            }
            if (int2 >= 255) {
                ccSetOnTimer(noHook(""));
            }
        }
    }
}
