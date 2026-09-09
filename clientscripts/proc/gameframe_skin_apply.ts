/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gameframe_skin_apply]

function gameframe_skin_apply(intArg0: component, intArg1: number, intArg2: boolean): void {
    let int2: number = 0;
    let int3: boolean = false;
    let int4: component = -1;
    let int5: graphic = -1;
    let int6: colour = colour(0xFF8C00);

    if (varbit_option_gameframe_skin == 1) {
        int3 = true;
    }

    while (int2 < intArg1) {
        int4 = intArg0 + int2;
        int5 = ifGetGraphic(int4);
        if (int5 != -1) {
            ifSetGraphic(gameframe_skin_graphic(gameframe_skin_graphic_2012(int5)), int4);
        }
        int2 = int2 + 1;
    }

    switch (intArg0) {
        case Component.interface_746.component_746_0:
            if (int3 == true) {
                ifSetPosition(29, 5, 2, 0, Component.interface_746.component_746_190);
                ifSetSize(152, 152, 0, 0, Component.interface_746.component_746_190);
                ifSetPosition(22, 0, 2, 0, Component.interface_746.component_746_191);
                ifSetSize(164, 164, 0, 0, Component.interface_746.component_746_191);
                ifSetPosition(153, 5, 2, 0, Component.interface_746.component_746_192);
                ifSetSize(33, 33, 0, 0, Component.interface_746.component_746_192);
                ifSetPosition(148, 0, 2, 0, Component.interface_746.component_746_193);
            } else if (ifGetWidth(Component.interface_746.component_746_190) == 152) {
                ifSetPosition(31, 12, 2, 0, Component.interface_746.component_746_190);
                ifSetSize(154, 154, 0, 0, Component.interface_746.component_746_190);
                ifSetPosition(20, 1, 2, 0, Component.interface_746.component_746_191);
                ifSetSize(176, 176, 0, 0, Component.interface_746.component_746_191);
                ifSetPosition(154, 4, 2, 0, Component.interface_746.component_746_192);
                ifSetSize(35, 35, 0, 0, Component.interface_746.component_746_192);
                ifSetPosition(150, 0, 2, 0, Component.interface_746.component_746_193);
            }
            cs2_2968(Component.interface_746.component_746_108);
            if (int3 == true) {
                ifSetPosition(7, 4, 0, 0, Component.interface_746.component_746_209);
                ifSetSize(34, 34, 0, 0, Component.interface_746.component_746_209);
            } else if (ifGetWidth(Component.interface_746.component_746_209) == 34) {
                ifSetPosition(4, 0, 0, 0, Component.interface_746.component_746_209);
                ifSetSize(41, 41, 0, 0, Component.interface_746.component_746_209);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_38) == Graphic.topstat_alpha_glow_0) {
                ifSetGraphic(Graphic.aif_topstat_rest_glow_0, Component.interface_746.component_746_38);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_55) == Graphic.xp_token_0) {
                ifSetGraphic(Graphic.aif_xp_token_0, Component.interface_746.component_746_55);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_75) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_75);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_76) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_76);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_77) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_77);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_78) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_78);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_79) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_79);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_80) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_80);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_81) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_81);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_82) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_82);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_83) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_83);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_84) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_84);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_85) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_85);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_86) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_86);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_87) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_87);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_88) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_88);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_89) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_89);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_90) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_90);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_91) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_91);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_92) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_92);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_93) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_93);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_94) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_94);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_95) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_95);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_96) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_96);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_97) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_97);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_98) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_98);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_99) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_99);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_100) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_100);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_101) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_101);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_102) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_102);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_103) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_103);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_104) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_104);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_105) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_105);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_106) == Graphic.graphic_1835) {
                ifSetGraphic(Graphic.graphic_8547, Component.interface_746.component_746_106);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_192) == Graphic.compassmask_2) {
                ifSetGraphic(Graphic.compassmask, Component.interface_746.component_746_192);
            }
            if (int3 == false && ifGetGraphic(Component.interface_746.component_746_195) == Graphic.km_helpandexit21x21_3) {
                ifSetGraphic(Graphic.graphic_8553, Component.interface_746.component_746_195);
            }
            ifSetGraphic(-1, Component.interface_746.component_746_153);
            ifSetGraphic(-1, Component.interface_746.component_746_155);
            ifSetGraphic(-1, Component.interface_746.component_746_157);
            ifSetGraphic(-1, Component.interface_746.component_746_159);
            ifSetGraphic(-1, Component.interface_746.component_746_161);
            ifSetGraphic(-1, Component.interface_746.component_746_163);
            ifSetGraphic(-1, Component.interface_746.component_746_165);
            ifSetGraphic(-1, Component.interface_746.component_746_167);
            ifSetGraphic(-1, Component.interface_746.component_746_169);
            ifSetGraphic(-1, Component.interface_746.component_746_171);
            ifSetGraphic(-1, Component.interface_746.component_746_173);
            ifSetGraphic(-1, Component.interface_746.component_746_175);
            ifSetGraphic(-1, Component.interface_746.component_746_177);
            ifSetGraphic(-1, Component.interface_746.component_746_179);
            ifSetGraphic(-1, Component.interface_746.component_746_181);
            ifSetGraphic(-1, Component.interface_746.component_746_183);
            ifSetGraphic(-1, Component.interface_746.component_746_152);
            ifSetGraphic(-1, Component.interface_746.component_746_154);
            ifSetGraphic(-1, Component.interface_746.component_746_156);
            ifSetGraphic(-1, Component.interface_746.component_746_158);
            ifSetGraphic(-1, Component.interface_746.component_746_160);
            ifSetGraphic(-1, Component.interface_746.component_746_162);
            ifSetGraphic(-1, Component.interface_746.component_746_164);
            ifSetGraphic(-1, Component.interface_746.component_746_166);
            ifSetGraphic(-1, Component.interface_746.component_746_168);
            ifSetGraphic(-1, Component.interface_746.component_746_170);
            ifSetGraphic(-1, Component.interface_746.component_746_172);
            ifSetGraphic(-1, Component.interface_746.component_746_174);
            ifSetGraphic(-1, Component.interface_746.component_746_176);
            ifSetGraphic(-1, Component.interface_746.component_746_178);
            ifSetGraphic(-1, Component.interface_746.component_746_180);
            ifSetGraphic(-1, Component.interface_746.component_746_182);
            if (varc_168 != -1) {
                cs2_1387(varc_168);
            }
            break;
        case Component.interface_548.component_548_0:
            if (int3 == true) {
                ifSetPosition(35, 9, 0, 0, Component.interface_548.component_548_153);
                ifSetSize(152, 152, 0, 0, Component.interface_548.component_548_153);
            } else if (ifGetWidth(Component.interface_548.component_548_153) == 152) {
                ifSetPosition(34, 8, 0, 0, Component.interface_548.component_548_153);
                ifSetSize(154, 154, 0, 0, Component.interface_548.component_548_153);
            }

            if (varc_168 != -1) {
                cs2_1387(varc_168);
            }
            break;
        case Component.interface_320.component_320_0:
            if (int3 == true) {
                int6 = colour(0xFFFF00);
            }
            ifSetColour(int6, Component.interface_320.component_320_7);
            ifSetColour(int6, Component.interface_320.component_320_8);
            ifSetColour(int6, Component.interface_320.component_320_13);
            ifSetColour(int6, Component.interface_320.component_320_14);
            ifSetColour(int6, Component.interface_320.component_320_20);
            ifSetColour(int6, Component.interface_320.component_320_21);
            ifSetColour(int6, Component.interface_320.component_320_26);
            ifSetColour(int6, Component.interface_320.component_320_27);
            ifSetColour(int6, Component.interface_320.component_320_32);
            ifSetColour(int6, Component.interface_320.component_320_33);
            ifSetColour(int6, Component.interface_320.component_320_38);
            ifSetColour(int6, Component.interface_320.component_320_39);
            ifSetColour(int6, Component.interface_320.component_320_44);
            ifSetColour(int6, Component.interface_320.component_320_45);
            ifSetColour(int6, Component.interface_320.component_320_50);
            ifSetColour(int6, Component.interface_320.component_320_51);
            ifSetColour(int6, Component.interface_320.component_320_56);
            ifSetColour(int6, Component.interface_320.component_320_57);
            ifSetColour(int6, Component.interface_320.component_320_62);
            ifSetColour(int6, Component.interface_320.component_320_63);
            ifSetColour(int6, Component.interface_320.component_320_69);
            ifSetColour(int6, Component.interface_320.component_320_70);
            ifSetColour(int6, Component.interface_320.component_320_75);
            ifSetColour(int6, Component.interface_320.component_320_76);
            ifSetColour(int6, Component.interface_320.component_320_82);
            ifSetColour(int6, Component.interface_320.component_320_83);
            ifSetColour(int6, Component.interface_320.component_320_88);
            ifSetColour(int6, Component.interface_320.component_320_89);
            ifSetColour(int6, Component.interface_320.component_320_94);
            ifSetColour(int6, Component.interface_320.component_320_95);
            ifSetColour(int6, Component.interface_320.component_320_100);
            ifSetColour(int6, Component.interface_320.component_320_101);
            ifSetColour(int6, Component.interface_320.component_320_106);
            ifSetColour(int6, Component.interface_320.component_320_107);
            ifSetColour(int6, Component.interface_320.component_320_112);
            ifSetColour(int6, Component.interface_320.component_320_113);
            ifSetColour(int6, Component.interface_320.component_320_118);
            ifSetColour(int6, Component.interface_320.component_320_119);
            ifSetColour(int6, Component.interface_320.component_320_123);
            ifSetColour(int6, Component.interface_320.component_320_124);
            ifSetColour(int6, Component.interface_320.component_320_128);
            ifSetColour(int6, Component.interface_320.component_320_129);
            ifSetColour(int6, Component.interface_320.component_320_133);
            ifSetColour(int6, Component.interface_320.component_320_134);
            ifSetColour(int6, Component.interface_320.component_320_138);
            ifSetColour(int6, Component.interface_320.component_320_139);
            ifSetColour(int6, Component.interface_320.component_320_143);
            ifSetColour(int6, Component.interface_320.component_320_144);
            ifSetColour(int6, Component.interface_320.component_320_148);
            ifSetColour(int6, Component.interface_320.component_320_149);
            ifSetColour(int6, Component.interface_320.component_320_151);
            break;
        case Component.interface_667.component_667_0:
            ifSetHide(int3, Component.interface_667.component_667_5);
            ifSetHide(int3, Component.interface_667.component_667_6);
            ifSetHide(int3, Component.interface_667.component_667_65);
            ifSetHide(int3, Component.interface_667.component_667_66);
            ifSetHide(int3, Component.interface_667.component_667_67);
            ifSetHide(int3, Component.interface_667.component_667_68);
            ifSetHide(int3, Component.interface_667.component_667_69);
            ifSetHide(int3, Component.interface_667.component_667_70);
            ifSetHide(int3, Component.interface_667.component_667_71);
            ifSetHide(int3, Component.interface_667.component_667_72);
            ifSetHide(int3, Component.interface_667.component_667_73);
            ifSetHide(int3, Component.interface_667.component_667_74);
            ifSetHide(int3, Component.interface_667.component_667_75);
            ifSetHide(int3, Component.interface_667.component_667_76);
            ifSetHide(int3, Component.interface_667.component_667_77);
            ifSetHide(int3, Component.interface_667.component_667_78);
            ifSetHide(int3, Component.interface_667.component_667_79);
            ifSetHide(int3, Component.interface_667.component_667_80);
            ccDeleteAll(Component.interface_667.component_667_4);
            if (int3 == true) {
                ccCreate(Component.interface_667.component_667_4, 5, 0);
                ccSetPosition(0, 19, 1, 0);
                ccSetSize(32, 160, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccCreate(Component.interface_667.component_667_4, 5, 1);
                ccSetPosition(-54, 94, 1, 0);
                ccSetSize(32, 85, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccCreate(Component.interface_667.component_667_4, 5, 2);
                ccSetPosition(54, 94, 1, 0);
                ccSetSize(32, 85, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccSethflip(true);
                ccCreate(Component.interface_667.component_667_4, 5, 3);
                ccSetPosition(0, 42, 1, 0);
                ccSetSize(80, 32, 0, 0);
                ccSetGraphic(Graphic.graphic_822);
                ccSettiling(true);
                ccSetvflip(true);
                ccCreate(Component.interface_667.component_667_4, 5, 4);
                ccSetPosition(0, 81, 1, 0);
                ccSetSize(110, 32, 0, 0);
                ccSetGraphic(Graphic.graphic_822);
                ccSettiling(true);
                ccSetvflip(true);
            }
            break;
        case Component.interface_387.component_387_0:
            ifSetHide(int3, Component.interface_387.component_387_3);
            ifSetHide(int3, Component.interface_387.component_387_48);
            ifSetHide(int3, Component.interface_387.component_387_49);
            ifSetHide(int3, Component.interface_387.component_387_50);
            ifSetHide(int3, Component.interface_387.component_387_51);
            ifSetHide(int3, Component.interface_387.component_387_52);
            ifSetHide(int3, Component.interface_387.component_387_53);
            ifSetHide(int3, Component.interface_387.component_387_54);
            ifSetHide(int3, Component.interface_387.component_387_55);
            ifSetHide(int3, Component.interface_387.component_387_56);
            ifSetHide(int3, Component.interface_387.component_387_57);
            ifSetHide(int3, Component.interface_387.component_387_58);
            ifSetHide(int3, Component.interface_387.component_387_59);
            ifSetHide(int3, Component.interface_387.component_387_60);
            ifSetHide(int3, Component.interface_387.component_387_61);
            ifSetHide(int3, Component.interface_387.component_387_62);
            ifSetHide(int3, Component.interface_387.component_387_63);
            ifSetHide(int3, Component.interface_387.component_387_64);
            ccDeleteAll(Component.interface_387.component_387_2);
            if (int3 == true) {
                ccCreate(Component.interface_387.component_387_2, 5, 0);
                ccSetPosition(0, 20, 1, 0);
                ccSetSize(32, 160, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccCreate(Component.interface_387.component_387_2, 5, 1);
                ccSetPosition(-56, 95, 1, 0);
                ccSetSize(32, 85, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccCreate(Component.interface_387.component_387_2, 5, 2);
                ccSetPosition(56, 95, 1, 0);
                ccSetSize(32, 85, 0, 0);
                ccSetGraphic(Graphic.graphic_821);
                ccSettiling(true);
                ccSethflip(true);
                ccCreate(Component.interface_387.component_387_2, 5, 3);
                ccSetPosition(0, 43, 1, 0);
                ccSetSize(80, 32, 0, 0);
                ccSetGraphic(Graphic.graphic_822);
                ccSettiling(true);
                ccSetvflip(true);
                ccCreate(Component.interface_387.component_387_2, 5, 4);
                ccSetPosition(0, 82, 1, 0);
                ccSetSize(110, 32, 0, 0);
                ccSetGraphic(Graphic.graphic_822);
                ccSettiling(true);
                ccSetvflip(true);
            }
            break;
        case Component.interface_748.component_748_0:
            cs2_2654();
            break;
        case Component.interface_749.component_749_0:
            proc_topstat_prayer_button_update();
            break;
        case Component.interface_750.component_750_0:
            proc_topstat_run_button_update(Component.interface_750.component_750_4);
            break;
        case Component.interface_747.component_747_0:
            topstat_lore_button_update();
            break;
        case Component.interface_752.component_752_0:
            ccDeleteAll(Component.interface_752.component_752_2);
            cs2_3927(Component.interface_752.component_752_2, 0, 0);
            break;
    }

        ifSetHide(int3, Component.interface_261.component_261_0);
        ifSetHide(int3, Component.interface_261.component_261_1);
        ifSetHide(int3, Component.interface_261.component_261_2);
        ifSetHide(int3, Component.interface_261.component_261_3);
        ifSetHide(int3, Component.interface_261.component_261_4);

        ifSetHide(int3, Component.interface_884.component_884_2);

    switch (intArg0) {
        case Component.interface_749.component_749_0:
            if (int3 == false && ifGetGraphic(Component.interface_749.component_749_2) == Graphic.topstat_icon_1) {
                ifSetGraphic(Graphic.aif_topstat_icon_1, Component.interface_749.component_749_2);
            }
            break;
        case Component.interface_1214.component_1214_0:
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_0) == Graphic.graphic_8081) {
                ifSetGraphic(Graphic.window_texture, Component.interface_1214.component_1214_0);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_1) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_1);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_2) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_2);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_3) == Graphic.graphic_8066) {
                ifSetGraphic(Graphic.corner_frame_1_1, Component.interface_1214.component_1214_3);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_4) == Graphic.graphic_8066) {
                ifSetGraphic(Graphic.corner_frame_1_1, Component.interface_1214.component_1214_4);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_5) == Graphic.graphic_8071) {
                ifSetGraphic(Graphic.corner_frame_2_0, Component.interface_1214.component_1214_5);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_6) == Graphic.graphic_8073) {
                ifSetGraphic(Graphic.corner_frame_2_2, Component.interface_1214.component_1214_6);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_7) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_7);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_8) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_8);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_9) == Graphic.graphic_8081) {
                ifSetGraphic(Graphic.window_texture, Component.interface_1214.component_1214_9);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_10) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_10);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_11) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_11);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_12) == Graphic.graphic_8066) {
                ifSetGraphic(Graphic.corner_frame_1_1, Component.interface_1214.component_1214_12);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_13) == Graphic.graphic_8066) {
                ifSetGraphic(Graphic.corner_frame_1_1, Component.interface_1214.component_1214_13);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_14) == Graphic.graphic_8071) {
                ifSetGraphic(Graphic.corner_frame_2_0, Component.interface_1214.component_1214_14);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_15) == Graphic.graphic_8073) {
                ifSetGraphic(Graphic.corner_frame_2_2, Component.interface_1214.component_1214_15);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_16) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_16);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_17) == Graphic.graphic_8067) {
                ifSetGraphic(Graphic.corner_frame_1_2, Component.interface_1214.component_1214_17);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_18) == Graphic.graphic_8140) {
                ifSetGraphic(Graphic.intro_close_button_0, Component.interface_1214.component_1214_18);
            }
            if (int3 == false && ifGetGraphic(Component.interface_1214.component_1214_19) == Graphic.graphic_8085) {
                ifSetGraphic(Graphic.check_box_2_2, Component.interface_1214.component_1214_19);
            }
            break;
    }
}
