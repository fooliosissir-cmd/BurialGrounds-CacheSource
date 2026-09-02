/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3969

function cs2_3969(): void {
    let int0: number = ifGetTrans(Component.interface_1055.component_1055_3);
    let int1: struct = -1;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: graphic = -1;

    if (ifGetHide(Component.interface_1055.component_1055_0) == 1) {
        if (int0 > 0) {
            int2 = scale(int0, 255, 100);
            int2 = 100 - int2;
            int3 = scale(270, 100, int2) + 10;
            int4 = scale(100, 100, int2) + 10;
            ifSetSize(min(int3, 270), min(int4, 100), 0, 0, Component.interface_1055.component_1055_3);
            int0 = max(int0 - 8, 0);
            ifSetTrans(int0, Component.interface_1055.component_1055_3);
        } else {
            int1 = task_get_data(varc_1425);
            if (int1 != -1) {
                ifSetfill(true, Component.interface_1055.component_1055_3);
                ifSetTrans(0, Component.interface_1055.component_1055_4);
                ifSetTrans(0, Component.interface_1055.component_1055_13);
                ifSetTrans(0, Component.interface_1055.component_1055_14);
                ifSetTrans(0, Component.interface_1055.component_1055_15);
                ifSetTrans(0, Component.interface_1055.component_1055_5);
                ifSetTrans(0, Component.interface_1055.component_1055_10);
                ifSetTrans(0, Component.interface_1055.component_1055_6);
                ifSetTrans(0, Component.interface_1055.component_1055_7);
                ifSetTrans(0, Component.interface_1055.component_1055_9);
                ifSetTrans(0, Component.interface_1055.component_1055_8);
                ifSetTrans(0, Component.interface_1055.component_1055_12);
                ifSetText(structParam(int1, Param.task_name), Component.interface_1055.component_1055_15);
                if (structParam(int1, Param.param_1270) != 4094) {
                    int5 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int1, Param.param_1270)), Param.param_952);
                } else {
                    int5 = structParam(int1, Param.task_icon);
                }
                ifSetGraphic(int5, Component.interface_1055.component_1055_13);
                ifSetOnTimer(hook(cs2_3970, "", []), Component.interface_1055.component_1055_1);
                ifSetHide(false, Component.interface_1055.component_1055_0);
            } else {
                ifSetOnTimer(noHook(""), Component.interface_1055.component_1055_2);
                ifSetOnTimer(noHook(""), Component.interface_1055.component_1055_1);
                ifSetHide(true, Component.interface_1055.component_1055_0);
                ifSetHide(true, Component.interface_1055.component_1055_2);
            }
        }
    } else if (int0 < 255) {
        int0 = min(int0 + 8, 255);
        ifSetTrans(int0, Component.interface_1055.component_1055_3);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_1055.component_1055_2);
        ifSetfill(false, Component.interface_1055.component_1055_3);
        ifSetHide(true, Component.interface_1055.component_1055_2);
    }
}
