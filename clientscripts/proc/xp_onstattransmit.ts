/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xp_onstattransmit]

function proc_xp_onstattransmit(intArg0: boolean, intArg1: number): void {
    xp_display_onstattransmit();

    if (varbit_xpdisplay_dont_show_popups == 1) {
        if (intArg1 == 1) {
            cs2_5653();
        }
        return;
    }

    if (intArg0 == false) {
        cs2_5659();
        if (statBase(0) > 0 && statBase(2) > 0 && statBase(1) > 0 && statBase(4) > 0 && statBase(6) > 0 && statBase(3) > 0 && statBase(5) > 0 && statBase(20) > 0 && statBase(12) > 0 && statBase(14) > 0 && statBase(13) > 0 && statBase(10) > 0 && statBase(7) > 0 && statBase(11) > 0 && statBase(8) > 0 && statBase(16) > 0 && statBase(15) > 0 && statBase(17) > 0 && statBase(9) > 0 && statBase(18) > 0 && statBase(19) > 0 && statBase(22) > 0 && statBase(21) > 0 && statBase(23) > 0 && statBase(24) > 0) {
            ifSetOnStatTransmit(hook(clientscript_xp_onstattransmit, "1", [true]), Component.interface_1213.component_1213_3);
        }
        return;
    }
    let int2: number = 0;
    let int3: number = statVisibleXp(0) - varc_xpdisplay_attack;

    if (int3 != 0) {
        int2 = int2 + 1;
    }
    let int4: number = statVisibleXp(2) - varc_xpdisplay_strength;

    if (int4 != 0) {
        int2 = int2 + 1;
    }
    let int5: number = statVisibleXp(1) - varc_xpdisplay_defence;

    if (int5 != 0) {
        int2 = int2 + 1;
    }
    let int6: number = statVisibleXp(4) - varc_xpdisplay_ranged;

    if (int6 != 0) {
        int2 = int2 + 1;
    }
    let int7: number = statVisibleXp(6) - varc_xpdisplay_magic;

    if (int7 != 0) {
        int2 = int2 + 1;
    }
    let int8: number = statVisibleXp(3) - varc_xpdisplay_constitution;

    if (int8 != 0) {
        int2 = int2 + 1;
    }
    let int9: number = statVisibleXp(5) - varc_xpdisplay_prayer;

    if (int9 != 0) {
        int2 = int2 + 1;
    }
    let int10: number = statVisibleXp(20) - varc_xpdisplay_runecrafting;

    if (int10 != 0) {
        int2 = int2 + 1;
    }
    let int11: number = statVisibleXp(12) - varc_xpdisplay_crafting;

    if (int11 != 0) {
        int2 = int2 + 1;
    }
    let int12: number = statVisibleXp(14) - varc_xpdisplay_mining;

    if (int12 != 0) {
        int2 = int2 + 1;
    }
    let int13: number = statVisibleXp(13) - varc_xpdisplay_smithing;

    if (int13 != 0) {
        int2 = int2 + 1;
    }
    let int14: number = statVisibleXp(10) - varc_xpdisplay_fishing;

    if (int14 != 0) {
        int2 = int2 + 1;
    }
    let int15: number = statVisibleXp(7) - varc_xpdisplay_cooking;

    if (int15 != 0) {
        int2 = int2 + 1;
    }
    let int16: number = statVisibleXp(11) - varc_xpdisplay_firemaking;

    if (int16 != 0) {
        int2 = int2 + 1;
    }
    let int17: number = statVisibleXp(8) - varc_xpdisplay_woodcutting;

    if (int17 != 0) {
        int2 = int2 + 1;
    }
    let int18: number = statVisibleXp(16) - varc_xpdisplay_agility;

    if (int18 != 0) {
        int2 = int2 + 1;
    }
    let int19: number = statVisibleXp(15) - varc_xpdisplay_herblore;

    if (int19 != 0) {
        int2 = int2 + 1;
    }
    let int20: number = statVisibleXp(17) - varc_xpdisplay_thieving;

    if (int20 != 0) {
        int2 = int2 + 1;
    }
    let int21: number = statVisibleXp(9) - varc_xpdisplay_fletching;

    if (int21 != 0) {
        int2 = int2 + 1;
    }
    let int22: number = statVisibleXp(18) - varc_xpdisplay_slayer;

    if (int22 != 0) {
        int2 = int2 + 1;
    }
    let int23: number = statVisibleXp(19) - varc_xpdisplay_farming;

    if (int23 != 0) {
        int2 = int2 + 1;
    }
    let int24: number = statVisibleXp(22) - varc_xpdisplay_construction;

    if (int24 != 0) {
        int2 = int2 + 1;
    }
    let int25: number = statVisibleXp(21) - varc_xpdisplay_hunter;

    if (int25 != 0) {
        int2 = int2 + 1;
    }
    let int26: number = statVisibleXp(23) - varc_xpdisplay_summoning;

    if (int26 != 0) {
        int2 = int2 + 1;
    }
    let int27: number = statVisibleXp(24) - varc_xpdisplay_dungeoneering;

    if (int27 != 0) {
        int2 = int2 + 1;
    }
    let int28: number = int3 + int4 + int5 + int6 + int7 + int8 + int9 + int10 + int11 + int12 + int13 + int14 + int15 + int16 + int17 + int18 + int19 + int20 + int21 + int22 + int23 + int24 + int25 + int26 + int27;

    if (int28 < 1) {
        return;
    }
    let int29: number = 0;
    let int30: number = 0;
    let int31: number = 0;
    let int32: number = 0;
    let str0: string = "";
    let int33: number = 0;
    let int34: stat = -1;
    let int35: number = 0;

    if (ifGetHide(Component.interface_1213.component_1213_3) == 0) {
        if (varp_2044 > 0) {
            int35 = varp_2044 % 10;
            if (int35 > 0) {
                str0 = "(" + tostring(varp_2044 / 10) + "." + tostring(int35) + " bonus xp)";
            } else {
                str0 = "(" + tostring(varp_2044 / 10) + " bonus xp)";
            }
        }
        ccCreate(Component.interface_1213.component_1213_1, 4, ifGetNextSubId(Component.interface_1213.component_1213_1));
        ccSetText("+" + tostringLocalised(int28, 1) + " xp " + str0);
        ccSetOnTimer(hook(cs2_5657, "Iii", [event_com, ccGetId(), 0]));
        ccSetSize(150, 25, 0, 0);
        ccSetTextFont(Graphic.graphic_3795);
        ccSetColour(colour(0xF5B241));
        ccSetTextShadow(true);
        ccSetTextAlign(1, 1, 0);
        ccSetPosition(0, 7373, 1, 3);
    } else {
        ccDeleteAll(Component.interface_1213.component_1213_1);
    }
    let int36: number = 0;
    let int37: component = -1;
    let int38: component = -1;
    let int39: component = -1;
    let int40: component = -1;
    let int41: component = -1;
    let int42: component = -1;
    let int43: number = 0;
    let int44: number = 0;
    let int45: number = 0;
    let int46: number = 0;
    let int47: number = 0;

    while (int36 < int2) {
        if (int3 != 0) {
            int37 = Component.interface_1213.component_1213_30;
            int33 = 1;
            int43 = varp_1969;
            int45 = varp_1994;
            int44 = testBit(varp_1968, 1);
            int3 = 0;
        } else if (int4 != 0) {
            int37 = Component.interface_1213.component_1213_31;
            int33 = 2;
            int43 = varp_1970;
            int45 = varp_1995;
            int44 = testBit(varp_1968, 2);
            int4 = 0;
        } else if (int5 != 0) {
            int37 = Component.interface_1213.component_1213_32;
            int33 = 5;
            int43 = varp_1973;
            int45 = varp_1998;
            int44 = testBit(varp_1968, 5);
            int5 = 0;
        } else if (int6 != 0) {
            int37 = Component.interface_1213.component_1213_33;
            int33 = 3;
            int43 = varp_1971;
            int45 = varp_1996;
            int44 = testBit(varp_1968, 3);
            int6 = 0;
        } else if (int9 != 0) {
            int37 = Component.interface_1213.component_1213_34;
            int33 = 7;
            int43 = varp_1975;
            int45 = varp_2000;
            int44 = testBit(varp_1968, 7);
            int9 = 0;
        } else if (int7 != 0) {
            int37 = Component.interface_1213.component_1213_35;
            int33 = 4;
            int43 = varp_1972;
            int45 = varp_1997;
            int44 = testBit(varp_1968, 4);
            int7 = 0;
        } else if (int8 != 0) {
            int37 = Component.interface_1213.component_1213_36;
            int33 = 6;
            int43 = varp_1974;
            int45 = varp_1999;
            int44 = testBit(varp_1968, 6);
            int8 = 0;
        } else if (int18 != 0) {
            int37 = Component.interface_1213.component_1213_37;
            int33 = 8;
            int43 = varp_1976;
            int45 = varp_2001;
            int44 = testBit(varp_1968, 8);
            int18 = 0;
        } else if (int19 != 0) {
            int37 = Component.interface_1213.component_1213_38;
            int33 = 9;
            int43 = varp_1977;
            int45 = varp_2002;
            int44 = testBit(varp_1968, 9);
            int19 = 0;
        } else if (int20 != 0) {
            int37 = Component.interface_1213.component_1213_39;
            int33 = 10;
            int43 = varp_1978;
            int45 = varp_2003;
            int44 = testBit(varp_1968, 10);
            int20 = 0;
        } else if (int11 != 0) {
            int37 = Component.interface_1213.component_1213_40;
            int33 = 11;
            int43 = varp_1979;
            int45 = varp_2004;
            int44 = testBit(varp_1968, 11);
            int11 = 0;
        } else if (int21 != 0) {
            int37 = Component.interface_1213.component_1213_41;
            int33 = 19;
            int43 = varp_1987;
            int45 = varp_2012;
            int44 = testBit(varp_1968, 19);
            int21 = 0;
        } else if (int12 != 0) {
            int37 = Component.interface_1213.component_1213_42;
            int33 = 13;
            int43 = varp_1981;
            int45 = varp_2006;
            int44 = testBit(varp_1968, 13);
            int12 = 0;
        } else if (int13 != 0) {
            int37 = Component.interface_1213.component_1213_43;
            int33 = 14;
            int43 = varp_1982;
            int45 = varp_2007;
            int44 = testBit(varp_1968, 14);
            int13 = 0;
        } else if (int14 != 0) {
            int37 = Component.interface_1213.component_1213_44;
            int33 = 15;
            int43 = varp_1983;
            int45 = varp_2008;
            int44 = testBit(varp_1968, 15);
            int14 = 0;
        } else if (int15 != 0) {
            int37 = Component.interface_1213.component_1213_45;
            int33 = 16;
            int43 = varp_1984;
            int45 = varp_2009;
            int44 = testBit(varp_1968, 16);
            int15 = 0;
        } else if (int16 != 0) {
            int37 = Component.interface_1213.component_1213_46;
            int33 = 17;
            int43 = varp_1985;
            int45 = varp_2010;
            int44 = testBit(varp_1968, 17);
            int16 = 0;
        } else if (int17 != 0) {
            int37 = Component.interface_1213.component_1213_47;
            int33 = 18;
            int43 = varp_1986;
            int45 = varp_2011;
            int44 = testBit(varp_1968, 18);
            int17 = 0;
        } else if (int10 != 0) {
            int37 = Component.interface_1213.component_1213_48;
            int33 = 12;
            int43 = varp_1980;
            int45 = varp_2005;
            int44 = testBit(varp_1968, 12);
            int10 = 0;
        } else if (int22 != 0) {
            int37 = Component.interface_1213.component_1213_49;
            int33 = 20;
            int43 = varp_1988;
            int45 = varp_2013;
            int44 = testBit(varp_1968, 20);
            int22 = 0;
        } else if (int23 != 0) {
            int37 = Component.interface_1213.component_1213_50;
            int33 = 21;
            int43 = varp_1989;
            int45 = varp_2014;
            int44 = testBit(varp_1968, 21);
            int23 = 0;
        } else if (int25 != 0) {
            int37 = Component.interface_1213.component_1213_51;
            int33 = 23;
            int43 = varp_1991;
            int45 = varp_2016;
            int44 = testBit(varp_1968, 23);
            int25 = 0;
        } else if (int24 != 0) {
            int37 = Component.interface_1213.component_1213_52;
            int33 = 22;
            int43 = varp_1990;
            int45 = varp_2015;
            int44 = testBit(varp_1968, 22);
            int24 = 0;
        } else if (int26 != 0) {
            int37 = Component.interface_1213.component_1213_53;
            int33 = 24;
            int43 = varp_1992;
            int45 = varp_2017;
            int44 = testBit(varp_1968, 24);
            int26 = 0;
        } else if (int27 != 0) {
            int37 = Component.interface_1213.component_1213_54;
            int33 = 25;
            int43 = varp_1993;
            int45 = varp_2018;
            int44 = testBit(varp_1968, 25);
            int27 = 0;
        }
        if (ifGetHide(int37) == 0) {
            if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_12) + 18) {
                int38 = Component.interface_1213.component_1213_12;
            } else if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_11) + 18) {
                int38 = Component.interface_1213.component_1213_11;
            } else if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_10) + 18) {
                int38 = Component.interface_1213.component_1213_10;
            } else if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_9) + 18) {
                int38 = Component.interface_1213.component_1213_9;
            } else if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_8) + 18) {
                int38 = Component.interface_1213.component_1213_8;
            } else if (ifGetX(int37) == ifGetX(Component.interface_1213.component_1213_7) + 18) {
                int38 = Component.interface_1213.component_1213_7;
            } else {
                int38 = Component.interface_1213.component_1213_13;
            }
        } else if (ifGetHide(Component.interface_1213.component_1213_13) == 1) {
            int38 = Component.interface_1213.component_1213_13;
        } else if (ifGetHide(Component.interface_1213.component_1213_12) == 1) {
            int38 = Component.interface_1213.component_1213_12;
        } else if (ifGetHide(Component.interface_1213.component_1213_11) == 1) {
            int38 = Component.interface_1213.component_1213_11;
        } else if (ifGetHide(Component.interface_1213.component_1213_10) == 1) {
            int38 = Component.interface_1213.component_1213_10;
        } else if (ifGetHide(Component.interface_1213.component_1213_9) == 1) {
            int38 = Component.interface_1213.component_1213_9;
        } else if (ifGetHide(Component.interface_1213.component_1213_8) == 1) {
            int38 = Component.interface_1213.component_1213_8;
        } else if (ifGetHide(Component.interface_1213.component_1213_7) == 1) {
            int38 = Component.interface_1213.component_1213_7;
        } else {
            switch (varc_1763) {
                case 2:
                    int38 = Component.interface_1213.component_1213_12;
                    break;
                case 3:
                    int38 = Component.interface_1213.component_1213_11;
                    break;
                case 4:
                    int38 = Component.interface_1213.component_1213_10;
                    break;
                case 5:
                    int38 = Component.interface_1213.component_1213_9;
                    break;
                case 6:
                    int38 = Component.interface_1213.component_1213_8;
                    break;
                case 7:
                    int38 = Component.interface_1213.component_1213_7;
                    break;
                default:
                    int38 = Component.interface_1213.component_1213_13;
                    break;
            }
            ifSetHide(true, varc_1770);
        }
        varc_1763 = varc_1762;
        varc_1762 = varc_1761;
        varc_1761 = varc_1760;
        varc_1760 = varc_1759;
        varc_1759 = varc_1758;
        varc_1758 = varc_1757;
        varc_1770 = varc_1769;
        varc_1769 = varc_1768;
        varc_1768 = varc_1767;
        varc_1767 = varc_1766;
        varc_1766 = varc_1765;
        varc_1765 = varc_1764;
        varc_1764 = int37;
        switch (int38) {
            case Component.interface_1213.component_1213_12:
                varc_1757 = 2;
                int39 = Component.interface_1213.component_1213_18;
                int40 = Component.interface_1213.component_1213_19;
                int41 = Component.interface_1213.component_1213_55;
                int42 = Component.interface_1213.component_1213_56;
                int47 = varc_1775;
                break;
            case Component.interface_1213.component_1213_11:
                varc_1757 = 3;
                int39 = Component.interface_1213.component_1213_20;
                int40 = Component.interface_1213.component_1213_21;
                int41 = Component.interface_1213.component_1213_57;
                int42 = Component.interface_1213.component_1213_58;
                int47 = varc_1776;
                break;
            case Component.interface_1213.component_1213_10:
                varc_1757 = 4;
                int39 = Component.interface_1213.component_1213_22;
                int40 = Component.interface_1213.component_1213_23;
                int41 = Component.interface_1213.component_1213_59;
                int42 = Component.interface_1213.component_1213_60;
                int47 = varc_1777;
                break;
            case Component.interface_1213.component_1213_9:
                varc_1757 = 5;
                int39 = Component.interface_1213.component_1213_24;
                int40 = Component.interface_1213.component_1213_25;
                int41 = Component.interface_1213.component_1213_61;
                int42 = Component.interface_1213.component_1213_62;
                int47 = varc_1778;
                break;
            case Component.interface_1213.component_1213_8:
                varc_1757 = 6;
                int39 = Component.interface_1213.component_1213_26;
                int40 = Component.interface_1213.component_1213_27;
                int41 = Component.interface_1213.component_1213_63;
                int42 = Component.interface_1213.component_1213_64;
                int47 = varc_1779;
                break;
            case Component.interface_1213.component_1213_7:
                varc_1757 = 7;
                int39 = Component.interface_1213.component_1213_28;
                int40 = Component.interface_1213.component_1213_29;
                int41 = Component.interface_1213.component_1213_65;
                int42 = Component.interface_1213.component_1213_66;
                int47 = varc_1780;
                break;
            default:
                varc_1757 = 1;
                int39 = Component.interface_1213.component_1213_16;
                int40 = Component.interface_1213.component_1213_17;
                int41 = Component.interface_1213.component_1213_15;
                int42 = Component.interface_1213.component_1213_14;
                int47 = varc_1774;
                break;
        }
        int34 = enumOp(type_int, type_stat, Enum.int_to_stat, int33);
        if (int34 != -1) {
            if (int34 == 24 && statBase(int34) < 120) {
                int46 = 1;
            } else if (statBase(int34) < 99) {
                int46 = 1;
            } else {
                int46 = 0;
            }
            if (int46 == 1) {
                int30 = enumOp(type_int, type_int, Enum.xp_for_level, statBase(int34) + 1);
                int30 = int30 - enumOp(type_int, type_int, Enum.xp_for_level, statBase(int34));
                int29 = statVisibleXp(int34) - enumOp(type_int, type_int, Enum.xp_for_level, statBase(int34));
                int31 = scale(int29, int30, 100);
                int32 = cs2_5664(int33) - enumOp(type_int, type_int, Enum.xp_for_level, statBase(int34));
                int32 = scale(int32, int30, 100);
                if (int31 < int32 || int32 < 1 || int47 != int33) {
                    ifSetSize(ifGetWidth(int39), max(scale(45, 50, min(int31, 50)), 1), 0, 0, int39);
                    ifSetSize(ifGetWidth(int40), max(max(int31 - 50, 0) * 2, 0), 0, 0, int40);
                } else {
                    ifSetSize(ifGetWidth(int39), max(ifGetHeight(int39), 1), 0, 0, int39);
                    ifSetSize(ifGetWidth(int40), max(ifGetHeight(int40), 0), 0, 0, int40);
                }
                switch (int38) {
                    case Component.interface_1213.component_1213_12:
                        varc_1775 = int33;
                        break;
                    case Component.interface_1213.component_1213_11:
                        varc_1776 = int33;
                        break;
                    case Component.interface_1213.component_1213_10:
                        varc_1777 = int33;
                        break;
                    case Component.interface_1213.component_1213_9:
                        varc_1778 = int33;
                        break;
                    case Component.interface_1213.component_1213_8:
                        varc_1779 = int33;
                        break;
                    case Component.interface_1213.component_1213_7:
                        varc_1780 = int33;
                        break;
                    default:
                        varc_1774 = int33;
                        break;
                }
                ifSetOnTimer(hook(cs2_5655, "IIii", [int39, int40, int31, 0]), int39);
                ifSetHide(false, int37);
                ifSetTrans(0, int37);
                ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), int37);
                ifSetPosition(ifGetX(int38) + 18, 17, 0, 0, int37);
                ifSetHide(false, int38);
                ifSetTrans(0, int38);
                ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), int38);
                ifSetHide(false, int41);
                ifSetTrans(0, int41);
                ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), int41);
                ifSetHide(false, int42);
                ifSetTrans(0, int42);
                ifSetOnTimer(hook(cs2_5656, "1Ii", [true, event_com, 0]), int42);
            }
        }
        int36 = int36 + 1;
    }

    if (intArg1 == 1) {
        cs2_5653();
    }
}
