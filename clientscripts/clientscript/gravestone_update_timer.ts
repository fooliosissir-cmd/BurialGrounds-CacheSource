/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,gravestone_update_timer]

function gravestone_update_timer(): void {
    if (varc_815 > 0) {
        varc_815 = varc_815 - 1;
    } else {
        gravestone_stop_timer();
        return;
    }
    let int0: number = varc_815 / 50;
    let int1: number = int0 / 60;
    int0 = int0 - int1 * 60;
    let str0: string = "";
    let str1: string = "";

    if (int1 == 0) {
        str0 = "00";
    } else if (int1 < 10) {
        str0 = "0" + tostring(int1);
    } else {
        str0 = tostring(int1);
    }

    if (int0 == 0) {
        str1 = "00";
    } else if (int0 < 10) {
        str1 = "0" + tostring(int0);
    } else {
        str1 = tostring(int0);
    }

    if (getWindowMode() < 2) {
        ifSetHide(false, Component.interface_548.component_548_39);
        ifSetHide(false, Component.interface_548.component_548_38);
        ifSetText(str0 + ":" + str1, Component.interface_548.component_548_39);
    } else {
        ifSetHide(false, Component.interface_746.component_746_189);
        ifSetHide(false, Component.interface_746.component_746_188);
        ifSetText(str0 + ":" + str1, Component.interface_746.component_746_189);
    }
}
