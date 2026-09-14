/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1558

function cs2_1558(intArg0: boolean): void {
    if (cs2_2709() == 0 && varp_tutorial == 1000) {
        ifSetText("", Component.interface_137.component_137_55);
        ifSetOnClick(noHook(""), Component.interface_137.component_137_55);
        ifSetOnTimer(noHook(""), Component.interface_137.component_137_55);
        ifSetHide(true, Component.interface_137.component_137_56);
        ifSetPosition(0, 72, 0, 0, Component.interface_137.component_137_57);
        ifSetSize(488, 72, 0, 1, Component.interface_137.component_137_57);
        ifSetPosition(0, 72, 2, 0, Component.interface_137.component_137_58);
        ifSetSize(16, 72, 0, 1, Component.interface_137.component_137_58);
        ifSetHide(true, Component.interface_137.component_137_51);
        ifSetHide(true, Component.interface_137.component_137_52);
        ifSetHide(true, Component.interface_137.component_137_55);
        ifSetHide(false, Component.interface_137.component_137_59);
        return;
    }
    ifSetHide(false, Component.interface_137.component_137_56);
    ifSetPosition(0, 0, 0, 0, Component.interface_137.component_137_57);
    ifSetSize(488, 17, 0, 1, Component.interface_137.component_137_57);
    ifSetPosition(0, 0, 2, 0, Component.interface_137.component_137_58);
    ifSetSize(16, 17, 0, 1, Component.interface_137.component_137_58);

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_137.component_137_52);
        ifSetHide(true, Component.interface_137.component_137_51);
    } else {
        ifSetHide(true, Component.interface_137.component_137_52);
        ifSetHide(false, Component.interface_137.component_137_51);
    }
    ifSetHide(false, Component.interface_137.component_137_55);
    ifSetHide(true, Component.interface_137.component_137_59);

    if (intArg0 == true && (userDetailQuickChat() == 1 || mapQuickChat() == 1)) {
        ifSetText("Left-click here to enter Public Quick Chat or right-click for Friends Channel Quick Chat.", Component.interface_137.component_137_55);
        ifSetOnClick(noHook(""), Component.interface_137.component_137_55);
        ifSetOnTimer(noHook(""), Component.interface_137.component_137_55);
        ifSetHide(true, Component.interface_137.component_137_56);
        return;
    }

    if (varc_1650 == 1) {
        ifSetText("To " + varcstr_23 + ":", Component.interface_137.component_137_53);
    } else if (varc_1651 == 2) {
        ifSetText("Clan Chat" + "<img=3>" + ":", Component.interface_137.component_137_53);
    } else if (varc_1651 == 3) {
        ifSetText("Guest Clan Chat" + "<img=3>" + ":", Component.interface_137.component_137_53);
    } else if (varc_1651 == 1) {
        ifSetText("Friends Chat" + "<img=3>" + ":", Component.interface_137.component_137_53);
    } else {
        ifSetText(chatPlayerNameUnfiltered() + "<img=3>" + ":", Component.interface_137.component_137_53);
    }

    if (getWindowMode() >= 2) {
        ifSetColour(colour(0x7FA9FF), Component.interface_137.component_137_55);
        ifSetColour(colour(0xFFFFFF), Component.interface_137.component_137_53);
        ifSetColour(colour(0xFFFFFF), Component.interface_137.component_137_56);
    } else {
        ifSetColour(colour(0x0000FF), Component.interface_137.component_137_55);
        ifSetColour(colour(0x000000), Component.interface_137.component_137_53);
        ifSetColour(colour(0x000000), Component.interface_137.component_137_56);
    }
    ifSetText(escape(varcstr_1), Component.interface_137.component_137_55);
    ifSetSize(stringWidth(ifGetText(Component.interface_137.component_137_53), Graphic.p12_full), ifGetHeight(Component.interface_137.component_137_53), 0, 0, Component.interface_137.component_137_53);
    ifSetPosition(ifGetX(Component.interface_137.component_137_53) + ifGetWidth(Component.interface_137.component_137_53) + 2, 0, 0, 2, Component.interface_137.component_137_54);
    ifSetSize(ifGetWidth(Component.interface_137.component_137_50) - ifGetX(Component.interface_137.component_137_54) - 5, ifGetHeight(Component.interface_137.component_137_54), 0, 0, Component.interface_137.component_137_54);
    ifSetOnClick(hook(cs2_1554, "ii", [event_mousex, 0]), Component.interface_137.component_137_55);
    varc_1028 = max(min(varc_1028, stringLength(escape(varcstr_1))), 0);
    cs2_1555(0);

    if (stringLength(chatPlayerNameUnfiltered()) > 0) {
        ifSetOnTimer(noHook(""), Component.interface_137.component_137_57);
    } else {
        ifSetOnTimer(hook(cs2_4308, "1", [intArg0]), Component.interface_137.component_137_57);
    }
}
