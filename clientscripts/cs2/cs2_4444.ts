/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4444

function cs2_4444(intArg0: number): void {
    let int1: number = 9;
    let int2: number = 23;

    cs2_4445();
    ifSetGraphic(Graphic.aif_clanchat_icons_12, Component.interface_1110.component_1110_92);
    ifSetHide(true, Component.interface_1110.component_1110_64);
    ifSetText("", Component.interface_1110.component_1110_70);

    if (varc_1513 != 1) {
        varc_1513 = 1;
    }
    let int3: component = Component.interface_1110.component_1110_5;
    let int4: component = Component.interface_1110.component_1110_8;
    let int5: component = Component.interface_1110.component_1110_6;
    let int6: component = Component.interface_1110.component_1110_7;
    let int7: component = Component.interface_1110.component_1110_39;
    let int8: component = Component.interface_1110.component_1110_38;
    let int9: component = Component.interface_1110.component_1110_9;
    let int10: component = Component.interface_1110.component_1110_63;
    ccDeleteAll(int3);
    ccDeleteAll(int4);
    ccDeleteAll(int5);
    ccDeleteAll(int6);
    let int11: number = activeClanChannelGetUserCount();
    let int12: number = ifGetWidth(int7);

    if (intArg0 <= -1) {
        intArg0 = ifGetX(int7);
    }
    intArg0 = max(min(intArg0, ifGetWidth(int8) - int12), 0);
    varc_1506 = intArg0;
    ifSetPosition(intArg0, 0, 0, 1, int7);
    ifSetHide(false, int7);
    ifSetMouseOverCursor(Cursor.friends_arrow_cursor, int7);
    let int13: number = 0;
    let int14: number = 2;
    let str0: string = "";
    let int15: number = 19;
    let int16: number = ifGetHeight(int3) / int15;
    let str1: string = "";
    let int17: number = 0;
    let str2: string = "";
    let int18: number = 0;
    let int19: number = 0;
    let str3: string = "";
    let int20: number = -1;
    let int21: number = if_getx_absolute(int8);
    let int22: number = intArg0 + int21 - if_getx_absolute(int3);
    let int23: number = ifGetWidth(int5) - (intArg0 + (int21 - if_getx_absolute(int5)) + int12);
    ifSetOp(1, "Leave chat", Component.interface_1110.component_1110_91);
    ifSetGraphic(Graphic.aif_clanchat_icons_12, Component.interface_1110.component_1110_92);
    ifSetSize(int23, 0, 0, 1, int5);
    ifSetSize(int23, 0, 0, 1, int6);
    ifSetText(activeClanChannelGetClanName(), Component.interface_1110.component_1110_65);
    let str4: string = "Leave another" + "<br>" + "clan's clanchat.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1110.component_1110_124, event_com, -1, str4, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1110.component_1110_91);
    ifSetOp(1, "Leave Clan Chat channel", Component.interface_1110.component_1110_91);

    while (int13 < int11) {
        str1 = activeClanChannelGetUserDisplayName(int13);
        int20 = activeClanChannelGetUserRank(int13);
        ccCreate(int3, 4, ifGetNextSubId(int3));
        ccSetTextAlign(0, 1, 0);
        ccSetPosition(0, int14, 0, 0);
        ccSetSize(int22, int15, 0, 0);
        ccSetColour(colour(0xA4997D));
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetText(str1);
        if (compare(str1, removetags(chatPlayerNameUnfiltered())) != 0) {
            if (friendTest(str1) == 1) {
                ccSetOp(1, "Message");
                ccSetOp(7, "Remove friend " + str1);
            } else if (ignoreTest(str1) == 1) {
                ccSetOp(8, "Remove ignore " + str1);
            } else {
                ccSetOp(5, "Add friend " + str1);
                ccSetOp(6, "Add ignore " + str1);
            }
        }
        ccSetOnOpt(hook(clan_chat_list_op, "sii", [str1, event_opindex, int13]));
        str0 = "\xa0\xa0\xa0" + str1;
        if (stringWidth(str0, Graphic.verdana_11pt_regular) > int22) {
            while (stringWidth(str0 + "...", Graphic.verdana_11pt_regular) > int22 && stringLength(str0) > 0) {
                str0 = subString(str0, 0, stringLength(str0) - 1);
            }
            str0 = str0 + "...";
            ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str1, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
        }
        ccSetText(str0);
        ccSetTextShadow(true);
        int17 = activeClanChannelGetUserWorld(int13);
        if (int17 >= 1100 && int17 < 5001) {
            str2 = "Lobby";
            str3 = "Lobby";
            int18 = 0;
        } else if (int17 >= 5001 && int17 < 6000) {
            str2 = "Classic " + tostring(int17 - 5000);
            str3 = "Classic " + tostring(int17 - 5000);
            int18 = 0;
        } else {
            str2 = tostring(int17);
            str3 = "World " + tostring(int17);
            int18 = 2 + 24 + 2;
        }
        int19 = stringWidth(str2, Graphic.verdana_11pt_regular);
        ccCreate(int6, 5, ifGetNextSubId(int6));
        if (int23 >= int19 + int18) {
            if (int18 > 0) {
                if (int17 > 199) {
                    ccSetGraphic(Graphic.graphic_11435);
                } else {
                    ccSetGraphic(Graphic.graphic_11434);
                }
                ccSetSize(24, 12, 0, 0);
                ccSetPosition(2, int14 + 1, 0, 0);
                ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str3, event_mousex, event_mousey]));
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
            }
        } else {
            int18 = 0;
        }
        if (int23 < int19) {
            ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str3, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
            str2 = "...";
        }
        ccCreate(int5, 4, ifGetNextSubId(int5));
        ccSetSize(int23, int15, 0, 0);
        ccSetPosition(int18 + 2, int14, 0, 0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetTextAlign(0, 0, 0);
        ccSetText(str2);
        if (int17 == mapWorld()) {
            ccSetColour(colour(0x3CB71E));
        } else {
            ccSetColour(colour(0xFFFF64));
        }
        ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str3, event_mousex, event_mousey]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
        ccCreate(int4, 5, ifGetNextSubId(int4));
        if (int20 == 127) {
            ccSetPosition(3, 3, 0, 0);
            ccSetSize(9, 9, 0, 0);
        } else {
            ccSetPosition(0, 0, 0, 0);
            ccSetSize(15, 15, 0, 0);
        }
        ccSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3712, int20));
        int13 = int13 + 1;
    }
    int13 = 0;
    let int24: number = 0;

    while (int13 < int11) {
        activeClanChannelGetsorteduserslot();
        int24 = int13;
        if (ccFind(int3, int24) == 1 && compare(ccGetText(), "") != 0) {
            int14 = int13 * int15;
            ccSetPosition(ccGetX(), int14, 0, 0);
            if (ccFind(int4, int24) == 1) {
                ccSetPosition(ccGetX(), ccGetY() + int14 + 3, 0, 0);
            }
            if (ccFind(int5, int24) == 1) {
                ccSetPosition(ccGetX(), int14, 0, 0);
            }
            if (ccFind(int6, int24) == 1) {
                ccSetPosition(ccGetX(), int14 + 2, 0, 0);
            }
        }
        int13 = int13 + 1;
    }

    if (int13 * 19 > ifGetHeight(int9)) {
        ifSetScrollSize(0, int13 * 19, int9);
    } else {
        ifSetScrollSize(0, 0, int9);
    }
    let int25: number = ifGetScrollY(int9);
    ifSetScrollSize(ifGetWidth(int9), int15 * int11, int9);
    int25 = min(int25, ifGetScrollHeight(int9));
    ifSetScrollPos(0, int25, int9);
    proc_scrollbar_vertical(int10, int9, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    ifSetLinkActiveClanChannel(hook(cs2_4443, "i", [-1]), int3);
    ifSetOnClanSettingsTransmit(hook(cs2_4443, "i", [-1]), int3);
    ifSetScrollSize(ifGetWidth(Component.interface_1110.component_1110_26), int15 * int11, Component.interface_1110.component_1110_26);
    proc_scrollbar_vertical(Component.interface_1110.component_1110_30, Component.interface_1110.component_1110_26, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
