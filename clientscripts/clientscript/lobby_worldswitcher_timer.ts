/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobby_worldswitcher_timer]

function lobby_worldswitcher_timer(): void {
    let int0: number = cs2_1851();
    let int1: number = cs2_1852();

    if (int1 == int0 && int1 != 0) {
        int1 = 0;
        cs2_1856(0);
    }

    switch (int0) {
        case 4:
            int0 = int0 + 2;
            break;
        case 5:
            int0 = int0 + 2;
            break;
        case 6:
            int0 = int0 + 2;
            break;
        case 7:
            int0 = int0 + 2;
            break;
        case 8:
            int0 = int0 + 6;
            break;
        case 9:
            int0 = int0 + 6;
            break;
        case 10:
            int0 = int0 + 6;
            break;
        case 11:
            int0 = int0 + 6;
            break;
    }

    switch (int1) {
        case 4:
            int1 = int1 + 2;
            break;
        case 5:
            int1 = int1 + 2;
            break;
        case 6:
            int1 = int1 + 2;
            break;
        case 7:
            int1 = int1 + 2;
            break;
        case 8:
            int1 = int1 + 6;
            break;
        case 9:
            int1 = int1 + 6;
            break;
        case 10:
            int1 = int1 + 6;
            break;
        case 11:
            int1 = int1 + 6;
            break;
    }
    worldListSort(int0 / 2, int_to_bool(int0 % 2), int1 / 2, int_to_bool(int1 % 2));

    if (worldListFetch() == 0) {
        return;
    } else {
        ifSetOnTimer(hook(lobby_worldswitcher_pingtimer, "i", [clientClock() + 500]), Component.interface_910.component_910_0);
    }
    let int2: number = 0;

    if (varc_998 > 0) {
        int2 = ifGetHeight(Component.interface_910.component_910_21);
    }

    if (varc_999 > 0) {
        int2 = int2 + ifGetHeight(Component.interface_910.component_910_22);
    }

    if (int2 == 0) {
        ifSetHide(true, Component.interface_910.component_910_24);
        ifSetHide(true, Component.interface_910.component_910_18);
        ifSetHide(true, Component.interface_910.component_910_23);
    } else {
        ifSetSize(ifGetWidth(Component.interface_910.component_910_23), int2, 0, 0, Component.interface_910.component_910_23);
        ifSetHide(false, Component.interface_910.component_910_24);
        ifSetHide(false, Component.interface_910.component_910_18);
        ifSetHide(false, Component.interface_910.component_910_23);
        int2 = int2 + ifGetHeight(Component.interface_910.component_910_18);
        ifSetPosition(0, int2, 0, 0, Component.interface_910.component_910_24);
        int2 = int2 + ifGetHeight(Component.interface_910.component_910_24);
    }
    ifSetPosition(0, int2, 0, 0, Component.interface_910.component_910_25);
    int2 = int2 + ifGetHeight(Component.interface_910.component_910_25);
    ifSetSize(16, int2, 1, 1, Component.interface_910.component_910_62);
    ifSetPosition(0, int2, 0, 0, Component.interface_910.component_910_62);
    ifSetSize(16, int2, 0, 1, Component.interface_910.component_910_86);
    ifSetPosition(0, int2, 2, 0, Component.interface_910.component_910_86);
    let int3: component = Component.interface_910.component_910_64;
    let int4: component = Component.interface_910.component_910_68;
    let int5: component = Component.interface_910.component_910_69;
    let int6: component = Component.interface_910.component_910_70;
    let int7: component = Component.interface_910.component_910_71;
    let int8: component = Component.interface_910.component_910_72;
    let int9: component = Component.interface_910.component_910_73;
    let int10: component = Component.interface_910.component_910_74;
    let int11: component = Component.interface_910.component_910_75;
    let int12: component = Component.interface_910.component_910_76;
    let int13: component = Component.interface_910.component_910_77;
    let int14: component = Component.interface_910.component_910_78;
    let int15: component = Component.interface_910.component_910_86;
    ccDeleteAll(int3);
    ccDeleteAll(int4);
    ccDeleteAll(int5);
    ccDeleteAll(int6);
    ccDeleteAll(int7);
    ccDeleteAll(int8);
    ccDeleteAll(int9);
    ccDeleteAll(int10);
    ccDeleteAll(int11);
    ccDeleteAll(int12);
    ccDeleteAll(int13);
    ccDeleteAll(int14);
    let int16: graphic = -1;
    let int17: number = -1;
    let int18: number = -1;
    let int19: graphic = -1;
    let int20: colour = colour(0x000000);
    let int21: colour = colour(0x000000);
    let str0: string = "";
    let int22: graphic = -1;
    let int23: graphic = -1;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int29: number = -1;
    let int30: number = -1;
    let [int31, int32, int33, int34, int35, str3, str4, str5] = worldListStart();

    if (int31 == -1) {
        cs2_3143(1, "Unable to load list.");
        ifSetText("The world list could not be loaded." + "<br>" + "<br>" + "Please accept our apologies for the" + "<br>" + "inconvenience, and try again later.", Component.interface_910.component_910_1);
        return;
    }
    let int36: number = 0;
    let int37: number = 0;
    let int38: number = 0;
    let str6: string = "";
    let int39: number = 0;
    let int40: number = 0;
    let int41: number = 0;

    while (int41 == 0) {
        if (int31 == -1) {
            int41 = 1;
        } else if (int31 >= 170 && int34 < 0) {
            [int31, int32, int33, int34, int35, str3, str4, str5] = worldListNext();
        } else if (testBit(int32, 12) == 1) {
            [int31, int32, int33, int34, int35, str3, str4, str5] = worldListNext();
        } else {
            [int22, str0, int16, int21, int23, int20, int19, str1, str2] = cs2_3117(int31, int32, int36, str3, str4, int34, int33);
            if (int31 == varc_998) {
                int39 = 1;
            } else if (int31 == varc_999) {
                int40 = 1;
            }
            cc_add_rect(int3, int36, ifGetWidth(int3), 20, 0, int37, int20, true, 0);
            cc_add_graphic(int4, int36, 13, 12, 0, int37 + 4, int19, false, false, false, 0);
            ccSetPosition(0, int37 + 4, 1, 0);
            cc_add_graphic(int6, int36, 19, 18, 2, int37 + 1, int16, false, false, false, 0);
            cc_add_text(int5, int36, ifGetWidth(int5) - 25, 20, 25, int37, tostring(int31), int21, Graphic.p11_full, 0, 1, 0, true);
            cc_add_text(int7, int36, ifGetWidth(int7) - 6, 20, 3, int37, str2, int21, Graphic.p11_full, 0, 1, 0, true);
            cc_add_graphic(int9, int36, 24, 12, 4, int37 + 4, int22, false, false, false, 0);
            cc_add_text(int8, int36, 30, 20, 30, int37, str0, int21, Graphic.p11_full, 0, 1, 0, true);
            ccSetSize(30, 20, 1, 0);
            if (testBit(int32, 2) == 1) {
                lobby_worldswitcher_bots_icon(int9, 1000 + int36, 6, int37 + 2, 2);
            }
            cc_add_text(int10, int36, ifGetWidth(int10) - 10, 20, 5, int37, str1, int21, Graphic.p11_full, 0, 1, 0, true);
            cc_add_graphic(int11, int36, 17, 17, 0, int37 + 1, int23, false, false, false, 0);
            ccSetPosition(0, int37 + 1, 1, 0);
            if (int35 == -1) {
                str6 = "-";
            } else if (int35 >= 1000) {
                str6 = "N/A";
            } else {
                str6 = tostring(int35);
            }
            cc_add_text(int12, int36, ifGetWidth(int12) - 10, 20, 5, int37, str6, int21, Graphic.p11_full, 0, 1, 0, true);
            cc_add_text(int13, int36, ifGetWidth(int13), 20, 0, int37, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
            ccHookMouseEnter(hook(cs2_3131, "Iii", [int13, int36, int31]));
            ccHookMouseExit(hook(cs2_3133, "", []));
            ccSetOp(1, "Select");
            ccSetOpBase("World " + tostring(int31));
            ccSetOnOpt(hook(cs2_3129, "iiis", [event_opindex, int36, int31, str5]));
            cc_add_text(int14, int36, ifGetWidth(int14), 20, 0, int37, "", colour(0x000000), Graphic.p11_full, 0, 1, 0, true);
            ccHookMouseEnter(hook(cs2_3130, "IIii", [int4, int14, int36, int31]));
            ccHookMouseExit(hook(cs2_3132, "Iii", [int4, int36, int31]));
            ccSetOp(1, "Alter");
            ccSetOpBase("Favourite");
            ccSetOnOpt(hook(cs2_3128, "iii", [event_opindex, int36, int31]));
            if (int31 == mapWorld()) {
                ifSetHide(false, Component.interface_910.component_910_67);
                ifSetPosition(0, int37, 0, 0, Component.interface_910.component_910_67);
            }
            if (int31 == varc_998) {
                int29 = int36;
            }
            if (int31 == varc_999) {
                int30 = int36;
            }
            [int31, int32, int33, int34, int35, str3, str4, str5] = worldListNext();
            int37 = int37 + 20;
            int38 = int38 + 1;
            int36 = int36 + 1;
        }
    }
    ifSetScrollSize(0, int37 + ifGetY(Component.interface_910.component_910_63), Component.interface_910.component_910_62);
    proc_scrollbar_vertical(int15, Component.interface_910.component_910_62, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);

    if (varc_998 > 0) {
        cs2_3118(varc_998, Component.interface_910.component_910_21, int29, int39);
    } else {
        cs2_3119(Component.interface_910.component_910_21, 1);
    }

    if (varc_999 > 0) {
        cs2_3118(varc_999, Component.interface_910.component_910_22, int30, int40);
    } else {
        cs2_3119(Component.interface_910.component_910_22, 0);
    }

    if (varc_998 > 0 && varc_999 > 0) {
        if (int39 == 0 && int40 == 0) {
            ifSetHide(true, Component.interface_910.component_910_23);
        } else if (int39 == 1 && int40 == 0) {
            ifSetPosition(ifGetX(Component.interface_910.component_910_56), 0, 0, 0, Component.interface_910.component_910_56);
            ifSetPosition(ifGetX(Component.interface_910.component_910_57), 0, 0, 0, Component.interface_910.component_910_57);
            ifSetPosition(ifGetX(Component.interface_910.component_910_58), 0, 0, 0, Component.interface_910.component_910_58);
            ifSetPosition(ifGetX(Component.interface_910.component_910_59), 0, 0, 0, Component.interface_910.component_910_59);
            ifSetPosition(ifGetX(Component.interface_910.component_910_60), 0, 0, 0, Component.interface_910.component_910_60);
            ifSetPosition(ifGetX(Component.interface_910.component_910_61), 0, 0, 0, Component.interface_910.component_910_61);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_56), 20, 0, 0, Component.interface_910.component_910_56);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_57), 20, 0, 0, Component.interface_910.component_910_57);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_58), 20, 0, 0, Component.interface_910.component_910_58);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_59), 20, 0, 0, Component.interface_910.component_910_59);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_60), 20, 0, 0, Component.interface_910.component_910_60);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_61), 20, 0, 0, Component.interface_910.component_910_61);
            ifSetHide(false, Component.interface_910.component_910_23);
        } else if (int39 == 0 && int40 == 1) {
            ifSetPosition(ifGetX(Component.interface_910.component_910_56), 20, 0, 0, Component.interface_910.component_910_56);
            ifSetPosition(ifGetX(Component.interface_910.component_910_57), 20, 0, 0, Component.interface_910.component_910_57);
            ifSetPosition(ifGetX(Component.interface_910.component_910_58), 20, 0, 0, Component.interface_910.component_910_58);
            ifSetPosition(ifGetX(Component.interface_910.component_910_59), 20, 0, 0, Component.interface_910.component_910_59);
            ifSetPosition(ifGetX(Component.interface_910.component_910_60), 20, 0, 0, Component.interface_910.component_910_60);
            ifSetPosition(ifGetX(Component.interface_910.component_910_61), 20, 0, 0, Component.interface_910.component_910_61);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_56), 20, 0, 0, Component.interface_910.component_910_56);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_57), 20, 0, 0, Component.interface_910.component_910_57);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_58), 20, 0, 0, Component.interface_910.component_910_58);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_59), 20, 0, 0, Component.interface_910.component_910_59);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_60), 20, 0, 0, Component.interface_910.component_910_60);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_61), 20, 0, 0, Component.interface_910.component_910_61);
            ifSetHide(false, Component.interface_910.component_910_23);
        } else {
            ifSetPosition(ifGetX(Component.interface_910.component_910_56), 0, 0, 0, Component.interface_910.component_910_56);
            ifSetPosition(ifGetX(Component.interface_910.component_910_57), 0, 0, 0, Component.interface_910.component_910_57);
            ifSetPosition(ifGetX(Component.interface_910.component_910_58), 0, 0, 0, Component.interface_910.component_910_58);
            ifSetPosition(ifGetX(Component.interface_910.component_910_59), 0, 0, 0, Component.interface_910.component_910_59);
            ifSetPosition(ifGetX(Component.interface_910.component_910_60), 0, 0, 0, Component.interface_910.component_910_60);
            ifSetPosition(ifGetX(Component.interface_910.component_910_61), 0, 0, 0, Component.interface_910.component_910_61);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_56), 0, 0, 1, Component.interface_910.component_910_56);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_57), 0, 0, 1, Component.interface_910.component_910_57);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_58), 0, 0, 1, Component.interface_910.component_910_58);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_59), 0, 0, 1, Component.interface_910.component_910_59);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_60), 0, 0, 1, Component.interface_910.component_910_60);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_61), 0, 0, 1, Component.interface_910.component_910_61);
            ifSetHide(false, Component.interface_910.component_910_23);
        }
    } else if (varc_998 > 0 && varc_999 <= 0) {
        if (int39 == 0) {
            ifSetHide(true, Component.interface_910.component_910_23);
        } else {
            ifSetPosition(ifGetX(Component.interface_910.component_910_56), 0, 0, 0, Component.interface_910.component_910_56);
            ifSetPosition(ifGetX(Component.interface_910.component_910_57), 0, 0, 0, Component.interface_910.component_910_57);
            ifSetPosition(ifGetX(Component.interface_910.component_910_58), 0, 0, 0, Component.interface_910.component_910_58);
            ifSetPosition(ifGetX(Component.interface_910.component_910_59), 0, 0, 0, Component.interface_910.component_910_59);
            ifSetPosition(ifGetX(Component.interface_910.component_910_60), 0, 0, 0, Component.interface_910.component_910_60);
            ifSetPosition(ifGetX(Component.interface_910.component_910_61), 0, 0, 0, Component.interface_910.component_910_61);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_56), 0, 0, 1, Component.interface_910.component_910_56);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_57), 0, 0, 1, Component.interface_910.component_910_57);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_58), 0, 0, 1, Component.interface_910.component_910_58);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_59), 0, 0, 1, Component.interface_910.component_910_59);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_60), 0, 0, 1, Component.interface_910.component_910_60);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_61), 0, 0, 1, Component.interface_910.component_910_61);
            ifSetHide(false, Component.interface_910.component_910_23);
        }
    } else if (varc_998 <= 0 && varc_999 > 0) {
        if (int40 == 0) {
            ifSetHide(true, Component.interface_910.component_910_23);
        } else {
            ifSetPosition(ifGetX(Component.interface_910.component_910_56), 0, 0, 0, Component.interface_910.component_910_56);
            ifSetPosition(ifGetX(Component.interface_910.component_910_57), 0, 0, 0, Component.interface_910.component_910_57);
            ifSetPosition(ifGetX(Component.interface_910.component_910_58), 0, 0, 0, Component.interface_910.component_910_58);
            ifSetPosition(ifGetX(Component.interface_910.component_910_59), 0, 0, 0, Component.interface_910.component_910_59);
            ifSetPosition(ifGetX(Component.interface_910.component_910_60), 0, 0, 0, Component.interface_910.component_910_60);
            ifSetPosition(ifGetX(Component.interface_910.component_910_61), 0, 0, 0, Component.interface_910.component_910_61);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_56), 0, 0, 1, Component.interface_910.component_910_56);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_57), 0, 0, 1, Component.interface_910.component_910_57);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_58), 0, 0, 1, Component.interface_910.component_910_58);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_59), 0, 0, 1, Component.interface_910.component_910_59);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_60), 0, 0, 1, Component.interface_910.component_910_60);
            ifSetSize(ifGetWidth(Component.interface_910.component_910_61), 0, 0, 1, Component.interface_910.component_910_61);
            ifSetHide(false, Component.interface_910.component_910_23);
        }
    } else {
        ifSetHide(true, Component.interface_910.component_910_23);
    }
    ifSetHide(true, Component.interface_910.component_910_1);
    ifSetHide(false, Component.interface_910.component_910_13);
}
