/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3625

function cs2_3625(intArg0: Enum, intArg1: Enum, intArg2: Enum, intArg3: Enum, intArg4: number, intArg5: number, intArg6: number): void {
    let int7: number = 0;
    let int8: number = enumGetoutputcount(intArg0);
    let int9: component = -1;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;

    soundSynth(Sound.sound_9506, 1, 0);

    while (int7 < int8) {
        int9 = enumOp(type_int, type_component, intArg0, int7);
        int10 = enumOp(type_int, type_int, intArg3, (int7 + intArg4) % int8);
        int13 = (int10 + intArg5) % enumGetoutputcount(Enum.int_to_rune);
        if (ifFind(int9) == 1) {
            if (ccParam(Param.trail_knot_current) != ccParam(Param.param_1104)) {
                ifSetObject(enumOp(type_int, type_obj, Enum.int_to_rune, ccParam(Param.param_1104)), -1, int9);
            }
            ccSetParamInt(Param.trail_knot_current, int10);
            ccSetParamInt(Param.param_1104, int13);
            int11 = ccParam(Param.trail_knot_posx);
            int12 = ccParam(Param.trail_knot_posy);
            ccSetPosition(int11, int12, 0, 0);
        }
        ifSetOnTimer(hook(cs2_3627, "Iiiiioiii", [int9, int11, int12, 25 * enumOp(type_int, type_int, intArg1, int7), 25 * enumOp(type_int, type_int, intArg2, int7), enumOp(type_int, type_obj, Enum.int_to_rune, int13), int13, 0, intArg6]), int9);
        int7 = int7 + 1;
    }
}
