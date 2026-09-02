/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_chat_build]

function proc_lobbyscreen_pane_clanchat_chat_build(intArg0: component): void {
    cs2_4548();

    if (ifGetTop(59768852, -1) == 1) {
        ifSetOnTimer(hook(clientscript_lobbyscreen_pane_clanchat_chat_build, "I", [intArg0]), intArg0);
        return;
    }
    ccDeleteAll(Component.interface_912.component_912_20);
    let str0: string = "<col=7fa9ff>";
    let str1: string = "<col=ff5256>";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str2: string = "";
    let str3: string = "";

    while (int1 < 100) {
        int3 = chatGettypebyline(int1);
        str2 = chatLineGetcrownedname(int1);
        str3 = chatLineGetName(int1);
        switch (int3) {
            case 43:
            case 26:
                int2 = lobbyscreen_pane_clanchat_chat_line(int2, chatGetbyline(int1), 0, "", "", int3);
                break;
            case 41:
            case 44:
                int2 = lobbyscreen_pane_clanchat_chat_line(int2, "[" + str0 + chatGetClan(int1) + "</col>" + "] " + str2 + ": " + str1 + chatGetbyline(int1), 1, str2, str3, int3);
                break;
            case 42:
                int2 = lobbyscreen_pane_clanchat_chat_line(int2, "[" + str0 + chatGetClan(int1) + "</col>" + "] " + str2 + ": " + str1 + chatGetbyline(int1), 1, str2, str3, int3);
                break;
            case 115:
                int2 = lobbyscreen_pane_clanchat_chat_line(int2, "<col=ff0000>" + chatGetbyline(int1) + "</col>", 0, "", "", int3);
                break;
        }
        int1 = int1 + 1;
    }
    let int4: number = ifGetHeight(Component.interface_912.component_912_20) / 15;
    int1 = 0;
    let int5: number = 0;

    if (int2 < int4) {
        int5 = int4 - int2;
        while (int1 < int5) {
            int2 = lobbyscreen_pane_clanchat_chat_line(int2, "", 0, "", "", 0);
            int1 = int1 + 1;
        }
    }
    let int6: number = 0;
    let int7: number = 0;

    while (int7 <= int2) {
        if (ccFind<1>(Component.interface_912.component_912_20, int7) == 1) {
            int6 = int6 + ccGetHeight<1>();
        }
        int7 = int7 + 1;
    }
    let int8: number = max(int6, int4 * 15);
    ifSetScrollSize(0, int8, Component.interface_912.component_912_20);
    scrollbar_resize(Component.interface_912.component_912_21, Component.interface_912.component_912_20, varc_1124 + ifGetScrollHeight(Component.interface_912.component_912_20) - varc_1125);
    varc_1124 = ifGetScrollY(Component.interface_912.component_912_20);
    varc_1125 = ifGetScrollHeight(Component.interface_912.component_912_20);
}
