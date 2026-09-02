/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_overlay_status_timecounter]

function clanwars_overlay_status_timecounter(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = clientClock() - intArg1;

    varc_clanwars_countdown_timer = max(intArg2 - int3 / 30, 0);
    cs2_1790(intArg0);
}
