/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_531

function cs2_531(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: component): void {
    let int4: graphic = -1;
    let int5: number = 0;
    let int6: number = -1;
    let int7: component = -1;
    let int8: component = -1;
    let int9: boolean = false;

    if (intArg0 == -1 || intArg1 == -1 || intArg2 == -1) {
        return;
    }

    if (intArg0 == Component.interface_301.component_301_63) {
        int5 = assist_switch_var(varbit_assist_runecraft_xp_on);
        int7 = Component.interface_301.component_301_45;
        int8 = Component.interface_301.component_301_46;
    }

    if (intArg0 == Component.interface_301.component_301_64) {
        int5 = assist_switch_var(varbit_assist_crafting_xp_on);
        int7 = Component.interface_301.component_301_47;
        int8 = Component.interface_301.component_301_48;
    }

    if (intArg0 == Component.interface_301.component_301_65) {
        int5 = assist_switch_var(varbit_assist_fletching_xp_on);
        int7 = Component.interface_301.component_301_49;
        int8 = Component.interface_301.component_301_50;
    }

    if (intArg0 == Component.interface_301.component_301_66) {
        int5 = assist_switch_var(varbit_assist_construction_xp_on);
        int7 = Component.interface_301.component_301_51;
        int8 = Component.interface_301.component_301_52;
    }

    if (intArg0 == Component.interface_301.component_301_67) {
        int5 = assist_switch_var(varbit_assist_farming_xp_on);
        int7 = Component.interface_301.component_301_53;
        int8 = Component.interface_301.component_301_54;
    }

    if (intArg0 == Component.interface_301.component_301_68) {
        int5 = assist_switch_var(varbit_assist_magic_xp_on);
        int7 = Component.interface_301.component_301_55;
        int8 = Component.interface_301.component_301_56;
    }

    if (intArg0 == Component.interface_301.component_301_69) {
        int5 = assist_switch_var(varbit_assist_smithing_xp_on);
        int7 = Component.interface_301.component_301_57;
        int8 = Component.interface_301.component_301_58;
    }

    if (intArg0 == Component.interface_301.component_301_70) {
        int5 = assist_switch_var(varbit_assist_cooking_xp_on);
        int7 = Component.interface_301.component_301_59;
        int8 = Component.interface_301.component_301_60;
    }

    if (intArg0 == Component.interface_301.component_301_71) {
        int5 = assist_switch_var(varbit_assist_herblore_xp_on);
        int7 = Component.interface_301.component_301_61;
        int8 = Component.interface_301.component_301_62;
    }

    if (int5 == 1) {
        int4 = intArg1;
        int9 = false;
        ifSetColour(colour(0xFAB432), int7);
        ifSetColour(colour(0xFAB432), int8);
    } else {
        int4 = intArg2;
        int9 = true;
        ifSetColour(colour(0x606060), int7);
        ifSetColour(colour(0x606060), int8);
    }
    ifSetGraphic(int4, intArg0);
    ifSetHide(int9, intArg3);
}
