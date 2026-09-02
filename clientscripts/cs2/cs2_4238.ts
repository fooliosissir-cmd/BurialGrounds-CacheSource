/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4238

function cs2_4238(intArg0: number, intArg1: component, intArg2: component): void {
    let int3: number = 0;

    if (varc_acs_cooldown_varc != 0) {
        int3 = max(0, 120 - (clientClock() - varc_acs_cooldown_varc));
    }

    if (int3 >= 60 && int3 <= 120) {
        ifSet2dangle(min(int3 * 545, 65353), intArg2);
        ifSet2dangle(0, intArg1);
    } else if (int3 > 0 && int3 < 60) {
        ifSet2dangle(32768, intArg2);
        ifSet2dangle(min(32768 + int3 * 545, 65353), intArg1);
    } else {
        ifSet2dangle(32768, intArg2);
        ifSet2dangle(32768, intArg1);
        if (varc_acs_cooldown_varc != 0) {
            varc_acs_cooldown_varc = 0;
        }
    }
}
