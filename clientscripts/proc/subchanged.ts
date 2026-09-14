/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,subchanged]

function proc_subchanged(): void {
    let int0: number = 0;
    let int1: component = -1;

    if (getWindowMode() >= 2) {
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_5392(Component.interface_752.component_752_2, 0, 0);
        if (ifGetHide(Component.interface_752.component_752_8) == 1 && (ifGetHide(Component.interface_752.component_752_3) == 0 || ifGetHide(Component.interface_752.component_752_7) == 0)) {
            ifSetHide(false, Component.interface_746.component_746_22);
            ifSetGraphic(Graphic.aif_chat_background, Component.interface_752.component_752_1);
            ifSetHide(false, Component.interface_752.component_752_1);
            ccDeleteAll(Component.interface_752.component_752_2);
            cs2_5392(Component.interface_752.component_752_2, 0, 0);
            ifSetAlpha(false, Component.interface_752.component_752_1);
        } else if (ifHasSub(Component.interface_752.component_752_13) == 1) {
            ifSetHide(false, Component.interface_746.component_746_22);
            ifSetHide(false, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_12) == 1) {
            ifSetHide(false, Component.interface_746.component_746_22);
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(false, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_11) == 1) {
            ifSetHide(false, Component.interface_746.component_746_22);
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(false, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_10) == 1) {
            ifSetHide(false, Component.interface_746.component_746_22);
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(false, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_752.component_752_1);
            ifSetAlpha(true, Component.interface_752.component_752_1);
            if (varbit_cutscene_status == 0) {
                ifSetGraphic(Graphic.chat_window, Component.interface_752.component_752_1);
            } else {
                ifSetGraphic(Graphic.graphic_1205, Component.interface_752.component_752_1);
            }
        } else if (ifHasSub(Component.interface_752.component_752_9) == 1) {
            if (varc_chat_view == -1) {
                ifSetHide(true, Component.interface_746.component_746_22);
                ifSetHide(true, Component.interface_746.component_746_49);
            } else {
                ifSetHide(false, Component.interface_746.component_746_22);
                ifSetHide(false, Component.interface_746.component_746_49);
            }
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(false, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_752.component_752_1);
            if (ifGetHide(Component.interface_137.component_137_0) == 0) {
                ifSetGraphic(Graphic.aif_chat_background, Component.interface_752.component_752_1);
                ifSetAlpha(false, Component.interface_752.component_752_1);
                ccDeleteAll(Component.interface_752.component_752_2);
                cs2_5392(Component.interface_752.component_752_2, 0, 0);
            } else {
                ccDeleteAll(Component.interface_752.component_752_2);
                cs2_5392(Component.interface_752.component_752_2, 22, 0);
                ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_1247), Component.interface_752.component_752_1);
                ifSetAlpha(true, Component.interface_752.component_752_1);
                ifSettiling(false, Component.interface_752.component_752_1);
                ifSetHide(true, Component.interface_137.component_137_51);
                ifSetHide(false, Component.interface_137.component_137_52);
                cs2_1301(Component.interface_137.component_137_58, Component.interface_137.component_137_57);
                ifSetTextShadow(true, Component.interface_137.component_137_55);
                ifSetColour(colour(0xFFFFFF), Component.interface_137.component_137_55);
                cs2_1558(false);
                rebuildchatbox();
            }
        }
        if (ifHasSub(Component.interface_746.component_746_109) == 1) {
            ifSetHide(true, Component.interface_746.component_746_57);
            ifSetHide(true, Component.interface_746.component_746_58);
            ifSetHide(true, Component.interface_746.component_746_21);
            ifSetHide(false, Component.interface_746.component_746_109);
            ifSetHide(true, Component.interface_746.component_746_110);
            ifSetHide(false, Component.interface_746.component_746_108);
            ifSetHide(true, Component.interface_746.component_746_111);
            ifSetHide(true, Component.interface_746.component_746_195);
        } else {
            ifSetHide(false, Component.interface_746.component_746_57);
            ifSetHide(false, Component.interface_746.component_746_58);
            if (varbit_6448 == 0) {
                ifSetHide(false, Component.interface_746.component_746_21);
            }
            ifSetHide(false, Component.interface_746.component_746_111);
            ifSetHide(false, Component.interface_746.component_746_195);
            if (ifHasSub(Component.interface_746.component_746_110) == 0) {
                ifSetHide(true, Component.interface_746.component_746_109);
            }
            cs2_71(varc_168);
            if (ifGetHide(Component.interface_746.component_746_112) == 0 || ifGetHide(Component.interface_746.component_746_113) == 0 || ifGetHide(Component.interface_746.component_746_114) == 0 || ifGetHide(Component.interface_746.component_746_115) == 0 || ifGetHide(Component.interface_746.component_746_116) == 0 || ifGetHide(Component.interface_746.component_746_117) == 0 || ifGetHide(Component.interface_746.component_746_118) == 0 || ifGetHide(Component.interface_746.component_746_119) == 0 || ifGetHide(Component.interface_746.component_746_120) == 0 || ifGetHide(Component.interface_746.component_746_121) == 0 || ifGetHide(Component.interface_746.component_746_122) == 0 || ifGetHide(Component.interface_746.component_746_123) == 0 || ifGetHide(Component.interface_746.component_746_124) == 0 || ifGetHide(Component.interface_746.component_746_125) == 0 || ifGetHide(Component.interface_746.component_746_126) == 0 || ifGetHide(Component.interface_746.component_746_127) == 0 || ifGetHide(Component.interface_746.component_746_129) == 0 || ifGetHide(Component.interface_746.component_746_130) == 0) {
                ifSetHide(false, Component.interface_746.component_746_108);
            } else {
                ifSetHide(true, Component.interface_746.component_746_108);
            }
            ifSetOnTimer(hook(cs2_2464, "iI", [clientClock(), event_com]), Component.interface_746.component_746_22);
        }
        ifSetHide(true, Component.interface_548.component_548_173);
        int0 = 0;
        while (int0 <= 15) {
            if (ifHasSub(cs2_8(int0)) == 1) {
                ifSetHide(false, cs2_121(int0));
                ifSetHide(false, cs2_2458(int0));
            } else {
                ifSetHide(true, cs2_121(int0));
                ifSetHide(true, cs2_2458(int0));
            }
            int0 = int0 + 1;
        }
        int1 = cs2_8(95);
        if (ifHasSubOverlay(int1, 662) == 1 || ifHasSubOverlay(int1, 663) == 1) {
            ifSetHide(false, Component.interface_747.component_747_9);
        } else {
            ifSetHide(true, Component.interface_747.component_747_9);
        }
        int0 = 0;
        ccDeleteAll(Component.interface_746.component_746_42);
        if (ifGetHide(Component.interface_746.component_746_58) == 1) {
            while (int0 <= 15) {
                if (ifFind(cs2_2459(int0)) == 1) {
                    ccSetParamInt(Param.glo3_sidecount, 0);
                }
                ifSetOnMouseOver(noHook(""), cs2_2459(int0));
                ifSetOnMouseRepeat(noHook(""), cs2_2459(int0));
                ifSetOnMouseLeave(noHook(""), cs2_2459(int0));
                ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8547), cs2_2459(int0));
                int0 = int0 + 1;
            }
        } else {
            while (int0 <= 15) {
                if (ifFind(cs2_2459(int0)) == 1) {
                    ccSetParamInt(Param.glo3_sidecount, 0);
                }
                if (ifGetHide(cs2_121(int0)) == 1) {
                    ifSetOnMouseOver(noHook(""), cs2_2459(int0));
                    ifSetOnMouseRepeat(noHook(""), cs2_2459(int0));
                    ifSetOnMouseLeave(noHook(""), cs2_2459(int0));
                    ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8547), cs2_2459(int0));
                } else {
                    ifSetOnMouseOver(hook(cs2_1292, "I1", [event_com, true]), cs2_2459(int0));
                    ifSetOnMouseRepeat(hook(cs2_5515, "IIs", [Component.interface_746.component_746_42, cs2_2459(int0), ifGetOp(1, cs2_2458(int0))]), cs2_2459(int0));
                    ifSetOnMouseLeave(hook(cs2_1292, "I1", [event_com, false]), cs2_2459(int0));
                }
                int0 = int0 + 1;
            }
        }
        cs2_1313();
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_0);
        ifSetSize(115, 35, 0, 0, Component.interface_745.component_745_0);
        ifSetPosition(80, 0, 0, 0, Component.interface_745.component_745_1);
        ifSetPosition(40, 0, 0, 0, Component.interface_745.component_745_2);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_3);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_4);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_5);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_6);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_1);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_2);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_3);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_4);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_5);
        ifSetSize(35, 35, 0, 0, Component.interface_745.component_745_6);
        ifSetGraphic(Graphic.overlay_multiway_big, Component.interface_745.component_745_1);
        ifSetGraphic(Graphic.graphic_1562, Component.interface_745.component_745_2);
        ifSetGraphic(Graphic.graphic_1579, Component.interface_745.component_745_3);
        ifSetGraphic(Graphic.graphic_1580, Component.interface_745.component_745_4);
        ifSetGraphic(Graphic.graphic_1581, Component.interface_745.component_745_6);
        if (varc_1701 == 1) {
            ifSetnoclickthrough(false, Component.interface_746.component_746_22);
        } else {
            ifSetnoclickthrough(true, Component.interface_746.component_746_22);
        }
    } else {
        if (varc_chat_view == -1 && varp_tutorial >= 1000) {
            varc_chat_view = 0;
            cs2_181(0);
            rebuildchatbox();
            cs2_89();
        }
        ifSetGraphic(Graphic.chat_background, Component.interface_752.component_752_1);
        ifSetHide(false, Component.interface_752.component_752_1);
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_1088(Component.interface_752.component_752_2, 0);
        ifSetAlpha(false, Component.interface_752.component_752_1);
        ifSettiling(true, Component.interface_752.component_752_1);
        if (ifHasSub(Component.interface_752.component_752_13) == 1) {
            ifSetHide(false, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
        } else if (ifHasSub(Component.interface_752.component_752_12) == 1) {
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(false, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
        } else if (ifHasSub(Component.interface_752.component_752_11) == 1) {
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(false, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
        } else if (ifHasSub(Component.interface_752.component_752_10) == 1) {
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(false, Component.interface_752.component_752_10);
            ifSetHide(true, Component.interface_752.component_752_9);
        } else if (ifHasSub(Component.interface_752.component_752_9) == 1) {
            ifSetHide(true, Component.interface_752.component_752_13);
            ifSetHide(true, Component.interface_752.component_752_12);
            ifSetHide(true, Component.interface_752.component_752_11);
            ifSetHide(true, Component.interface_752.component_752_10);
            ifSetHide(false, Component.interface_752.component_752_9);
            ifSetHide(false, Component.interface_137.component_137_51);
            ifSetHide(true, Component.interface_137.component_137_52);
            cs2_1301(Component.interface_137.component_137_58, Component.interface_137.component_137_57);
            ifSetTextShadow(false, Component.interface_137.component_137_55);
            ifSetColour(colour(0x000000), Component.interface_137.component_137_55);
            cs2_1558(false);
            rebuildchatbox();
        }
        if (ifHasSub(Component.interface_548.component_548_172) == 1) {
            ifSetHide(true, Component.interface_548.component_548_65);
            ifSetHide(true, Component.interface_548.component_548_66);
            ifSetHide(true, Component.interface_548.component_548_111);
            ifSetHide(true, Component.interface_548.component_548_128);
            ifSetHide(false, Component.interface_548.component_548_172);
            ifSetHide(true, Component.interface_548.component_548_173);
            ifSetHide(true, Component.interface_548.component_548_174);
            ifSetHide(true, Component.interface_548.component_548_159);
        } else {
            ifSetHide(false, Component.interface_548.component_548_65);
            ifSetHide(false, Component.interface_548.component_548_66);
            ifSetHide(false, Component.interface_548.component_548_111);
            ifSetHide(false, Component.interface_548.component_548_128);
            ifSetHide(false, Component.interface_548.component_548_174);
            ifSetHide(false, Component.interface_548.component_548_159);
            ifSetHide(true, Component.interface_746.component_746_109);
            if (ifHasSub(Component.interface_548.component_548_173) == 0) {
                ifSetHide(true, Component.interface_548.component_548_173);
            }
            cs2_71(varc_168);
            ifSetOnTimer(hook(cs2_2464, "iI", [clientClock(), event_com]), Component.interface_548.component_548_168);
        }
        int0 = 0;
        while (int0 <= 15) {
            if (ifHasSub(cs2_8(int0)) == 1) {
                ifSetHide(false, cs2_121(int0));
                ifSetHide(false, cs2_2458(int0));
            } else {
                ifSetHide(true, cs2_121(int0));
                ifSetHide(true, cs2_2458(int0));
            }
            int0 = int0 + 1;
        }
        int1 = cs2_8(95);
        if (ifHasSubOverlay(int1, 662) == 1 || ifHasSubOverlay(int1, 663) == 1) {
            ifSetHide(false, Component.interface_747.component_747_9);
        } else {
            ifSetHide(true, Component.interface_747.component_747_9);
        }
        int0 = 0;
        if (ifGetHide(Component.interface_548.component_548_65) == 1 && ifGetHide(Component.interface_548.component_548_111) == 1) {
            while (int0 <= 15) {
                ifSetOnMouseOver(noHook(""), cs2_2459(int0));
                ifSetOnMouseLeave(noHook(""), cs2_2459(int0));
                ifSetGraphic(Graphic.graphic_1835, cs2_2459(int0));
                int0 = int0 + 1;
            }
        } else {
            while (int0 <= 15) {
                if (ifGetHide(cs2_121(int0)) == 1) {
                    ifSetOnMouseOver(noHook(""), cs2_2459(int0));
                    ifSetOnMouseLeave(noHook(""), cs2_2459(int0));
                    ifSetGraphic(Graphic.graphic_1835, cs2_2459(int0));
                } else {
                    ifSetOnMouseOver(hook(cs2_2462, "I1", [event_com, true]), cs2_2459(int0));
                    ifSetOnMouseLeave(hook(cs2_2462, "I1", [event_com, false]), cs2_2459(int0));
                }
                int0 = int0 + 1;
            }
        }
        cs2_1337();
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_0);
        ifSetSize(82, 25, 0, 0, Component.interface_745.component_745_0);
        ifSetPosition(57, 0, 0, 0, Component.interface_745.component_745_1);
        ifSetPosition(28, 0, 0, 0, Component.interface_745.component_745_2);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_3);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_4);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_5);
        ifSetPosition(0, 0, 0, 0, Component.interface_745.component_745_6);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_1);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_2);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_3);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_4);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_5);
        ifSetSize(25, 25, 0, 0, Component.interface_745.component_745_6);
        ifSetGraphic(Graphic.overlay_multiway, Component.interface_745.component_745_1);
        ifSetGraphic(Graphic.assist_overlay, Component.interface_745.component_745_2);
        ifSetGraphic(Graphic.graphic_1576, Component.interface_745.component_745_3);
        ifSetGraphic(Graphic.graphic_1578, Component.interface_745.component_745_4);
        ifSetGraphic(Graphic.graphic_1577, Component.interface_745.component_745_6);
    }
    cs2_722();
}
