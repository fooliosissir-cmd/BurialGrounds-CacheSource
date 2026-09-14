/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chatdefault_onkey]

function chatdefault_onkey(intArg0: number, intArg1: number): void {
    if (cs2_2709() == 0) {
        if (intArg0 == 84) {
            mes("Chat is not available until your Date of Birth is recorded. Please enter your DOB above.");
        }
        return;
    }

    if (intArg0 == 9) {
        if (varc_132 != -1) {
            quickchat_respond(varc_133, varcstr_29, varc_132);
        }
        return;
    }

    if (intArg0 == 10) {
        if (cs2_1036() != -1) {
            quickchat_open_context(0, "");
        }
        return;
    }
    let int2: number = 0;

    if (intArg0 == 80) {
        if (stringLength(varcstr_276) > 0) {
            int2 = friendGetSlotFromName(varcstr_276);
            if (int2 != -1) {
                if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                    varc_1650 = 1;
                    varcstr_23 = varcstr_276;
                    cs2_1558(false);
                    return;
                }
                if (friendPlatform(int2) == 0) {
                    quickchat_open(1, varcstr_276);
                } else {
                    quickchat_open(3, varcstr_276);
                }
                return;
            }
            if (varc_183 > clientClock() - 100) {
                return;
            }
            mes("That player is not on your Friends list.");
            varc_183 = clientClock();
            return;
        }
        if (varc_183 > clientClock() - 100) {
            return;
        }
        mes("You haven't received any messages to which you can reply.");
        varc_183 = clientClock();
        return;
    }
    let int3: number = 0;
    let int4: number = 0;

    if (intArg0 == 11) {
        int3 = 150;
        int4 = clientClock() - varc_158;
        if (int4 > 1500) {
            varc_159 = 0;
        }
        if (varc_159 >= 7) {
            int3 = 600;
        } else if (varc_159 >= 5) {
            int3 = 450;
        } else if (varc_159 >= 3) {
            int3 = 300;
        }
        if (int4 >= int3) {
            varc_158 = clientClock();
            varc_159 = varc_159 + 1;
            if (varc_130 != -1) {
                quickchat_phrase_resend();
            }
            return;
        }
    }
    let int5: number = 0;
    let int6: number = -1;
    let int7: number = -1;
    let int8: number = -1;
    let int9: number = -1;
    let int10: number = -1;
    let int11: number = -1;

    if (staffmodlevel() > 0) {
        if (intArg0 == 104) {
            cs2_75();
        } else if (intArg0 == 105) {
            cs2_76();
        }
    } else if (userDetailQuickChat() == 1 || mapQuickChat() == 1) {
        if (intArg0 == 84) {
            [int6, int7, int8, int9, int10, int11] = cs2_4590();
            if (varc_chat_view == 4) {
                quickchat_open(2, "");
            }
            if (varc_chat_view == 7) {
                if (int6 >= 0) {
                    if (int7 >= int8) {
                        quickchat_open(8, "");
                        return;
                    } else {
                        mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                        return;
                    }
                } else {
                    varc_chat_view = 0;
                    cs2_181(0);
                    cs2_178();
                    rebuildchatbox();
                    cs2_89();
                    mes("You aren't in a Clan Chat channel.");
                    return;
                }
            } else {
                quickchat_open(0, "");
                return;
            }
        }
        return;
    }
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let [str0, str1, str2, str3, str4, str5, str6, str7] = cs2_4729();

    switch (intArg0) {
        case 84:
            [int6, int7, int8, int9, int10, int11] = cs2_4590();
            if (stringLength(varcstr_1) <= 0) {
                varc_1650 = 0;
                varcstr_1 = "";
                if (varc_chat_view == 4) {
                    quickchat_open(2, "");
                    return;
                }
                if (varc_chat_view == 7) {
                    if (int6 >= 0) {
                        if (int7 >= int8) {
                            quickchat_open(8, "");
                            return;
                        } else {
                            mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                            return;
                        }
                    } else {
                        varc_chat_view = 0;
                        cs2_181(0);
                        cs2_178();
                        rebuildchatbox();
                        cs2_89();
                        mes("You aren't in a Clan Chat channel.");
                        return;
                    }
                } else {
                    quickchat_open(0, "");
                }
                return;
            }
            if (compare("/", varcstr_1) == 0) {
                varcstr_1 = "";
                quickchat_open(2, "");
                return;
            } else if (compare("//", varcstr_1) == 0) {
                varcstr_1 = "";
                if (int6 >= 0) {
                    if (int7 >= int8) {
                        quickchat_open(8, "");
                        return;
                    } else {
                        mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                        return;
                    }
                } else {
                    varc_chat_view = 0;
                    cs2_181(0);
                    cs2_178();
                    rebuildchatbox();
                    cs2_89();
                    mes("You aren't in a Clan Chat channel.");
                    return;
                }
            } else if (compare("///", varcstr_1) == 0) {
                varcstr_1 = "";
                if (int9 >= 0) {
                    if (int10 >= int11) {
                        quickchat_open(10, "");
                        return;
                    } else {
                        mesTyped(43, 0, "Guests cannot chat in this Clan Chat channel.");
                        return;
                    }
                } else {
                    varc_chat_view = 0;
                    cs2_181(0);
                    cs2_178();
                    rebuildchatbox();
                    cs2_89();
                    mes("You aren't a guest in a visited Clan Chat channel.");
                    return;
                }
            }
            if (staffmodlevel() > 0 && stringIndexofString(varcstr_1, "::", 0) == 0) {
                mes("<col=ff7f7f>" + "Use the reverse apostrophe (`) key to open the console to enter that command.");
                mes("<col=ff7f7f>" + "It is usually located under the ESC key.");
                varcstr_1 = "";
                cs2_1558(false);
                return;
            }
            if (compare(str2, lowercase(varcstr_1)) == 0 || compare(str3, lowercase(varcstr_1)) == 0) {
                varc_1650 = 0;
                varc_1651 = 2;
                chatSetMode(2);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str6, lowercase(varcstr_1)) == 0 || compare(str7, lowercase(varcstr_1)) == 0) {
                varc_1650 = 0;
                varc_1651 = 3;
                chatSetMode(3);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str4, lowercase(varcstr_1)) == 0 || compare(str5, lowercase(varcstr_1)) == 0) {
                varc_1650 = 0;
                varc_1651 = 1;
                chatSetMode(1);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str0, lowercase(varcstr_1)) == 0 || compare(str1, lowercase(varcstr_1)) == 0) {
                varc_1650 = 0;
                varc_1651 = 0;
                chatSetMode(0);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            }
            if (varc_1650 == 1 && compare(subString(varcstr_1, 0, 1), "/") != 0) {
                chatSendprivate(varcstr_23, varcstr_1);
                varc_1650 = 0;
                varcstr_1 = "";
                return;
            } else {
                varc_1650 = 0;
            }
            if (varc_1651 == 1) {
                if (cs2_4730(int9, int10, int11, int6, int7, int8) == 0) {
                    if (compare("", clanGetChatDisplayName()) == 0) {
                        varcstr_1 = "";
                        varc_chat_view = 0;
                        varc_1651 = 0;
                        chatSetMode(0);
                        cs2_181(0);
                        cs2_178();
                        rebuildchatbox();
                        cs2_89();
                        mes("You aren't in a Friends Chat channel.");
                        return;
                    } else {
                        chatSetMode(1);
                        chatSendpublic(varcstr_1);
                        varcstr_1 = "";
                    }
                }
            } else if (varc_1651 == 2) {
                if (cs2_4730(int9, int10, int11, int6, int7, int8) == 0) {
                    if (int6 >= 0) {
                        if (int7 >= int8) {
                            chatSetMode(2);
                            chatSendpublic(varcstr_1);
                            varcstr_1 = "";
                        } else {
                            mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                            varcstr_1 = "";
                            chatSetMode(0);
                            varc_1651 = 0;
                            cs2_1558(false);
                            return;
                        }
                    } else {
                        varc_chat_view = 0;
                        varc_1651 = 0;
                        chatSetMode(0);
                        cs2_181(0);
                        cs2_178();
                        rebuildchatbox();
                        cs2_89();
                        mes("You aren't in a Clan Chat channel.");
                        varcstr_1 = "";
                        return;
                    }
                }
            } else if (varc_1651 == 3) {
                if (cs2_4730(int9, int10, int11, int6, int7, int8) == 0) {
                    if (int9 >= 0) {
                        if (int10 >= int11) {
                            if (compare(varcstr_1, "") == 0) {
                                return;
                            } else {
                                chatSetMode(3);
                                chatSendpublic(varcstr_1);
                                varcstr_1 = "";
                            }
                        } else {
                            mesTyped(43, 0, "Guests cannot chat in this Clan Chat channel.");
                            varcstr_1 = "";
                            chatSetMode(0);
                            varc_1651 = 0;
                            cs2_1558(false);
                            return;
                        }
                    } else {
                        varc_chat_view = 0;
                        chatSetMode(0);
                        varc_1651 = 0;
                        cs2_181(0);
                        cs2_178();
                        rebuildchatbox();
                        cs2_89();
                        mes("You aren't a guest in a visited Clan Chat channel.");
                        varcstr_1 = "";
                        return;
                    }
                }
            } else {
                if (compare(subString(varcstr_1, 0, 1), "/") == 0) {
                    chatSetMode(1);
                    varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
                    if (compare(varcstr_1, "") == 0) {
                        return;
                    }
                    if (compare(subString(varcstr_1, 0, 1), "/") == 0) {
                        varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
                        if (compare(subString(varcstr_1, 0, 1), "/") == 0) {
                            if (int9 >= 0) {
                                if (int10 >= int11) {
                                    chatSetMode(3);
                                    varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
                                    if (compare(varcstr_1, "") == 0) {
                                        return;
                                    }
                                } else {
                                    mesTyped(43, 0, "Guests cannot chat in this Clan Chat channel.");
                                    varcstr_1 = "";
                                    chatSetMode(0);
                                    cs2_1558(false);
                                    return;
                                }
                            } else {
                                varc_chat_view = 0;
                                chatSetMode(0);
                                cs2_181(0);
                                cs2_178();
                                rebuildchatbox();
                                cs2_89();
                                mes("You aren't a guest in a visited Clan Chat channel.");
                                varcstr_1 = "";
                                return;
                            }
                        } else if (int6 >= 0) {
                            if (int7 >= int8) {
                                chatSetMode(2);
                                if (compare(varcstr_1, "") == 0) {
                                    return;
                                }
                            } else {
                                mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                                varcstr_1 = "";
                                chatSetMode(0);
                                cs2_1558(false);
                                return;
                            }
                        } else {
                            varc_chat_view = 0;
                            chatSetMode(0);
                            cs2_181(0);
                            cs2_178();
                            rebuildchatbox();
                            cs2_89();
                            mes("You aren't in a Clan Chat channel.");
                            varcstr_1 = "";
                            return;
                        }
                    } else if (compare("", clanGetChatDisplayName()) == 0) {
                        varcstr_1 = "";
                        varc_chat_view = 0;
                        varc_1651 = 0;
                        chatSetMode(0);
                        cs2_181(0);
                        cs2_178();
                        rebuildchatbox();
                        cs2_89();
                        mes("You aren't in a Friends Chat channel.");
                        return;
                    } else {
                        chatSetMode(1);
                    }
                }
                chatSendpublic(varcstr_1);
                chatSetMode(0);
            }
            cs2_77(varcstr_1);
            varcstr_1 = "";
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (keyheldShift() == 0) {
                return;
            }
            varc_1028 = cs2_1553(intArg0, varc_1028, varcstr_1);
            break;
        case 13:
            if (varc_1650 == 1) {
                if (stringLength(varcstr_1) < 1) {
                    varc_1650 = 0;
                } else {
                    varcstr_1 = "";
                    varc_1028 = 0;
                }
            } else if (stringLength(varcstr_1) < 1) {
                varc_1651 = 0;
                chatSetMode(0);
            } else {
                varcstr_1 = "";
                varc_1028 = 0;
            }
            break;
        case 83:
            if (compare(str2, lowercase(varcstr_1)) == 0 || compare(str3, lowercase(varcstr_1)) == 0) {
                varc_1651 = 2;
                varc_1650 = 0;
                chatSetMode(2);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str6, lowercase(varcstr_1)) == 0 || compare(str7, lowercase(varcstr_1)) == 0) {
                varc_1651 = 3;
                varc_1650 = 0;
                chatSetMode(3);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str4, lowercase(varcstr_1)) == 0 || compare(str5, lowercase(varcstr_1)) == 0) {
                varc_1651 = 1;
                varc_1650 = 0;
                chatSetMode(1);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            } else if (compare(str0, lowercase(varcstr_1)) == 0 || compare(str1, lowercase(varcstr_1)) == 0) {
                varc_1651 = 0;
                varc_1650 = 0;
                chatSetMode(0);
                varcstr_1 = "";
                varc_1028 = 0;
                varc_1652 = 1;
                cs2_1558(false);
                return;
            }
            [varcstr_1, varc_1028] = cs2_802(varc_1028, varcstr_1, 0, intArg0, intArg1);
            break;
        default:
            if (varc_1652 == 1) {
                varc_1652 = 0;
                return;
            }
            [varcstr_1, varc_1028] = cs2_802(varc_1028, varcstr_1, 0, intArg0, intArg1);
            break;
    }
    cs2_1558(false);
}
