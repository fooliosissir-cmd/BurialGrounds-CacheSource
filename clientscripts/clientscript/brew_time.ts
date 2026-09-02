/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,brew_time]

function brew_time(intArg0: component): void {
    if (varc_231 > 6) {
        ifSetText("Time Left : " + tostring(varc_231 - 5) + " mins", intArg0);
    } else if (varc_231 == 6) {
        ifSetText("Time Left : 1 min", intArg0);
    } else {
        ifSetText("Time Left : 0 mins", intArg0);
    }
}
