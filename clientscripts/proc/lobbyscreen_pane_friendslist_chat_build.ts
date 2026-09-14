/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_friendslist_chat_build]

function proc_lobbyscreen_pane_friendslist_chat_build(intArg0: component): void {
    if (minimenuopen(59572276, -1) == 1) {
        ifSetOnTimer(hook(clientscript_lobbyscreen_pane_friendslist_chat_build, "I", [intArg0]), intArg0);
        return;
    }
    ccDeleteAll(Component.interface_909.component_909_52);
    let str0: string = "<col=ff5256>";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int4: number = 1;

    while (int2 < 100) {
        int3 = chatGethistorytype(int2);
        str1 = chatGethistoryname(int2);
        str2 = unknownCommand5019(int2);
        switch (int3) {
            case 0:
            case 4:
            case 27:
            case 28:
            case 29:
            case 26:
            case 30:
            case 31:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, chatGethistorymessage(int2), 0, "", "", int3);
                break;
            case 3:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "From " + str1 + ": " + str0 + chatGethistorymessage(int2), 1, str1, str2, int3);
                if (int4 == 1) {
                    int4 = 0;
                    varcstr_276 = str2;
                }
                break;
            case 5:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, str0 + chatGethistorymessage(int2), 0, str1, str2, int3);
                break;
            case 6:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "To " + str1 + ": " + str0 + chatGethistorymessage(int2), 1, str1, str2, int3);
                break;
            case 7:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "From " + str1 + ": " + str0 + chatGethistorymessage(int2), 1, str1, str2, int3);
                if (int4 == 1) {
                    int4 = 0;
                    varcstr_276 = str2;
                }
                break;
            case 18:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "From " + str1 + ": " + str0 + chatGethistorymessage(int2), 1, str1, str2, int3);
                if (int4 == 1) {
                    int4 = 0;
                    varcstr_276 = str2;
                }
                break;
            case 19:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "To " + str1 + ": " + str0 + chatGethistorymessage(int2), 1, str1, str2, int3);
                break;
            case 115:
                int1 = lobbyscreen_pane_friendslist_chat_line(int1, "<col=ff0000>" + chatGethistorymessage(int2) + "</col>", 0, "", "", int3);
                break;
        }
        int2 = int2 + 1;
    }
    let int5: number = ifGetHeight(Component.interface_909.component_909_52) / 15;
    int2 = 0;
    let int6: number = 0;

    if (int1 < int5) {
        int6 = int5 - int1;
        while (int2 < int6) {
            int1 = lobbyscreen_pane_friendslist_chat_line(int1, "", 0, "", "", 0);
            int2 = int2 + 1;
        }
    }
    let int7: number = 0;
    let int8: number = 0;

    while (int8 <= int1) {
        if (ccFind<1>(Component.interface_909.component_909_52, int8) == 1) {
            int7 = int7 + ccGetHeight<1>();
        }
        int8 = int8 + 1;
    }
    let int9: number = max(int7, int5 * 15);

    if (int9 > ifGetHeight(Component.interface_909.component_909_52)) {
        ifSetScrollSize(0, int9, Component.interface_909.component_909_52);
        scrollbar_resize(Component.interface_909.component_909_53, Component.interface_909.component_909_52, varc_1122 + ifGetScrollHeight(Component.interface_909.component_909_52) - varc_1123);
    } else {
        ifSetScrollSize(0, 0, Component.interface_909.component_909_52);
        ifSetScrollPos(0, 0, Component.interface_909.component_909_52);
        scrollbar_resize(Component.interface_909.component_909_53, Component.interface_909.component_909_52, 0);
    }
    varc_1122 = ifGetScrollY(Component.interface_909.component_909_52);
    varc_1123 = ifGetScrollHeight(Component.interface_909.component_909_52);
}
