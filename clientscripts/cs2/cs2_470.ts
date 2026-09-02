/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_470

function cs2_470(intArg0: component, intArg1: number): void {
    if (varbit_pest_points_old2 < intArg1) {
        ifSetText("<col=c80000>" + tostring(intArg1) + " Commendations required." + "</col>", intArg0);
    } else {
        ifSetText(tostring(intArg1) + " Commendations.", intArg0);
    }
}
