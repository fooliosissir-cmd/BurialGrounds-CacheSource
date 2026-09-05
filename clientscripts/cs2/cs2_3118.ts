/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3118

function cs2_3118(intArg0: number, intArg1: component, intArg2: number, intArg3: number): void {
    ccDeleteAll(intArg1);
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = -1;
    let int7: number = -1;
    let [int8, int9, int10, int11, str0, str1, str2] = worldListSpecific(intArg0);
    ifSetHide(false, intArg1);
    let [int12, str3, int13, int14, int15, int16, int17, str4, str5] = cs2_3117(intArg0, int8, -1, str0, str1, int10, int9);

    if (intArg3 == 0) {
        if (intArg0 == varc_998) {
            int16 = colour(0x203211);
        } else if (intArg0 == varc_999) {
            int16 = colour(0x203C11);
        }
        int17 = Graphic.graphic_1541;
        int14 = colour(0xFCFC64);
        cc_add_rect(intArg1, 0, ifGetWidth(intArg1), 20, 0, 0, int16, true, 0);
        cc_add_rect(intArg1, 1, 23, 20, 0, 0, colour(0x606060), true, 0);
        ccSetHide(true);
        cc_add_rect(intArg1, 2, 25, 20, 25, 0, colour(0x404040), true, 0);
        ccSetSize(25, 20, 1, 0);
        ccSetHide(true);
        cc_add_rect(intArg1, 3, 0, 20, 0, 0, colour(0xB24D00), true, 0);
        ccSetSize(0, 20, 1, 0);
        if (mapWorld() == intArg0) {
            ccSetHide(false);
        } else {
            ccSetHide(true);
        }
        cc_add_graphic(intArg1, 4, 13, 12, ifGetX(Component.interface_910.component_910_68) + (ifGetWidth(Component.interface_910.component_910_68) - 13) / 2, 4, int17, false, false, false, 0);
        cc_add_text(intArg1, 5, ifGetWidth(intArg1) - (ifGetX(Component.interface_910.component_910_70) + 2), 20, ifGetX(Component.interface_910.component_910_70) + 2, 0, "World " + tostring(intArg0) + " is running in a different language or is unavailable.", int14, Graphic.p11_full, 0, 1, 0, true);
        cc_add_text(intArg1, 6, ifGetWidth(Component.interface_910.component_910_77), 20, ifGetX(Component.interface_910.component_910_77), 0, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
        ccHookMouseEnter(hook(cs2_3121, "I", [intArg1]));
        ccHookMouseExit(hook(cs2_3123, "I", [intArg1]));
        cc_add_text(intArg1, 7, ifGetWidth(Component.interface_910.component_910_78), 20, ifGetX(Component.interface_910.component_910_78), 0, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
        ccHookMouseEnter(hook(cs2_3120, "I", [intArg1]));
        ccHookMouseExit(hook(cs2_3122, "I", [intArg1]));
        ccSetOp(1, "Remove");
        ccSetOpBase("Favourite");
        ccSetOnOpt(hook(cs2_3134, "i", [intArg0]));
        return;
    }
    cc_add_rect(intArg1, 0, ifGetWidth(intArg1), 20, 0, 0, int16, true, 0);
    cc_add_rect(intArg1, 1, 23, 20, 0, 0, colour(0x606060), true, 0);
    ccSetHide(true);
    cc_add_rect(intArg1, 2, 25, 20, 25, 0, colour(0x404040), true, 0);
    ccSetSize(25, 20, 1, 0);
    ccSetHide(true);
    cc_add_rect(intArg1, 3, 0, 20, 0, 0, colour(0xB24D00), true, 0);
    ccSetSize(0, 20, 1, 0);

    if (mapWorld() == intArg0) {
        ccSetHide(false);
    } else {
        ccSetHide(true);
    }
    cc_add_graphic(intArg1, 4, 13, 12, ifGetX(Component.interface_910.component_910_68) + (ifGetWidth(Component.interface_910.component_910_68) - 13) / 2, 4, int17, false, false, false, 0);
    cc_add_graphic(intArg1, 5, 19, 18, ifGetX(Component.interface_910.component_910_70) + 2, 1, int13, false, false, false, 0);
    cc_add_text(intArg1, 6, ifGetWidth(Component.interface_910.component_910_69) - 25, 20, ifGetX(Component.interface_910.component_910_69) + 25, 0, tostring(intArg0), int14, Graphic.p11_full, 0, 1, 0, true);
    cc_add_text(intArg1, 7, ifGetWidth(Component.interface_910.component_910_71) - 6, 20, ifGetX(Component.interface_910.component_910_71) + 3, 0, str5, int14, Graphic.p11_full, 0, 1, 0, true);
    cc_add_graphic(intArg1, 8, 24, 12, ifGetX(Component.interface_910.component_910_73) + 4, 4, int12, false, false, false, 0);
    cc_add_text(intArg1, 9, ifGetWidth(Component.interface_910.component_910_72) - 30, 20, ifGetX(Component.interface_910.component_910_72) + 30, 0, str3, int14, Graphic.p11_full, 0, 1, 0, true);
    cc_add_text(intArg1, 10, ifGetWidth(Component.interface_910.component_910_74) - 10, 20, ifGetX(Component.interface_910.component_910_74) + 5, 0, str4, int14, Graphic.p11_full, 0, 1, 0, true);
    lobby_worldswitcher_bots_icon(intArg1, 15, ifGetX(Component.interface_910.component_910_74) - 24, 2, 0, int8);
    cc_add_graphic(intArg1, 11, 17, 17, ifGetX(Component.interface_910.component_910_75) + (ifGetWidth(Component.interface_910.component_910_75) - 17) / 2, 1, int15, false, false, false, 0);
    cc_add_text(intArg1, 12, ifGetWidth(Component.interface_910.component_910_75) - 10, 20, ifGetX(Component.interface_910.component_910_76) + 5, 0, tostring(int11), int14, Graphic.p11_full, 0, 1, 0, true);
    cc_add_text(intArg1, 13, ifGetWidth(Component.interface_910.component_910_77), 20, ifGetX(Component.interface_910.component_910_77), 0, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
    ccHookMouseEnter(hook(cs2_3121, "I", [intArg1]));
    ccHookMouseExit(hook(cs2_3123, "I", [intArg1]));
    ccSetOp(1, "Select");
    ccSetOpBase("World " + tostring(intArg0));
    ccSetOnOpt(hook(cs2_3129, "iiis", [event_opindex, intArg2, intArg0, str2]));
    cc_add_text(intArg1, 14, ifGetWidth(Component.interface_910.component_910_78), 20, ifGetX(Component.interface_910.component_910_78), 0, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
    ccHookMouseEnter(hook(cs2_3120, "I", [intArg1]));
    ccHookMouseExit(hook(cs2_3122, "I", [intArg1]));
    ccSetOp(1, "Remove");
    ccSetOpBase("Favourite");
    ccSetOnOpt(hook(cs2_3134, "i", [intArg0]));
}
