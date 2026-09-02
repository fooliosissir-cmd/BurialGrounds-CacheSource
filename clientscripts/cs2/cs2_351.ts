/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_351

function cs2_351(intArg0: number, intArg1: number): void {
    if (intArg1 == varc_197 || intArg0 != 1) {
        return;
    }
    let int2: boolean = int_to_bool(varc_196);
    soundSynth(Sound.sound_9830, 1, 0);
    let int3: Enum = Enum.enum_3278;
    let int4: struct = enumOp(type_int, type_struct, int3, intArg1 - 1);

    if (int4 == -1) {
        varc_197 = 1;
        varbit_playerdesign4_role = 1;
        int4 = enumOp(type_int, type_struct, int3, 0);
    } else {
        varc_197 = intArg1;
        varbit_playerdesign4_role = intArg1;
    }
    let int5: struct = playerdesign4_getoutfit(0, int4, int_to_bool(gender()));

    if (int5 == -1) {
        varc_86 = 0;
        varbit_playerdesign4_outfit = 0;
    } else {
        varc_86 = 1;
        varbit_playerdesign4_outfit = 1;
        cs2_359(int5, int2);
    }
    cs2_387(int2);
    cs2_390(int2);
}
