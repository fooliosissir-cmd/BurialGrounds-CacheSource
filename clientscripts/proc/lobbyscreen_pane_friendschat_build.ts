/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_friendschat_build]

function proc_lobbyscreen_pane_friendschat_build(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    if (minimenuopen(intArg3, -1) == 1) {
        ifSetOnTimer(hook(clientscript_lobbyscreen_pane_friendschat_build, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg4);
        return;
    } else {
        ifSetOnTimer(noHook(""), intArg4);
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    let int6: number = 0;
    let int7: number = clanGetChatCount();
    let int8: number = 0;
    let str0: string = "";
    let int9: number = 15;
    let int10: number = 17;
    let int11: colour = colour(0x000000);
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int17: number = 0;

    if (int7 <= 0) {
        ifSetText("Not in chat", Component.interface_589.component_589_19);
        ifSetText("None", Component.interface_589.component_589_20);
        ifSetText("Join Chat Channel", Component.interface_589.component_589_41);
        ifSetOp(1, "Join Chat Channel", Component.interface_589.component_589_39);
        cs2_4560("You are not currently in a Friends Chat channel." + "<br>" + "<br>" + "Use the button below if you wish to join a chat channel.", intArg3);
        ifSetSize(ifGetWidth(Component.interface_589.component_589_45), ifGetHeight(Component.interface_589.component_589_44), 0, 0, Component.interface_589.component_589_45);
        ifSetScrollSize(0, 0, Component.interface_589.component_589_51);
        ifSetScrollPos(0, 0, Component.interface_589.component_589_51);
        scrollbar_resize(Component.interface_589.component_589_52, Component.interface_589.component_589_51, 0);
    } else {
        ifSetText(clanGetChatDisplayName(), Component.interface_589.component_589_19);
        ifSetText(clanGetchatownername(), Component.interface_589.component_589_20);
        ifSetText("Leave chat channel", Component.interface_589.component_589_41);
        ifSetOp(1, "Leave chat channel", Component.interface_589.component_589_39);
        ifSetSize(ifGetWidth(Component.interface_589.component_589_45), 4, 0, 1, Component.interface_589.component_589_45);
        while (int8 < int7) {
            int16 = clanGetChatUserRank(int8);
            str2 = clanGetChatUserNameUnfiltered(int8);
            str0 = clanGetChatUserName(int8);
            cc_add_rect(intArg3, int8, ifGetWidth(intArg3), int9, 0, int12, colour(0x000000), true, 0);
            if (int8 % 2 == 0) {
                ccSetColour(colour(0x201911));
            } else {
                ccSetColour(colour(0x292016));
            }
            str1 = "Rank: " + enumOp(type_int, type_string, Enum.friendschat_rankenum, int16);
            ccSetOnMouseOver(hook(cs2_4561, "Iis", [intArg3, int8, str1]));
            ccSetOnMouseLeave(hook(cs2_4563, "Ii", [intArg3, int8]));
            if (clanIsself(int8) == 0) {
                ccSetOnOp(hook(lobbyscreen_pane_friendschat_op, "si", [str2, event_opindex]));
                if (friendTest(removetags(str2)) == 1) {
                    ccSetOp(8, "Remove friend " + str0);
                } else if (ignoreTest(removetags(str2)) == 1) {
                    ccSetOp(9, "Remove ignore " + str0);
                } else {
                    ccSetOp(6, "Add friend " + str0);
                    ccSetOp(7, "Add ignore " + str0);
                }
            }
            if (clanGetChatRank() >= clanGetChatMinKick() && clanGetChatRank() > int16) {
                ccSetOp(10, "Kick/ban " + str0);
            }
            cc_add_graphic(intArg1, int8, 9, 9, 5, int12 + 2, cs2_1599(int16), false, false, false, 0);
            cc_add_text(intArg0, int8, 0, int9, int10, int12, str0, colour(0xFFFFFF), Graphic.p11_full, 0, 1, 0, true);
            ccSetSize(int10, int9, 1, 0);
            ccSetmaxlines(1);
            int13 = clanGetChatUserWorld(int8);
            if (int13 == 0) {
                str0 = "Offline";
                int11 = colour(0xFF0000);
            } else if (int13 >= 1149 && int13 < 1200) {
                str0 = "Beta lobby";
            } else if (int13 >= 200 && int13 < 250) {
                str0 = "Beta " + tostring(int13);
            } else {
                str0 = clanGetChatUserWorldName(int8);
            }
            if (int13 > 0) {
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
        int14 = ifGetHeight(intArg4) / int9 + 1;
        if (int14 > int7) {
            while (int8 < int14) {
                cc_add_rect(intArg3, int8, ifGetWidth(intArg3), int9, 0, int12, colour(0x000000), true, 0);
                if (int8 % 2 == 0) {
                    ccSetColour(colour(0x201911));
                } else {
                    ccSetColour(colour(0x292016));
                }
                int12 = int12 + int9;
                int8 = int8 + 1;
            }
            int15 = ifGetHeight(intArg4);
        } else {
            int15 = int12;
        }
        if (int14 <= int7) {
            int17 = ifGetScrollY(Component.interface_589.component_589_51);
            ifSetScrollSize(0, int15, Component.interface_589.component_589_51);
            if (int17 > int15) {
                int17 = int15;
            }
            scrollbar_resize(Component.interface_589.component_589_52, Component.interface_589.component_589_51, int17);
        } else {
            ifSetScrollSize(0, 0, Component.interface_589.component_589_51);
            ifSetScrollPos(0, 0, Component.interface_589.component_589_51);
            scrollbar_resize(Component.interface_589.component_589_52, Component.interface_589.component_589_51, 0);
        }
    }
    cs2_4573();
}
