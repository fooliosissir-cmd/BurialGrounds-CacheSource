/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2294

function cs2_2294(intArg0: number): number {
    if (varbit_prayer_mode == 1) {
        if (structParam(enumOp(type_int, type_struct, Enum.enum_863, intArg0), Param.prayer_members) == 1) {
            return 1;
        } else {
            return 0;
        }
    }

    if (structParam(enumOp(type_int, type_struct, Enum.enum_2279, intArg0), Param.prayer_members) == 1) {
        return 1;
    } else {
        return 0;
    }
}
