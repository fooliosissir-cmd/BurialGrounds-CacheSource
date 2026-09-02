/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,firstrun]

function firstrun(): void {
    ifOpenSubClient(Component.interface_744.component_744_24, Interface.interface_976);
    let str0: string = "";

    if (detailGetSafemode() == 1) {
        str0 = "There was a problem with your current graphic settings, so you have been given default settings for safety. Click below to auto-choose best graphics settings.";
        ifSetText(str0, Component.interface_976.component_976_2);
        ifSetSize(ifGetWidth(Component.interface_976.component_976_0), 22 * paraheight(str0, ifGetWidth(Component.interface_976.component_976_2), Graphic.verdana_11pt_regular) + 86, 0, 0, Component.interface_976.component_976_0);
        ifSetSize(stringWidth(ifGetText(Component.interface_976.component_976_4), Graphic.verdana_11pt_regular), ifGetHeight(Component.interface_976.component_976_4), 0, 0, Component.interface_976.component_976_4);
    } else if (varc_1277 == 1 && varc_1240 == -1) {
        str0 = "This is your first time playing. Click below to auto-choose best graphics settings. Choose 'Leave Alone' to continue with default settings.";
        ifSetText(str0, Component.interface_976.component_976_2);
        ifSetSize(ifGetWidth(Component.interface_976.component_976_0), 22 * paraheight(str0, ifGetWidth(Component.interface_976.component_976_2), Graphic.verdana_11pt_regular) + 86, 0, 0, Component.interface_976.component_976_0);
        ifSetSize(stringWidth(ifGetText(Component.interface_976.component_976_4), Graphic.verdana_11pt_regular), ifGetHeight(Component.interface_976.component_976_4), 0, 0, Component.interface_976.component_976_4);
    } else if (varc_1240 == -1) {
        str0 = "This is your first time playing, click below to auto choose best graphics settings.";
        ifSetText(str0, Component.interface_976.component_976_2);
        ifSetPosition(0, 10, 1, 0, Component.interface_976.component_976_2);
        ifSetSize(ifGetWidth(Component.interface_976.component_976_2), 68, 0, 1, Component.interface_976.component_976_2);
        ifSetPosition(0, 17, 1, 2, Component.interface_976.component_976_3);
        ifSetSize(ifGetWidth(Component.interface_976.component_976_0), 22 * paraheight(str0, ifGetWidth(Component.interface_976.component_976_2), Graphic.verdana_11pt_regular) + 68, 0, 0, Component.interface_976.component_976_0);
        ifSetHide(true, Component.interface_976.component_976_4);
    } else {
        str0 = "Available graphics options have changed. Click below to auto choose best graphics settings.";
        if (varc_1277 == 1) {
            str0 = "Available graphics options have changed. Click below to auto-choose best graphics settings. Choose 'Leave Alone' to continue with your current settings.";
        }
        ifSetText(str0, Component.interface_976.component_976_2);
        ifSetSize(ifGetWidth(Component.interface_976.component_976_0), 22 * paraheight(str0, ifGetWidth(Component.interface_976.component_976_2), Graphic.verdana_11pt_regular) + 86, 0, 0, Component.interface_976.component_976_0);
        ifSetSize(stringWidth(ifGetText(Component.interface_976.component_976_4), Graphic.verdana_11pt_regular), ifGetHeight(Component.interface_976.component_976_4), 0, 0, Component.interface_976.component_976_4);
    }
    varc_1277 = 1;
}
