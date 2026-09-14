/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_friendschat_chat_build]

function proc_lobbyscreen_pane_friendschat_chat_build(intArg0: component): void {
    if (minimenuopen(38600727, -1) == 1) {
        ifSetOnTimer(hook(clientscript_lobbyscreen_pane_friendschat_chat_build, "I", [intArg0]), intArg0);
        return;
    }
    ccDeleteAll(Component.interface_589.component_589_23);
    let str0: string = "<col=7fa9ff>";
    let str1: string = "<col=ff5256>";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str2: string = "";
    let str3: string = "";

    while (int1 < 100) {
        int3 = chatGethistorytype(int1);
        str2 = chatGethistoryname(int1);
        str3 = unknownCommand5019(int1);
        switch (int3) {
            case 11:
            case 26:
                int2 = lobbyscreen_pane_friendschat_chat_line(int2, chatGethistorymessage(int1), 0, "", "", int3);
                break;
            case 9:
                int2 = lobbyscreen_pane_friendschat_chat_line(int2, "[" + str0 + chatGethistoryclan(int1) + "</col>" + "] " + str2 + ": " + str1 + chatGethistorymessage(int1), 1, str2, str3, int3);
                break;
            case 20:
                int2 = lobbyscreen_pane_friendschat_chat_line(int2, "[" + str0 + chatGethistoryclan(int1) + "</col>" + "] " + str2 + ": " + str1 + chatGethistorymessage(int1), 1, str2, str3, int3);
                break;
            case 115:
                int2 = lobbyscreen_pane_friendschat_chat_line(int2, "<col=ff0000>" + chatGethistorymessage(int1) + "</col>", 0, "", "", int3);
                break;
        }
        int1 = int1 + 1;
    }
    let int4: number = ifGetHeight(Component.interface_589.component_589_23) / 15;
    int1 = 0;
    let int5: number = 0;

    if (int2 < int4) {
        int5 = int4 - int2;
        while (int1 < int5) {
            int2 = lobbyscreen_pane_friendschat_chat_line(int2, "", 0, "", "", 0);
            int1 = int1 + 1;
        }
    }
    let int6: number = 0;
    let int7: number = 0;

    while (int7 <= int2) {
        if (ccFind<1>(Component.interface_589.component_589_23, int7) == 1) {
            int6 = int6 + ccGetHeight<1>();
        }
        int7 = int7 + 1;
    }
    let int8: number = max(int6, int4 * 15);
    ifSetScrollSize(0, int8, Component.interface_589.component_589_23);
    scrollbar_resize(Component.interface_589.component_589_24, Component.interface_589.component_589_23, varc_1508 + ifGetScrollHeight(Component.interface_589.component_589_23) - varc_1509);
    varc_1508 = ifGetScrollY(Component.interface_589.component_589_23);
    varc_1509 = ifGetScrollHeight(Component.interface_589.component_589_23);
}
