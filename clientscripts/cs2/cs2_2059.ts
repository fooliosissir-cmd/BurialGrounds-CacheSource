/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2059

function cs2_2059(intArg0: number): void {
    let int1: struct = -1;
    let int2: number = 0;

    if (cs2_1119() == 1) {
        int1 = enumOp(type_int, type_struct, Enum.enum_728, varbit_zaros_spellbook);
        int2 = 1;
    } else {
        int1 = enumOp(type_int, type_struct, Enum.enum_2162, varbit_zaros_spellbook);
    }
    let int3: number = 0;
    defineArray(0, type_int, 4);

    switch (varbit_zaros_spellbook) {
        case 0:
            int3 = varbit_magre_order_modern;
            array0[0] = varbit_magre_filter_modern_combat;
            array0[1] = varbit_magre_filter_modern_skill;
            array0[2] = varbit_magre_filter_modern_misc;
            array0[3] = varbit_magre_filter_modern_tele;
            break;
        case 1:
            int3 = varbit_magre_order_zaros;
            array0[0] = varbit_magre_filter_ancient_combat;
            array0[1] = 0;
            array0[2] = 0;
            array0[3] = varbit_magre_filter_ancient_tele;
            break;
        case 2:
            int3 = varbit_magre_order_lunar;
            array0[0] = varbit_magre_filter_lunar_combat;
            array0[1] = 0;
            array0[2] = varbit_magre_filter_lunar_misc;
            array0[3] = varbit_magre_filter_lunar_tele;
            break;
        case 3:
            int3 = varbit_magre_order_dungeon;
            array0[0] = varbit_magre_filter_dungeon_combat;
            array0[1] = varbit_magre_filter_dungeon_skill;
            array0[2] = varbit_magre_filter_dungeon_misc;
            array0[3] = varbit_magre_filter_dungeon_tele;
            break;
    }

    if (intArg0 != -1) {
        if (int3 != intArg0) {
            soundSynth(Sound.sound_5845, 1, 0);
        }
        int3 = intArg0;
    }
    varc_631 = int3;
    let int4: Enum = enumOp(type_int, type_enum, structParam(int1, Param.param_662), int3);
    let int5: number = structParam(int1, Param.param_654);
    let int6: number = structParam(int1, Param.param_655);
    let int7: number = enumGetoutputcount(int4);
    let int8: number = 0;
    let int9: number = 0;
    let int10: Enum = -1;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: component = -1;
    let int15: number = -1;
    let int16: cursor = -1;

    while (int9 < int7) {
        int10 = enumOp(type_int, type_enum, int4, int9);
        if (int10 != -1) {
            int8 = enumGetoutputcount(int10);
            int11 = 0;
            int13 = 0;
            while (int11 < int8) {
                int14 = enumOp(type_int, type_component, int10, int13);
                if (int14 != -1) {
                    int11 = int11 + 1;
                    int15 = enumOp(type_component, type_int, Enum.enum_727, int14);
                    if ((int15 == -1 || array0[int15] == 0) && (mapMembers() == 1 || enumOp(type_component, type_int, Enum.enum_743, int14) == 0)) {
                        int12 = int12 + 1;
                        ifSetPosition(int6, int5, 0, 0, int14);
                        ifSetHide(false, int14);
                        int6 = int6 + structParam(int1, Param.param_657) + structParam(int1, Param.param_658);
                        if (int12 % structParam(int1, Param.param_660) == 0) {
                            int5 = int5 + structParam(int1, Param.param_656) + structParam(int1, Param.param_659);
                            int6 = structParam(int1, Param.param_655);
                        }
                        int16 = enumOp(type_component, 64, Enum.enum_209, int14);
                        if (int16 != -1) {
                            ifSettargetcursors(int16, Cursor.cursor_default, int14);
                        }
                    } else {
                        ifSetHide(true, int14);
                    }
                }
                int13 = int13 + 1;
                if (int13 > 997) {
                    return;
                }
            }
        }
        int9 = int9 + 1;
    }

    if (int2 == 1) {
        ifSetScrollSize(ifGetWidth(structParam(int1, Param.param_316)), int5 + structParam(int1, Param.param_656) + structParam(int1, Param.param_654), structParam(int1, Param.param_316));
        proc_scrollbar_vertical(structParam(int1, Param.param_684), structParam(int1, Param.param_316), Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else if (ifFind(structParam(int1, Param.param_316)) == 1) {
        ccSetScrollPos(0, 0);
        ccDeleteAll(structParam(int1, Param.param_684));
    }
    let int17: Enum = structParam(int1, Param.param_663);
    let int18: number = 0;

    if (int17 != -1) {
        int18 = enumGetoutputcount(int17);
        int13 = 0;
        while (int13 < int18) {
            if (int13 == int3) {
                ifSetGraphic(Graphic.graphic_1703, enumOp(type_int, type_component, int17, int13));
            } else {
                ifSetGraphic(Graphic.graphic_1701, enumOp(type_int, type_component, int17, int13));
            }
            int13 = int13 + 1;
        }
    }
    cs2_1121();
    ccDeleteAll(structParam(int1, Param.param_688));
}
