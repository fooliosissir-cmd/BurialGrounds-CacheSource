/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_spot_switch_onop_4]

function clan_theatre_spot_switch_onop_4(): void {
    if (varbit_clan_keep_theatre_spot4 == 1) {
        varbit_clan_keep_theatre_spot4 = 0;
    } else {
        varbit_clan_keep_theatre_spot4 = 1;
    }
    clan_theatre_spot_switch();
}
