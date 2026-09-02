/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_interface_update_v2]

function rand_interface_update_v2(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 25;
    let int7: number = 25;
    let int8: number = 50;
    let int9: number = 25;
    let int10: number = 25;
    let int11: number = 50;
    let int12: number = 25;
    let int13: number = 25;
    let int14: number = 50;
    let int15: number = 100;
    let int16: number = 50;
    let int17: number = 25;
    let int18: number = 150;
    let int19: number = 25;
    let int20: number = 100;
    let int21: number = 25;
    let int22: number = 100;
    let int23: number = 25;
    let int24: number = 50;
    let int25: number = 25;
    let int26: number = 50;
    let int27: number = 25;
    let int28: number = 25;
    let int29: number = 25;
    let int30: number = 150;
    let int31: number = 100;
    let int32: number = 200;
    let int33: number = 100;

    varc_1185 = max(varc_1185 - 2, 0);
    ifSetTrans(varc_1185, Component.interface_933.component_933_251);
    ifSetTrans(255 - varc_1185, Component.interface_933.component_933_297);
    ifSetTrans(255 - varc_1185, Component.interface_933.component_933_298);
    ifSetTrans(255 - varc_1185, Component.interface_933.component_933_299);
    let int34: number = 0;

    if (varc_1188 == 2) {
        int34 = 792;
    } else if (varc_1188 == 3) {
        int34 = 1583;
    }
    let int35: number = scale(varc_1195, 10000, 1267);
    let [int36, int37, int38] = cs2_3273();
    let int39: number = int38;
    let int40: number = cs2_3274();
    let int41: number = 10000 - min(varbit_rand_deaths, 6) * 1000;

    if (varc_1185 == 0 && varc_1192 != 0) {
        if (varc_rand_display_stage < 350) {
            if (ifGetTrans(Component.interface_933.component_933_186) <= 31) {
                varc_1189 = 7;
            } else if (ifGetTrans(Component.interface_933.component_933_186) > 220) {
                varc_1189 = -7;
            }
            ifSetTrans(ifGetTrans(Component.interface_933.component_933_186) + varc_1189, Component.interface_933.component_933_186);
        } else if (varc_rand_display_stage >= 350 && varc_rand_display_stage < 400) {
            if (varc_rand_display_stage == 350) {
                ifSetTrans(255, Component.interface_933.component_933_186);
            }
            if (ifGetTrans(Component.interface_933.component_933_37) <= 31) {
                varc_1189 = 7;
            } else if (ifGetTrans(Component.interface_933.component_933_37) > 220) {
                varc_1189 = -7;
            }
            ifSetTrans(ifGetTrans(Component.interface_933.component_933_37) + varc_1189, Component.interface_933.component_933_37);
        } else if (varc_rand_display_stage >= 400 && varc_rand_display_stage < 1350) {
            if (varc_rand_display_stage == 400) {
                ifSetTrans(255, Component.interface_933.component_933_37);
            }
            if (ifGetTrans(Component.interface_933.component_933_53) <= 31) {
                varc_1189 = 7;
            } else if (ifGetTrans(Component.interface_933.component_933_53) > 220) {
                varc_1189 = -7;
            }
            ifSetTrans(ifGetTrans(Component.interface_933.component_933_53) + varc_1189, Component.interface_933.component_933_53);
        } else if (varc_rand_display_stage >= 1350 && varc_rand_display_stage < 1600) {
            if (varc_rand_display_stage == 1350) {
                ifSetTrans(255, Component.interface_933.component_933_53);
            }
            if (ifGetTrans(Component.interface_933.component_933_37) <= 31) {
                varc_1189 = 7;
            } else if (ifGetTrans(Component.interface_933.component_933_37) > 220) {
                varc_1189 = -7;
            }
            ifSetTrans(ifGetTrans(Component.interface_933.component_933_37) + varc_1189, Component.interface_933.component_933_37);
        }
        if (varc_rand_display_stage < int6) {
            ifSetHide(false, Component.interface_933.component_933_192);
            ifSetHide(false, Component.interface_933.component_933_17);
            if (varc_rand_display_stage == 0) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7) {
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
            if (varc_rand_display_stage == int6) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
            ifSetTrans(min(255, ifGetTrans(Component.interface_933.component_933_23) + 30), Component.interface_933.component_933_23);
        } else if (varc_rand_display_stage < int6 + int7 + int8) {
            int5 = scale(varc_rand_display_stage - (int6 + int7) + 1, int8, 100);
            if (int5 == 0) {
                varc_1270 = 0;
            }
            ifSetHide(false, Component.interface_933.component_933_241);
            ifSetText(tostring(scale((varc_1237 + 5) / 10, 100, int5)), Component.interface_933.component_933_241);
            if (scale((varc_1237 + 5) / 10, 100, int5) != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = scale((varc_1237 + 5) / 10, 100, int5);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9) {
            ifSetHide(false, Component.interface_933.component_933_190);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8) + 1, int9, 100);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_190);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10) {
            ifSetHide(false, Component.interface_933.component_933_188);
            ifSetHide(false, Component.interface_933.component_933_227);
            if (mapMembers() == 1) {
                ifSetText("Prestige " + tostring(min(60, max(varbit_rand_current_progress, varbit_rand_last_progress))), Component.interface_933.component_933_227);
            } else {
                ifSetText("Prestige " + tostring(min(35, max(varbit_rand_current_progress, varbit_rand_last_progress))), Component.interface_933.component_933_227);
            }
            ifSetHide(false, Component.interface_933.component_933_21);
            ifSetSize(ifGetWidth(Component.interface_933.component_933_24) + 5, ifGetHeight(Component.interface_933.component_933_24) + 5, 0, 0, Component.interface_933.component_933_24);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
            ifSetTrans(min(255, ifGetTrans(Component.interface_933.component_933_24) + 30), Component.interface_933.component_933_24);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11) {
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10) + 1, int11, 100);
            if (int5 == 0) {
                varc_1270 = 0;
            }
            ifSetHide(false, Component.interface_933.component_933_228);
            ifSetText(tostring(scale((varc_1238 + 5) / 10, 100, int5)), Component.interface_933.component_933_228);
            if (scale((varc_1238 + 5) / 10, 100, int5) != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = scale((varc_1238 + 5) / 10, 100, int5);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12) {
            ifSetHide(false, Component.interface_933.component_933_191);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11) + 1, int12, 100);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_191);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13) {
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12) + 1, int13, 100);
            ifSetHide(false, Component.interface_933.component_933_189);
            ifSetHide(false, Component.interface_933.component_933_214);
            ifSetHide(false, Component.interface_933.component_933_20);
            ifSetSize(ifGetWidth(Component.interface_933.component_933_25) + 5, ifGetHeight(Component.interface_933.component_933_25) + 5, 0, 0, Component.interface_933.component_933_25);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
            ifSetTrans(min(255, ifGetTrans(Component.interface_933.component_933_25) + 30), Component.interface_933.component_933_25);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14) {
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13) + 1, int14, 100);
            if (int5 == 0) {
                varc_1270 = 0;
            }
            ifSetHide(false, Component.interface_933.component_933_215);
            ifSetText(tostring(scale((varc_1239 + 5) / 10, 100, int5)), Component.interface_933.component_933_215);
            if (scale((varc_1239 + 5) / 10, 100, int5) != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = scale((varc_1239 + 5) / 10, 100, int5);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15) {
            ifSetHide(true, Component.interface_933.component_933_186);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14) + 1, int15, 100);
            if (int5 == 0) {
                varc_1270 = 0;
            }
            ifSetHide(false, Component.interface_933.component_933_19);
            ifSetText(tostring(scale((varc_1239 + 5) / 10, 100, int5)), Component.interface_933.component_933_39);
            if (scale((varc_1239 + 5) / 10, 100, int5) != varc_1270) {
                soundSynth(Sound.sound_9243, 1, 0);
                varc_1270 = scale((varc_1239 + 5) / 10, 100, int5);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16) {
            ifSetTrans(255, Component.interface_933.component_933_37);
            ifSetHide(false, Component.interface_933.component_933_83);
            ifSetHide(false, Component.interface_933.component_933_18);
            ifSetHide(false, Component.interface_933.component_933_53);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17) {
            ifSetHide(false, Component.interface_933.component_933_54);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18) {
            ifSetHide(false, Component.interface_933.component_933_68);
            ifSetHide(false, Component.interface_933.component_933_69);
            ifSetHide(false, Component.interface_933.component_933_70);
            ifSetHide(false, Component.interface_933.component_933_71);
            ifSetHide(false, Component.interface_933.component_933_72);
            ifSetHide(false, Component.interface_933.component_933_73);
            ifSetHide(false, Component.interface_933.component_933_74);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17) {
                soundSynth(Sound.sound_8806, 1, 0);
            }
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
            [int36, int37, int38] = cs2_3273();
            if (int36 < 3) {
                ifSetHide(false, Component.interface_933.component_933_82);
            }
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17) + 1, int18 / 3, 100);
            if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 / 3) {
                if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 / 3) {
                    soundSynth(Sound.sound_8802, 1, 0);
                }
                ifSetTrans(min(200, 255 - int5 * 255 / 100), Component.interface_933.component_933_68);
                ifSetText("+0%", Component.interface_933.component_933_74);
                if (int5 == 0) {
                    soundSynth(Sound.sound_8806, 1, 0);
                }
                if (varc_rand_display_stage == 475) {
                    soundSynth(Sound.sound_9241, 1, 0);
                }
            } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 / 3 * 2 && varc_1188 > 1) {
                if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 / 3 * 2 && varc_1188 > 1) {
                    soundSynth(Sound.sound_8802, 1, 0);
                }
                int0 = 10000;
                int1 = int0 + 792;
                if (int5 == 33) {
                    varc_1270 = int0;
                    soundSynth(Sound.sound_9241, 1, 0);
                }
                ifSetTrans(min(200, int5 / 2 * 255 / 100), Component.interface_933.component_933_68);
                ifSetTrans(min(200, 255 - int5 * 255 / 100), Component.interface_933.component_933_69);
                ifSetText("+" + tostring((scale(int5, 100, int1 - 10000) / 2 + 50) / 100) + "%", Component.interface_933.component_933_74);
                if ((scale(int5, 100, int1 - 10000) / 2 + 50) / 100 != varc_1270) {
                    soundSynth(Sound.sound_8806, 1, 0);
                    varc_1270 = (scale(int5, 100, int1 - 10000) / 2 + 50) / 100;
                }
                ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) / 2 + 50) / 100) + "%", Component.interface_933.component_933_96);
                ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) / 2 + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
                if (varc_rand_display_stage == 525) {
                    soundSynth(Sound.sound_9241, 1, 0);
                }
            } else if (varc_1188 > 2) {
                int0 = 10000 + 792;
                int1 = 10000 + 1583;
                if (int5 == 66) {
                    varc_1270 = int0;
                    soundSynth(Sound.sound_9241, 1, 0);
                }
                ifSetTrans(min(200, int5 / 3 * 255 / 100), Component.interface_933.component_933_69);
                ifSetTrans(min(200, 255 - int5 * 255 / 100), Component.interface_933.component_933_70);
                ifSetText("+" + tostring((scale(int5, 100, int1 - 10000) / 3 + 50) / 100) + "%", Component.interface_933.component_933_74);
                if ((scale(int5, 100, int1 - 10000) / 3 + 50) / 100 != varc_1270) {
                    soundSynth(Sound.sound_8806, 1, 0);
                    varc_1270 = (scale(int5, 100, int1 - 10000) / 3 + 50) / 100;
                }
                ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) / 3 + 50) / 100) + "%", Component.interface_933.component_933_96);
                ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) / 3 + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
                if (varc_rand_display_stage == 575) {
                    soundSynth(Sound.sound_9241, 1, 0);
                }
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19) {
            ifSetHide(false, Component.interface_933.component_933_55);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20) {
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19) + 1, int20, 100);
            ifSetHide(false, Component.interface_933.component_933_64);
            ifSetHide(false, Component.interface_933.component_933_75);
            ifSetSize(scale(scale(varc_1195, 10000, 16384), 100, int5), 16384, 2, 2, Component.interface_933.component_933_172);
            int0 = 10000 + int34;
            int1 = 10000 + int34 + int35;
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_75);
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_75);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            if ((int0 + scale(int5, 100, int1 - int0) + 50) / 100 != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 50) / 100;
            }
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21) {
            ifSetHide(false, Component.interface_933.component_933_56);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22) {
            ifSetHide(false, Component.interface_933.component_933_57);
            ifSetHide(false, Component.interface_933.component_933_78);
            ifSetHide(false, Component.interface_933.component_933_80);
            ifSetHide(false, Component.interface_933.component_933_59);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21) + 1, int22, 100);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_78);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_80);
            [int36, int37, int38] = cs2_3273();
            ifSetText(tostring(int36) + " : " + tostring(int37), Component.interface_933.component_933_57);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21) {
                soundSynth(Sound.sound_8806, 1, 0);
            }
            int0 = 10000 + int34 + int35;
            int1 = 10000 + int34 + int35 + int39;
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_59);
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_59);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            if ((int0 + scale(int5, 100, int1 - int0) + 50) / 100 != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 50) / 100;
            }
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23) {
            ifSetHide(false, Component.interface_933.component_933_61);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24) {
            ifSetHide(false, Component.interface_933.component_933_76);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23) + 1, int24, 100);
            int0 = 10000 + int34 + int35 + int39;
            int1 = 10000 + int34 + int35 + int39 + varc_1236;
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_76);
                if ((scale(int5, 100, int1 - int0) + 50) / 100 != varc_1270) {
                    soundSynth(Sound.sound_8806, 1, 0);
                    varc_1270 = (scale(int5, 100, int1 - int0) + 50) / 100;
                }
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_76);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            if ((int0 + scale(int5, 100, int1 - int0) + 50) / 100 != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 50) / 100;
            }
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25) {
            ifSetHide(false, Component.interface_933.component_933_62);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26) {
            ifSetHide(false, Component.interface_933.component_933_58);
            ifSetHide(false, Component.interface_933.component_933_79);
            ifSetHide(false, Component.interface_933.component_933_81);
            ifSetHide(false, Component.interface_933.component_933_60);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25) + 1, int26, 100);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_79);
            ifSetTrans(255 - int5 * 255 / 100, Component.interface_933.component_933_81);
            ifSetText(tostring(scale(varc_1320, 100, int5)), Component.interface_933.component_933_58);
            if (scale(varc_1320, 100, int5) != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = scale(varc_1320, 100, int5);
            }
            int0 = 10000 + int34 + int35 + int39 + varc_1236;
            int1 = scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40);
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_60);
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_60);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27) {
            ifSetHide(false, Component.interface_933.component_933_63);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28) {
            ifSetHide(false, Component.interface_933.component_933_77);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27) + 1, int28, 100);
            int0 = scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40);
            int1 = scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275());
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_77);
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_77);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29) {
            ifSetHide(false, Component.interface_933.component_933_65);
            if (varc_rand_display_stage == int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28) {
                soundSynth(Sound.sound_8802, 1, 0);
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30) {
            ifSetHide(false, Component.interface_933.component_933_66);
            ifSetHide(false, Component.interface_933.component_933_67);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29) + 1, int30, 100);
            if (varbit_rand_deaths != 0) {
                [int3, int4] = cs2_3266(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29));
                if (int3 == 1) {
                    soundSynth(Sound.sound_9240, 1, 0);
                    switch (int4) {
                        case 0:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_146);
                            break;
                        case 1:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetHide(false, Component.interface_933.component_933_147);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_146);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_147);
                            break;
                        case 2:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetHide(false, Component.interface_933.component_933_147);
                            ifSetHide(false, Component.interface_933.component_933_148);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_147);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_148);
                            break;
                        case 3:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetHide(false, Component.interface_933.component_933_147);
                            ifSetHide(false, Component.interface_933.component_933_148);
                            ifSetHide(false, Component.interface_933.component_933_149);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_148);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_149);
                            break;
                        case 4:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetHide(false, Component.interface_933.component_933_147);
                            ifSetHide(false, Component.interface_933.component_933_148);
                            ifSetHide(false, Component.interface_933.component_933_149);
                            ifSetHide(false, Component.interface_933.component_933_150);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_149);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_150);
                            break;
                        case 5:
                            ifSetHide(false, Component.interface_933.component_933_146);
                            ifSetHide(false, Component.interface_933.component_933_147);
                            ifSetHide(false, Component.interface_933.component_933_148);
                            ifSetHide(false, Component.interface_933.component_933_149);
                            ifSetHide(false, Component.interface_933.component_933_150);
                            ifSetHide(false, Component.interface_933.component_933_151);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_150);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_151);
                            break;
                        case 6:
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
                        case 7:
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
                        case 8:
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
                            ifSetHide(false, Component.interface_933.component_933_155);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_154);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_155);
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
                            ifSetHide(false, Component.interface_933.component_933_156);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_155);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_156);
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
                            ifSetHide(false, Component.interface_933.component_933_157);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_156);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_157);
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
                            ifSetHide(false, Component.interface_933.component_933_158);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_157);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_158);
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
                            ifSetHide(false, Component.interface_933.component_933_159);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_158);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_159);
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
                            ifSetHide(false, Component.interface_933.component_933_160);
                            ifSetGraphic(Graphic.rand_death_icon_1, Component.interface_933.component_933_159);
                            ifSetGraphic(Graphic.rand_death_icon_0, Component.interface_933.component_933_160);
                            break;
                    }
                }
            } else {
                ifSetText("n/a", Component.interface_933.component_933_67);
                varc_rand_display_stage = varc_rand_display_stage + 2;
            }
            int0 = scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275());
            int1 = scale(scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275()), 10000, int41);
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (int1 >= int0) {
                ifSetText("+" + tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_67);
            } else {
                ifSetText(tostring((scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_67);
            }
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            if ((int0 + scale(int5, 100, int1 - int0) + 50) / 100 != varc_1270) {
                soundSynth(Sound.sound_8806, 1, 0);
                varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 50) / 100;
            }
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31) {
            ifSetHide(true, Component.interface_933.component_933_53);
            ifSetHide(false, Component.interface_933.component_933_37);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30) + 1, int31, 100);
            if (int5 == 0) {
                varc_1270 = 0;
            }
            if (varc_1321 > 0) {
                ifSetHide(false, Component.interface_933.component_933_84);
                if (int5 == 1) {
                    soundSynth(Sound.sound_8802, 1, 0);
                }
                ifSetText("Unbalanced party penalty: x" + tostring((10000 - varc_1321 + 50) / 100) + "%", Component.interface_933.component_933_94);
                if ((10000 - varc_1321 + 50) / 100 != varc_1270) {
                    soundSynth(Sound.sound_8806, 1, 0);
                    varc_1270 = (10000 - varc_1321 + 50) / 100;
                }
            } else {
                varc_rand_display_stage = varc_rand_display_stage + 2;
            }
            int0 = scale(scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275()), 10000, int41);
            int1 = scale(scale(scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275()), 10000, int41), 10000, 10000 - varc_1321);
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 50) / 100) + "%", Component.interface_933.component_933_96);
            ifSetSize(scale(8192, 100, (int0 + scale(int5, 100, int1 - int0) + 50) / 100), 16384, 2, 2, Component.interface_933.component_933_112);
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31 + int32) {
            ifSetHide(true, Component.interface_933.component_933_13);
            ifSetHide(true, Component.interface_933.component_933_16);
            ifSetHide(true, Component.interface_933.component_933_14);
            ifSetHide(true, Component.interface_933.component_933_15);
            ifSetText(tostring(varc_1239), Component.interface_933.component_933_39);
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31) + 1, int32, 100);
            int0 = varc_1239;
            int1 = scale(scale(scale(scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275()), 10000, int41), 10000, 10000 - varc_1321), 10000, varc_1239);
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (int5 % 5 == 0 && ifGetY(Component.interface_933.component_933_84) != 138) {
                ifSetPosition(ifGetX(Component.interface_933.component_933_84), ifGetY(Component.interface_933.component_933_84) + 1, 0, 0, Component.interface_933.component_933_84);
            }
            ifSetSize(183, scale(80, 100, int5), 0, 0, Component.interface_933.component_933_111);
            ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 5) / 10) + "%", Component.interface_933.component_933_39);
            if ((int0 + scale(int5, 100, int1 - int0) + 5) / 10 != varc_1270) {
                soundSynth(Sound.sound_9243, 1, 0);
                varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 5) / 10;
            }
        } else if (varc_rand_display_stage < int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31 + int32 + int33) {
            int5 = scale(varc_rand_display_stage - (int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31 + int32) + 1, int33, 100);
            int0 = varc_1239;
            int1 = scale(scale(scale(scale(scale(10000 + int34 + int35 + int39 + varc_1236, 10000, int40), 10000, cs2_3275()), 10000, int41), 10000, 10000 - varc_1321), 10000, varc_1239);
            if (int5 == 0) {
                varc_1270 = int0;
            }
            if (varp_1780 < 2000000000) {
                ifSetText(tostring((int0 + scale(int5, 100, int1 - int0) + 5) / 100) + "%", Component.interface_933.component_933_41);
                if ((int0 + scale(int5, 100, int1 - int0) + 5) / 100 != varc_1270) {
                    soundSynth(Sound.sound_8800, 1, 0);
                    varc_1270 = (int0 + scale(int5, 100, int1 - int0) + 5) / 100;
                }
            } else {
                ifSetText("n/a", Component.interface_933.component_933_41);
            }
        }
        varc_rand_display_stage = min(cs2_3265() + int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27 + int28 + int29 + int30 + int31 + int32 + int33, varc_rand_display_stage + 1);
    }
    cs2_3268();
}
