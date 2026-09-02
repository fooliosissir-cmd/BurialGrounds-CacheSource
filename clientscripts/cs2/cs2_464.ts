/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_464

function cs2_464(intArg0: component): void {
    if (statBase(4) < 25) {
        ifSetText("<col=c80000>" + "A Ranged level of " + tostring(25) + " is required." + "</col>", intArg0);
    } else if (varbit_pest_points_old2 < 1) {
        ifSetText("<col=c80000>" + "1 Commendation required." + "</col>", intArg0);
    } else {
        ifSetText(tostring(pow(statBase(4), 2) / 600 * 32) + " XP per Commendation.", intArg0);
    }
}
