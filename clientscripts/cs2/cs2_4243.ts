/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4243

function cs2_4243(intArg0: Enum): number {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: struct = -1;
    let str0: string = "";
    let str1: string = "";
    let int5: number = 0;
    let int6: number = 0;
    let int7: graphic = -1;
    let int8: graphic = -1;
    let int9: number = 0;
    let int10: number = 0;
    let int11: graphic = -1;
    let int12: graphic = -1;
    let int13: number = 0;
    let int14: number = 20;
    let int15: number = 23;
    let int16: number = 0;
    let int17: struct = -1;

    while (int1 < enumGetoutputcount(intArg0)) {
        int2 = enumOp(type_int, type_int, intArg0, int1);
        int4 = enumOp(type_int, type_struct, Enum.enum_3483, int2);
        if (mapMembers() == 1 && varbit_task_priority_mode == 1) {
            int17 = enumOp(type_struct, type_struct, Enum.enum_5483, int4);
        }
        if (int17 != -1) {
            int4 = int17;
        }
        if (int4 != -1 && task_get_progress(int2) != 2) {
            str0 = structParam(int4, Param.task_name);
            if (structParam(int4, Param.param_1270) != 4094) {
                int7 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int4, Param.param_1270)), Param.param_952);
            } else {
                int7 = structParam(int4, Param.task_icon);
            }
            ccCreate(Component.interface_917.component_917_67, 5, int9);
            int12 = gameframe_skin_graphic(Graphic.graphic_4041);
            int11 = gameframe_skin_graphic(Graphic.graphic_4042);
            ccSetGraphic(int12);
            ccSetOnMouseOver(hook(cs2_4013, "id", [event_comsubid, int11]));
            ccSetOnMouseLeave(hook(cs2_4013, "id", [event_comsubid, int12]));
            ccSetSize(70 + 2, 56 + 1, 0, 0);
            ccSetPosition(int14 - 1, int15 - 1, 0, 0);
            ccSetOp(1, "Summary for");
            if (varbit_task_priority_mode == 0) {
                if (varbit_8576 == int2) {
                    ccSetOp(2, "Unpin");
                } else {
                    ccSetOp(2, "Pin");
                }
            }
            ccSetOpBase(str0);
            ccSetOnOp(hook(cs2_3990, "iii", [int2, event_comsubid, event_opindex]));
            if (cs2_3999(int2) == 0) {
                str1 = " -" + "<br>";
                str1 = append(structParam(int4, Param.task_name), str1);
                str1 = append(str1, structParam(int4, Param.task_details));
                ccSetOnMouseRepeat(hook(cs2_3998, "iiisIi", [ccGetY(), event_mousex, event_mousey, str1, event_com, event_comsubid]));
            }
            if (cs2_3994(int2) == 1 && int2 != 4094) {
                varc_1422 = int9;
            }
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 1);
            ccSetSize(50, 50, 0, 0);
            ccSetGraphic(int7);
            ccSetPosition(int14 + 2, int15 + 2, 0, 0);
            ccSetTrans(int16);
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 2);
            ccSetSize(14, 18, 0, 0);
            if (cs2_3996(int2) == 0) {
                int8 = Graphic.symbol_lock;
                ccSetSize(11, 11, 0, 0);
            } else {
                int8 = -1;
            }
            ccSetGraphic(int8);
            ccSetPosition(int14 + 70 - 16, int15 + 4, 0, 0);
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 3);
            ccSetSize(11, 11, 0, 0);
            ccSetPosition(int14 + 70 - 17, int15 + 39, 0, 0);
            if (cs2_3994(int2) == 1) {
                ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_4296));
            }
            int10 = int10 + 1;
            int9 = int10 * 4;
            int14 = int14 + 70 + 20;
            int13 = (int13 + 1) % 5;
            if (int13 == 0) {
                int15 = int15 + 56 + 23;
                int14 = 20;
            }
        }
        int1 = int1 + 1;
    }
    int1 = 0;

    while (int1 < enumGetoutputcount(intArg0)) {
        int2 = enumOp(type_int, type_int, intArg0, int1);
        int4 = enumOp(type_int, type_struct, Enum.enum_3483, int2);
        if (mapMembers() == 1 && varbit_task_priority_mode == 1) {
            int17 = enumOp(type_struct, type_struct, Enum.enum_5483, int4);
        }
        if (int17 != -1) {
            int4 = int17;
        }
        if (int4 != -1 && task_get_progress(int2) == 2) {
            str0 = structParam(int4, Param.task_name);
            if (structParam(int4, Param.param_1270) != 4094) {
                int7 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int4, Param.param_1270)), Param.param_952);
            } else {
                int7 = structParam(int4, Param.task_icon);
            }
            ccCreate(Component.interface_917.component_917_67, 5, int9);
            int12 = Graphic.graphic_4043;
            int11 = Graphic.graphic_4043;
            ccSetGraphic(int12);
            ccSetOnMouseOver(hook(cs2_4013, "id", [event_comsubid, int11]));
            ccSetOnMouseLeave(hook(cs2_4013, "id", [event_comsubid, int12]));
            ccSetSize(70 + 2, 56 + 1, 0, 0);
            ccSetPosition(int14 - 1, int15 - 1, 0, 0);
            ccSetOp(1, "Summary for");
            ccSetOpBase(str0);
            ccSetOnOp(hook(cs2_3990, "iii", [int2, event_comsubid, event_opindex]));
            if (cs2_3999(int2) == 0) {
                str1 = " -" + "<br>";
                str1 = append(structParam(int4, Param.task_name), str1);
                str1 = append(str1, structParam(int4, Param.task_details));
                ccSetOnMouseRepeat(hook(cs2_3998, "iiisIi", [ccGetY(), event_mousex, event_mousey, str1, event_com, event_comsubid]));
            }
            if (cs2_3994(int2) == 1 && int2 != 4094) {
                varc_1422 = int9;
            }
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 1);
            ccSetSize(50, 50, 0, 0);
            ccSetGraphic(int7);
            ccSetPosition(int14 + 2, int15 + 2, 0, 0);
            ccSetTrans(int16);
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 2);
            ccSetSize(14, 18, 0, 0);
            if (cs2_3996(int2) == 0) {
                int8 = Graphic.symbol_lock;
                ccSetSize(11, 11, 0, 0);
            } else {
                int8 = -1;
            }
            ccSetGraphic(int8);
            ccSetPosition(int14 + 70 - 16, int15 + 4, 0, 0);
            ccCreate(Component.interface_917.component_917_67, 5, int9 + 3);
            ccSetSize(11, 11, 0, 0);
            ccSetPosition(int14 + 70 - 17, int15 + 39, 0, 0);
            if (cs2_3994(int2) == 1) {
                ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_4296));
            }
            int10 = int10 + 1;
            int9 = int10 * 4;
            int14 = int14 + 70 + 20;
            int13 = (int13 + 1) % 5;
            if (int13 == 0) {
                int15 = int15 + 56 + 23;
                int14 = 20;
            }
        }
        int1 = int1 + 1;
    }

    if (int13 != 0) {
        int15 = int15 + 56;
    } else {
        int15 = int15 - 23;
    }
    return int15;
}
