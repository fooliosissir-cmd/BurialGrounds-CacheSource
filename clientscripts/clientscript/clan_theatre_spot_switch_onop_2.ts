/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_spot_switch_onop_2]

function clan_theatre_spot_switch_onop_2(): void {
    if (varbit_clan_keep_theatre_spot2 == 1) {
        varbit_clan_keep_theatre_spot2 = 0;
    } else {
        varbit_clan_keep_theatre_spot2 = 1;
    }
    clan_theatre_spot_switch();
}
