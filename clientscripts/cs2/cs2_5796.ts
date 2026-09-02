/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5796

function cs2_5796(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    let int8: struct = task_get_data(intArg0);

    if (int8 == -1) {
        return;
    }

    if (intArg2 != -1) {
        if (structParam(int8, Param.param_1270) != 4094) {
            ifSetGraphic(structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int8, Param.param_1270)), Param.param_952), intArg2);
        } else {
            ifSetGraphic(structParam(int8, Param.task_icon), intArg2);
        }
    }

    if (intArg3 != -1) {
        ifSetText(structParam(int8, Param.task_name), intArg3);
    }
    let str0: string = "";

    if (intArg4 != -1) {
        str0 = structParam(int8, Param.task_details);
        if (structParam(int8, Param.task_optional) == 1 && intArg4 != Component.interface_1221.component_1221_8 && intArg4 != Component.interface_1220.component_1220_18 && intArg1 == 1 && varbit_task_priority_mode == 0) {
            str0 = append(str0, "<br>" + "<br>" + "(This Task is not a requirement for the Taskmaster emote.)");
        }
        ifSetText(str0, intArg4);
    }
    let int9: graphic = -1;

    if (intArg5 != -1) {
        int9 = enumOp(type_int, type_graphic, Enum.enum_3492, structParam(int8, Param.param_1272));
        if (cs2_3996(intArg0) == 0 && cs2_3999(intArg0) == 0) {
            int9 = Graphic.symbol_lock;
        }
        ifSetGraphic(int9, intArg5);
    }
    let int10: graphic = -1;

    if (intArg6 != -1) {
        int10 = enumOp(type_int, type_graphic, Enum.enum_3491, structParam(int8, Param.task_area));
        ifSetGraphic(int10, intArg6);
    }
    let int11: graphic = -1;

    if (intArg7 != -1) {
        if (structParam(int8, Param.task_set) != 0 && structParam(int8, Param.task_set) != 63) {
            int11 = Graphic.graphic_4272;
        }
        ifSetGraphic(int11, intArg7);
    }
}
