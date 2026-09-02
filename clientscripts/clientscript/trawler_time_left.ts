/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trawler_time_left]

function trawler_time_left(): void {
    if (varc_820 < 2) {
        ifSetText("Time Left: ~1 Min", Component.interface_15.component_15_18);
    } else {
        ifSetText("Time Left: " + tostring(varc_820) + " Mins", Component.interface_15.component_15_18);
    }
}
