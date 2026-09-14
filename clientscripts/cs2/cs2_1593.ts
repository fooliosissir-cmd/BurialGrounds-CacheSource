/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1593

function cs2_1593(intArg0: number): void {
    let int1: component = Component.interface_1109.component_1109_11;
    let int2: component = Component.interface_1109.component_1109_10;
    let int3: component = Component.interface_1109.component_1109_5;
    let int4: component = Component.interface_1109.component_1109_6;
    let int5: component = Component.interface_1109.component_1109_8;
    let int6: component = Component.interface_1109.component_1109_7;
    let int7: number = 72679428;
    let int8: component = Component.interface_1109.component_1109_3;
    let int9: component = Component.interface_1109.component_1109_9;
    let int10: number = ifGetWidth(int1);

    if (intArg0 <= -1) {
        intArg0 = ifGetX(int1);
    }
    intArg0 = max(min(intArg0, ifGetWidth(int2) - int10), 0);
    varc_1505 = intArg0;
    ifSetPosition(intArg0, 0, 0, 1, int1);
    ifSetMouseOverCursor(Cursor.friends_arrow_cursor, int1);
    ccDeleteAll(int3);
    ccDeleteAll(int4);
    ccDeleteAll(int5);
    ccDeleteAll(int6);
    let int11: number = 0;
    let int12: number = if_getx_absolute(int2);
    let int13: number = intArg0 + (int12 - if_getx_absolute(int3));
    let int14: number = ifGetWidth(int5) - (intArg0 + (int12 - if_getx_absolute(int5)) + int10);
    let str0: string = "";
    let int15: number = 0;
    let int16: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int17: number = 19;
    let str3: string = "";
    let str4: string = "";
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = ifGetHeight(int8) / int17;
    let int24: number = 0;
    let int25: number = clanGetChatCount();

    if (int25 > 0) {
        ifSetHide(true, Component.interface_1109.component_1109_15);
        while (int11 < int25) {
            int16 = int11;
            int22 = int11 * int17;
            str1 = clanGetChatUserName(int11);
            str2 = clanGetChatUserNameUnfiltered(int11);
            int20 = clanGetChatUserWorld(int11);
            int21 = clanGetChatUserRank(int11);
            ccCreate(int3, 4, int11);
            ccSetTextAlign(0, 1, 0);
            ccSetPosition(0, int22, 0, 0);
            ccSetSize(int13, int17, 0, 0);
            ccSetColour(colour(0xA4997D));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetTextShadow(false);
            ccSetOnOp(hook(friendschat_list_op, "ssii", [str1, str2, event_opindex, int11]));
            str0 = "\xa0\xa0" + str1;
            if (stringWidth(str0, Graphic.verdana_11pt_regular) > int13) {
                while (stringWidth(str0 + "...", Graphic.verdana_11pt_regular) > int13 && stringLength(str0) > 0) {
                    str0 = subString(str0, 0, stringLength(str0) - 1);
                }
                str0 = str0 + "...";
                ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_1109.component_1109_34, event_com, event_comsubid, str1, event_mousex, event_mousey]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1109.component_1109_34]));
            }
            ccSetText(str0);
            cs2_1595(int11, str1, str2);
            ifSetSize(int14, 0, 0, 1, int5);
            ifSetSize(int14, 0, 0, 1, int6);
            ccCreate(int5, 4, ifGetNextSubId(int5));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetPosition(0, int22, 2, 0);
            ccSetSize(int14, int17, 0, 0);
            ccSetTextShadow(true);
            if (int20 == mapWorld()) {
                ccSetColour(colour(0x3CB71E));
            } else {
                ccSetColour(colour(0xFFFF64));
            }
            ccSetTextShadow(false);
            if (int20 >= 1100 && int20 < 5001) {
                str3 = "Lobby";
                str4 = "Lobby";
                int18 = 0;
            } else if (int20 >= 5001 && int20 < 6000) {
                str3 = "Classic " + tostring(int20 - 5000);
                str4 = "Classic " + tostring(int20 - 5000);
                int18 = 0;
            } else {
                str3 = tostring(int20);
                str4 = "World " + tostring(int20);
                int18 = 2 + 24 + 2;
            }
            int19 = stringWidth(str3, Graphic.verdana_11pt_regular);
            if (int14 >= int19 + int18) {
                if (int18 > 0) {
                    ccCreate(int6, 5, ifGetNextSubId(int6));
                    if (int20 > 199) {
                        ccSetGraphic(Graphic.graphic_11435);
                    } else {
                        ccSetGraphic(Graphic.graphic_11434);
                    }
                    ccSetSize(24, 12, 0, 0);
                    ccSetPosition(2, int22 + 3, 0, 0);
                    ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_1109.component_1109_34, event_com, event_comsubid, str4, event_mousex, event_mousey]));
                    ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1109.component_1109_34]));
                }
            } else {
                int18 = 0;
            }
            if (int14 < int19) {
                ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_1109.component_1109_34, event_com, event_comsubid, str4, event_mousex, event_mousey]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1109.component_1109_34]));
                str3 = "...";
            }
            ccCreate(int5, 4, ifGetNextSubId(int5));
            ccSetSize(int14, int17, 0, 0);
            ccSetPosition(int18 + 2, int22 + 1, 0, 0);
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetTextShadow(false);
            ccSetTextAlign(0, 0, 0);
            ccSetText(str3);
            if (int20 == 0) {
                ccSetColour(colour(0xDD5C3E));
            } else if (int20 == mapWorld()) {
                ccSetColour(colour(0x3CB71E));
            } else {
                ccSetColour(colour(0xFFFF64));
            }
            ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_1109.component_1109_34, event_com, event_comsubid, str4, event_mousex, event_mousey]));
            ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1109.component_1109_34]));
            ccCreate(int4, 5, ifGetNextSubId(int4));
            ccSetPosition(1, int11 * int17 + 5, 0, 0);
            ccSetSize(9, 9, 0, 0);
            ccSetGraphic(cs2_1599(int21));
            int11 = int11 + 1;
        }
        str3 = "Talking in: " + "<col=ffff64>" + clanGetChatDisplayName();
        str1 = "Owner: " + "<col=ffff64>" + clanGetchatownername();
        int12 = ifGetWidth(Component.interface_1109.component_1109_1);
        if (stringWidth(str3, Graphic.p11_full) > int12) {
            while (stringWidth(str3 + "...", Graphic.p11_full) > int12 && stringLength(str3) > 0) {
                str3 = subString(str3, 0, stringLength(str3) - 1);
                int24 = 1;
            }
            str3 = str3 + "...";
        }
        if (stringWidth(str1, Graphic.p11_full) > int12) {
            while (stringWidth(str1, Graphic.p11_full) > int12 && stringLength(str1) > 0) {
                str1 = subString(str1 + "...", 0, stringLength(str1) - 1);
                int24 = 1;
            }
            str1 = str1 + "...";
        }
        ifSetText(str3 + "<br>" + str1, Component.interface_1109.component_1109_1);
        if (int24 == 1) {
            str3 = "Talking in: " + clanGetChatDisplayName() + "<br>" + "Owner: " + clanGetchatownername();
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1109.component_1109_34, event_com, -1, str3, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1109.component_1109_1);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1109.component_1109_34]), Component.interface_1109.component_1109_1);
        } else {
            ifSetOnMouseRepeat(noHook(""), Component.interface_1109.component_1109_1);
            ifSetOnMouseLeave(noHook(""), Component.interface_1109.component_1109_1);
        }
        ifSetOp(1, "Leave chat", Component.interface_1109.component_1109_26);
        ifSetGraphic(Graphic.aif_clanchat_icons_3, Component.interface_1109.component_1109_27);
        ifSetHide(false, int1);
    } else {
        ifSetHide(false, Component.interface_1109.component_1109_15);
        ifSetText("Talking in: Not in chat", Component.interface_1109.component_1109_1);
        ifSetOp(1, "Join chat", Component.interface_1109.component_1109_26);
        ifSetGraphic(Graphic.aif_clanchat_icons_2, Component.interface_1109.component_1109_27);
        ifSetHide(true, int1);
        ifClearops(int1);
        ifSetOnMouseRepeat(noHook(""), Component.interface_1109.component_1109_1);
        ifSetOnMouseLeave(noHook(""), Component.interface_1109.component_1109_1);
    }
    let int26: number = ifGetScrollY(int8);
    let int27: number = max(int11, int23) * int17;
    ifSetScrollSize(ifGetWidth(int8), int27, int8);

    if (int26 > int27) {
        int26 = int27;
    }
    ifSetScrollPos(0, int26, int8);
    proc_scrollbar_vertical(int9, int8, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
