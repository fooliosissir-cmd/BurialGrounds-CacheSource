/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sfa_bar]

function sfa_bar(intArg0: component): void {
    if (varc_1078 > varbit_sfa_event_time) {
        if (varc_1079 != 1) {
            ifSetOnTimer(hook(sfa_bar_timer, "I", [intArg0]), intArg0);
            varc_1079 = 1;
        }
    } else if (varc_1078 == 0) {
        varc_1078 = varbit_sfa_event_time;
    }
}
