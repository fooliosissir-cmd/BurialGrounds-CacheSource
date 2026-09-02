/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_onkey]

function meslayer_onkey(intArg0: number, intArg1: number): void {
    switch (intArg0) {
        case 84:
            if (varc_meslayermode == 12) {
                cs2_1806(varcstr_meslayerinput);
                return;
            }
            if (varc_meslayermode == 13) {
                resumeStringDialog(varcstr_meslayerinput);
                proc_meslayer_close(13);
                return;
            }
            if (stringLength(varcstr_meslayerinput) > 0) {
                if (varc_meslayermode == 4 || varc_meslayermode == 5) {
                    if (ignoreCount() < 0) {
                        mes("Unable to update Ignore List: system busy");
                    } else if (varc_meslayermode == 4) {
                        ignoreAdd(varcstr_meslayerinput);
                    } else if (varc_meslayermode == 5) {
                        if (ignoreTest(displayname_simplify(varcstr_meslayerinput)) == 1) {
                            ignoreDel(displayname_simplify(varcstr_meslayerinput));
                        } else {
                            mes("That player is not on your ignore list.");
                        }
                    }
                } else if (varc_meslayermode < 7) {
                    if (friendCount() < 0) {
                        mes("Unable to complete action - system busy");
                    } else if (varc_meslayermode == 2) {
                        friendAdd(varcstr_meslayerinput);
                    } else if (varc_meslayermode == 3) {
                        if (friendTest(displayname_simplify(varcstr_meslayerinput)) == 1) {
                            friendDel(displayname_simplify(varcstr_meslayerinput));
                        } else {
                            mes("That player is not on your friends list.");
                        }
                    } else if (varc_meslayermode == 6) {
                        if (chatGetFilterPrivate() == 2) {
                            chatSetFilter(chatGetFilterPublic(), 1, chatGetFilterTrade());
                            cs2_178();
                            rebuildchatbox();
                            cs2_89();
                        }
                        chatSendprivate(varcstr_23, varcstr_meslayerinput);
                    }
                } else if (varc_meslayermode == 11) {
                    cs2_1478();
                } else if (varc_meslayermode == 7) {
                    varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "K", "000");
                    varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "k", "000");
                    varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "M", "000000");
                    varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "m", "000000");
                    if (mapLang() == 1) {
                        varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "T", "000");
                        varcstr_meslayerinput = cs2_2332(varcstr_meslayerinput, "t", "000");
                    }
                    resumeCountDialog(cs2_5390(varcstr_meslayerinput));
                } else if (varc_meslayermode == 8) {
                    varcstr_201 = escape(varcstr_meslayerinput);
                    varc_1026 = 1;
                    resumeNameDialog(varcstr_meslayerinput);
                } else if (varc_meslayermode == 9) {
                    if (compare(lowercase(varcstr_meslayerinput), lowercase(varcstr_33)) != 0) {
                        resumeStringDialog(varcstr_meslayerinput);
                    } else {
                        mes("Please do not enter your password here!");
                    }
                } else if (varc_meslayermode == 10) {
                    varcstr_last_clanchannelowner = escape(varcstr_meslayerinput);
                    varc_last_clanchannelowner_init = 1;
                    fcJoinChat(varcstr_meslayerinput);
                } else if (varc_meslayermode == 15) {
                    friendschat_kick(varcstr_meslayerinput);
                } else if (varc_meslayermode == 16) {
                    clan_chat_kick_find(varcstr_meslayerinput);
                }
            } else if (varc_meslayermode == 14) {
                music_search_close();
                return;
            } else if (varc_meslayermode != 7) {
            }
            ifSetHide(true, Component.interface_752.component_752_3);
            ifSetHide(true, Component.interface_752.component_752_7);
            ifSetHide(false, Component.interface_752.component_752_8);
            varc_meslayermode = 0;
            if (getWindowMode() >= 2) {
                proc_subchanged();
            }
            return;
        case 13:
            if (varc_meslayermode == 12) {
                cs2_1806(varcstr_clanwars_caller);
                proc_meslayer_close(0);
            } else if (varc_meslayermode == 14) {
                music_search_close();
            }
            return;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (keyheldAlt() == 0) {
                return;
            }
            varc_1029 = cs2_1553(intArg0, varc_1029, varcstr_meslayerinput);
            break;
        default:
            switch (varc_meslayermode) {
                case 1:
                    if (intArg0 == 83) {
                        proc_meslayer_close(1);
                    }
                    return;
                case 6:
                case 9:
                case 11:
                    [varcstr_meslayerinput, varc_1029] = cs2_802(varc_1029, varcstr_meslayerinput, 0, intArg0, intArg1);
                    break;
                case 7:
                    [varcstr_meslayerinput, varc_1029] = cs2_802(varc_1029, varcstr_meslayerinput, 6, intArg0, intArg1);
                    break;
                case 13:
                    [varcstr_meslayerinput, varc_1029] = cs2_802(varc_1029, varcstr_meslayerinput, 5, intArg0, intArg1);
                    break;
                case 14:
                    [varcstr_meslayerinput, varc_1029] = cs2_802(varc_1029, varcstr_meslayerinput, 4, intArg0, intArg1);
                    break;
                default:
                    [varcstr_meslayerinput, varc_1029] = cs2_802(varc_1029, varcstr_meslayerinput, 2, intArg0, intArg1);
                    break;
            }
            break;
    }
    ifSetText(escape(varcstr_meslayerinput), Component.interface_752.component_752_5);
    cs2_1557();

    if (varc_meslayermode == 11) {
        cs2_1475();
    } else if (varc_meslayermode == 14) {
        varcstr_196 = lowercase(varcstr_meslayerinput);
        varc_89 = 1;
        music_v3_refresh();
    }
}
