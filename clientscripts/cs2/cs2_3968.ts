/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3968

function cs2_3968(): void {
    if (varc_1429 == 1 || varc_1425 == varc_1426) {
        return;
    }

    if (getWindowMode() >= 2 && varbit_task_priority_mode == 1) {
        varc_1425 = varc_1426;
        return;
    }
    varc_1427 = 0;
    let int0: struct = task_get_data(varc_1425);
    let int1: number = 1;

    if (getWindowMode() >= 2) {
        if (ifGetHide(Component.interface_746.component_746_62) == 1 || ifGetGraphic(Component.interface_746.component_746_62) == -1) {
            int1 = 0;
        }
    } else if (ifGetHide(Component.interface_548.component_548_123) == 1 || ifGetGraphic(Component.interface_548.component_548_123) == -1) {
        int1 = 0;
    }

    if (varp_tutorial == 1000) {
        ifSetOnOpt(hook(cs2_3976, "iii", [varc_1425, 1, int1]), Component.interface_1055.component_1055_4);
    } else {
        ifSetOnOpt(noHook(""), Component.interface_1055.component_1055_4);
    }

    if (ifGetHide(Component.interface_1055.component_1055_2) == 1 && ifGetHide(Component.interface_1055.component_1055_0) == 1) {
        if (int0 != -1) {
            ifSetTrans(255, Component.interface_1055.component_1055_3);
            ifSetOnTimer(hook(cs2_3969, "", []), Component.interface_1055.component_1055_2);
            ifSetHide(false, Component.interface_1055.component_1055_2);
        } else {
            ifSetHide(true, Component.interface_1055.component_1055_0);
            ifSetHide(true, Component.interface_1055.component_1055_2);
        }
    }
    varc_1426 = varc_1425;
}
