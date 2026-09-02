/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4237

function cs2_4237(): void {
    if (varc_acs_cooldown_varc == 0 && varbit_acs_battleships_reloading > 0) {
        varc_acs_cooldown_varc = clientClock();
    } else {
        return;
    }
}
