/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_21

function cs2_21(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: number, intArg4: boolean, intArg5: obj, intArg6: number, intArg7: obj, intArg8: number, intArg9: obj, intArg10: number, intArg11: obj, intArg12: number): void {
    if (stat(6) < intArg3 && (intArg4 == false || statBase(6) < intArg3) && (varbit_9071 == 0 || (intArg0 != Component.interface_430.component_430_24 && intArg0 != Component.interface_430.component_430_27 && intArg0 != Component.interface_430.component_430_33 && intArg0 != Component.interface_430.component_430_45 && intArg0 != Component.interface_430.component_430_42))) {
        if (varbit_assist_engaged == 1) {
            if (varp_assist_stat_magic < intArg3 || enumOp(type_component, type_int, Enum.enum_1061, intArg0) == 0) {
                ifSetGraphic(intArg2, intArg0);
                return;
            }
        } else {
            ifSetGraphic(intArg2, intArg0);
            return;
        }
    }

    if (intArg5 != -1 && magic_runecount(intArg5, intArg0) < intArg6) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }

    if (intArg7 != -1 && magic_runecount(intArg7, intArg0) < intArg8) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }

    if (intArg9 != -1 && magic_runecount(intArg9, intArg0) < intArg10) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }

    if (intArg11 != -1 && magic_runecount(intArg11, intArg0) < intArg12) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }

    if (intArg0 == Component.interface_192.component_192_27 && mapMembers() == 0) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }
    ifSetGraphic(intArg1, intArg0);
}
