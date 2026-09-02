/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2609

function cs2_2609(intArg0: component): void {
    if (varbit_mob_current_scenario == 1 || varbit_mob_current_scenario == 4 || varbit_mob_current_scenario == 3) {
        ifSetPosition(0, 5, 0, 0, intArg0);
    } else {
        ifSetPosition(0, 0, 0, 0, intArg0);
    }
}
