/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_get_tab]

function clan_stronghold_main_get_tab(): number {
    if (cs2_4550(1259) == 1) {
        return 0;
    } else if (cs2_4550(1261) == 1) {
        return 1;
    } else if (cs2_4550(1258) == 1) {
        return 2;
    } else if (cs2_4550(1260) == 1) {
        return 3;
    }
    return -1;
}
