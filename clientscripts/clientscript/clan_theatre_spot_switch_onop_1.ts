/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_spot_switch_onop_1]

function clan_theatre_spot_switch_onop_1(): void {
    if (varbit_clan_keep_theatre_spot1 == 1) {
        varbit_clan_keep_theatre_spot1 = 0;
    } else {
        varbit_clan_keep_theatre_spot1 = 1;
    }
    clan_theatre_spot_switch();
}
