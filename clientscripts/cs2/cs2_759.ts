/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_759

function cs2_759(intArg0: component, intArg1: number, intArg2: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, intArg3: number, intArg4: number): void {
    ccDeleteAll(intArg0);
    ifSetScrollSize(0, ((intArg4 - intArg3) / intArg1 + 1) * 57, intArg0);
    let int5: number = 0;
    let int6: number = intArg3;
    let int7: number = 0;
    let int8: number = intArg4;
    let int9: number = 0;
    let int10: number = -1;
    let int11: obj = -1;
    let int12: obj = -1;
    let int13: obj = -1;
    let int14: obj = -1;
    let int15: obj = -1;
    let int16: obj = -1;
    let int17: obj = -1;
    let int18: obj = -1;
    let int19: obj = -1;
    let int20: obj = -1;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;
    let str6: string = "hello";
    let int31: number = 0;
    defineArray(0, type_obj, 10);
    let int32: obj = -1;
    let int33: number = 0;
    let int34: number = 0;
    let int35: number = 0;
    let int36: number = 1;
    let int37: graphic = Graphic.km_shoptile_2;
    let int38: graphic = Graphic.km_shoptile_0;

    while (int5 <= intArg4 - intArg3) {
        int36 = 1;
        int32 = enumOp(type_int, type_obj, Enum.enum_1182, int6);
        if (varbit_lore_creation_interface_filter == 1) {
            if (ocParam(int32, Param.param_697) != -1) {
                switch (ocParam(int32, Param.param_697)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_698)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_698)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_698)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_697)) >= ocParam(int32, Param.param_698)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
            if (ocParam(int32, Param.param_699) != -1 && int36 == 1) {
                switch (ocParam(int32, Param.param_699)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_700)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_700)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_700)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_699)) >= ocParam(int32, Param.param_700)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
            if (ocParam(int32, Param.param_701) != -1 && int36 == 1) {
                switch (ocParam(int32, Param.param_701)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_702)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_702)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_702)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_701)) >= ocParam(int32, Param.param_702)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
            if (ocParam(int32, Param.param_703) != -1 && int36 == 1) {
                switch (ocParam(int32, Param.param_703)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_704)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_704)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_704)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_703)) >= ocParam(int32, Param.param_704)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
            if (ocParam(int32, Param.param_705) != -1 && int36 == 1) {
                switch (ocParam(int32, Param.param_705)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_706)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_706)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_706)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_705)) >= ocParam(int32, Param.param_706)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
            if (ocParam(int32, Param.param_707) != -1 && int36 == 1) {
                switch (ocParam(int32, Param.param_707)) {
                    case 6287:
                        if (invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide) < ocParam(int32, Param.param_708)) {
                            int36 = 0;
                        }
                        break;
                    case 6979:
                        if (invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium) < ocParam(int32, Param.param_708)) {
                            int36 = 0;
                        }
                        break;
                    case 2462:
                        if (invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed) < ocParam(int32, Param.param_708)) {
                            int36 = 0;
                        }
                        break;
                    default:
                        if (invTotal(Inv.inv, ocParam(int32, Param.param_707)) >= ocParam(int32, Param.param_708)) {
                            break;
                        }
                        int36 = 0;
                        break;
                }
            }
        }
        if (int36 == 1) {
            int33 = 16 + int7 % intArg1 * 48 + int7 % intArg1 * 5;
            int34 = int7 / intArg1 * 52 + int7 / intArg1 * 5;
            ccCreate(intArg0, 5, int35);
            ccSetSize(48, 52, 0, 0);
            ccSetPosition(int33, int34, 0, 0);
            ccSetGraphic(Graphic.km_shoptile_0);
            ccSetOnMouseRepeat(hook(graphic_swapper_dynamic, "Iid", [event_com, int35, int37]));
            ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, int35, int38]));
            int35 = int35 + 1;
            ccCreate(intArg0, 5, int35);
            int35 = int35 + 1;
            ccSetSize(48, 52, 0, 0);
            ccSetPosition(int33, int34, 0, 0);
            ccSetGraphic(Graphic.km_shoptile_1);
            if (cs2_766(int32) == 1 && statBase(23) >= enumOp(type_obj, type_int, Enum.lore_levels_enum, int32)) {
                ccSetHide(false);
            } else {
                ccSetHide(true);
            }
            ccCreate(intArg0, 5, int35);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int33 + 6, int34 + 4, 0, 0);
            if (int32 == Obj.lore_pouch_grey) {
                lore_interface_inv_draw_slot(int32, int32, intArg0, int35, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
            } else if (cs2_766(int32) == 1 && statBase(23) >= enumOp(type_obj, type_int, Enum.lore_levels_enum, int32)) {
                lore_interface_inv_draw_slot(int32, int32, intArg0, int35, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
            } else {
                lore_interface_inv_draw_slot(enumOp(type_int, type_obj, Enum.lore_null_enum, int6), int32, intArg0, int35, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5);
            }
            if (int32 == Obj.lore_pouch_grey) {
                ccSetOnMouseRepeat(hook(lore_blanktip, "iIIis", [event_comsubid, Component.interface_79.component_79_31, Component.interface_79.component_79_16, int31, str6]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_79.component_79_31]));
            } else {
                str6 = enumOp(type_obj, type_string, Enum.enum_1187, int32);
                int31 = enumOp(type_obj, type_int, Enum.lore_levels_enum, int32);
                [int11, int12, int13, int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30] = cs2_767(int32);
                ccSetOnMouseRepeat(hook(cs2_770, "iIIisoioioioioioioioioioi", [event_comsubid, Component.interface_79.component_79_31, Component.interface_79.component_79_16, int31, str6, int11, 1, int12, int22, int13, int23, int14, int24, int15, int25, int16, int26, int17, int27, int18, int28, int19, int29, int20, int30]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_79.component_79_31]));
            }
            int35 = int35 + 1;
            ccCreate(intArg0, 5, int35);
            int35 = int35 + 1;
            ccSetSize(12, 12, 0, 0);
            ccSetPosition(int33 + 2, int34 + 38, 0, 0);
            ccSetObjectNonum(Obj.lore_spirit_shard, 1);
            ccCreate(intArg0, 4, int35);
            int35 = int35 + 1;
            ccSetSize(31, 12, 0, 0);
            ccSetPosition(int33 + 13, int34 + 39, 0, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetColour(colour(0xFFFFFF));
            ccSetTextAlign(2, 1, 0);
            if (ocParam(int32, Param.param_541) < 1) {
                ccSetText("--");
            } else {
                ccSetText(cs2_940(ocParam(int32, Param.param_541)));
            }
            ccSetTextShadow(true);
            int7 = int7 + 1;
        }
        int5 = int5 + 1;
        int6 = int6 + 1;
    }
}
