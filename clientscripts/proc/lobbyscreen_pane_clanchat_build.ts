/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_build]

function proc_lobbyscreen_pane_clanchat_build(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    if (ifGetTop(intArg3, -1) == 1) {
        ifSetOnTimer(hook(clientscript_lobbyscreen_pane_clanchat_build, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg4);
        return;
    } else {
        ifSetOnTimer(noHook(""), intArg4);
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    let int6: number = 0;
    let int7: number = activeClanChannelGetUserCount();
    let int8: number = 0;
    let str0: string = "";
    let int9: number = 15;
    let int10: number = 17;
    let int11: colour = colour(0x000000);
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int16: number = 0;
    let int17: number = cs2_4468();
    let int18: number = activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered()));
    let int19: number = 0;

    if (int18 != -1) {
        int19 = activeClanChannelGetUserRank(int18);
    }
    cs2_1896();
    ifSetHide(true, Component.interface_912.component_912_39);
    ifSetText(activeClanChannelGetClanName(), Component.interface_912.component_912_17);
    ifSetSize(ifGetWidth(Component.interface_912.component_912_38), 4, 0, 1, Component.interface_912.component_912_38);

    while (int8 < int7) {
        int15 = activeClanChannelGetUserRank(int8);
        str2 = activeClanChannelGetUserDisplayName(int8);
        str0 = str2;
        cc_add_rect(intArg3, int8, ifGetWidth(intArg3), int9, 0, int12, colour(0x000000), true, 0);
        if (int8 % 2 == 0) {
            ccSetColour(colour(0x201911));
        } else {
            ccSetColour(colour(0x292016));
        }
        str1 = "Rank: " + enumOp(type_int, type_string, Enum.clan_core_rank_int_to_rank, int15);
        ccHookMouseEnter(hook(cs2_3167, "Iis", [intArg3, int8, str1]));
        ccHookMouseExit(hook(cs2_3169, "Ii", [intArg3, int8]));
        if (activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered())) != int8) {
            ccSetOnOpt(hook(lobbyscreen_pane_clanchat_op, "si", [str2, event_opindex]));
            if (friendTest(removetags(str2)) == 1) {
                ccSetOp(8, "Remove friend " + str0);
            } else if (ignoreTest(removetags(str2)) == 1) {
                ccSetOp(9, "Remove ignore " + str0);
            } else {
                ccSetOp(6, "Add friend " + str0);
                ccSetOp(7, "Add ignore " + str0);
            }
        }
        if (int17 == 1 && int19 > int15) {
            ccSetOp(10, "Kick/ban " + str0);
        }
        cc_add_graphic(intArg1, int8, 9, 9, 5, int12 + 2, enumOp(type_int, type_graphic, Enum.enum_3712, int15), false, false, false, 0);
        cc_add_text(intArg0, int8, 0, int9, int10, int12, str0, colour(0xFFFFFF), Graphic.p11_full, 0, 1, 0, true);
        ccSetSize(int10, int9, 1, 0);
        ccSetmaxlines(1);
        int13 = activeClanChannelGetUserWorld(int8);
        if (int13 == 0) {
            str0 = "Offline";
            int11 = colour(0xFF0000);
        } else {
            if (int13 >= 1149 && int13 < 1200) {
                str0 = "Beta lobby";
            } else if (int13 >= 1100) {
                str0 = "Lobby " + tostring(int13 - 1099);
            } else if (int13 >= 200 && int13 < 250) {
                str0 = "Beta " + tostring(int13);
            } else {
                str0 = "World " + tostring(int13);
            }
            if (int13 == mapWorld()) {
                int11 = colour(0x00FF00);
            } else {
                int11 = colour(0xFFFF00);
            }
        }
        cc_add_text(intArg2, int8, 0, int9, 5, int12, str0, int11, Graphic.p11_full, 0, 1, 0, true);
        ccSetSize(5, int9, 1, 0);
        ccSetmaxlines(1);
        int12 = int12 + int9;
        int8 = int8 + 1;
    }
    let int20: number = ifGetHeight(intArg4) / int9 + 1;

    if (int20 > int7) {
        while (int8 < int20) {
            cc_add_rect(intArg3, int8, ifGetWidth(intArg3), int9, 0, int12, colour(0x000000), true, 0);
            if (int8 % 2 == 0) {
                ccSetColour(colour(0x201911));
            } else {
                ccSetColour(colour(0x292016));
            }
            int12 = int12 + int9;
            int8 = int8 + 1;
        }
        int14 = ifGetHeight(intArg4);
    } else {
        int14 = int12;
    }

    if (int20 <= int7) {
        int16 = ifGetScrollY(Component.interface_912.component_912_45);
        ifSetScrollSize(0, int14, Component.interface_912.component_912_45);
        if (int16 > int14) {
            int16 = int14;
        }
        scrollbar_resize(Component.interface_912.component_912_46, Component.interface_912.component_912_45, int16);
    } else {
        ifSetScrollSize(0, 0, Component.interface_912.component_912_45);
        ifSetScrollPos(0, 0, Component.interface_912.component_912_45);
        scrollbar_resize(Component.interface_912.component_912_46, Component.interface_912.component_912_45, 0);
    }
    cs2_1896();
}
