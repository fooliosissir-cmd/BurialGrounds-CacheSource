/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4008

function cs2_4008(intArg0: boolean, intArg1: number): void {
    cs2_5211(intArg0);
    ifSetHide(intArg0, Component.interface_746.component_746_51);
    ifSetHide(intArg0, Component.interface_548.component_548_21);
    ifSetHide(intArg0, Component.interface_746.component_746_47);
    ifSetHide(intArg0, Component.interface_746.component_746_46);

    if (intArg0 == true) {
        detailCustomcursors(0);
        varc_chat_view = -1;
    } else {
        detailCustomcursors(varc_987);
        varc_chat_view = 0;
    }

    if (intArg0 == true && intArg1 == 1) {
        ifSetHide(false, Component.interface_548.component_548_27);
        ifSetHide(false, Component.interface_746.component_746_3);
    } else {
        ifSetHide(true, Component.interface_548.component_548_27);
        ifSetHide(true, Component.interface_746.component_746_3);
    }
    proc_subchanged();
}
