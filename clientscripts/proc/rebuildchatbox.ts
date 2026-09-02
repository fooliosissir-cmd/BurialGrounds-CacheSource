/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rebuildchatbox]

function rebuildchatbox(): void {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = 0;
    let int3: number = 1;
    let int4: number = 1;

    if (varc_chat_view == 3) {
        int2 = 1;
    }
    ccDeleteAll(Component.interface_137.component_137_57);
    let int5: number = -1;
    let int6: number = cs2_4467();
    let int7: number = -1;
    let int8: number = cs2_1891();
    varc_132 = -1;
    let str0: string = "<col=0000ff>";
    let str1: string = "<col=800000>";
    let str2: string = "<col=800080>";
    let str3: string = "<col=00ff00>";
    let int9: colour = colour(0x000000);
    let int10: colour = colour(0x000000);
    let int11: colour = colour(0x000000);
    let int12: colour = colour(0x000000);
    let str4: string = "<col=000000>";
    let int13: boolean = false;

    if (getWindowMode() >= 2) {
        str0 = "<col=7fa9ff>";
        str1 = "<col=ff5256>";
        str2 = "<col=ff78d9>";
        str3 = "<col=96ff7d>";
        int12 = colour(0xFFFFFF);
        str4 = "<col=ffffff>";
        int13 = true;
        int10 = enumOp(type_int, type_int, Enum.enum_3724, varbit_option_clanchatcolour);
        int9 = enumOp(type_int, type_int, Enum.friend_colours, varbit_option_friendchatcolour);
        int11 = enumOp(type_int, type_int, Enum.guest_colours, varbit_option_guestchatcolour);
    } else {
        int10 = enumOp(type_int, type_int, Enum.enum_3724, varbit_option_clanchatcolour);
        int9 = enumOp(type_int, type_int, Enum.friend_colours, varbit_option_friendchatcolour);
        int11 = enumOp(type_int, type_int, Enum.guest_colours, varbit_option_guestchatcolour);
    }
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 2;
    let int21: number = 2;
    ifSetnoclickthrough(int_to_bool(varc_1701), Component.interface_746.component_746_22);
    ifSetnoclickthrough(int_to_bool(varc_1701), Component.interface_548.component_548_168);

    while (int18 < 100) {
        if (cs2_193(int18) == 1 && cs2_90(int18, int2) == 1) {
            ccCreate(Component.interface_137.component_137_57, 4, int14);
            int15 = int14;
            int16 = 1;
            int14 = int14 + 1;
            int17 = chatGettypebyline(int18);
            ccSetColour(int12);
            ccSetTextFont(Graphic.p12_full);
            ccSetTextAlign(0, 0, 14);
            ccSetTextShadow(int13);
            ccSetPosition(3, int21, 0, 2);
            switch (int17) {
                case 0:
                case 4:
                case 27:
                case 28:
                case 29:
                case 11:
                case 43:
                case 103:
                case 119:
                case 104:
                case 109:
                case 110:
                case 26:
                case 30:
                case 31:
                case 120:
                    ccSetText(chatGetbyline(int18));
                    if (int3 == 1 && (int17 == 0 || int17 == 4 || int17 == 27 || int17 == 28 || int17 == 29 || int17 == 26 || int17 == 30 || int17 == 31)) {
                        varc_1269 = chatLineGetcycles20ms(int18);
                        int3 = 0;
                    }
                    break;
                case 1:
                case 2:
                    ccSetText(chatLineGetcrownedname(int18) + ": " + str0 + chatGetbyline(int18));
                    break;
                case 3:
                    ccSetText("From " + chatLineGetcrownedname(int18) + ": " + str1 + chatGetbyline(int18));
                    break;
                case 100:
                    ccSetText(str2 + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 5:
                    ccSetText(str1 + chatGetbyline(int18));
                    break;
                case 6:
                    ccSetText("To " + chatLineGetcrownedname(int18) + ": " + str1 + chatGetbyline(int18));
                    break;
                case 7:
                    ccSetText("From " + chatLineGetcrownedname(int18) + ": " + str1 + chatGetbyline(int18));
                    break;
                case 101:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 41:
                    ccSetColour(int10);
                    ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    break;
                case 9:
                    ccSetColour(int9);
                    ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    break;
                case 44:
                    ccSetColour(int11);
                    ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    break;
                case 117:
                    ccSetText("<col=7e3200>" + chatGetbyline(int18));
                    break;
                case 102:
                    ccSetText("<col=8a2be2>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 105:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 106:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 107:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 118:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 17:
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                        ccSetText(chatLineGetcrownedname(int18) + "<img=3>" + ": " + str0 + chatGetbyline(int18));
                    } else {
                        ccSetText(chatLineGetcrownedname(int18) + ": " + str0 + chatGetbyline(int18));
                    }
                    break;
                case 18:
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                        ccSetText("From " + chatLineGetcrownedname(int18) + "<img=3>" + ": " + str1 + chatGetbyline(int18));
                    } else {
                        ccSetText("From " + chatLineGetcrownedname(int18) + ": " + str1 + chatGetbyline(int18));
                    }
                    break;
                case 19:
                    ccSetText("To " + chatLineGetcrownedname(int18) + ": " + str1 + chatGetbyline(int18));
                    break;
                case 42:
                    ccSetColour(int10);
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + "<img=3>" + ": " + "</col>" + chatGetbyline(int18));
                    } else {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    }
                    break;
                case 45:
                    ccSetColour(int11);
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + "<img=3>" + ": " + "</col>" + chatGetbyline(int18));
                    } else {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    }
                    break;
                case 20:
                    ccSetColour(int9);
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + "<img=3>" + ": " + "</col>" + chatGetbyline(int18));
                    } else {
                        ccSetText(str4 + "[" + "</col>" + str0 + chatGetClan(int18) + "</col>" + str4 + "] " + chatLineGetcrownedname(int18) + ": " + "</col>" + chatGetbyline(int18));
                    }
                    break;
                case 108:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 111:
                case 112:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 113:
                case 114:
                    ccSetText("<col=7e3200>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 115:
                    ccSetText("<col=7f0000>" + chatLineGetcrownedname(int18) + " " + chatGetbyline(int18));
                    break;
                case 116:
                    ccSetText(chatGetbyline(int18));
                    break;
            }
            ccClearops();
            ccSetOnOpt(hook(chat_op, "isi", [event_opindex, chatLineGetName(int18), int18]));
            ccSetOpBase("<col=ffffff>" + removetags(chatLineGetcrownedname(int18)));
            switch (int17) {
                case 1:
                case 2:
                case 3:
                case 7:
                case 41:
                case 44:
                case 9:
                case 6:
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && compare(removetags(chatPlayerNameUnfiltered()), removetags(chatLineGetcrownedname(int18))) != 0) {
                        if (friendTest(chatLineGetName(int18)) == 1) {
                            if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                                ccSetOp(6, "Message");
                            }
                        } else {
                            ccSetOp(6, "Add friend");
                            ccSetOp(7, "Add ignore");
                        }
                        if (varbit_snapshot_right_click_enabled == 1) {
                            ccSetOp(8, "Report");
                        }
                        if (int17 == 41 && int6 == 1) {
                            ccSetOp(10, "Kick/ban");
                        }
                        if (int17 == 9 && int8 == 1) {
                            ccSetOp(10, "Kick/ban");
                        }
                    }
                    break;
                case 100:
                    ccSetOp(1, "Accept trade");
                    break;
                case 101:
                case 105:
                case 106:
                case 107:
                case 113:
                case 114:
                case 118:
                    ccSetOp(2, "Accept challenge");
                    break;
                case 102:
                    ccSetOp(3, "Give assistance");
                    break;
                case 111:
                    ccSetOp(4, "Open invitation");
                    break;
                case 112:
                    ccSetOp(3, "Vote");
                    break;
                case 17:
                case 18:
                case 42:
                case 45:
                case 20:
                    if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int18))) != 0 && compare(removetags(chatPlayerNameUnfiltered()), removetags(chatLineGetcrownedname(int18))) != 0) {
                        if (friendTest(chatLineGetName(int18)) == 1) {
                            if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                                ccSetOp(6, "Message");
                            }
                        } else {
                            ccSetOp(6, "Add friend");
                            ccSetOp(7, "Add ignore");
                        }
                        if (int17 == 42 && int6 == 1) {
                            ccSetOp(10, "Kick/ban");
                        }
                        if (int17 == 20 && int8 == 1) {
                            ccSetOp(10, "Kick/ban");
                        }
                        if (chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int18)) > 0) {
                            if (varc_132 == -1) {
                                varc_132 = chatLineGetQuickChatId(int18);
                                varcstr_29 = chatLineGetcrownedname(int18);
                                if (int17 == 20) {
                                    varc_133 = 6;
                                    ccSetOp(9, "Quick Response");
                                }
                                if (int17 == 42) {
                                    varc_133 = 9;
                                    ccSetOp(9, "Quick Response");
                                }
                                if (int17 == 45) {
                                    varc_133 = 11;
                                    ccSetOp(9, "Quick Response");
                                } else if (int17 == 18) {
                                    varc_133 = 5;
                                    if (friendTest(chatLineGetName(int18)) == 1) {
                                        ccSetOp(9, "Quick Response");
                                    }
                                } else {
                                    varc_133 = 4;
                                    ccSetOp(9, "Quick Response");
                                }
                            } else {
                                ccSetOp(9, "Quick Response");
                            }
                        }
                    }
                    break;
                case 108:
                    ccSetOp(10, "Accept alliance");
                    break;
                case 117:
                    ccSetOp(5, "View invite from");
                    break;
            }
        } else {
            int16 = 0;
        }
        if (int4 == 1) {
            switch (chatGettypebyline(int18)) {
                case 3:
                case 7:
                case 18:
                    varcstr_276 = removetags(chatLineGetName(int18));
                    int4 = 0;
                    break;
            }
        }
        if (ccFind(Component.interface_137.component_137_57, int15) == 1 && int16 == 1) {
            int19 = max(paraheight(ccGetText(), 484, ccGetfontmetrics()), 1);
            ccSetSize(max(min(parawidth(ccGetText(), 484, ccGetfontmetrics()), 484), 1), 14 * int19, 0, 0);
            int20 = int20 + ccGetHeight();
            int21 = int21 + ccGetHeight();
        }
        int18 = int18 + 1;
    }
    int20 = max(int20, ifGetHeight(Component.interface_137.component_137_57));
    ifSetScrollSize(463, int20, Component.interface_137.component_137_57);

    if (getWindowMode() >= 2) {
        cs2_5509(Component.interface_137.component_137_58, Component.interface_137.component_137_57, varc_7 + ifGetScrollHeight(Component.interface_137.component_137_57) - varc_8);
    } else {
        scrollbar_resize(Component.interface_137.component_137_58, Component.interface_137.component_137_57, varc_7 + ifGetScrollHeight(Component.interface_137.component_137_57) - varc_8);
    }
    varc_7 = ifGetScrollY(Component.interface_137.component_137_57);
    varc_8 = ifGetScrollHeight(Component.interface_137.component_137_57);
    ifSetnoclickthrough(true, Component.interface_746.component_746_22);

    if (getWindowMode() >= 2 && varc_1701 == 1) {
        ifSetnoclickthrough(false, Component.interface_746.component_746_22);
    }
}
