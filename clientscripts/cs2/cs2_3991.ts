/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3991

function cs2_3991(intArg0: number): void {
    if (intArg0 == 4095) {
        intArg0 = 4094;
    }
    let int1: struct = task_get_data(intArg0);

    if (int1 == -1) {
        return;
    }
    cs2_5796(intArg0, 1, Component.interface_917.component_917_37, Component.interface_917.component_917_34, Component.interface_917.component_917_51, Component.interface_917.component_917_36, Component.interface_917.component_917_39, -1);
    let int2: number = task_get_progress(intArg0);

    if (int2 != 2 && varbit_task_priority_mode == 0) {
        ifSetHide(false, Component.interface_917.component_917_41);
    } else {
        ifSetHide(true, Component.interface_917.component_917_41);
    }
    let str0: string = append("Difficulty : ", enumOp(type_int, type_string, Enum.enum_3488, structParam(int1, Param.param_1272)));
    let str1: string = append("Area : ", enumOp(type_int, type_string, Enum.enum_3487, structParam(int1, Param.task_area)));
    ifSetText(str0, Component.interface_917.component_917_35);
    ifSetText(str1, Component.interface_917.component_917_38);
    ifSetHide(true, Component.interface_917.component_917_86);
    ifSetHide(true, Component.interface_917.component_917_87);
    ifSetHide(true, Component.interface_917.component_917_88);
    ifSetHide(true, Component.interface_917.component_917_89);
    ifSetHide(true, Component.interface_917.component_917_90);
    ifSetHide(true, Component.interface_917.component_917_91);
    ifSetHide(true, Component.interface_917.component_917_92);
    ifSetHide(true, Component.interface_917.component_917_93);
    ifSetHide(true, Component.interface_917.component_917_94);
    ifSetHide(true, Component.interface_917.component_917_95);
    ifSetHide(true, Component.interface_917.component_917_96);
    ifSetHide(true, Component.interface_917.component_917_99);
    let [int3, str2, int4] = task_requirements(intArg0);
    ifSetText(str2, Component.interface_917.component_917_13);
    ifSetColour(int4, Component.interface_917.component_917_13);
    ifSetSize(ifGetWidth(Component.interface_917.component_917_13), paraheight(str2, ifGetWidth(Component.interface_917.component_917_13), Graphic.verdana_11pt_regular), 0, 0, Component.interface_917.component_917_13);
    ifSetPosition(9, 16, 0, 0, Component.interface_917.component_917_13);
    let int5: number = 34;
    let int6: number = int5;
    let int7: number = 0;

    while (int7 < 12) {
        int6 = task_requirement(int5, intArg0, int7, enumOp(type_int, type_component, Enum.enum_3493, int7));
        if (int6 == int5) {
            int7 = 12;
        } else {
            int7 = int7 + 1;
        }
        int5 = int6;
    }
    ifSetScrollSize(0, max(int5, ifGetHeight(Component.interface_917.component_917_64)), Component.interface_917.component_917_64);
    proc_scrollbar_vertical(Component.interface_917.component_917_65, Component.interface_917.component_917_64, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);

    if (int5 > ifGetHeight(Component.interface_917.component_917_64)) {
        ifSetHide(false, Component.interface_917.component_917_65);
    } else {
        ifSetHide(true, Component.interface_917.component_917_65);
    }
    ifSetScrollPos(0, 0, Component.interface_917.component_917_49);
    int5 = cs2_5797(intArg0, -1, 8, 1, 9, 104, Component.interface_917.component_917_97, Component.interface_917.component_917_98, Component.interface_917.component_917_50, Component.interface_917.component_917_49, 60096623);
    let int8: number = (structParam(int1, Param.task_set) - 1) * 5 + structParam(int1, Param.param_1272);
    let str3: string = "";

    if (structParam(int1, Param.param_1270) != 4094) {
        str3 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int1, Param.param_1270)), Param.param_951);
    } else {
        str3 = structParam(int1, Param.task_rewards);
    }
    let int9: struct = enumOp(type_int, type_struct, Enum.enum_3494, int8);
    let str4: string = "";

    if (compare(str3, "") == 0 && structParam(int1, Param.task_optional) == 0) {
        str3 = "Completing this Task will earn you a sum of coins based on how many Tasks you have already done.";
    }
    ccDeleteAll(Component.interface_917.component_917_60);
    int5 = cs2_5798(4094, int9, 0, str3, 5, Component.interface_917.component_917_60, -1, 60096623);
    ifSetScrollPos(0, 0, Component.interface_917.component_917_59);

    if (int9 != -1 && int9 != Struct.struct_1645) {
        int5 = cs2_5798(4094, int9, 0, structParam(int9, Param.task_details), int5, Component.interface_917.component_917_60, -1, 60096623);
        int5 = cs2_5798(4094, int9, 0, structParam(int9, Param.task_rewards), int5, Component.interface_917.component_917_60, -1, 60096623);
        cs2_5797(4094, int9, 6, 1, int5, 104, Component.interface_917.component_917_61, -1, Component.interface_917.component_917_77, Component.interface_917.component_917_59, 60096623);
    }

    if (cs2_3999(intArg0) == 0) {
        ifSetHide(false, Component.interface_917.component_917_11);
        cs2_4019(0);
    }
}
