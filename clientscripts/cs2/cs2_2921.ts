/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2921

function cs2_2921(strArg0: string, intArg0: number, intArg1: number): void {
    ifOpenSubClient(Component.interface_906.component_906_69, Interface.interface_979);
    varcstr_lobbyscreen_report_abuse_name = strArg0;
    cs2_3397();

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_941, 5)) == 0) {
        cs2_3161(0);
    }
    ifSetOnKey(hook(cs2_3398, "izI", [event_keycode, event_keychar, event_com]), Component.interface_979.component_979_0);
    ifSetOnOpt(hook(cs2_3399, "", []), Component.interface_979.component_979_9);
    let int2: number = 100;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 1;
    let str1: string = "";
    let int6: number = 0;
    let int7: number = 0;
    ccDeleteAll(Component.interface_979.component_979_27);
    ccDeleteAll(Component.interface_979.component_979_26);
    ccDeleteAll(Component.interface_979.component_979_25);
    ifSetScrollSize(0, 0, Component.interface_979.component_979_27);
    ifSetScrollPos(0, 0, Component.interface_979.component_979_27);

    while (int2 >= 0) {
        int4 = chatGettypebyline(int2);
        if (int4 != 0 && int4 != 4 && int4 != 27 && int4 != 28 && int4 != 29 && int4 != 43 && int4 != 103 && int4 != 104 && int4 != 26 && int4 != 30 && int4 != 31 && int4 != 115 && compare(chatLineGetcrownedname(int2), "") != 0 && compare(chatGetbyline(int2), "") != 0) {
            if (int4 != 6 && int4 != 19) {
                if (int4 == 41 || int4 == 44 || int4 == 9) {
                    if (compare(removetags(chatLineGetcrownedname(int2)), chatPlayerName()) != 0 && int4 != 6 && int4 != 19) {
                        int6 = 0;
                    } else {
                        int6 = 14798;
                    }
                    str1 = "<col=$text_colour>" + "[" + "</col>" + "<col=8888ff>" + chatGetClan(int2) + "</col>" + "<col=$text_colour>" + "]" + chatLineGetcrownedname(int2) + ": " + chatGetbyline(int2);
                } else {
                    str1 = " " + chatLineGetcrownedname(int2) + ": " + chatGetbyline(int2);
                }
            } else {
                str1 = "To " + chatLineGetcrownedname(int2) + ": " + chatGetbyline(int2);
            }
            int5 = paraheight(str1, ifGetWidth(Component.interface_979.component_979_27) - 10, Graphic.p12_full);
            if (compare(removetags(chatLineGetcrownedname(int2)), chatPlayerName()) != 0 && int4 != 6 && int4 != 19) {
                int7 = 1;
                ccCreate(Component.interface_979.component_979_26, 3, ifGetNextSubId(Component.interface_979.component_979_26));
                ccSetPosition(2, int3 * 15 + 1, 0, 0);
                ccSetSize(4, int5 * 15, 1, 0);
                ccSetColour(colour(0x606060));
                ccSetTrans(255);
                ccSetfill(true);
                ccHookMouseEnter(hook(cs2_3392, "i", [event_comsubid]));
                ccHookMouseExit(hook(cs2_3393, "i", [event_comsubid]));
                ccCreate(Component.interface_979.component_979_25, 3, ifGetNextSubId(Component.interface_979.component_979_25));
                ccSetPosition(2, int3 * 15 + 1, 0, 0);
                ccSetSize(4, int5 * 15, 1, 0);
                ccSetColour(colour(0x494949));
                ccSetTrans(255);
                ccSetfill(true);
                ccHookMouseEnter(hook(cs2_3394, "i", [event_comsubid]));
            }
            ccCreate(Component.interface_979.component_979_27, 4, ifGetNextSubId(Component.interface_979.component_979_27));
            ccSetPosition(5, int3 * 15, 0, 0);
            ccSetSize(10, int5 * 15, 1, 0);
            ccSetText(str1);
            ccSetColour(colour(0x666678));
            if (compare(removetags(chatLineGetcrownedname(int2)), chatPlayerName()) != 0 && int4 != 6 && int4 != 19) {
                ccSetOpBase(removetags(chatLineGetcrownedname(int2)));
                ccSetOp(1, "Report");
                ccSetOnOpt(hook(cs2_3396, "i", [event_comsubid]));
                ccSetColour(colour(0xFFFFFF));
            }
            ccSetTextFont(Graphic.p12_full);
            ccSetTextAlign(0, 0, 15);
            int3 = int3 + int5;
        }
        int2 = int2 - 1;
    }

    if (int7 == 0) {
        ccCreate(Component.interface_979.component_979_27, 4, ifGetNextSubId(Component.interface_979.component_979_27));
        ccSetPosition(5, int3 * 15, 0, 0);
        ccSetSize(16384, 15, 2, 0);
        ccSetText("There is no chat to report at the moment.");
        ccSetColour(colour(0x7D7DD1));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 0, 15);
    }

    if (int3 > ifGetHeight(Component.interface_979.component_979_5) / 15) {
        ifSetSize(38, ifGetHeight(Component.interface_979.component_979_5), 1, 0, Component.interface_979.component_979_5);
        ifSetScrollSize(0, int3 * 15 + 5, Component.interface_979.component_979_24);
        proc_scrollbar_vertical(Component.interface_979.component_979_6, Component.interface_979.component_979_24, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        if (ccFind(Component.interface_979.component_979_6, 1) == 1) {
            scrollbar_vertical_doscroll(Component.interface_979.component_979_6, Component.interface_979.component_979_24, ifGetScrollHeight(Component.interface_979.component_979_24), true);
        }
    } else {
        ifSetSize(21, ifGetHeight(Component.interface_979.component_979_5), 1, 0, Component.interface_979.component_979_5);
    }

    if (intArg0 == 1) {
        if (varc_snapshot_mute == 0) {
            ifSetGraphic(Graphic.options_radio_buttons_boxed_0, Component.interface_979.component_979_20);
        } else {
            ifSetGraphic(Graphic.options_radio_buttons_boxed_2, Component.interface_979.component_979_20);
        }
        if (intArg1 == 5 || intArg1 == 6) {
            ifSetText("Suggest to mute this player for 48 hours", Component.interface_979.component_979_19);
        } else {
            ifSetText("Mute this player for 48 hours", Component.interface_979.component_979_19);
        }
        ifSetSize(stringWidth(ifGetText(Component.interface_979.component_979_19), Graphic.p11_full) + 18, ifGetHeight(Component.interface_979.component_979_7), 0, 0, Component.interface_979.component_979_7);
        ifSetPosition(18, 273, 0, 0, Component.interface_979.component_979_8);
        ifSetHide(false, Component.interface_979.component_979_7);
    } else {
        ifSetPosition(18, 266, 0, 0, Component.interface_979.component_979_8);
    }
    ifSetHide(false, Component.interface_906.component_906_61);
}
