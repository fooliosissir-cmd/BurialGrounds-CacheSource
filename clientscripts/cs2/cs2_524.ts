/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_524

function cs2_524(intArg0: component, intArg1: component): void {
    let int2: number = 0;

    if (varbit_assist_earned_xp >= 300000) {
        ifSetColour(colour(0xFF0000), intArg0);
        return;
    }

    if (intArg0 == Component.interface_301.component_301_45) {
        int2 = varbit_assist_runecraft_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_47) {
        int2 = varbit_assist_crafting_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_49) {
        int2 = varbit_assist_fletching_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_51) {
        int2 = varbit_assist_construction_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_53) {
        int2 = varbit_assist_farming_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_55) {
        int2 = varbit_assist_magic_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_57) {
        int2 = varbit_assist_smithing_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_59) {
        int2 = varbit_assist_cooking_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_61) {
        int2 = varbit_assist_herblore_xp_on;
    }

    if (intArg0 == Component.interface_301.component_301_83 || intArg0 == Component.interface_301.component_301_84) {
        int2 = 1;
    }

    if (int2 == 1) {
        ifSetColour(colour(0xFAB432), intArg0);
        ifSetColour(colour(0xFAB432), intArg1);
    } else {
        ifSetColour(colour(0x606060), intArg0);
        ifSetColour(colour(0x606060), intArg1);
    }
}
