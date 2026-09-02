/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3041

function cs2_3041(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    if (ifGetTop(intArg2, -1) == 1) {
        ifSetOnTimer(hook(cs2_3040, "IIIII", [intArg0, intArg1, intArg2, intArg3, intArg4]), intArg3);
        return;
    } else {
        ifSetOnTimer(noHook(""), intArg3);
    }
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    let int5: number = ignoreCount();
    let int6: number = 0;
    let int7: number = 0;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 15;
    let int11: number = 0;
    let int12: number = 5;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let str3: string = "";

    if (int5 == -2) {
        ifSetText("Name", Component.interface_909.component_909_89);
        cs2_3038("Loading Ignore List." + "<br>" + "<br>" + "Please wait.", intArg2);
    } else if (int5 == -1) {
        ifSetText("Name", Component.interface_909.component_909_89);
        cs2_3038("Connecting to server." + "<br>" + "<br>" + "Please wait.", intArg2);
    } else if (int5 > 0) {
        ifSetText("Name (" + tostring(int5) + "/100)", Component.interface_909.component_909_89);
        while (int6 < int5) {
            [str0, str1] = ignoreGetName(int6);
            cc_add_rect(intArg2, int6, ifGetWidth(intArg2), int10, 0, int7, colour(0x000000), true, 0);
            if (int6 % 2 == 0) {
                ccSetColour(colour(0x201911));
            } else {
                ccSetColour(colour(0x292016));
            }
            ccHookMouseEnter(hook(cs2_3031, "Ii", [intArg2, int6]));
            ccHookMouseExit(hook(cs2_3036, "", []));
            if (stringLength(str1) > 0) {
                int15 = stringWidth("Last known as: " + str1, Graphic.p11_full) + 8;
                if (int15 > ifGetWidth(Component.interface_909.component_909_76)) {
                    str3 = "Last known as:" + "<br>" + str1;
                } else {
                    str3 = "Last known as: " + str1;
                }
                ccSetOnMouseOver(hook(cs2_2467, "IisiiIIIf", [event_com, event_comsubid, str3, event_mousex, event_mousey, Component.interface_909.component_909_78, Component.interface_909.component_909_80, Component.interface_909.component_909_83, Graphic.p11_full]));
            }
            ccSetOpBase(str0);
            ccSetOp(1, "Delete");
            ccSetOnOpt(hook(cs2_3042, "is", [event_opindex, str0]));
            cc_add_graphic(intArg1, int6, 14, 14, 5, int7 + 1, -1, false, false, false, 0);
            if (compare(str1, "") != 0) {
                ccSetGraphic(Graphic.friends_changed_name);
                int12 = 20;
            } else {
                ccSetGraphic(-1);
                int12 = 5;
            }
            str2 = str0;
            cc_add_text(intArg0, int6, 0, int10, int12, int7, str2, colour(0xFFFFFF), Graphic.p11_full, 0, 1, 0, true);
            ccSetSize(int12, int10, 1, 0);
            ccSetmaxlines(1);
            int7 = int7 + int10;
            int6 = int6 + 1;
        }
        int9 = ifGetHeight(intArg3) / int10 + 1;
        if (int9 > int5) {
            while (int6 < int9) {
                cc_add_rect(intArg2, int6, ifGetWidth(intArg2), int10, 0, int7, colour(0x000000), true, 0);
                if (int6 % 2 == 0) {
                    ccSetColour(colour(0x201911));
                } else {
                    ccSetColour(colour(0x292016));
                }
                int7 = int7 + int10;
                int6 = int6 + 1;
            }
            int11 = ifGetHeight(intArg3);
        } else {
            int11 = int7;
        }
        if (int9 <= int5) {
            int14 = ifGetScrollY(Component.interface_909.component_909_78);
            ifSetScrollSize(0, int11, Component.interface_909.component_909_78);
            if (int14 > int11) {
                int14 = int11;
            }
            scrollbar_resize(Component.interface_909.component_909_79, Component.interface_909.component_909_78, int14);
        } else {
            ifSetScrollSize(0, 0, Component.interface_909.component_909_78);
            ifSetScrollPos(0, 0, Component.interface_909.component_909_78);
            scrollbar_resize(Component.interface_909.component_909_79, Component.interface_909.component_909_78, 0);
        }
    } else if (int5 == 0) {
        ifSetText("Name", Component.interface_909.component_909_89);
        cs2_3038("You are not ignoring any players.", intArg2);
    }
}
