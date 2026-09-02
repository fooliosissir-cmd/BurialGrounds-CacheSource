/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1119

function cs2_1119(): number {
    let int0: struct = enumOp(type_int, type_struct, Enum.enum_2162, varbit_zaros_spellbook);
    let int1: number = 0;

    defineArray(0, type_int, 4);

    switch (varbit_zaros_spellbook) {
        case 0:
            int1 = varbit_magre_order_modern;
            array0[0] = varbit_magre_filter_modern_combat;
            array0[1] = varbit_magre_filter_modern_skill;
            array0[2] = varbit_magre_filter_modern_misc;
            array0[3] = varbit_magre_filter_modern_tele;
            break;
        case 1:
            int1 = varbit_magre_order_zaros;
            array0[0] = varbit_magre_filter_ancient_combat;
            array0[1] = 0;
            array0[2] = 0;
            array0[3] = varbit_magre_filter_ancient_tele;
            break;
        case 2:
            int1 = varbit_magre_order_lunar;
            array0[0] = varbit_magre_filter_lunar_combat;
            array0[1] = 0;
            array0[2] = varbit_magre_filter_lunar_misc;
            array0[3] = varbit_magre_filter_lunar_tele;
            break;
        case 3:
            int1 = varbit_magre_order_dungeon;
            array0[0] = varbit_magre_filter_dungeon_combat;
            array0[1] = varbit_magre_filter_dungeon_skill;
            array0[2] = varbit_magre_filter_dungeon_misc;
            array0[3] = varbit_magre_filter_dungeon_tele;
            break;
    }
    let int2: Enum = enumOp(type_int, type_enum, structParam(int0, Param.param_662), int1);
    let int3: number = structParam(int0, Param.param_654);
    let int4: number = structParam(int0, Param.param_655);
    let int5: number = enumGetoutputcount(int2);
    let int6: number = 0;
    let int7: number = 0;
    let int8: Enum = -1;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: component = -1;
    let int13: number = -1;

    while (int7 < int5) {
        int8 = enumOp(type_int, type_enum, int2, int7);
        if (int8 != -1) {
            int6 = enumGetoutputcount(int8);
            int9 = 0;
            int11 = 0;
            while (int9 < int6) {
                int12 = enumOp(type_int, type_component, int8, int11);
                if (int12 != -1) {
                    int9 = int9 + 1;
                    int13 = enumOp(type_component, type_int, Enum.enum_727, int12);
                    if (int13 == -1 || (array0[int13] == 0 && (mapMembers() == 1 || enumOp(type_component, type_int, Enum.enum_743, int12) == 0))) {
                        int10 = int10 + 1;
                        int4 = int4 + structParam(int0, Param.param_657) + structParam(int0, Param.param_658);
                        if (int10 % structParam(int0, Param.param_660) == 0) {
                            int3 = int3 + structParam(int0, Param.param_656) + structParam(int0, Param.param_659);
                            int4 = structParam(int0, Param.param_655);
                        }
                    }
                }
                int11 = int11 + 1;
                if (int11 > 997) {
                    return 1;
                }
            }
        }
        int7 = int7 + 1;
    }

    if (int3 + structParam(int0, Param.param_656) >= 229) {
        return 1;
    } else {
        return 0;
    }
}
