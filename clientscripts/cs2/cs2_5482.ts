/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5482

function cs2_5482(): void {
    let int0: number = 65535 * varbit_opn_clock_time / 60;

    ifSet2dangle(int0, Component.opn_clock.minute_hand);
    let int1: number = 65535 * varbit_opn_clock_time / 60 / 12;
    ifSet2dangle(int1, Component.opn_clock.hour_hand);
}
