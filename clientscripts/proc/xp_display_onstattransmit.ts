/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xp_display_onstattransmit]

function xp_display_onstattransmit(): void {
    if (varc_xpdisplay_constitution < 1) {
        cs2_5653();
    }
    let int0: number = 1;
    let int1: number = statVisibleXp(0) - varc_xpdisplay_attack;
    let int2: number = statVisibleXp(2) - varc_xpdisplay_strength;
    let int3: number = statVisibleXp(1) - varc_xpdisplay_defence;
    let int4: number = statVisibleXp(4) - varc_xpdisplay_ranged;
    let int5: number = statVisibleXp(6) - varc_xpdisplay_magic;
    let int6: number = statVisibleXp(3) - varc_xpdisplay_constitution;
    let int7: number = int1 + int2 + int3 + int4 + int5 + int6;
    let int8: number = statVisibleXp(5) - varc_xpdisplay_prayer;
    let int9: number = statVisibleXp(20) - varc_xpdisplay_runecrafting;
    let int10: number = statVisibleXp(12) - varc_xpdisplay_crafting;
    let int11: number = statVisibleXp(14) - varc_xpdisplay_mining;
    let int12: number = statVisibleXp(13) - varc_xpdisplay_smithing;
    let int13: number = statVisibleXp(10) - varc_xpdisplay_fishing;
    let int14: number = statVisibleXp(7) - varc_xpdisplay_cooking;
    let int15: number = statVisibleXp(11) - varc_xpdisplay_firemaking;
    let int16: number = statVisibleXp(8) - varc_xpdisplay_woodcutting;
    let int17: number = statVisibleXp(16) - varc_xpdisplay_agility;
    let int18: number = statVisibleXp(15) - varc_xpdisplay_herblore;
    let int19: number = statVisibleXp(17) - varc_xpdisplay_thieving;
    let int20: number = statVisibleXp(9) - varc_xpdisplay_fletching;
    let int21: number = statVisibleXp(18) - varc_xpdisplay_slayer;
    let int22: number = statVisibleXp(19) - varc_xpdisplay_farming;
    let int23: number = statVisibleXp(22) - varc_xpdisplay_construction;
    let int24: number = statVisibleXp(21) - varc_xpdisplay_hunter;
    let int25: number = statVisibleXp(23) - varc_xpdisplay_summoning;
    let int26: number = statVisibleXp(24) - varc_xpdisplay_dungeoneering;
    let int27: number = int1 + int2 + int3 + int4 + int5 + int6 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26;

    if (varbit_xpdisplay_counter_1_on == 1) {
        switch (varbit_xpdisplay_counter_1_tracking) {
            case 1:
                if (int1 != 0) {
                    ifSetText("+" + tostringLocalised(int1, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 2:
                if (int2 != 0) {
                    ifSetText("+" + tostringLocalised(int2, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 5:
                if (int3 != 0) {
                    ifSetText("+" + tostringLocalised(int3, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 6:
                if (int6 != 0) {
                    ifSetText("+" + tostringLocalised(int6, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 3:
                if (int4 != 0) {
                    ifSetText("+" + tostringLocalised(int4, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 4:
                if (int5 != 0) {
                    ifSetText("+" + tostringLocalised(int5, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 7:
                if (int8 != 0) {
                    ifSetText("+" + tostringLocalised(int8, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 12:
                if (int9 != 0) {
                    ifSetText("+" + tostringLocalised(int9, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 11:
                if (int10 != 0) {
                    ifSetText("+" + tostringLocalised(int10, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 13:
                if (int11 != 0) {
                    ifSetText("+" + tostringLocalised(int11, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 14:
                if (int12 != 0) {
                    ifSetText("+" + tostringLocalised(int12, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 15:
                if (int13 != 0) {
                    ifSetText("+" + tostringLocalised(int13, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 16:
                if (int14 != 0) {
                    ifSetText("+" + tostringLocalised(int14, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 17:
                if (int15 != 0) {
                    ifSetText("+" + tostringLocalised(int15, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 18:
                if (int16 != 0) {
                    ifSetText("+" + tostringLocalised(int16, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 8:
                if (int17 != 0) {
                    ifSetText("+" + tostringLocalised(int17, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 9:
                if (int18 != 0) {
                    ifSetText("+" + tostringLocalised(int18, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 10:
                if (int19 != 0) {
                    ifSetText("+" + tostringLocalised(int19, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 19:
                if (int20 != 0) {
                    ifSetText("+" + tostringLocalised(int20, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 20:
                if (int21 != 0) {
                    ifSetText("+" + tostringLocalised(int21, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 21:
                if (int22 != 0) {
                    ifSetText("+" + tostringLocalised(int22, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 22:
                if (int23 != 0) {
                    ifSetText("+" + tostringLocalised(int23, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 23:
                if (int24 != 0) {
                    ifSetText("+" + tostringLocalised(int24, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 24:
                if (int25 != 0) {
                    ifSetText("+" + tostringLocalised(int25, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 25:
                if (int26 != 0) {
                    ifSetText("+" + tostringLocalised(int26, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 30:
                if (int7 != 0) {
                    ifSetText("+" + tostringLocalised(int7, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            case 31:
                if (int27 != 0) {
                    ifSetText("+" + tostringLocalised(int27, 1) + " xp", Component.interface_1215.component_1215_10);
                } else {
                    int0 = 0;
                }
                break;
            default:
                int0 = 0;
                break;
        }
        if (int0 == 1) {
            ifSetHide(false, Component.interface_1215.component_1215_10);
            ifSetTrans(0, Component.interface_1215.component_1215_10);
            ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), Component.interface_1215.component_1215_10);
        }
        int0 = 1;
    }

    if (varbit_xpdisplay_counter_2_on == 1) {
        switch (varbit_xpdisplay_counter_2_tracking) {
            case 1:
                if (int1 != 0) {
                    ifSetText("+" + tostringLocalised(int1, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 2:
                if (int2 != 0) {
                    ifSetText("+" + tostringLocalised(int2, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 5:
                if (int3 != 0) {
                    ifSetText("+" + tostringLocalised(int3, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 6:
                if (int6 != 0) {
                    ifSetText("+" + tostringLocalised(int6, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 3:
                if (int4 != 0) {
                    ifSetText("+" + tostringLocalised(int4, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 4:
                if (int5 != 0) {
                    ifSetText("+" + tostringLocalised(int5, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 7:
                if (int8 != 0) {
                    ifSetText("+" + tostringLocalised(int8, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 12:
                if (int9 != 0) {
                    ifSetText("+" + tostringLocalised(int9, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 11:
                if (int10 != 0) {
                    ifSetText("+" + tostringLocalised(int10, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 13:
                if (int11 != 0) {
                    ifSetText("+" + tostringLocalised(int11, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 14:
                if (int12 != 0) {
                    ifSetText("+" + tostringLocalised(int12, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 15:
                if (int13 != 0) {
                    ifSetText("+" + tostringLocalised(int13, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 16:
                if (int14 != 0) {
                    ifSetText("+" + tostringLocalised(int14, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 17:
                if (int15 != 0) {
                    ifSetText("+" + tostringLocalised(int15, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 18:
                if (int16 != 0) {
                    ifSetText("+" + tostringLocalised(int16, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 8:
                if (int17 != 0) {
                    ifSetText("+" + tostringLocalised(int17, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 9:
                if (int18 != 0) {
                    ifSetText("+" + tostringLocalised(int18, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 10:
                if (int19 != 0) {
                    ifSetText("+" + tostringLocalised(int19, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 19:
                if (int20 != 0) {
                    ifSetText("+" + tostringLocalised(int20, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 20:
                if (int21 != 0) {
                    ifSetText("+" + tostringLocalised(int21, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 21:
                if (int22 != 0) {
                    ifSetText("+" + tostringLocalised(int22, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 22:
                if (int23 != 0) {
                    ifSetText("+" + tostringLocalised(int23, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 23:
                if (int24 != 0) {
                    ifSetText("+" + tostringLocalised(int24, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 24:
                if (int25 != 0) {
                    ifSetText("+" + tostringLocalised(int25, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 25:
                if (int26 != 0) {
                    ifSetText("+" + tostringLocalised(int26, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 30:
                if (int7 != 0) {
                    ifSetText("+" + tostringLocalised(int7, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            case 31:
                if (int27 != 0) {
                    ifSetText("+" + tostringLocalised(int27, 1) + " xp", Component.interface_1215.component_1215_11);
                } else {
                    int0 = 0;
                }
                break;
            default:
                int0 = 0;
                break;
        }
        if (int0 == 1) {
            ifSetHide(false, Component.interface_1215.component_1215_11);
            ifSetTrans(0, Component.interface_1215.component_1215_11);
            ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), Component.interface_1215.component_1215_11);
        }
        int0 = 1;
    }

    if (varbit_xpdisplay_counter_3_on == 1) {
        switch (varbit_xpdisplay_counter_3_tracking) {
            case 1:
                if (int1 != 0) {
                    ifSetText("+" + tostringLocalised(int1, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 2:
                if (int2 != 0) {
                    ifSetText("+" + tostringLocalised(int2, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 5:
                if (int3 != 0) {
                    ifSetText("+" + tostringLocalised(int3, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 6:
                if (int6 != 0) {
                    ifSetText("+" + tostringLocalised(int6, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 3:
                if (int4 != 0) {
                    ifSetText("+" + tostringLocalised(int4, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 4:
                if (int5 != 0) {
                    ifSetText("+" + tostringLocalised(int5, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 7:
                if (int8 != 0) {
                    ifSetText("+" + tostringLocalised(int8, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 12:
                if (int9 != 0) {
                    ifSetText("+" + tostringLocalised(int9, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 11:
                if (int10 != 0) {
                    ifSetText("+" + tostringLocalised(int10, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 13:
                if (int11 != 0) {
                    ifSetText("+" + tostringLocalised(int11, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 14:
                if (int12 != 0) {
                    ifSetText("+" + tostringLocalised(int12, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 15:
                if (int13 != 0) {
                    ifSetText("+" + tostringLocalised(int13, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 16:
                if (int14 != 0) {
                    ifSetText("+" + tostringLocalised(int14, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 17:
                if (int15 != 0) {
                    ifSetText("+" + tostringLocalised(int15, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 18:
                if (int16 != 0) {
                    ifSetText("+" + tostringLocalised(int16, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 8:
                if (int17 != 0) {
                    ifSetText("+" + tostringLocalised(int17, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 9:
                if (int18 != 0) {
                    ifSetText("+" + tostringLocalised(int18, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 10:
                if (int19 != 0) {
                    ifSetText("+" + tostringLocalised(int19, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 19:
                if (int20 != 0) {
                    ifSetText("+" + tostringLocalised(int20, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 20:
                if (int21 != 0) {
                    ifSetText("+" + tostringLocalised(int21, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 21:
                if (int22 != 0) {
                    ifSetText("+" + tostringLocalised(int22, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 22:
                if (int23 != 0) {
                    ifSetText("+" + tostringLocalised(int23, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 23:
                if (int24 != 0) {
                    ifSetText("+" + tostringLocalised(int24, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 24:
                if (int25 != 0) {
                    ifSetText("+" + tostringLocalised(int25, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 25:
                if (int26 != 0) {
                    ifSetText("+" + tostringLocalised(int26, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 30:
                if (int7 != 0) {
                    ifSetText("+" + tostringLocalised(int7, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            case 31:
                if (int27 != 0) {
                    ifSetText("+" + tostringLocalised(int27, 1) + " xp", Component.interface_1215.component_1215_12);
                } else {
                    int0 = 0;
                }
                break;
            default:
                int0 = 0;
                break;
        }
        if (int0 == 1) {
            ifSetHide(false, Component.interface_1215.component_1215_12);
            ifSetTrans(0, Component.interface_1215.component_1215_12);
            ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), Component.interface_1215.component_1215_12);
        }
    }
    cs2_5652();
}
