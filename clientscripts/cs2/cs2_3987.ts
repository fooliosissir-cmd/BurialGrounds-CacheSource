/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3987

function cs2_3987(intArg0: number, intArg1: number, intArg2: number): void {
    deltooltip_action(Component.interface_917.component_917_111);
    ifSetHide(true, Component.interface_917.component_917_11);

    if (intArg0 == 63) {
        intArg0 = varbit_8575;
    } else if (intArg0 == 999) {
        intArg0 = varbit_8582;
    }

    if (intArg1 == 999) {
        intArg1 = varbit_8579;
    }

    if (intArg2 == 999) {
        intArg2 = varbit_8580;
    }
    ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3491, intArg0), Component.interface_917.component_917_124);
    cs2_4501(Component.interface_917.component_917_138, enumOp(type_int, type_string, Enum.enum_3487, intArg0));

    if (ifFind(Component.interface_917.component_917_122) == 1) {
        ccSetOpCursor(1, Cursor.cursor_info);
    }
    varc_1422 = -1;
    let int3: number = enumOp(type_int, type_int, Enum.enum_3482, intArg0);
    ccDeleteAll(Component.interface_917.component_917_67);
    ifSetScrollPos(0, 0, Component.interface_917.component_917_67);
    let int4: number = 0;
    ifSetHide(false, Component.interface_917.component_917_8);
    ifSetHide(true, Component.interface_917.component_917_9);

    if (varbit_task_priority_mode == 1) {
        if (mapMembers() == 0) {
            int4 = cs2_4243(Enum.enum_3656);
        } else {
            int4 = cs2_4243(Enum.enum_5480);
        }
        ifSetHide(true, Component.interface_917.component_917_8);
        ifSetHide(false, Component.interface_917.component_917_9);
    } else if (int3 == 4091) {
        int4 = cs2_3988(intArg0);
    } else {
        int4 = cs2_3989(int3, intArg1, intArg2);
    }
    let int5: number = int4 + ifGetHeight(Component.interface_917.component_917_117);
    int5 = max(int5, ifGetHeight(Component.interface_917.component_917_67));
    ifSetScrollSize(0, int5, Component.interface_917.component_917_67);
    proc_scrollbar_vertical(Component.interface_917.component_917_68, Component.interface_917.component_917_67, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);
}
