/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5540

function cs2_5540(intArg0: number, intArg1: component, intArg2: component, intArg3: component): number {
    let int4: number = 0;

    if (varc_1725 == 1) {
        if (mapMembers() == 0 && (varc_1724 == 7 || varc_1724 == 8 || varc_1724 == 9 || varc_1724 == 10 || varc_1724 == 11 || varc_1724 == 13)) {
            ifSetText("Members Item", Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5350, varc_1724)), Component.interface_1178.component_1178_81);
        }
        switch (intArg0) {
            case 1:
                int4 = varbit_toolbelt_pickaxe;
                break;
            case 2:
                int4 = varbit_toolbelt_hammer;
                break;
            case 3:
                int4 = varbit_toolbelt_chisel;
                break;
            case 4:
                int4 = varbit_toolbelt_hatchet;
                break;
            case 5:
                int4 = varbit_toolbelt_knife;
                break;
            case 6:
                int4 = varbit_toolbelt_tinderbox;
                break;
            case 7:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_saw;
                }
                break;
            case 8:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_pestle_mortar;
                }
                break;
            case 9:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_machete;
                }
                break;
            case 10:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_watch;
                }
                break;
            case 11:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_chart;
                }
                break;
            case 12:
                int4 = varbit_toolbelt_shears;
                break;
            case 13:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_noose_wand;
                }
                break;
            default:
                int4 = -1;
                break;
        }
        if (int4 == 1) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5348, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        } else if (int4 == 0) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5349, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        }
    } else if (varc_1725 == 2) {
        if (mapMembers() == 0 && (varc_1724 == 4 || varc_1724 == 8)) {
            ifSetText("Members Item", Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5353, varc_1724)), Component.interface_1178.component_1178_81);
        }
        switch (intArg0) {
            case 1:
                int4 = varbit_toolbelt_crayfish_cage;
                break;
            case 2:
                int4 = varbit_toolbelt_fishing_rod;
                break;
            case 3:
                int4 = varbit_toolbelt_small_net;
                break;
            case 4:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_big_net;
                }
                break;
            case 5:
                int4 = varbit_toolbelt_fly_fishing_rod;
                break;
            case 6:
                int4 = varbit_toolbelt_harpoon;
                break;
            case 7:
                int4 = varbit_toolbelt_lobster_pot;
                break;
            case 8:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_barbarian_rod;
                }
                break;
            default:
                int4 = -1;
                break;
        }
        if (int4 == 1) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5351, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        } else if (int4 == 0) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5352, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        }
    } else if (varc_1725 == 3) {
        if (mapMembers() == 0 && (varc_1724 == 2 || varc_1724 == 8 || varc_1724 == 9 || varc_1724 == 4 || varc_1724 == 11 || varc_1724 == 12 || varc_1724 == 13)) {
            ifSetText("Members Item", Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5356, varc_1724)), Component.interface_1178.component_1178_81);
        }
        switch (intArg0) {
            case 1:
                int4 = varbit_toolbelt_needle;
                break;
            case 2:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_glassblowing_pipe;
                }
                break;
            case 3:
                int4 = varbit_toolbelt_amulet_mould;
                break;
            case 4:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_bracelet_mould;
                }
                break;
            case 5:
                int4 = varbit_toolbelt_necklace_mould;
                break;
            case 6:
                int4 = varbit_toolbelt_ring_mould;
                break;
            case 7:
                int4 = varbit_toolbelt_tiara_mould;
                break;
            case 8:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_ammo_mould;
                }
                break;
            case 9:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_bolt_mould;
                }
                break;
            case 10:
                int4 = varbit_toolbelt_holy_mould;
                break;
            case 11:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_unholy_mould;
                }
                break;
            case 12:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_sickle_mould;
                }
                break;
            case 13:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_chain_mould;
                }
                break;
            default:
                int4 = -1;
                break;
        }
        if (int4 == 1) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5354, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        } else if (int4 == 0) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5355, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        }
    } else if (varc_1725 == 4) {
        if (mapMembers() == 0 && (varc_1724 == 1 || varc_1724 == 2 || varc_1724 == 4 || varc_1724 == 5)) {
            ifSetText("Members Item", Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5359, varc_1724)), Component.interface_1178.component_1178_81);
        }
        switch (intArg0) {
            case 1:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_rake;
                }
                break;
            case 2:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_dibber;
                }
                break;
            case 3:
                int4 = varbit_toolbelt_spade;
                break;
            case 4:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_gardening_trowel;
                }
                break;
            case 5:
                if (mapMembers() == 0) {
                    int4 = 0;
                } else {
                    int4 = varbit_toolbelt_secateurs;
                }
                break;
            default:
                int4 = -1;
                break;
        }
        if (int4 == 1) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5357, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        } else if (int4 == 0) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5358, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        }
    } else if (varc_1725 == 11) {
        if (varc_1808 == 1) {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5732, varbit_toolbelt_rand_pickaxe)), Component.interface_1178.component_1178_81);
        } else if (varc_1808 == 2) {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5733, varbit_toolbelt_rand_hatchet)), Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.enum_5731, varc_1808)), Component.interface_1178.component_1178_81);
        }
        switch (intArg0) {
            case 1:
                int4 = varbit_toolbelt_rand_pickaxe;
                break;
            case 2:
                int4 = varbit_toolbelt_rand_hatchet;
                break;
            case 3:
                int4 = varbit_toolbelt_rand_knife;
                break;
            case 4:
                int4 = varbit_toolbelt_rand_hammer;
                break;
            case 5:
                int4 = varbit_toolbelt_rand_chisel;
                break;
            case 6:
                int4 = varbit_toolbelt_rand_fishing_rod;
                break;
            case 7:
                int4 = varbit_toolbelt_rand_needle;
                break;
            case 8:
                int4 = varbit_toolbelt_rand_tinderbox;
                break;
            default:
                int4 = -1;
                break;
        }
        if (int4 >= 1) {
            if (intArg0 == 1) {
                ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_335, int4), intArg2);
                ifSetObject(-1, -1, intArg3);
            } else if (intArg0 == 2) {
                ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5729, int4), intArg2);
                ifSetObject(-1, -1, intArg3);
            } else {
                ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_334, intArg0), intArg2);
                ifSetObject(-1, -1, intArg3);
            }
        } else if (int4 == 0) {
            ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_5730, intArg0), intArg2);
            ifSetObject(-1, -1, intArg3);
        }
    } else if (varc_1725 == 12) {
        if (varc_1808 < 1) {
            ifSetText("Empty", Component.interface_1178.component_1178_81);
        } else {
            ifSetText(ocName(enumOp(type_int, type_obj, Enum.toolbelt_rand_keys_objects, varc_1808)), Component.interface_1178.component_1178_81);
        }
        while (int4 == 0) {
            switch (intArg0) {
                case 1:
                    int4 = varc_toolbelt_rand_key_1;
                    break;
                case 2:
                    int4 = varc_toolbelt_rand_key_2;
                    break;
                case 3:
                    int4 = varc_toolbelt_rand_key_3;
                    break;
                case 4:
                    int4 = varc_toolbelt_rand_key_4;
                    break;
                case 5:
                    int4 = varc_toolbelt_rand_key_5;
                    break;
                case 6:
                    int4 = varc_toolbelt_rand_key_6;
                    break;
                case 7:
                    int4 = varc_toolbelt_rand_key_7;
                    break;
                case 8:
                    int4 = varc_toolbelt_rand_key_8;
                    break;
                case 9:
                    int4 = varc_toolbelt_rand_key_9;
                    break;
                case 10:
                    int4 = varc_toolbelt_rand_key_10;
                    break;
                case 11:
                    int4 = varc_toolbelt_rand_key_11;
                    break;
                case 12:
                    int4 = varc_toolbelt_rand_key_12;
                    break;
                case 13:
                    int4 = varc_toolbelt_rand_key_13;
                    break;
                case 14:
                    int4 = varc_toolbelt_rand_key_14;
                    break;
                case 15:
                    int4 = varc_toolbelt_rand_key_15;
                    break;
                case 16:
                    int4 = varc_toolbelt_rand_key_16;
                    break;
                case 17:
                    int4 = varc_toolbelt_rand_key_17;
                    break;
                case 18:
                    int4 = varc_toolbelt_rand_key_18;
                    break;
                case 19:
                    int4 = varc_toolbelt_rand_key_19;
                    break;
                case 20:
                    int4 = varc_toolbelt_rand_key_20;
                    break;
                case 21:
                    int4 = varc_toolbelt_rand_key_21;
                    break;
                case 22:
                    int4 = varc_toolbelt_rand_key_22;
                    break;
                case 23:
                    int4 = varc_toolbelt_rand_key_23;
                    break;
                case 24:
                    int4 = varc_toolbelt_rand_key_24;
                    break;
                case 25:
                    int4 = varc_toolbelt_rand_key_25;
                    break;
                case 26:
                    int4 = varc_toolbelt_rand_key_26;
                    break;
                case 27:
                    int4 = varc_toolbelt_rand_key_27;
                    break;
                case 28:
                    int4 = varc_toolbelt_rand_key_28;
                    break;
                case 29:
                    int4 = varc_toolbelt_rand_key_29;
                    break;
                case 30:
                    int4 = varc_toolbelt_rand_key_30;
                    break;
                case 31:
                    int4 = varc_toolbelt_rand_key_31;
                    break;
                case 32:
                    int4 = varc_toolbelt_rand_key_32;
                    break;
                case 33:
                    int4 = varc_toolbelt_rand_key_33;
                    break;
                case 34:
                    int4 = varc_toolbelt_rand_key_34;
                    break;
                case 35:
                    int4 = varc_toolbelt_rand_key_35;
                    break;
                case 36:
                    int4 = varc_toolbelt_rand_key_36;
                    break;
                case 37:
                    int4 = varc_toolbelt_rand_key_37;
                    break;
                case 38:
                    int4 = varc_toolbelt_rand_key_38;
                    break;
                case 39:
                    int4 = varc_toolbelt_rand_key_39;
                    break;
                case 40:
                    int4 = varc_toolbelt_rand_key_40;
                    break;
                case 41:
                    int4 = varc_toolbelt_rand_key_41;
                    break;
                case 42:
                    int4 = varc_toolbelt_rand_key_42;
                    break;
                case 43:
                    int4 = varc_toolbelt_rand_key_43;
                    break;
                case 44:
                    int4 = varc_toolbelt_rand_key_44;
                    break;
                case 45:
                    int4 = varc_toolbelt_rand_key_45;
                    break;
                case 46:
                    int4 = varc_toolbelt_rand_key_46;
                    break;
                case 47:
                    int4 = varc_toolbelt_rand_key_47;
                    break;
                case 48:
                    int4 = varc_toolbelt_rand_key_48;
                    break;
                case 49:
                    int4 = varc_toolbelt_rand_key_49;
                    break;
                case 50:
                    int4 = varc_toolbelt_rand_key_50;
                    break;
                case 51:
                    int4 = varc_toolbelt_rand_key_51;
                    break;
                case 52:
                    int4 = varc_toolbelt_rand_key_52;
                    break;
                case 53:
                    int4 = varc_toolbelt_rand_key_53;
                    break;
                case 54:
                    int4 = varc_toolbelt_rand_key_54;
                    break;
                case 55:
                    int4 = varc_toolbelt_rand_key_55;
                    break;
                case 56:
                    int4 = varc_toolbelt_rand_key_56;
                    break;
                case 57:
                    int4 = varc_toolbelt_rand_key_57;
                    break;
                case 58:
                    int4 = varc_toolbelt_rand_key_58;
                    break;
                case 59:
                    int4 = varc_toolbelt_rand_key_59;
                    break;
                case 60:
                    int4 = varc_toolbelt_rand_key_60;
                    break;
                case 61:
                    int4 = varc_toolbelt_rand_key_61;
                    break;
                case 62:
                    int4 = varc_toolbelt_rand_key_62;
                    break;
                case 63:
                    int4 = varc_toolbelt_rand_key_63;
                    break;
                case 64:
                    int4 = varc_toolbelt_rand_key_64;
                    break;
                default:
                    int4 = -1;
                    break;
            }
            if (int4 == 0) {
                if (intArg0 < varc_1808) {
                    intArg0 = intArg0 - 1;
                } else if (intArg0 >= varc_1808) {
                    intArg0 = intArg0 + 1;
                }
            }
        }
        if (int4 == 1) {
            ifSetObject(enumOp(type_int, type_obj, Enum.toolbelt_rand_keys_objects, intArg0), -1, intArg3);
            ifSetGraphic(-1, intArg2);
        } else if (int4 == 0) {
            ifSetGraphic(-1, intArg2);
        }
    } else {
        ifSetText("", Component.interface_1178.component_1178_81);
        ifSetHide(false, intArg1);
        ifSetHide(false, intArg2);
        ifSetHide(false, intArg3);
        ifSetGraphic(-1, intArg1);
        ifSetGraphic(-1, intArg2);
        return -1;
    }

    if (int4 >= 1) {
        ifSetHide(false, intArg1);
        ifSetHide(false, intArg2);
        ifSetHide(false, intArg3);
        ifSetGraphic(Graphic.aif_tool_btn_50_0, intArg1);
    } else if (int4 == 0) {
        ifSetHide(false, intArg1);
        ifSetHide(false, intArg2);
        ifSetHide(false, intArg3);
        ifSetGraphic(Graphic.aif_tool_btn_50_2, intArg1);
    } else {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg2);
        ifSetHide(true, intArg3);
        ifSetGraphic(-1, intArg1);
        ifSetGraphic(-1, intArg2);
    }

    if (int4 >= 0) {
        return intArg0;
    } else {
        return -1;
    }
}
