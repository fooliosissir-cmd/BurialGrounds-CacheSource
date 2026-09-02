/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_352

function cs2_352(intArg0: number, intArg1: number): void {
    if (intArg1 == varc_86 || intArg0 != 1) {
        return;
    }
    soundSynth(Sound.sound_9819, 1, 0);
    let int2: struct = enumOp(type_int, type_struct, Enum.enum_3278, varc_197 - 1);

    if (int2 == -1) {
        return;
    }
    let int3: boolean = int_to_bool(gender());
    let int4: struct = playerdesign4_getoutfit(intArg1 - 1, int2, int3);

    if (int4 == -1) {
        return;
    }
    varc_86 = intArg1;
    varbit_playerdesign4_outfit = intArg1;
    cs2_359(int4, int3);
    cs2_390(int3);
}
