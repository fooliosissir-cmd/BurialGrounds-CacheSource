/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_468

function cs2_468(intArg0: component, intArg1: number): void {
    if (statBase(0) < 42 || statBase(2) < 42 || statBase(1) < 42 || statBase(3) < 42 || statBase(4) < 42 || statBase(6) < 42 || statBase(5) < 22) {
        ifSetText("<col=c80000>" + "Higher levels required...(show)" + "</col>", intArg0);
        return;
    }

    if (intArg0 == Component.interface_1011.component_1011_265 && varp_1875 < 1250) {
        ifSetText("<col=c80000>" + "1250 Conquest ranking required." + "</col>", intArg0);
        return;
    }

    if (varbit_pest_points_old2 < intArg1) {
        ifSetText("<col=c80000>" + tostring(intArg1) + " Commendations required." + "</col>", intArg0);
    } else {
        ifSetText(tostring(intArg1) + " Commendations.", intArg0);
    }
}
