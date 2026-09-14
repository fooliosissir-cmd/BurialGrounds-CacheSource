/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5871

function cs2_5871(intArg0: number, intArg1: number): void {
    if (varbit_task_hint_task != intArg0) {
        return;
    }
    let int2: component = Component.interface_1220.component_1220_16;
    let int3: component = Component.interface_1220.component_1220_17;
    let int4: component = Component.interface_1220.component_1220_2;
    let int5: component = Component.interface_1220.component_1220_3;
    let int6: number = 79953975;
    let int7: number = 79953978;
    let int8: number = 79953966;
    let int9: number = 79953969;
    let int10: boolean = true;
    let int11: boolean = true;

    if (intArg1 <= 0) {
        intArg1 = max(varbit_10854, 1);
    }

    if (intArg1 == 1) {
        int10 = false;
    }
    let int12: struct = task_get_data(intArg0);
    let int13: number = 1;
    let int14: number = 0;
    let int15: number = 1;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";

    while (int15 < 9) {
        switch (int15) {
            case 1:
                str1 = structParam(int12, Param.task_step_1);
                str2 = structParam(int12, Param.task_step_2);
                str3 = structParam(int12, Param.task_step_3);
                break;
            case 2:
                str1 = structParam(int12, Param.task_step_2);
                str2 = structParam(int12, Param.task_step_3);
                str3 = structParam(int12, Param.task_step_4);
                break;
            case 3:
                str1 = structParam(int12, Param.task_step_3);
                str2 = structParam(int12, Param.task_step_4);
                str3 = structParam(int12, Param.task_step_5);
                break;
            case 4:
                str1 = structParam(int12, Param.task_step_4);
                str2 = structParam(int12, Param.task_step_5);
                str3 = structParam(int12, Param.param_1279);
                break;
            case 5:
                str1 = structParam(int12, Param.task_step_5);
                str2 = structParam(int12, Param.param_1279);
                str3 = structParam(int12, Param.param_1280);
                break;
            case 6:
                str1 = structParam(int12, Param.param_1279);
                str2 = structParam(int12, Param.param_1280);
                str3 = structParam(int12, Param.param_1281);
                break;
            case 7:
                str1 = structParam(int12, Param.param_1280);
                str2 = structParam(int12, Param.param_1281);
                break;
            case 8:
                str1 = structParam(int12, Param.param_1281);
                break;
        }
        if (compare(str2, "") == 0 && int14 == 0) {
            int13 = int15;
            int14 = 1;
        }
        if (compare(str3, "") == 0 && int14 == 0 && int2 == -1) {
            int13 = int15;
            int14 = 1;
        }
        if (int15 == intArg1) {
            str0 = str1;
        }
        int15 = int15 + 1;
    }

    if (int13 <= intArg1) {
        int11 = false;
    }

    if (compare(structParam(int12, Param.task_step_1), "") == 0) {
        intArg1 = 0;
        int13 = 0;
    }
    ifSetText(tostring(intArg1), int4);
    ifSetText(tostring(int13), int5);
    ifSetScrollPos(0, 0, int2);
    ccDeleteAll(int2);

    if (intArg1 == 0 && int13 == 0) {
        str0 = "There are no hints available for this Task. Good luck!";
    }
    let int16: number = cs2_5798(intArg0, int12, 0, str0, 0, int2, -1, -1);
    let int17: number = ifGetHeight(Component.interface_1220.component_1220_14);
    ifSetOnOp(hook(cs2_5870, "ii", [intArg0, intArg1 + 1]), Component.interface_1220.component_1220_55);
    ifSetHide(int11, Component.interface_1220.component_1220_58);
    ifSetOnOp(hook(cs2_5870, "ii", [intArg0, intArg1 - 1]), Component.interface_1220.component_1220_46);
    ifSetHide(int10, Component.interface_1220.component_1220_49);

    if (int13 < 2) {
        ifSetHide(true, Component.interface_1220.component_1220_15);
        int17 = int17 + ifGetHeight(Component.interface_1220.component_1220_15);
    } else if (varbit_task_priority_mode == 0 || (cs2_3999(varbit_10700) == 0 && varbit_10700 == varbit_8576)) {
        ifSetHide(false, Component.interface_1220.component_1220_15);
    } else {
        ifSetHide(true, Component.interface_1220.component_1220_15);
        int17 = int17 + ifGetHeight(Component.interface_1220.component_1220_15);
    }
    ifSetSize(ifGetWidth(Component.interface_1220.component_1220_14), int17, 0, 0, Component.interface_1220.component_1220_14);
    ifSetSize(3, 0, 1, 1, int2);

    if (int16 < int17) {
        ifSetHide(true, int3);
        ifSetScrollSize(0, ifGetHeight(int2), int2);
        ifSetScrollPos(0, 0, int2);
    } else {
        int16 = int16 + 5;
        ifSetScrollSize(0, max(int16, ifGetHeight(int2)), int2);
        ifSetSize(ifGetWidth(int3) + 2, 0, 1, 1, int2);
        ifSetScrollPos(0, 0, int2);
        ifSetHide(false, int3);
        proc_scrollbar_vertical(int3, int2, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
}
