/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3970

function cs2_3970(): void {
    let int0: number = ifGetTrans(Component.interface_1055.component_1055_13);

    if (varc_1427 < 190) {
        varc_1427 = varc_1427 + 1;
    } else if (int0 < 255) {
        int0 = min(int0 + 4, 255);
        ifSetTrans(int0, Component.interface_1055.component_1055_4);
        ifSetTrans(int0, Component.interface_1055.component_1055_13);
        ifSetTrans(int0, Component.interface_1055.component_1055_14);
        ifSetTrans(int0, Component.interface_1055.component_1055_15);
        ifSetTrans(int0, Component.interface_1055.component_1055_5);
        ifSetTrans(int0, Component.interface_1055.component_1055_10);
        ifSetTrans(int0, Component.interface_1055.component_1055_6);
        ifSetTrans(int0, Component.interface_1055.component_1055_7);
        ifSetTrans(int0, Component.interface_1055.component_1055_9);
        ifSetTrans(int0, Component.interface_1055.component_1055_8);
        ifSetTrans(int0, Component.interface_1055.component_1055_12);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_1055.component_1055_1);
        ifSetHide(true, Component.interface_1055.component_1055_0);
        varc_1427 = 0;
    }
}
