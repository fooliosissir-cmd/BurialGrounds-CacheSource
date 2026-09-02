/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,notes_update]

function proc_notes_update(): void {
    if (varp_notes_loaded == 0) {
        return;
    }

    if (ifGetHide(Component.interface_34.component_34_10) == 0) {
        ifSetOnTimer(hook(clientscript_notes_update, "", []), Component.interface_34.component_34_9);
        return;
    } else {
        ifSetOnTimer(noHook(""), Component.interface_34.component_34_9);
    }
    proc_meslayer_close(13);
    ifSetHide(true, Component.interface_34.component_34_16);
    varc_821 = 0;
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let str0: string = "";
    ccDeleteAll(Component.interface_34.component_34_9);

    if (userDetailQuickChat() == 1) {
        ifSetText("The notes system is not available for users restricted to quick-chat.", Component.interface_34.component_34_13);
        ifSetHide(false, Component.interface_34.component_34_13);
        return;
    } else {
        ifSetText("", Component.interface_34.component_34_13);
        ifSetHide(true, Component.interface_34.component_34_13);
    }

    while (int1 < 30) {
        str0 = notes_get_note(int1);
        if (compare(str0, "") != 0) {
            int0 = notes_build(str0, int0, int2, notes_get_colour(int1));
            int2 = int2 + 1;
        }
        int1 = int1 + 1;
    }

    if (int2 <= 0) {
        ifSetText("No notes", Component.interface_34.component_34_13);
        ifSetHide(false, Component.interface_34.component_34_13);
        ifSetText("Notes", Component.interface_34.component_34_1);
    } else if (int2 > 0 && int2 <= 30) {
        ifSetText("Notes (" + tostring(int2) + "/" + "30" + ")", Component.interface_34.component_34_1);
    } else {
        ifSetText("Notes", Component.interface_34.component_34_1);
    }

    if (int0 > 0 && int0 < 13) {
        if (ccFind(Component.interface_34.component_34_9, int2 - 1) == 1) {
            ifSetSize(ccGetWidth(), ifGetHeight(Component.interface_34.component_34_9) - (ccGetY() + ccGetHeight()), 0, 0, Component.interface_34.component_34_12);
            ifSetPosition(ccGetX(), ccGetY() + ccGetHeight(), 0, 0, Component.interface_34.component_34_12);
            ifSetHide(false, Component.interface_34.component_34_12);
        }
    } else {
        ifSetHide(true, Component.interface_34.component_34_12);
    }

    if (int0 < 1) {
        ifSetScrollSize(0, 0, Component.interface_34.component_34_9);
    } else {
        ifSetScrollSize(0, int0 * 15 + 10, Component.interface_34.component_34_9);
    }
    scrollbar_resize(Component.interface_34.component_34_15, Component.interface_34.component_34_9, ifGetScrollY(Component.interface_34.component_34_9));
    ifSetHide(true, Component.interface_34.component_34_44);
}
