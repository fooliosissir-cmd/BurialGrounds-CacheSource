/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,crafting_level]

function crafting_level(intArg0: component, intArg1: number): void {
    if (stat(12) >= intArg1 || (varbit_assist_engaged == 1 && varp_assist_stat_crafting >= intArg1)) {
        ifSetColour(colour(0x00CC00), intArg0);
    } else {
        ifSetColour(colour(0xFF981F), intArg0);
    }
}
