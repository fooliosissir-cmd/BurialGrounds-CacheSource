/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4436

function cs2_4436(intArg0: component, intArg1: number): void {
    if (varc_1512 != 1) {
        varc_1512 = 1;
    }
    let int2: component = Component.interface_1110.component_1110_14;
    let int3: component = Component.interface_1110.component_1110_15;
    let int4: component = Component.interface_1110.component_1110_17;
    let int5: component = Component.interface_1110.component_1110_18;
    let int6: component = Component.interface_1110.component_1110_28;
    let int7: component = Component.interface_1110.component_1110_19;
    let int8: component = Component.interface_1110.component_1110_26;
    let int9: component = Component.interface_1110.component_1110_30;
    let int10: component = Component.interface_1110.component_1110_16;
    let int11: number = ifGetWidth(int6);

    if (intArg1 <= -1) {
        intArg1 = ifGetX(int6);
    }
    intArg1 = max(min(intArg1, ifGetWidth(int7) - int11), 0);
    varc_1035 = intArg1;
    ifSetPosition(intArg1, 0, 0, 1, int6);
    ifSetMouseOverCursor(Cursor.friends_arrow_cursor, int6);
    ifSetHide(false, int6);
    ccDeleteAll(int2);
    ccDeleteAll(int3);
    ccDeleteAll(int4);
    ccDeleteAll(int5);
    ccDeleteAll(int10);
    ifSetGraphic(Graphic.aif_clanchat_icons_12, Component.interface_1110.component_1110_83);
    ifSetHide(false, Component.interface_1110.component_1110_22);
    ifSetHide(false, Component.interface_1110.component_1110_24);
    cs2_4470();
    cs2_5395();
    let str0: string = "Leave your clan chat channel.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1110.component_1110_124, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1110.component_1110_82);
    ifSetOp(1, "Leave Clan Chat channel", Component.interface_1110.component_1110_82);
    let int12: number = 0;
    let str1: string = "";
    let int13: number = 19;
    let int14: number = ifGetHeight(int8) / int13;
    let str2: string = "";
    let int15: number = 0;
    let str3: string = "";
    let int16: number = 0;
    let int17: number = 0;
    let str4: string = "";
    let int18: number = 0;
    let int19: number = if_getx_absolute(int7);
    let int20: number = intArg1 + int19 - if_getx_absolute(int2);
    let int21: number = ifGetWidth(int4) - (intArg1 + (int19 - if_getx_absolute(int4)) + int11);
    ifSetSize(int21, 0, 0, 1, int4);
    ifSetSize(int21, 0, 0, 1, int5);
    ifSetHide(false, int9);
    ifSetLinkActiveClanChannel(hook(clan_chat_list_refresh, "i", [-1]), intArg0);
    ifSetText(activeClanChannelGetClanName(), Component.interface_1110.component_1110_27);
    ifSetText("", Component.interface_1110.component_1110_62);
    ifSetHide(true, Component.interface_1110.component_1110_67);
    let int22: number = activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered()));

    if (int22 == -1) {
        return;
    }
    let int23: number = activeClanChannelGetUserRank(int22);
    let int24: number = activeClanChannelGetUserCount();
    let int25: number = 0;

    while (int25 < int24) {
        int12 = int25 * int13;
        str2 = removetags(activeClanChannelGetUserDisplayName(int25));
        int18 = activeClanChannelGetUserRank(int25);
        ccCreate(int2, 4, ifGetNextSubId(int2));
        ccSetTextAlign(0, 1, 0);
        ccSetPosition(0, int12, 0, 0);
        ccSetSize(int20, int13, 0, 0);
        ccSetColour(colour(0xA4997D));
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        if (compare(str2, removetags(chatPlayerNameUnfiltered())) != 0) {
            ccSetOpBase(str2);
            if (friendTest(str2) == 1) {
                ccSetOp(1, "Message");
                ccSetOp(7, "Remove friend");
            } else if (ignoreTest(str2) == 1) {
                ccSetOp(8, "Remove ignore");
            } else {
                ccSetOp(5, "Add friend");
                ccSetOp(6, "Add ignore");
            }
            if (int23 >= 100) {
                ccSetOp(9, "Temp-ban");
            }
            ccSetOnOpt(hook(clan_chat_list_op, "sii", [str2, event_opindex, int25]));
        }
        str1 = "\xa0\xa0\xa0" + str2;
        if (stringWidth(str1, Graphic.verdana_11pt_regular) > int20) {
            while (stringWidth(str1 + "...", Graphic.verdana_11pt_regular) > int20 && stringLength(str1) > 0) {
                str1 = subString(str1, 0, stringLength(str1) - 1);
            }
            str1 = str1 + "...";
            ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str2, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
        }
        ccSetText(str1);
        ccSetTextShadow(true);
        int15 = activeClanChannelGetUserWorld(int25);
        if (int15 >= 1100 && int15 < 5001) {
            str3 = "Lobby";
            str4 = "Lobby";
            int16 = 0;
        } else if (int15 >= 5001 && int15 < 6000) {
            str3 = "Classic " + tostring(int15 - 5000);
            str4 = "Classic " + tostring(int15 - 5000);
            int16 = 0;
        } else {
            str3 = tostring(int15);
            str4 = "World " + tostring(int15);
            int16 = 2 + 24 + 2;
        }
        int17 = stringWidth(str3, Graphic.verdana_11pt_regular);
        ccCreate(int5, 5, ifGetNextSubId(int5));
        if (int21 >= int17 + int16) {
            if (int16 > 0) {
                if (int15 > 199) {
                    ccSetGraphic(Graphic.graphic_11435);
                } else {
                    ccSetGraphic(Graphic.graphic_11434);
                }
                ccSetSize(24, 12, 0, 0);
                ccSetPosition(2, int12 + 1, 0, 0);
                ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str4, event_mousex, event_mousey]));
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
            }
        } else {
            int16 = 0;
        }
        if (int21 < int17) {
            ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str4, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
            str3 = "...";
        }
        ccCreate(int4, 4, ifGetNextSubId(int4));
        ccSetSize(int21, int13, 0, 0);
        ccSetPosition(int16 + 2, int12, 0, 0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetTextAlign(0, 1, 0);
        ccSetText(str3);
        if (int15 == mapWorld()) {
            ccSetColour(colour(0x3CB71E));
        } else {
            ccSetColour(colour(0xFFFF64));
        }
        ccSetOnMouseOver(hook(cs2_1594, "IIisii", [Component.interface_1110.component_1110_124, event_com, event_comsubid, str4, event_mousex, event_mousey]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1110.component_1110_124]));
        ccCreate(int3, 5, ifGetNextSubId(int3));
        if (int18 == 127) {
            ccSetPosition(3, 3, 0, 0);
            ccSetSize(9, 9, 0, 0);
        } else {
            ccSetPosition(0, 0, 0, 0);
            ccSetSize(15, 15, 0, 0);
        }
        ccSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3712, int18));
        ccCreate(int10, 5, ifGetNextSubId(int10));
        ccSetPosition(0, 0, 2, 0);
        ccSetSize(9, int13, 0, 0);
        ccSetGraphic(Graphic.aif_browngrad_whole_btn_1);
        ccSetOnOpt(hook(cs2_4317, "Ii", [event_com, event_comsubid]));
        ccSetOp(1, "Show options");
        int25 = int25 + 1;
    }
    int25 = 0;
    let int26: number = 0;

    while (int25 < int24) {
        activeClanChannelGetsorteduserslot();
        int26 = int25;
        if (ccFind(int2, int26) == 1 && compare(ccGetText(), "") != 0) {
            int12 = int25 * int13;
            ccSetPosition(ccGetX(), int12, 0, 0);
            if (ccFind(int3, int26) == 1) {
                ccSetPosition(ccGetX(), ccGetY() + int12 + 3, 0, 0);
            }
            if (ccFind(int4, int26) == 1) {
                ccSetPosition(ccGetX(), int12, 0, 0);
            }
            if (ccFind(int5, int26) == 1) {
                ccSetPosition(ccGetX(), int12 + 5, 0, 0);
            }
            if (ccFind(int10, int26) == 1) {
                ccSetPosition(ccGetX(), int12 + 2, 0, 0);
            }
        }
        int25 = int25 + 1;
    }
    let int27: number = 0;
    let int28: number = -1;

    if (varc_clan_chat_selected_slot >= 0) {
        int28 = activeClanChannelGetUserSlot(varcstr_clan_channel_selected_name);
        if (int28 >= 0) {
            varc_clan_chat_selected_slot = int28;
            if (ccFind(int10, varc_clan_chat_selected_slot) == 1) {
                int27 = ccGetY();
                ifSetPosition(0, int27, 2, 0, Component.interface_1110.component_1110_20);
                ifSetPosition(0, int27, 2, 0, Component.interface_1110.component_1110_13);
            }
        } else {
            varc_clan_chat_selected_slot = -1;
            varcstr_clan_channel_selected_name = "";
            ifSetHide(false, Component.interface_1110.component_1110_13);
            cs2_4628();
        }
    }
    let int29: number = ifGetScrollY(int8);
    ifSetScrollSize(ifGetWidth(int8), int13 * max(int24, int14), int8);
    int29 = min(int29, ifGetScrollHeight(int8));
    ifSetScrollPos(0, int29, int8);
    proc_scrollbar_vertical(Component.interface_1110.component_1110_30, int8, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
