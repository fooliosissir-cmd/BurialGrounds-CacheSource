/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3988

function cs2_3988(intArg0: number): number {
    let int1: number = 6 * (intArg0 - 1);
    let int2: number = 0;
    let int3: number = 0;
    let int4: struct = -1;
    let str0: string = "";
    let str1: string = "";
    let int5: number = 0;
    let int6: graphic = -1;
    let int7: graphic = -1;
    let int8: number = 0;
    let int9: number = 0;
    let int10: Enum = Enum.enum_3484;
    let int11: graphic = -1;
    let int12: graphic = -1;
    let int13: number = 0;
    let int14: number = 20;
    let int15: number = 23;
    let int16: number = 0;

    while (int9 < enumGetoutputcount(Enum.enum_3485) + 6) {
        int2 = enumOp(type_int, type_int, int10, int1);
        int4 = enumOp(type_int, type_struct, Enum.enum_3483, int2);
        if (int4 == Struct.struct_1643) {
            int1 = 0;
            if (int10 == Enum.enum_3484) {
                int10 = Enum.enum_3485;
            } else {
                return int15;
            }
        } else if (int4 != -1) {
            str0 = structParam(int4, Param.task_name);
            int6 = structParam(int4, Param.task_icon);
            ccCreate(Component.interface_917.component_917_67, 5, int8);
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
                } else if (task_get_progress(int2) != 2) {
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
                varc_1422 = int8;
            }
            ccCreate(Component.interface_917.component_917_67, 5, int8 + 1);
            ccSetSize(50, 50, 0, 0);
            ccSetGraphic(int6);
            ccSetPosition(int14 + 2, int15 + 2, 0, 0);
            ccSetTrans(int16);
            ccCreate(Component.interface_917.component_917_67, 5, int8 + 2);
            ccSetSize(14, 18, 0, 0);
            if (cs2_3996(int2) == 0) {
                int7 = Graphic.symbol_lock;
                ccSetSize(11, 11, 0, 0);
            } else {
                int7 = -1;
            }
            ccSetGraphic(int7);
            ccSetPosition(int14 + 70 - 15, int15 + 4, 0, 0);
            ccCreate(Component.interface_917.component_917_67, 5, int8 + 3);
            ccSetSize(11, 11, 0, 0);
            ccSetPosition(int14 + 70 - 16, int15 + 39, 0, 0);
            if (cs2_3994(int2) == 1) {
                ccSetGraphic(gameframe_skin_graphic(Graphic.graphic_4296));
            }
            int9 = int9 + 1;
            int8 = int9 * 4;
            int14 = int14 + 70 + 20;
            int13 = (int13 + 1) % 5;
            if (int13 == 0) {
                int15 = int15 + 56 + 23;
                int14 = 20;
            }
        }
        int1 = int1 + 1;
        if (int10 == Enum.enum_3484 && int1 == 6 * (intArg0 - 1) + 5) {
            int1 = 1;
            int10 = Enum.enum_3485;
        }
    }

    if (int13 != 0) {
        int15 = int15 + 56;
    } else {
        int15 = int15 - 23;
    }
    return int15;
}
