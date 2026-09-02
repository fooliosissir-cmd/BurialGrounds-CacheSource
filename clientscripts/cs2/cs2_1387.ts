/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1387

function cs2_1387(intArg0: number): void {
    if (varc_has_displayname_client == 0 && intArg0 != 99) {
        return;
    }

    if (getWindowMode() >= 2) {
        if (ifHasSub(Component.interface_746.component_746_109) == 1) {
            if (intArg0 != 98 || ifHasSub(Component.interface_746.component_746_110) == 0) {
                ifSetHide(false, Component.interface_746.component_746_109);
                ifSetHide(true, Component.interface_746.component_746_110);
                ifSetHide(false, Component.interface_746.component_746_108);
                ifSetHide(true, Component.interface_746.component_746_111);
            } else {
                ifSetHide(true, Component.interface_746.component_746_109);
                ifSetHide(false, Component.interface_746.component_746_110);
                ifSetHide(false, Component.interface_746.component_746_108);
                ifSetHide(true, Component.interface_746.component_746_111);
            }
        } else {
            ifSetHide(true, Component.interface_746.component_746_109);
            ifSetHide(false, Component.interface_746.component_746_111);
            switch (intArg0) {
                case 0:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_75);
                    ifSetHide(false, Component.interface_746.component_746_112);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_152);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_153);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 1:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_76);
                    ifSetHide(false, Component.interface_746.component_746_113);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_154);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_155);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 2:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_77);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_156);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_157);
                    ifSetHide(false, Component.interface_746.component_746_114);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 3:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_78);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_158);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_159);
                    ifSetHide(false, Component.interface_746.component_746_115);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 4:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_79);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_160);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_161);
                    ifSetHide(false, Component.interface_746.component_746_116);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 5:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_80);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_162);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_163);
                    ifSetHide(false, Component.interface_746.component_746_117);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 6:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_81);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_164);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_165);
                    ifSetHide(false, Component.interface_746.component_746_118);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 7:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_82);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_166);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_167);
                    ifSetHide(false, Component.interface_746.component_746_119);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 8:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_83);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_168);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_169);
                    ifSetHide(false, Component.interface_746.component_746_120);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 9:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_84);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_170);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_171);
                    ifSetHide(false, Component.interface_746.component_746_121);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 10:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_85);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_172);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_173);
                    ifSetHide(false, Component.interface_746.component_746_122);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 11:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_86);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_174);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_175);
                    ifSetHide(false, Component.interface_746.component_746_123);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 12:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_87);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_176);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_177);
                    ifSetHide(false, Component.interface_746.component_746_124);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 13:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_88);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_178);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_179);
                    ifSetHide(false, Component.interface_746.component_746_125);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 14:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_89);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_180);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_181);
                    ifSetHide(false, Component.interface_746.component_746_126);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 15:
                    ifSetGraphic(Graphic.graphic_8548, Component.interface_746.component_746_90);
                    ifSetGraphic(Graphic.graphic_8551, Component.interface_746.component_746_182);
                    ifSetGraphic(Graphic.graphic_8550, Component.interface_746.component_746_183);
                    ifSetHide(false, Component.interface_746.component_746_127);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 98:
                    ifSetHide(false, Component.interface_746.component_746_110);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 95:
                    ifSetHide(false, Component.interface_746.component_746_129);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
                case 99:
                    ifSetHide(false, Component.interface_746.component_746_130);
                    ifSetHide(false, Component.interface_746.component_746_108);
                    break;
            }
        }
    } else if (ifHasSub(Component.interface_548.component_548_172) == 1) {
        if (intArg0 != 98 || ifHasSub(Component.interface_548.component_548_173) == 0) {
            ifSetHide(false, Component.interface_548.component_548_172);
            ifSetHide(true, Component.interface_548.component_548_173);
            ifSetHide(true, Component.interface_548.component_548_174);
        } else {
            ifSetHide(true, Component.interface_548.component_548_172);
            ifSetHide(false, Component.interface_548.component_548_173);
            ifSetHide(true, Component.interface_548.component_548_174);
        }
    } else {
        ifSetHide(true, Component.interface_548.component_548_172);
        ifSetHide(false, Component.interface_548.component_548_174);
        switch (intArg0) {
            case 0:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_112);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_129);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_130);
                ifSetHide(false, Component.interface_548.component_548_176);
                break;
            case 1:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_113);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_131);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_132);
                ifSetHide(false, Component.interface_548.component_548_177);
                break;
            case 2:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_114);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_133);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_134);
                ifSetHide(false, Component.interface_548.component_548_178);
                break;
            case 3:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_115);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_135);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_136);
                ifSetHide(false, Component.interface_548.component_548_179);
                break;
            case 4:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_116);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_137);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_138);
                ifSetHide(false, Component.interface_548.component_548_180);
                break;
            case 5:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_117);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_139);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_140);
                ifSetHide(false, Component.interface_548.component_548_181);
                break;
            case 6:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_118);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_141);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_142);
                ifSetHide(false, Component.interface_548.component_548_182);
                break;
            case 7:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_119);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_143);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_144);
                ifSetHide(false, Component.interface_548.component_548_183);
                break;
            case 8:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_83);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_67);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_68);
                ifSetHide(false, Component.interface_548.component_548_184);
                break;
            case 9:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_84);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_69);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_70);
                ifSetHide(false, Component.interface_548.component_548_185);
                break;
            case 10:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_85);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_71);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_72);
                ifSetHide(false, Component.interface_548.component_548_186);
                break;
            case 11:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_86);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_73);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_74);
                ifSetHide(false, Component.interface_548.component_548_187);
                break;
            case 12:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_87);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_75);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_76);
                ifSetHide(false, Component.interface_548.component_548_188);
                break;
            case 13:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_88);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_77);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_78);
                ifSetHide(false, Component.interface_548.component_548_189);
                break;
            case 14:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_89);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_79);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_80);
                ifSetHide(false, Component.interface_548.component_548_190);
                break;
            case 15:
                ifSetGraphic(Graphic.graphic_1836, Component.interface_548.component_548_90);
                ifSetGraphic(Graphic.graphic_1841, Component.interface_548.component_548_81);
                ifSetGraphic(Graphic.graphic_1840, Component.interface_548.component_548_82);
                ifSetHide(false, Component.interface_548.component_548_191);
                break;
            case 98:
                ifSetHide(false, Component.interface_548.component_548_173);
                break;
            case 95:
                ifSetHide(false, Component.interface_548.component_548_193);
                break;
            case 99:
                ifSetHide(false, Component.interface_548.component_548_194);
                break;
        }
    }
}
