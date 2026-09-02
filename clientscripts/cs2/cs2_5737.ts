/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5737

function cs2_5737(): number {
    let int0: struct = varp_2501;

    ifSetHide(true, Component.interface_1237.component_1237_35);
    ifSetHide(true, Component.interface_1237.component_1237_36);
    ifSetHide(true, Component.interface_1237.component_1237_37);
    ifSetHide(true, Component.interface_1237.component_1237_38);
    ifSetHide(true, Component.interface_1237.component_1237_39);
    ifSetHide(true, Component.interface_1237.component_1237_40);
    let int1: number = ifGetHeight(Component.interface_1237.component_1237_34);

    if (compare(structParam(int0, Param.task_step_1), "") != 0) {
        int1 = cs2_5739(1, int1, structParam(int0, Param.task_step_1), Component.interface_1237.component_1237_35, Component.interface_1237.component_1237_33);
    }

    if (compare(structParam(int0, Param.task_step_2), "") != 0) {
        int1 = cs2_5739(2, int1, structParam(int0, Param.task_step_2), Component.interface_1237.component_1237_36, Component.interface_1237.component_1237_33);
    }

    if (compare(structParam(int0, Param.task_step_3), "") != 0) {
        int1 = cs2_5739(3, int1, structParam(int0, Param.task_step_3), Component.interface_1237.component_1237_37, Component.interface_1237.component_1237_33);
    }

    if (compare(structParam(int0, Param.task_step_4), "") != 0) {
        int1 = cs2_5739(4, int1, structParam(int0, Param.task_step_4), Component.interface_1237.component_1237_38, Component.interface_1237.component_1237_33);
    }

    if (compare(structParam(int0, Param.task_step_5), "") != 0) {
        int1 = cs2_5739(5, int1, structParam(int0, Param.task_step_5), Component.interface_1237.component_1237_39, Component.interface_1237.component_1237_33);
    }

    if (compare(structParam(int0, Param.param_1279), "") != 0) {
        int1 = cs2_5739(6, int1, structParam(int0, Param.param_1279), Component.interface_1237.component_1237_40, Component.interface_1237.component_1237_33);
    }
    return int1;
}
