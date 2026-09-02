/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3276

function cs2_3276(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 100;
    let int4: number = 25;
    let int5: number = 25;
    let int6: number = 50;
    let int7: number = 25;
    let int8: number = 25;
    let int9: number = 50;
    let int10: number = 25;
    let int11: number = 25;
    let int12: number = 50;
    let int13: number = 100;
    let int14: number = 50;
    let int15: number = 25;
    let int16: number = 150;
    let int17: number = 25;
    let int18: number = 100;
    let int19: number = 25;
    let int20: number = 100;
    let int21: number = 25;
    let int22: number = 50;
    let int23: number = 25;
    let int24: number = 50;
    let int25: number = 25;
    let int26: number = 25;
    let int27: number = 25;
    let int28: number = 150;
    let int29: number = 100;
    let int30: number = 200;
    let int31: number = 100;

    varc_rand_display_stage = 2000;
    varc_1185 = max(varc_1185 - 2, 0);
    ifSetTrans(varc_1185, Component.interface_933.component_933_251);
    ifSetTrans(0, Component.interface_933.component_933_297);
    ifSetTrans(0, Component.interface_933.component_933_298);
    ifSetTrans(0, Component.interface_933.component_933_299);
    let int32: number = 0;

    if (varc_1188 == 2) {
        int32 = 792;
    } else if (varc_1188 == 3) {
        int32 = 1583;
    }
    let int33: number = scale(varc_1195, 10000, 1267);
    let [int34, int35, int36] = cs2_3273();
    let int37: number = int36;
    let int38: number = cs2_3274();
    let int39: number = 10000 - min(varbit_rand_deaths, 6) * 1000;
    ifSetHide(false, Component.interface_933.component_933_192);
    ifSetHide(false, Component.interface_933.component_933_17);
    ifSetHide(false, Component.interface_933.component_933_187);
    ifSetHide(false, Component.interface_933.component_933_240);

    if (varc_1187 < varc_1319) {
        ifSetText("Floor " + tostring(varc_1187) + ":", Component.interface_933.component_933_240);
        ifSetColour(colour(0xA00000), Component.interface_933.component_933_240);
    } else {
        ifSetText("Floor " + tostring(varc_1319) + ":", Component.interface_933.component_933_240);
    }
    ifSetHide(false, Component.interface_933.component_933_22);
    ifSetSize(ifGetWidth(Component.interface_933.component_933_23) + 5, ifGetHeight(Component.interface_933.component_933_23) + 5, 0, 0, Component.interface_933.component_933_23);
    soundSynth(Sound.sound_8802, 1, 0);
    ifSetTrans(min(255, ifGetTrans(Component.interface_933.component_933_23) + 30), Component.interface_933.component_933_23);
    ifSetHide(false, Component.interface_933.component_933_241);
    ifSetText(tostring(scale((varc_1237 + 5) / 10, 100, int3)), Component.interface_933.component_933_241);
    ifSetHide(false, Component.interface_933.component_933_190);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_190);
    ifSetHide(false, Component.interface_933.component_933_188);
    ifSetHide(false, Component.interface_933.component_933_227);

    if (mapMembers() == 1) {
        ifSetText("Prestige " + tostring(min(60, max(varbit_rand_current_progress, varbit_rand_last_progress))), Component.interface_933.component_933_227);
    } else {
        ifSetText("Prestige " + tostring(min(35, max(varbit_rand_current_progress, varbit_rand_last_progress))), Component.interface_933.component_933_227);
    }
    ifSetHide(false, Component.interface_933.component_933_21);
    ifSetSize(ifGetWidth(Component.interface_933.component_933_24) + 5, ifGetHeight(Component.interface_933.component_933_24) + 5, 0, 0, Component.interface_933.component_933_24);
    ifSetTrans(255, Component.interface_933.component_933_24);
    ifSetHide(false, Component.interface_933.component_933_228);
    ifSetText(tostring(scale((varc_1238 + 5) / 10, 100, int3)), Component.interface_933.component_933_228);
    ifSetHide(false, Component.interface_933.component_933_191);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_191);
    ifSetHide(false, Component.interface_933.component_933_189);
    ifSetHide(false, Component.interface_933.component_933_214);
    ifSetHide(false, Component.interface_933.component_933_20);
    ifSetSize(ifGetWidth(Component.interface_933.component_933_25) + 5, ifGetHeight(Component.interface_933.component_933_25) + 5, 0, 0, Component.interface_933.component_933_25);
    ifSetTrans(0, Component.interface_933.component_933_25);
    ifSetHide(false, Component.interface_933.component_933_215);
    ifSetText(tostring(scale((varc_1239 + 5) / 10, 100, int3)), Component.interface_933.component_933_215);
    ifSetHide(true, Component.interface_933.component_933_186);
    ifSetHide(false, Component.interface_933.component_933_19);
    ifSetText(tostring(scale((varc_1239 + 5) / 10, 100, int3)), Component.interface_933.component_933_39);
    ifSetTrans(255, Component.interface_933.component_933_37);
    ifSetHide(false, Component.interface_933.component_933_83);
    ifSetHide(false, Component.interface_933.component_933_18);
    ifSetHide(false, Component.interface_933.component_933_53);
    ifSetHide(false, Component.interface_933.component_933_54);
    ifSetHide(false, Component.interface_933.component_933_68);
    ifSetHide(false, Component.interface_933.component_933_69);
    ifSetHide(false, Component.interface_933.component_933_70);
    ifSetHide(false, Component.interface_933.component_933_71);
    ifSetHide(false, Component.interface_933.component_933_72);
    ifSetHide(false, Component.interface_933.component_933_73);
    ifSetHide(false, Component.interface_933.component_933_74);
    [int34, int35, int36] = cs2_3273();

    if (varc_1188 <= 1) {
        ifSetTrans(0, Component.interface_933.component_933_68);
        ifSetText("+0%", Component.interface_933.component_933_74);
    } else if (varc_1188 == 2) {
        ifSetTrans(0, Component.interface_933.component_933_69);
        ifSetText("+" + tostring(792 / 100) + "%", Component.interface_933.component_933_74);
    } else if (varc_1188 > 2) {
        ifSetTrans(0, Component.interface_933.component_933_70);
        ifSetText("+" + tostring(1583 / 100) + "%", Component.interface_933.component_933_74);
    }
    ifSetHide(false, Component.interface_933.component_933_55);
    ifSetHide(false, Component.interface_933.component_933_64);
    ifSetHide(false, Component.interface_933.component_933_75);
    ifSetSize(scale(scale(varc_1195, 10000, 16384), 100, int3), 16384, 2, 2, Component.interface_933.component_933_172);
    let int40: number = 10000 + int32;
    let int41: number = 10000 + int32 + int33;

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_75);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_75);
    }
    ifSetText(tostring((int40 + scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_96);
    ifSetSize(scale(8192, 100, (int40 + scale(int3, 100, int41 - int40) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
    ifSetHide(false, Component.interface_933.component_933_56);
    ifSetHide(false, Component.interface_933.component_933_57);
    ifSetHide(false, Component.interface_933.component_933_78);
    ifSetHide(false, Component.interface_933.component_933_80);
    ifSetHide(false, Component.interface_933.component_933_59);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_78);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_80);
    [int34, int35, int36] = cs2_3273();
    ifSetText(tostring(int34) + " : " + tostring(int35), Component.interface_933.component_933_57);
    int40 = 10000 + int32 + int33;
    int41 = 10000 + int32 + int33 + int37;

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_59);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_59);
    }
    ifSetHide(false, Component.interface_933.component_933_61);
    ifSetHide(false, Component.interface_933.component_933_76);
    int40 = 10000 + int32 + int33 + int37;
    int41 = 10000 + int32 + int33 + int37 + varc_1236;

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_76);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_76);
    }
    ifSetHide(false, Component.interface_933.component_933_62);
    ifSetHide(false, Component.interface_933.component_933_58);
    ifSetHide(false, Component.interface_933.component_933_79);
    ifSetHide(false, Component.interface_933.component_933_81);
    ifSetHide(false, Component.interface_933.component_933_60);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_79);
    ifSetTrans(255 - int3 * 255 / 100, Component.interface_933.component_933_81);
    ifSetText(tostring(scale(varc_1320, 100, int3)), Component.interface_933.component_933_58);
    int40 = 10000 + int32 + int33 + int37 + varc_1236;
    int41 = scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38);

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_60);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_60);
    }
    ifSetHide(false, Component.interface_933.component_933_63);
    ifSetHide(false, Component.interface_933.component_933_77);
    int40 = scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38);
    int41 = scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275());

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_77);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_77);
    }
    ifSetHide(false, Component.interface_933.component_933_65);
    ifSetHide(false, Component.interface_933.component_933_66);
    ifSetHide(false, Component.interface_933.component_933_67);

    if (varbit_rand_deaths != 0) {
        switch (varbit_rand_deaths) {
            case 1:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_146);
                break;
            case 2:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_146);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_147);
                break;
            case 3:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_147);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_148);
                break;
            case 4:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_148);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_149);
                break;
            case 5:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_149);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_150);
                break;
            case 6:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_150);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_151);
                break;
            case 7:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_151);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_152);
                break;
            case 8:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_152);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_153);
                break;
            case 9:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_153);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_154);
                break;
            case 10:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_154);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_155);
                break;
            case 11:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetHide(false, Component.interface_933.component_933_156);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_155);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_156);
                break;
            case 12:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetHide(false, Component.interface_933.component_933_156);
                ifSetHide(false, Component.interface_933.component_933_157);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_156);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_157);
                break;
            case 13:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetHide(false, Component.interface_933.component_933_156);
                ifSetHide(false, Component.interface_933.component_933_157);
                ifSetHide(false, Component.interface_933.component_933_158);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_157);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_158);
                break;
            case 14:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetHide(false, Component.interface_933.component_933_156);
                ifSetHide(false, Component.interface_933.component_933_157);
                ifSetHide(false, Component.interface_933.component_933_158);
                ifSetHide(false, Component.interface_933.component_933_159);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_158);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_159);
                break;
            case 15:
                ifSetHide(false, Component.interface_933.component_933_146);
                ifSetHide(false, Component.interface_933.component_933_147);
                ifSetHide(false, Component.interface_933.component_933_148);
                ifSetHide(false, Component.interface_933.component_933_149);
                ifSetHide(false, Component.interface_933.component_933_150);
                ifSetHide(false, Component.interface_933.component_933_151);
                ifSetHide(false, Component.interface_933.component_933_152);
                ifSetHide(false, Component.interface_933.component_933_153);
                ifSetHide(false, Component.interface_933.component_933_154);
                ifSetHide(false, Component.interface_933.component_933_155);
                ifSetHide(false, Component.interface_933.component_933_156);
                ifSetHide(false, Component.interface_933.component_933_157);
                ifSetHide(false, Component.interface_933.component_933_158);
                ifSetHide(false, Component.interface_933.component_933_159);
                ifSetHide(false, Component.interface_933.component_933_160);
                ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_159);
                ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_160);
                break;
        }
    } else {
        ifSetText("n/a", Component.interface_933.component_933_67);
        varc_rand_display_stage = varc_rand_display_stage + 2;
    }
    int40 = scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275());
    int41 = scale(scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275()), 10000, int39);

    if (int41 >= int40) {
        ifSetText("+" + tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_67);
    } else {
        ifSetText(tostring((scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_67);
    }
    ifSetHide(true, Component.interface_933.component_933_53);

    if (varc_1321 > 0) {
        ifSetHide(false, Component.interface_933.component_933_84);
        ifSetText("Unbalanced party penalty: x" + tostring((10000 - varc_1321 + 50) / 100) + "%", Component.interface_933.component_933_94);
    }
    int40 = scale(scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275()), 10000, int39);
    int41 = scale(scale(scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275()), 10000, int39), 10000, 10000 - varc_1321);
    ifSetText(tostring((int40 + scale(int3, 100, int41 - int40) + 50) / 100) + "%", Component.interface_933.component_933_96);
    ifSetSize(scale(8192, 100, (int40 + scale(int3, 100, int41 - int40) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
    ifSetHide(true, Component.interface_933.component_933_13);
    ifSetHide(true, Component.interface_933.component_933_16);
    ifSetHide(true, Component.interface_933.component_933_14);
    ifSetHide(true, Component.interface_933.component_933_15);
    ifSetText(tostring(varc_1239), Component.interface_933.component_933_39);
    int40 = varc_1239;
    int41 = scale(scale(scale(scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275()), 10000, int39), 10000, 10000 - varc_1321), 10000, varc_1239);

    if (int3 % 5 == 0 && ifGetY(Component.interface_933.component_933_84) != 138) {
        ifSetPosition(ifGetX(Component.interface_933.component_933_84), ifGetY(Component.interface_933.component_933_84) + 1, 0, 0, Component.interface_933.component_933_84);
    }
    ifSetSize(183, scale(80, 100, int3), 0, 0, Component.interface_933.component_933_111);
    ifSetText(tostring((int40 + scale(int3, 100, int41 - int40) + 5) / 10) + "%", Component.interface_933.component_933_39);
    int40 = varc_1239;
    int41 = scale(scale(scale(scale(scale(10000 + int32 + int33 + int37 + varc_1236, 10000, int38), 10000, cs2_3275()), 10000, int39), 10000, 10000 - varc_1321), 10000, varc_1239);
    ifSetText(tostring((int40 + scale(int3, 100, int41 - int40) + 5) / 100) + "%", Component.interface_933.component_933_41);
    ifSetHide(true, Component.interface_933.component_933_16);
    ifSetHide(true, Component.interface_933.component_933_14);
    ifSetHide(true, Component.interface_933.component_933_15);

    if (varp_1780 < 2000000000) {
        ifSetText(tostring((int40 + scale(int3, 100, int41 - int40) + 5) / 100) + "%", Component.interface_933.component_933_41);
    } else {
        ifSetText("n/a", Component.interface_933.component_933_41);
    }
    ifSetHide(true, Component.interface_933.component_933_20);
    ifSetHide(true, Component.interface_933.component_933_21);
    ifSetHide(true, Component.interface_933.component_933_22);
    cs2_949();
}
