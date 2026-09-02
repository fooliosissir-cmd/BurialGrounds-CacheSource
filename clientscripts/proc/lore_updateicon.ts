/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_updateicon]

function lore_updateicon(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: number, intArg5: obj, intArg6: number, intArg7: obj, intArg8: number, intArg9: obj, intArg10: number, intArg11: obj, intArg12: number): void {
    if (ifGetHide(intArg1) == 0) {
        if (intArg5 != -1 && magic_runecount(intArg5, intArg0) < intArg6) {
            ifSetGraphic(intArg3, intArg0);
            return;
        }
        if (intArg7 != -1 && magic_runecount(intArg7, intArg0) < intArg8) {
            ifSetGraphic(intArg3, intArg0);
            return;
        }
        if (intArg9 != -1 && magic_runecount(intArg9, intArg0) < intArg10) {
            ifSetGraphic(intArg3, intArg0);
            return;
        }
        if (intArg11 != -1 && magic_runecount(intArg11, intArg0) < intArg12) {
            ifSetGraphic(intArg3, intArg0);
            return;
        }
        if (statBase(23) < intArg4) {
            if (varbit_assist_engaged == 1) {
                if (varp_assist_stat_magic < intArg4 || enumOp(type_component, type_int, Enum.enum_1061, intArg0) == 0) {
                    ifSetGraphic(intArg3, intArg0);
                    return;
                }
            } else {
                ifSetGraphic(intArg3, intArg0);
                return;
            }
        } else {
            ifSetGraphic(intArg2, intArg0);
        }
    }
}
