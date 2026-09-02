/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_89

function cs2_89(): void {
    if (ifGetTop(49414144, -1) == 1) {
        ifSetOnTimer(hook(cs2_1562, "", []), Component.interface_754.component_754_0);
        return;
    }
    let int0: number = 0;
    let int1: component = -1;
    let int2: number = 0;
    let int3: number = 0;

    if (reboottimer() > 0) {
        int2 = reboottimer() / 50 % 60;
        int3 = reboottimer() / 3000;
        if (int2 < 10) {
            ifSetText("<col=ffff00>" + "System update in: " + tostring(int3) + ":0" + tostring(int2), Component.interface_754.component_754_5);
        } else {
            ifSetText("<col=ffff00>" + "System update in: " + tostring(int3) + ":" + tostring(int2), Component.interface_754.component_754_5);
        }
        int0 = 1;
        ifClearops(Component.interface_754.component_754_5);
        ifSetOnOpt(noHook(""), Component.interface_754.component_754_5);
        ifSetTextShadow(true, Component.interface_754.component_754_5);
    }
    let int4: number = 0;
    let int5: number = 0;
    let int6: colour = enumOp(type_int, type_int, Enum.pm_colours, varp_287);
    let int7: boolean = enumOp(type_int, type_boolean, Enum.pm_shadows, varp_287);

    if (varp_287 > 0 && (getWindowMode() < 2 || varc_chat_view != -1)) {
        while (int4 < 100 && int0 < 5) {
            if (cs2_91(int4) == 1) {
                int1 = enumOp(type_int, type_component, Enum.enum_580, int0);
                ifSetColour(int6, int1);
                ifSetTextShadow(int7, int1);
                int5 = chatGettypebyline(int4);
                switch (int5) {
                    case 3:
                    case 7:
                    case 18:
                        ifSetText("From " + chatLineGetcrownedname(int4) + ": " + chatGetbyline(int4), int1);
                        break;
                    case 5:
                        ifSetText(chatGetbyline(int4), int1);
                        break;
                    case 6:
                    case 19:
                        ifSetText("To " + chatLineGetcrownedname(int4) + ": " + chatGetbyline(int4), int1);
                        break;
                }
                ifClearops(int1);
                ifSetOnOpt(hook(cs2_88, "isi", [event_opindex, chatLineGetName(int4), int4]), int1);
                switch (int5) {
                    case 3:
                    case 6:
                    case 7:
                        ifSetOpBase("<col=ffffff>" + removetags(chatLineGetcrownedname(int4)), int1);
                        if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int4))) != 0) {
                            if (friendTest(chatLineGetName(int4)) == 1) {
                                if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                                    ifSetOp(7, "Message", int1);
                                }
                            } else {
                                ifSetOp(7, "Add friend", int1);
                                ifSetOp(8, "Add ignore", int1);
                            }
                            if (varbit_snapshot_right_click_enabled == 1) {
                                ifSetOp(10, "Report", int1);
                            }
                        }
                        break;
                    case 18:
                    case 19:
                        ifSetOpBase("<col=ffffff>" + removetags(chatLineGetcrownedname(int4)), int1);
                        if (compare(removetags(chatPlayerName()), removetags(chatLineGetcrownedname(int4))) == 0) {
                            break;
                        }
                        if (friendTest(chatLineGetName(int4)) == 1) {
                            if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                                ifSetOp(7, "Message", int1);
                            }
                        } else {
                            ifSetOp(7, "Add friend", int1);
                            ifSetOp(8, "Add ignore", int1);
                        }
                        if (int5 != 18 || chatPhraseGetautoresponsecount(chatLineGetQuickChatId(int4)) <= 0) {
                            break;
                        }
                        if (varc_132 == -1) {
                            varc_132 = chatLineGetQuickChatId(int4);
                            varcstr_29 = chatLineGetcrownedname(int4);
                            varc_133 = 5;
                            if (friendTest(chatLineGetName(int4)) == 1) {
                                ifSetOp(9, "Quick Response", int1);
                            }
                        } else {
                            ifSetOp(9, "Quick Response", int1);
                        }
                        break;
                }
                int0 = int0 + 1;
            }
            int4 = int4 + 1;
        }
    }

    while (int0 < 5) {
        int1 = enumOp(type_int, type_component, Enum.enum_580, int0);
        ifSetText("", int1);
        ifClearops(int1);
        int0 = int0 + 1;
    }
    let int8: number = 0;

    if (getWindowMode() >= 2) {
        int8 = 9;
    } else {
        int8 = 5;
    }
    let int9: number = 512 - int8;
    int0 = 0;

    while (int0 < 5) {
        int1 = enumOp(type_int, type_component, Enum.enum_580, int0);
        ifSetSize(max(min(parawidth(ifGetText(int1), int9, ifGetfontmetrics(int1)), int9), 1), max(paraheight(ifGetText(int1), int9, ifGetfontmetrics(int1)), 1) * 14, 0, 0, int1);
        int0 = int0 + 1;
    }
    let int10: component = -1;
    int0 = 0;
    int1 = enumOp(type_int, type_component, Enum.enum_580, int0);
    ifSetPosition(int8, 2, 0, 2, int1);
    int0 = 1;

    while (int0 < 5) {
        int1 = enumOp(type_int, type_component, Enum.enum_580, int0);
        int10 = enumOp(type_int, type_component, Enum.enum_580, int0 - 1);
        if (int1 != -1 && int10 != -1) {
            ifSetPosition(int8, ifGetY(int10) - ifGetHeight(int1), 0, 0, int1);
        }
        int0 = int0 + 1;
    }
}
