/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1895

function cs2_1895(intArg0: component, intArg1: component): void {
    ccDeleteAll(intArg0);
    let int2: number = friendCount();

    if (int2 == -2) {
        ccCreate(intArg0, 4, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetText("Loading Friends List - Please wait...");
        ccSetPosition(0, 0, 0, 0);
        ccSetSize(138, 100, 0, 0);
        ccSetColour(colour(0xFFFF64));
        ccSetTextShadow(true);
        return;
    } else if (int2 == -1) {
        ccCreate(intArg0, 4, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetText("Connecting to Friend Server - Please wait...");
        ccSetPosition(0, 0, 0, 0);
        ccSetSize(138, 100, 0, 0);
        ccSetColour(colour(0xFFFF64));
        ccSetTextShadow(true);
        return;
    }
    let int3: number = 0;
    let int4: number = ifGetX(Component.interface_1108.component_1108_21) + ifGetX(Component.interface_1108.component_1108_29) + 14 - parawidth(" ", 2147483647, Graphic.b12_full) - ifGetX(Component.interface_1108.component_1108_22);
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int5: number = 0;
    let str3: string = "";
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;

    while (int3 < int2) {
        int8 = int3 * 3;
        int9 = int3 * 16 + 2;
        [str0, str3] = friendGetName(int3);
        if (compare(str3, "") != 0) {
            int6 = 1;
        } else {
            int6 = 0;
        }
        if (int6 == 1) {
            str1 = "    " + str0;
        } else {
            str1 = str0;
        }
        ccCreate(intArg0, 4, int8);
        ccSetTextFont(Graphic.b12_full);
        ccSetPosition(0, int9, 0, 0);
        ccSetSize(int4, 15, 0, 0);
        ccSetColour(colour(0xFFFF64));
        ccSetTextShadow(true);
        if (parawidth(str1, 2147483647, Graphic.b12_full) > int4) {
            while (parawidth(str1 + "...", 2147483647, Graphic.b12_full) > int4 && stringLength(str1) > 0) {
                str1 = subString(str1, 0, stringLength(str1) - 1);
            }
            ccSetText(str1 + "...");
            if (int6 == 1) {
                int5 = parawidth("Last known as: " + str3, 2147483647, Graphic.b12_full) + 8;
                if (int5 > ifGetWidth(intArg0)) {
                    str2 = str0 + "<br>" + "Last known as:" + "<br>" + str3;
                } else {
                    str2 = str0 + "<br>" + "Last known as: " + str3;
                }
            } else {
                str2 = str0;
            }
            ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1108.component_1108_25, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1108.component_1108_25]));
        } else if (int6 == 1) {
            ccSetText(str1);
            int5 = parawidth("Last known as: " + str3, 2147483647, Graphic.b12_full) + 8;
            if (int5 > ifGetWidth(intArg0)) {
                str2 = "Last known as:" + "<br>" + str3;
            } else {
                str2 = "Last known as: " + str3;
            }
            ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1108.component_1108_25, event_com, int3, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1108.component_1108_25]));
        } else {
            ccSetText(str0);
        }
        ccCreate(intArg0, 5, int8 + 1);
        ccSetGraphic(Graphic.friends_changed_name);
        ccSetSize(14, 14, 0, 0);
        ccSetPosition(0, int9, 0, 0);
        if (int6 == 0) {
            ccSetHide(true);
        }
        ccCreate(intArg0, 4, int8 + 2);
        ccSetTextFont(Graphic.b12_full);
        ccSetText(enumOp(type_int, type_string, Enum.friendschat_rankenum, friendGetRank(int3)));
        ccSetPosition(137, int9, 0, 0);
        ccSetSize(131, 15, 0, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextShadow(true);
        ccSetOp(1, enumOp(type_int, type_string, Enum.friendschat_rankenum, 0));
        ccSetOp(2, enumOp(type_int, type_string, Enum.friendschat_rankenum, 1));
        ccSetOp(3, enumOp(type_int, type_string, Enum.friendschat_rankenum, 2));
        ccSetOp(4, enumOp(type_int, type_string, Enum.friendschat_rankenum, 3));
        ccSetOp(5, enumOp(type_int, type_string, Enum.friendschat_rankenum, 4));
        ccSetOp(6, enumOp(type_int, type_string, Enum.friendschat_rankenum, 5));
        ccSetOp(7, enumOp(type_int, type_string, Enum.friendschat_rankenum, 6));
        ccSetOnOpt(hook(friendschat_setrank, "ii", [int3, event_opindex]));
        int3 = int3 + 1;
    }
    let int10: number = 0;
    let int11: number = 0;

    if (int3 > 12) {
        int10 = ifGetScrollY(intArg0);
        int11 = int3 * 16 + 4;
        ifSetScrollSize(0, int11, intArg0);
        if (int10 > int11) {
            int10 = int11;
        }
        scrollbar_resize(intArg1, intArg0, int10);
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ifSetScrollPos(0, 0, intArg0);
        scrollbar_resize(intArg1, intArg0, 0);
    }
}
