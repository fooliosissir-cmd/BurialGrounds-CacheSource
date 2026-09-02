/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_462

function cs2_462(intArg0: component): void {
    if (statBase(1) < 25) {
        ifSetText("<col=c80000>" + "A Defence level of " + tostring(25) + " is required." + "</col>", intArg0);
    } else if (varbit_pest_points_old2 < 1) {
        ifSetText("<col=c80000>" + "1 Commendation required." + "</col>", intArg0);
    } else {
        ifSetText(tostring(pow(statBase(1), 2) / 600 * 35) + " XP per Commendation.", intArg0);
    }
}
