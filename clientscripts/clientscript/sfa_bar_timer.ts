/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sfa_bar_timer]

function sfa_bar_timer(intArg0: component): void {
    if (clientClock() % 5 == 0) {
        if (scale(varc_1078, 2000, 200) > scale(varbit_sfa_event_time, 2000, 200)) {
            ifSetSize(20, scale(varc_1078, 2000, 200), 0, 0, intArg0);
            varc_1078 = varc_1078 - 1;
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            varc_1079 = 0;
        }
    }
}
