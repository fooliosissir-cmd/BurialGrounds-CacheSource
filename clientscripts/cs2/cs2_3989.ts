/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3989

function cs2_3989(intArg0: number, intArg1: number, intArg2: number): number {
    let int3: struct = -1;
    let int4: number = 0;
    let int5: number = 0;
    let str0: string = "";
    let str1: string = "";
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: graphic = -1;
    let int10: graphic = -1;
    let int11: number = 0;
    let int12: number = 0;
    let int13: graphic = -1;
    let int14: graphic = -1;
    let int15: number = 0;
    let int16: number = 20;
    let int17: number = 0;
    let int18: number = 23;
    let int19: number = 0;

    while (intArg0 != 1120 && intArg0 != 4094) {
        int3 = enumOp(type_int, type_struct, Enum.enum_3483, intArg0);
        if (int3 != -1) {
            int4 = task_get_progress(intArg0);
            int5 = structParam(int3, Param.task_set);
            if ((int4 != 2 || intArg1 == 0) && (int5 != 63 || intArg2 == 0)) {
                str0 = structParam(int3, Param.task_name);
                int7 = structParam(int3, Param.task_area);
                int8 = structParam(int3, Param.param_1272);
                if (structParam(int3, Param.param_1270) != 4094) {
                    int9 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int3, Param.param_1270)), Param.param_952);
                } else {
                    int9 = structParam(int3, Param.task_icon);
                }
                ccCreate(Component.interface_917.component_917_67, 5, int11);
                if (int4 == 2) {
                    int14 = Graphic.graphic_4043;
                    int13 = Graphic.graphic_4043;
                } else {
                    int14 = Graphic.graphic_4041;
                    int13 = Graphic.graphic_4042;
                }
                ccSetGraphic(int14);
                ccHookMouseEnter(hook(cs2_4013, "id", [event_comsubid, int13]));
                ccHookMouseExit(hook(cs2_4013, "id", [event_comsubid, int14]));
                ccSetSize(70 + 2, 56 + 1, 0, 0);
                ccSetPosition(int16 - 1, int18 - 1, 0, 0);
                ccSetOp(1, "Summary for");
                if (varbit_task_priority_mode == 0) {
                    if (varbit_8576 == intArg0) {
                        ccSetOp(2, "Unpin");
                    } else if (task_get_progress(intArg0) != 2) {
                        ccSetOp(2, "Pin");
                    }
                }
                ccSetOpBase(str0);
                ccSetOnOpt(hook(cs2_3990, "iii", [intArg0, event_comsubid, event_opindex]));
                if (cs2_3999(intArg0) == 0) {
                    str1 = " -" + "<br>";
                    str1 = append(structParam(int3, Param.task_name), str1);
                    str1 = append(str1, structParam(int3, Param.task_details));
                    ccSetOnMouseOver(hook(cs2_3998, "iiisIi", [ccGetY(), event_mousex, event_mousey, str1, event_com, event_comsubid]));
                }
                if (cs2_3994(intArg0) == 1 && intArg0 != 4094) {
                    varc_1422 = int11;
                }
                ccCreate(Component.interface_917.component_917_67, 5, int11 + 1);
                ccSetSize(50, 50, 0, 0);
                ccSetGraphic(int9);
                ccSetPosition(int16 + 3, int18 + 2, 0, 0);
                ccSetTrans(int19);
                ccCreate(Component.interface_917.component_917_67, 5, int11 + 2);
                if (int5 != 0 && int5 != 63) {
                    int10 = Graphic.graphic_4272;
                    ccSetSize(13, 13, 0, 0);
                    ccSetGraphic(int10);
                    ccSetPosition(int16 + 70 - 16, int18 + 4, 0, 0);
                }
                ccCreate(Component.interface_917.component_917_67, 5, int11 + 3);
                if (cs2_3994(intArg0) == 1) {
                    int10 = Graphic.graphic_4296;
                    ccSetSize(11, 11, 0, 0);
                    int17 = 16;
                } else if (cs2_3996(intArg0) == 0) {
                    int10 = Graphic.symbol_lock;
                    ccSetSize(11, 11, 0, 0);
                    int17 = 15;
                } else {
                    int10 = enumOp(type_int, type_graphic, Enum.enum_3492, int8);
                    ccSetSize(9, 11, 0, 0);
                    int17 = 14;
                }
                ccSetGraphic(int10);
                ccSetPosition(int16 + 70 - int17, int18 + 39, 0, 0);
                int12 = int12 + 1;
                int11 = int12 * 4;
                int16 = int16 + 70 + 20;
                int15 = (int15 + 1) % 5;
                if (int15 == 0) {
                    int18 = int18 + 56 + 23;
                    int16 = 20;
                }
            }
        }
        intArg0 = structParam(int3, Param.param_1269);
    }

    if (int15 != 0) {
        int18 = int18 + 56;
    } else {
        int18 = int18 - 23;
    }
    return int18;
}
