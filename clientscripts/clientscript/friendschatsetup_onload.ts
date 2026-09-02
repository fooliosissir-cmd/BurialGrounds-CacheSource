/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friendschatsetup_onload]

function friendschatsetup_onload(intArg0: component, intArg1: component): void {
    ifSetOnFriendTransmit(hook(friendschatsetup_onfriendtransmit, "II", [intArg0, intArg1]), intArg0);
    ifSetScrollSize(0, 0, intArg0);
    ifSetScrollPos(0, 0, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    cs2_1895(intArg0, intArg1);

    if (userDetailQuickChat() == 1) {
        ifSetText("Friends Chat channel:", Component.interface_1108.component_1108_0);
        ifSetOp(1, "Enable", Component.interface_1108.component_1108_1);
    }
}
