/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tooltip_time]

function tooltip_time(intArg0: number): number {
    if (varc_tooltip_time < clientClock() + intArg0) {
        if (varc_tooltip_time < clientClock()) {
            varc_tooltip_time = clientClock();
        }
        varc_tooltip_time = varc_tooltip_time + 2;
        return 0;
    }
    varc_tooltip_time = clientClock() + intArg0 + 10;
    return 1;
}
