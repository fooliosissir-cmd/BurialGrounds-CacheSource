/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rand_gate_stone_updateicon]

function proc_rand_gate_stone_updateicon(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: number, intArg4: boolean, intArg5: obj, intArg6: number, intArg7: obj, intArg8: number, intArg9: obj, intArg10: number, intArg11: obj, intArg12: number): void {
    if (stat(6) < intArg3 && (intArg4 == false || statBase(6) < intArg3)) {
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

    if (varp_rand_gate_stone_coord == -1) {
        ifSetGraphic(intArg2, intArg0);
        return;
    }
    ifSetGraphic(intArg1, intArg0);
}
