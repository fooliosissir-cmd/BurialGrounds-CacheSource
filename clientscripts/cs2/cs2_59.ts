/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_59

function cs2_59(intArg0: number): void {
    if (varbit_9227 > 1) {
        ifSetText("Select " + tostring(varbit_9227) + " items to keep. The rest will be dropped.", Component.interface_18.component_18_12);
    } else if (varbit_9227 == 1) {
        ifSetText("Select an item to keep. The rest will be dropped.", Component.interface_18.component_18_12);
    } else {
        ifSetText("These items will be dropped.", Component.interface_18.component_18_12);
    }
    defineArray(0, type_obj, 4);
    array0[0] = cs2_750(varbit_9222);
    array0[1] = cs2_750(varbit_9223);
    array0[2] = cs2_750(varbit_9224);
    array0[3] = cs2_750(varbit_9225);
    ccDeleteAll(Component.interface_18.component_18_9);
    ccDeleteAll(Component.interface_18.component_18_8);
    let int1: number = 15;
    let int2: obj = -1;
    let int3: graphic = Graphic.graphic_6014;
    let int4: graphic = Graphic.graphic_6015;
    let int5: number = -1;

    while (int5 < varbit_9227 && int5 < 4) {
        int5 = max(int5, 0);
        ccCreate(Component.interface_18.component_18_8, 5, ifGetNextSubId(Component.interface_18.component_18_8));
        ccSetSize(36, 36, 0, 0);
        ccSetPosition(int1, 0, 0, 1);
        ccSetGraphic(int3);
        int2 = array0[int5];
        ccCreate<1>(Component.interface_18.component_18_9, 5, ifGetNextSubId(Component.interface_18.component_18_9));
        if (varbit_9227 == 0) {
            ccSetSize<1>(36, 36, 0, 0);
            ccSetPosition<1>(int1, 0, 0, 1);
            ccSetGraphic<1>(Graphic.duel_misc_graphic);
        } else {
            ccSetSize<1>(36, 32, 0, 0);
            ccSetPosition<1>(int1 + 2, 0, 0, 1);
            if (int2 != -1) {
                ccSetObjectNonum<1>(int2, 1);
                ccSetOp<1>(1, "Unprotect");
                ccSetOp<1>(10, "Examine");
                ccSetGraphicShadow<1>(3153952);
                ccSetOutline<1>(1);
                ccSetOpBase<1>("<col=ff9040>" + ocName(int2) + "</col>");
                ccSetdraggable<1>(Component.interface_18.component_18_2, -1);
                ccSetdragrenderbehaviour<1>(2);
                ccSetdragdeadzone<1>(5);
                ccSetdragdeadtime<1>(5);
                ccSetOnOpt<1>(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
                ccSetOnDragComplete<1>(hook(cs2_744, "IiIii", [event_com, event_comsubid, event_com2, event_comsubid2, intArg0]));
            }
            ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int4]));
            ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int3]));
        }
        int1 = int1 + max(ccGetWidth(), ccGetWidth<1>()) + 10;
        int5 = int5 + 1;
    }
    int1 = int1 + 9;
    ifSetSize(int1, ifGetHeight(Component.interface_18.component_18_3), 0, 0, Component.interface_18.component_18_3);
    ccDeleteAll(Component.interface_18.component_18_16);
    ccDeleteAll(Component.interface_18.component_18_17);
    ccDeleteAll(Component.interface_18.component_18_24);
    ccDeleteAll(Component.interface_18.component_18_25);
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = ifGetWidth(Component.interface_18.component_18_2);
    let int13: number = int12 - (max(ifGetWidth(Component.interface_18.component_18_18), ifGetWidth(Component.interface_18.component_18_26)) + 4);
    let int14: number = max(int13 / 36, 1);
    let int15: number = (int13 - 36 * int14) / max(int14 - 1, 1);
    let int16: number = max(int15 / 2, 4);
    let int17: number = invSize(93) + invSize(94);
    let int18: number = 0;
    let int19: number = 0;
    int5 = 0;

    while (int5 <= int17) {
        int2 = cs2_750(int5);
        ccCreate(Component.interface_18.component_18_17, 5, int5);
        ccCreate<1>(Component.interface_18.component_18_25, 5, int5);
        if (int2 != -1) {
            int18 = cs2_1393(int5);
            int19 = 0;
            while (int19 < 4 && int18 > 0) {
                if (array0[int19] == int2) {
                    int18 = int18 - 1;
                    array0[int19] = -1;
                }
                int19 = int19 + 1;
            }
            if (int18 > 0) {
                if (ocParam(ocUncert(int2), Param.protect_on_death) == 1) {
                    ccSetSize<1>(36, 32, 0, 0);
                    ccSetObject<1>(int2, int18);
                    ccSetGraphicShadow<1>(3153952);
                    ccSetOutline<1>(1);
                    ccSetOp<1>(10, "Examine");
                    ccSetOpBase<1>("<col=ff9040>" + ocName(int2) + "</col>");
                    int10 = int8 * (36 + int15);
                    int11 = int9 * (32 + int16);
                    ccSetPosition<1>(int10 + 2, int11 + 2, 0, 0);
                    int8 = int8 + 1;
                    if (int8 >= int14) {
                        [int8, int9] = [0, int9 + 1];
                    }
                    ccSetHide(true);
                    ccCreate(Component.interface_18.component_18_24, 5, ifGetNextSubId(Component.interface_18.component_18_24));
                    ccSetSize(36, 36, 0, 0);
                    ccSetPosition(int10, int11, 0, 0);
                    ccSetGraphic(Graphic.graphic_6016);
                } else {
                    ccSetSize(36, 32, 0, 0);
                    ccSetObject(int2, int18);
                    ccSetGraphicShadow(3153952);
                    ccSetOutline(1);
                    ccSetOp(1, "Protect");
                    ccSetOp(10, "Examine");
                    ccSetOpBase("<col=ff9040>" + ocName(int2) + "</col>");
                    int10 = int6 * (36 + int15);
                    int11 = int7 * (32 + int16);
                    ccSetPosition(int10 + 2, int11 + 2, 0, 0);
                    ccSetdraggable(Component.interface_18.component_18_2, -1);
                    ccSetdragrenderbehaviour(2);
                    ccSetdragdeadzone(5);
                    ccSetdragdeadtime(5);
                    ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 100, 0, 8]));
                    ccSetOnDragComplete(hook(cs2_744, "IiIii", [event_com, event_comsubid, event_com2, event_comsubid2, intArg0]));
                    int6 = int6 + 1;
                    if (int6 >= int14) {
                        [int6, int7] = [0, int7 + 1];
                    }
                    ccSetHide<1>(true);
                    ccCreate<1>(Component.interface_18.component_18_16, 5, ifGetNextSubId(Component.interface_18.component_18_16));
                    ccSetSize<1>(36, 36, 0, 0);
                    ccSetPosition<1>(int10, int11, 0, 0);
                    ccSetGraphic<1>(int3);
                    ccHookMouseEnter<1>(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int4]));
                    ccHookMouseExit<1>(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int3]));
                }
            } else {
                ccSetHide(true);
                ccSetHide<1>(true);
            }
        } else {
            ccSetHide(true);
            ccSetHide<1>(true);
        }
        int5 = int5 + 1;
    }

    if (int6 <= 0) {
        int7 = max(int7 - 1, 0);
    }

    if (int8 <= 0) {
        int9 = max(int9 - 1, 0);
    }
    let int20: number = (int7 + 1) * (32 + int16);
    let int21: number = (int9 + 1) * (32 + int16);

    if (int7 < 2 && int7 <= int9) {
        ifSetSize(0, int20 + ifGetHeight(Component.interface_18.component_18_12) + 6, 1, 0, Component.interface_18.component_18_11);
        ifSetSize(0, ifGetHeight(Component.interface_18.component_18_11) + 3, 1, 1, Component.interface_18.component_18_19);
    } else if (int9 < 2 && int9 <= int7) {
        ifSetSize(0, int21 + ifGetHeight(Component.interface_18.component_18_20) + 6, 1, 0, Component.interface_18.component_18_19);
        ifSetSize(0, ifGetHeight(Component.interface_18.component_18_19) + 3, 1, 1, Component.interface_18.component_18_11);
    }

    if (int6 <= 0 && int7 <= 0) {
        ccCreate(Component.interface_18.component_18_17, 4, ifGetNextSubId(Component.interface_18.component_18_17));
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextShadow(true);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText("You haven't got any more items to choose.");
    }

    if (int20 > ifGetHeight(Component.interface_18.component_18_15)) {
        ifSetScrollSize(0, int20, Component.interface_18.component_18_15);
        ifSetSize(0, int20, 1, 0, Component.interface_18.component_18_17);
        ifSetSize(0, int20, 1, 0, Component.interface_18.component_18_16);
        proc_scrollbar_vertical(Component.interface_18.component_18_18, Component.interface_18.component_18_15, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
        ifSetHide(false, Component.interface_18.component_18_18);
        ifSetPosition(2, 0, 0, 1, Component.interface_18.component_18_15);
    } else {
        ifSetScrollSize(0, 0, Component.interface_18.component_18_15);
        ifSetSize(0, 0, 1, 1, Component.interface_18.component_18_17);
        ifSetSize(0, 0, 1, 1, Component.interface_18.component_18_16);
        ifSetScrollPos(0, 0, Component.interface_18.component_18_15);
        ccDeleteAll(Component.interface_18.component_18_18);
        ifSetHide(true, Component.interface_18.component_18_18);
        ifSetPosition(0, 0, 1, 1, Component.interface_18.component_18_15);
    }

    if (int21 > ifGetHeight(Component.interface_18.component_18_23)) {
        ifSetScrollSize(0, int21, Component.interface_18.component_18_23);
        ifSetSize(0, int21, 1, 0, Component.interface_18.component_18_25);
        ifSetSize(0, int21, 1, 0, Component.interface_18.component_18_24);
        proc_scrollbar_vertical(Component.interface_18.component_18_26, Component.interface_18.component_18_23, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
        ifSetHide(false, Component.interface_18.component_18_26);
        ifSetPosition(2, 0, 0, 1, Component.interface_18.component_18_23);
    } else {
        ifSetScrollSize(0, 0, Component.interface_18.component_18_23);
        ifSetSize(0, 0, 1, 1, Component.interface_18.component_18_25);
        ifSetSize(0, 0, 1, 1, Component.interface_18.component_18_24);
        ifSetScrollPos(0, 0, Component.interface_18.component_18_23);
        ccDeleteAll(Component.interface_18.component_18_26);
        ifSetHide(true, Component.interface_18.component_18_26);
        ifSetPosition(0, 0, 1, 1, Component.interface_18.component_18_23);
    }
    ccDeleteAll(Component.interface_18.component_18_45);

    if (varp_105 != -1) {
        ifSetHide(true, Component.interface_18.component_18_27);
        ifSetHide(true, Component.interface_18.component_18_42);
        ifSetPosition(0, 0, 1, 0, Component.interface_18.component_18_3);
        return;
    }
    ifSetHide(false, Component.interface_18.component_18_27);
    let str0: string = "Your hub (" + enumOp(type_int, type_string, Enum.deathkeep_hubs_names, varbit_9231) + ")";
    let str1: string = "";
    let int22: number = 0;
    int5 = -1;
    int17 = enumGetoutputcount(Enum.deathkeep_respawns_names);
    int7 = 2;
    let int23: number = 0;

    while (int5 <= int17) {
        ccCreate(Component.interface_18.component_18_45, 4, int5 + 1);
        int23 = 0;
        switch (int5) {
            case 0:
            case -1:
                int23 = 1;
                break;
            case 1:
                if (varbit_falador_spawn == 1 && mapMembers() == 1) {
                    int23 = 1;
                }
                break;
            case 2:
                if (varbit_3910 == 1 && mapMembers() == 1) {
                    int23 = 1;
                }
                break;
            case 3:
                if (varbit_soulwars_spawn != 1 || mapMembers() != 1) {
                    break;
                }
                int23 = 1;
                break;
        }
        if (int23 == 1) {
            if (int5 == -1) {
                str1 = str0;
            } else {
                str1 = enumOp(type_int, type_string, Enum.deathkeep_respawns_names, int5);
            }
            int22 = max(int22, stringWidth(str1, Graphic.p11_full));
            if (varbit_9228 - 1 != int5) {
                ccSetSize(0, 15, 1, 0);
                ccSetPosition(0, int7, 1, 0);
                ccSetTextFont(Graphic.p11_full);
                ccSetTextAlign(1, 1, 0);
                ccSetColour(colour(0xEFB063));
                ccHookMouseEnter(hook(cs2_743, "Ii1", [event_com, event_comsubid, true]));
                ccHookMouseExit(hook(cs2_743, "Ii1", [event_com, event_comsubid, false]));
                ccSetText(str1);
                ccSetOp(1, "Select");
                ccSetOnOpt(hook(cs2_747, "isi", [event_opindex, str1, intArg0]));
                int7 = int7 + ccGetHeight();
            } else if (ccFind<1>(Component.interface_18.component_18_29, intArg0) == 1) {
                ccSetText<1>(str1);
            }
        } else {
            ccSetHide(true);
        }
        int5 = int5 + 1;
    }
    int22 = int22 + 28;
    ifSetSize(int22, ifGetHeight(Component.interface_18.component_18_27), 0, 0, Component.interface_18.component_18_27);
    ifSetSize(int22, int7 + 6, 0, 0, Component.interface_18.component_18_43);
    ifSetPosition(max(int22 + 1 - (int12 - int1) / 2, 0), 0, 1, 0, Component.interface_18.component_18_3);
}
