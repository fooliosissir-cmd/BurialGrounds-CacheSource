/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_350

function cs2_350(intArg0: number, intArg1: boolean): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg1 == true) {
        if (gender() == 1) {
            return;
        }
        baseIdkit(0, -1);
        baseIdkit(1, -1);
        baseIdkit(7, structParam(enumOp(type_int, type_struct, Enum.enum_3302, varbit_playerdesign4_colourrandomisation), Param.hair_default));
        baseIdkit(8, -1);
    } else {
        if (gender() == 0) {
            return;
        }
        baseIdkit(7, -1);
        baseIdkit(8, -1);
        baseIdkit(0, structParam(enumOp(type_int, type_struct, Enum.enum_3304, varbit_playerdesign4_colourrandomisation), Param.hair_default));
        baseIdkit(1, enumOp(type_int, 75, Enum.player_kit_beard_male_getidkit_onlythegood, varbit_playerdesign4_colourrandomisation / 2));
    }
    soundSynth(Sound.sound_9819, 1, 0);
    setGender(bool_to_int(intArg1));
    varc_196 = gender();
    varbit_8093 = varc_196;
    cs2_387(intArg1);
    varc_86 = 1;
    varbit_playerdesign4_outfit = 1;
    let int2: struct = enumOp(type_int, type_struct, Enum.enum_3278, varc_197 - 1);
    let int3: struct = -1;

    if (int2 != -1) {
        int3 = playerdesign4_getoutfit(0, int2, intArg1);
        if (int3 != -1) {
            cs2_359(int3, intArg1);
        }
    }
    cs2_390(intArg1);
}
