/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,friend_update]

function proc_friend_update(intArg0: number): void {
    let int1: component = Component.interface_550.component_550_6;
    let int2: component = Component.interface_550.component_550_52;
    let int3: component = Component.interface_550.component_550_5;
    let int4: component = Component.interface_550.component_550_1;
    let int5: component = Component.interface_550.component_550_10;
    let int6: component = Component.interface_550.component_550_11;
    let int7: component = Component.interface_550.component_550_17;
    let int8: component = Component.interface_550.component_550_45;
    let int9: component = Component.interface_550.component_550_13;
    let int10: component = Component.interface_550.component_550_12;
    let int11: component = Component.interface_550.component_550_0;
    let int12: number = ifGetWidth(int9);

    if (intArg0 <= -1) {
        intArg0 = ifGetX(int9);
    }
    intArg0 = max(min(intArg0, ifGetWidth(int10) - int12), 0);
    varc_1036 = intArg0;
    ifSetPosition(intArg0, 0, 0, 1, int9);
    ccDeleteAll(int1);
    ccDeleteAll(int2);
    ccDeleteAll(int3);
    ccDeleteAll(int4);
    let int13: number = friendCount();

    if (int13 == -2) {
        ifSetText("Loading Friends List." + "<br>" + "Please wait.", int8);
        ifSetHide(false, int8);
        ifSetHide(true, int9);
        ifSetHide(true, int7);
        return;
    }

    if (int13 == -1) {
        ifSetText("Connecting to Friend Server." + "<br>" + "Please wait.", int8);
        ifSetHide(false, int8);
        ifSetHide(true, int9);
        ifSetHide(true, int7);
        return;
    }
    ifSetHide(false, int9);
    ifSetMouseOverCursor(Cursor.friends_arrow_cursor, int9);
    ifSetText("", int8);
    ifSetHide(true, int8);
    ifSetHide(false, int7);
    ifSetText(tostring(int13) + " / " + tostring(200), int7);
    let int14: number = 0;
    let int15: number = ifGetWidth(int1);
    let int16: number = intArg0 + (if_getx_absolute(int10) - if_getx_absolute(int1));
    let int17: number = int15 - (int16 + int12);
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int18: number = 0;
    let str3: string = "";
    let int19: number = 0;
    let int20: number = 0;
    let str4: string = "";
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 15;
    let int24: number = 5;
    let int25: colour = colour(0xA4997D);
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let str5: string = "";

    while (int14 < int13) {
        int21 = int14 * int23 + int24;
        [str0, str3] = friendGetName(int14);
        if (compare(str3, "") != 0) {
            int19 = 1;
        } else {
            int19 = 0;
        }
        if (int19 == 1) {
            str1 = "     " + str0;
        } else {
            str1 = str0;
        }
        int20 = friendGetWorld(int14);
        if (friendIsReferrer(int14) == 1) {
            int25 = colour(0x88BCF3);
            ccCreate(int1, 5, ifGetNextSubId(int1));
            ccSetSize(9, 9, 0, 0);
            ccSetPosition(93, int21 + 3, 0, 0);
            ccSetGraphic(Graphic.aif_friends_list_icons);
        } else {
            int25 = colour(0xA4997D);
        }
        ccCreate(int1, 4, ifGetNextSubId(int1));
        ccSetSize(int16, int23, 0, 0);
        ccSetPosition(0, int21, 0, 0);
        ccSetColour(int25);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetOpBase("<col=ffffff>" + str0);
        ccSetTextAlign(0, 0, 0);
        if (int20 != 0) {
            if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                ccSetOp(1, "Message");
            }
            ccSetOp(2, "Quick Message");
        } else {
            if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                ccSetOp(3, "Message");
            }
            ccSetOp(4, "Quick Message");
        }
        ccSetOp(5, "Delete");
        ccSetOnOp(hook(friend_op, "isi", [event_opindex, "event_opbase", int14]));
        if (stringWidth(str1, Graphic.verdana_11pt_regular) > int16) {
            while (stringWidth(str1 + "...", Graphic.verdana_11pt_regular) > int16 && stringLength(str1) > 0) {
                str1 = subString(str1, 0, stringLength(str1) - 1);
            }
            ccSetText(str1 + "...");
            if (int19 == 1) {
                if (paraheight("Last known as: " + str3, int15 - 8, Graphic.verdana_11pt_regular) > 1) {
                    str2 = str0 + "<br>" + "Last known as:" + "<br>" + str3;
                } else {
                    str2 = str0 + "<br>" + "Last known as: " + str3;
                }
            } else {
                str2 = str0;
            }
            ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_550.component_550_51, event_com, event_comsubid, str2, event_mousex, event_mousey]));
            ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_550.component_550_51]));
        } else {
            ccSetText(str1);
            if (int19 == 1) {
                if (paraheight("Last known as: " + str3, int15 - 8, Graphic.verdana_11pt_regular) > 1) {
                    str2 = "Last known as:" + "<br>" + str3;
                } else {
                    str2 = "Last known as: " + str3;
                }
                ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_550.component_550_51, event_com, event_comsubid, str2, event_mousex, event_mousey]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_550.component_550_51]));
            }
        }
        ccCreate(int2, 5, ifGetNextSubId(int2));
        ccSetGraphic(Graphic.friends_changed_name);
        ccSetSize(14, 14, 0, 0);
        ccSetPosition(0, int21, 0, 0);
        if (int19 == 0) {
            ccSetHide(true);
        }
        ifSetSize(int17, 0, 0, 1, int3);
        ifSetSize(int17, 0, 0, 1, int4);
        if (int20 == 0) {
            str4 = "Offline";
            str5 = "Offline";
            int29 = 0;
        } else if (stringIndexofString(friendGetWorldName(int14), "RuneScape", 0) != -1) {
            str4 = tostring(int20);
            str5 = friendGetWorldName(int14);
            int29 = 2 + 24 + 2;
        } else {
            str4 = friendGetWorldName(int14);
            str5 = str4;
            int29 = 0;
        }
        int26 = stringWidth(str4, Graphic.verdana_11pt_regular);
        if (int17 >= int26 + int29) {
            if (int29 > 0) {
                ccCreate(int4, 5, ifGetNextSubId(int4));
                if (friendGetworldflags(int14) == 16) {
                    ccSetGraphic(Graphic.graphic_11435);
                } else {
                    ccSetGraphic(Graphic.graphic_11434);
                }
                ccSetSize(24, 12, 0, 0);
                ccSetPosition(2, int21 + 1, 0, 0);
                int27 = 0;
            }
        } else {
            int27 = 1;
            int29 = 0;
        }
        if (int17 < int26) {
            ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_550.component_550_51, event_com, event_comsubid, str5, event_mousex, event_mousey]));
            ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_550.component_550_51]));
            str4 = "...";
        }
        ccCreate(int3, 4, ifGetNextSubId(int3));
        ccSetSize(int17, int23, 0, 0);
        ccSetPosition(int29 + 2, int21, 0, 0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetTextAlign(0, 0, 0);
        ccSetText(str4);
        if (int20 == 0) {
            ccSetColour(colour(0xDD5C3E));
        } else if (int20 == mapWorld()) {
            ccSetColour(colour(0x3CB71E));
        } else {
            ccSetColour(colour(0xFFFF64));
        }
        ccSetOnMouseRepeat(hook(cs2_1594, "IIisii", [Component.interface_550.component_550_51, event_com, event_comsubid, str5, event_mousex, event_mousey]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_550.component_550_51]));
        int14 = int14 + 1;
    }
    int21 = int21 + 15 + 5;
    let int30: number = 0;

    if (int21 > ifGetHeight(int5)) {
        int30 = min(ifGetScrollY(int5), int21);
        ifSetScrollSize(ifGetWidth(int5), int21, int5);
        scrollbar_resize(int6, int5, int30);
    } else {
        ifSetScrollSize(0, 0, int5);
        ifSetSize(0, 0, 1, 1, int11);
        ifSetScrollPos(0, 0, int5);
        scrollbar_resize(int6, int5, 0);
    }
}
