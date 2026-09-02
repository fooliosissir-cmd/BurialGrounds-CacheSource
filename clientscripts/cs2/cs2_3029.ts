/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3029

function cs2_3029(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    if (ifGetTop(intArg3, -1) == 1) {
        ifSetOnTimer(hook(cs2_3028, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg4);
        return;
    } else {
        ifSetOnTimer(noHook(""), intArg4);
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    let int6: number = friendCount();
    let int7: number = 0;
    let int8: number = 0;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 15;
    let int12: number = 0;
    let int13: number = 5;
    let int14: colour = colour(0x000000);
    let int15: number = 0;
    let int16: number = 0;
    let str3: string = "";

    if (int6 == -2) {
        ifSetText("Name", Component.interface_909.component_909_38);
        cs2_3038("Loading Friends List." + "<br>" + "<br>" + "Please wait.", intArg3);
        ifSetSize(ifGetWidth(Component.interface_909.component_909_31), ifGetHeight(Component.interface_909.component_909_36), 0, 0, Component.interface_909.component_909_31);
    } else if (int6 == -1) {
        ifSetText("Name", Component.interface_909.component_909_38);
        cs2_3038("Connecting to server." + "<br>" + "<br>" + "Please wait.", intArg3);
        ifSetSize(ifGetWidth(Component.interface_909.component_909_31), ifGetHeight(Component.interface_909.component_909_36), 0, 0, Component.interface_909.component_909_31);
    } else if (int6 > 0) {
        ifSetText("Name (" + tostring(int6) + "/200)", Component.interface_909.component_909_38);
        ifSetSize(ifGetWidth(Component.interface_909.component_909_31), 4, 0, 1, Component.interface_909.component_909_31);
        while (int7 < int6) {
            [str0, str1] = friendGetName(int7);
            int9 = friendGetWorld(int7);
            cc_add_rect(intArg3, int7, ifGetWidth(intArg3), int11, 0, int8, colour(0x000000), true, 0);
            if (int7 % 2 == 0) {
                ccSetColour(colour(0x201911));
            } else {
                ccSetColour(colour(0x292016));
            }
            ccHookMouseEnter(hook(cs2_3030, "Ii", [intArg3, int7]));
            ccHookMouseExit(hook(cs2_3035, "", []));
            if (stringLength(str1) > 0) {
                int16 = stringWidth("Last known as: " + str1, Graphic.p11_full) + 8;
                if (int16 > ifGetWidth(Component.interface_909.component_909_19)) {
                    str3 = "Last known as:" + "<br>" + str1;
                } else {
                    str3 = "Last known as: " + str1;
                }
                ccSetOnMouseOver(hook(cs2_2467, "IisiiIIIf", [event_com, event_comsubid, str3, event_mousex, event_mousey, Component.interface_909.component_909_41, Component.interface_909.component_909_32, Component.interface_909.component_909_35, Graphic.p11_full]));
            }
            ccSetOpBase(str0);
            if (int9 > 0) {
                ccSetOp(1, "Message");
                ccSetOp(2, "Join");
            } else {
                ccSetOp(3, "Message");
                ccSetOp(4, "Join");
            }
            ccSetOp(10, "Delete");
            ccSetOnOpt(hook(cs2_3039, "iisi", [event_opindex, int9, str0, int7]));
            cc_add_graphic(intArg1, int7, 14, 14, 5, int8 + 1, -1, false, false, false, 0);
            if (compare(str1, "") != 0) {
                ccSetGraphic(Graphic.friends_changed_name);
                int13 = 20;
            } else {
                ccSetGraphic(-1);
                int13 = 5;
            }
            str2 = str0;
            cc_add_text(intArg0, int7, 0, int11, int13, int8, str2, colour(0xFFFFFF), Graphic.p11_full, 0, 1, 0, true);
            ccSetSize(int13, int11, 1, 0);
            ccSetmaxlines(1);
            if (int9 == 0) {
                str2 = "Offline";
                int14 = colour(0xFF0000);
            } else if (int9 >= 1149 && int9 < 1200) {
                str2 = "Beta lobby";
            } else if (int9 >= 200 && int9 < 250) {
                str2 = "Beta " + tostring(int9);
            } else {
                str2 = friendGetWorldName(int7);
            }
            if (int9 > 0) {
                if (int9 == mapWorld()) {
                    int14 = colour(0x00FF00);
                } else {
                    int14 = colour(0xFFFF00);
                }
            }
            cc_add_text(intArg2, int7, 0, int11, 5, int8, str2, int14, Graphic.p11_full, 0, 1, 0, true);
            ccSetSize(5, int11, 1, 0);
            ccSetmaxlines(1);
            int8 = int8 + int11;
            int7 = int7 + 1;
        }
        int10 = ifGetHeight(intArg4) / int11 + 1;
        if (int10 > int6) {
            while (int7 < int10) {
                cc_add_rect(intArg3, int7, ifGetWidth(intArg3), int11, 0, int8, colour(0x000000), true, 0);
                if (int7 % 2 == 0) {
                    ccSetColour(colour(0x201911));
                } else {
                    ccSetColour(colour(0x292016));
                }
                int8 = int8 + int11;
                int7 = int7 + 1;
            }
            int12 = ifGetHeight(intArg4);
        } else {
            int12 = int8;
        }
        if (int10 <= int6) {
            int15 = ifGetScrollY(Component.interface_909.component_909_41);
            ifSetScrollSize(0, int12, Component.interface_909.component_909_41);
            if (int15 > int12) {
                int15 = int12;
            }
            scrollbar_resize(Component.interface_909.component_909_47, Component.interface_909.component_909_41, int15);
        } else {
            ifSetScrollSize(0, 0, Component.interface_909.component_909_41);
            ifSetScrollPos(0, 0, Component.interface_909.component_909_41);
            scrollbar_resize(Component.interface_909.component_909_47, Component.interface_909.component_909_41, 0);
        }
    } else if (int6 == 0) {
        ifSetText("Name", Component.interface_909.component_909_38);
        cs2_3038("You have not added any friends to your list.", intArg3);
        ifSetSize(ifGetWidth(Component.interface_909.component_909_31), ifGetHeight(Component.interface_909.component_909_36), 0, 0, Component.interface_909.component_909_31);
    }
}
