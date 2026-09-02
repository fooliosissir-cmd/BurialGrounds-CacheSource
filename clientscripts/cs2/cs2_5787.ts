/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5787

function cs2_5787(intArg0: number): void {
    let int1: number = 1;

    if (intArg0 == varbit_8576) {
        int1 = 0;
    }
    let int2: struct = task_get_data(intArg0);

    if (int2 == -1) {
        return;
    }

    if (int1 == 1) {
        ifSetHide(false, Component.interface_1223.component_1223_2);
        ifSetHide(false, Component.interface_1223.component_1223_9);
        ifSetHide(false, Component.interface_1223.component_1223_1);
        cs2_5796(intArg0, 1, Component.interface_1223.component_1223_2, Component.interface_1223.component_1223_9, Component.interface_1223.component_1223_1, -1, -1, -1);
    } else {
        ifSetHide(true, Component.interface_1223.component_1223_2);
        ifSetHide(true, Component.interface_1223.component_1223_9);
        ifSetHide(true, Component.interface_1223.component_1223_1);
    }
    let str0: string = structParam(int2, Param.param_2225);
    ifSetText(str0, Component.interface_1223.component_1223_7);
    let str1: string = structParam(int2, Param.task_rewards);

    if (varbit_task_priority_mode == 1) {
        str1 = "";
    }
    let str2: string = "null";
    let int3: number = 0;

    if (int1 == 1) {
        ifSetHide(false, Component.interface_1223.component_1223_9);
        ifSetHide(false, Component.interface_1223.component_1223_6);
        str2 = structParam(int2, Param.task_details);
        int3 = parawidth(str2, 274, Graphic.verdana_11pt_regular);
        ifSetSize(int3, ifGetHeight(Component.interface_1223.component_1223_1), 0, 0, Component.interface_1223.component_1223_1);
        ifSetColour(colour(0xABAD9E), Component.interface_1223.component_1223_1);
        ifSetSize(56 + int3, 50, 0, 0, Component.interface_1223.component_1223_6);
        ifSetPosition(ifGetX(Component.interface_1223.component_1223_7), 2 + ifGetHeight(Component.interface_1223.component_1223_6) + ifGetY(Component.interface_1223.component_1223_6), 0, 0, Component.interface_1223.component_1223_7);
    } else {
        ifSetSize(0, 0, 0, 0, Component.interface_1223.component_1223_6);
        ifSetPosition(ifGetX(Component.interface_1223.component_1223_7), ifGetY(Component.interface_1223.component_1223_9), 0, 0, Component.interface_1223.component_1223_7);
    }
    let int4: number = 15 * paraheight(str0, 330, Graphic.verdana_11pt_regular);
    let int5: number = 15 * paraheight(str1, 330, Graphic.verdana_11pt_regular);
    ifSetText(str1, Component.interface_1223.component_1223_8);
    ifSetSize(ifGetWidth(Component.interface_1223.component_1223_7), int4, 0, 0, Component.interface_1223.component_1223_7);
    ifSetPosition(ifGetX(Component.interface_1223.component_1223_8), ifGetY(Component.interface_1223.component_1223_7) + int4 + 4, 0, 0, Component.interface_1223.component_1223_8);
    ifSetSize(ifGetWidth(Component.interface_1223.component_1223_8), int5, 0, 0, Component.interface_1223.component_1223_8);
    ifSetSize(ifGetWidth(Component.interface_1223.component_1223_3), min(291, ifGetY(Component.interface_1223.component_1223_7) + int4 + int5 + 75), 0, 0, Component.interface_1223.component_1223_3);
    ifSetSize(363, 291, 0, 0, Component.interface_746.component_746_10);
}
