/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_stronghold_main_get_map_graphic]

function clan_stronghold_main_get_map_graphic(intArg0: number, intArg1: number, intArg2: number): graphic {
    let int3: Enum = enumOp(type_int, type_enum, Enum.clan_stronghold_main_map_size_to_map_index_enum, intArg0);
    let int4: Enum = enumOp(type_int, type_enum, int3, intArg1);

    return enumOp(type_int, type_graphic, int4, intArg2);
}
