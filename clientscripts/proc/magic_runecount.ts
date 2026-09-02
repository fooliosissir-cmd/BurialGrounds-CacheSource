/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,magic_runecount]

function magic_runecount(intArg0: obj, intArg1: component): number {
    let int2: number = 0;
    let int3: obj = invGetobj(94, 3);
    let int4: number = 0;

    if (int3 == Obj.rcsiphonxp_charged_greater_runic_staff || int3 == Obj.rcsiphonxp_charged_runic_staff) {
        int2 = cs2_6185(intArg0, intArg1);
    }

    if (intArg0 == Obj.airrune) {
        if (ocParam(int3, Param.magic_supplies_air_runes) == 1) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.staff_of_air) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.lumbcat_staff) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_air_staff_1) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_air_staff_2) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_air_staff_1_b) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_air_staff_2_b) > 0) {
            return 99999999;
        }
        if (varbit_dom_staff_effect == 1) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.air_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_air_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.trail_animal_air_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mah5_armadyl_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21490) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21496) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21500) > 0) {
            return 99999999;
        }
        int2 = int2 + invTotal(Inv.inv, Obj.airrune) + invTotal(Inv.inv, Obj.rand_airrune) + invTotal(Inv.inv, Obj.rand_airrune_b) + inv_total_available(Inv.inv, Obj.smokerune) + inv_total_available(Inv.inv, Obj.mistrune) + inv_total_available(Inv.inv, Obj.dustrune) + invTotal(Inv.inv, Obj.fremsaga_airrune);
        if ((intArg1 == Component.interface_192.component_192_34 || intArg1 == Component.interface_192.component_192_39 || intArg1 == Component.interface_192.component_192_42 || intArg1 == Component.interface_950.component_950_32 || intArg1 == Component.interface_950.component_950_37 || intArg1 == Component.interface_950.component_950_36) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1334 > 0) {
            int2 = int2 + varc_1334 * 2;
        }
        if ((intArg1 == Component.interface_192.component_192_45 || intArg1 == Component.interface_950.component_950_41) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1334 > 0) {
            int2 = int2 + varc_1334 * 3;
        }
        if ((intArg1 == Component.interface_192.component_192_49 || intArg1 == Component.interface_192.component_192_52 || intArg1 == Component.interface_192.component_192_58 || intArg1 == Component.interface_950.component_950_42 || intArg1 == Component.interface_950.component_950_45 || intArg1 == Component.interface_950.component_950_43) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1335 > 0) {
            int2 = int2 + varc_1335 * 3;
        }
        if ((intArg1 == Component.interface_192.component_192_63 || intArg1 == Component.interface_950.component_950_47) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1335 > 0) {
            int2 = int2 + varc_1335 * 4;
        }
        if ((intArg1 == Component.interface_192.component_192_70 || intArg1 == Component.interface_192.component_192_73 || intArg1 == Component.interface_192.component_192_77 || intArg1 == Component.interface_192.component_192_80 || intArg1 == Component.interface_950.component_950_48 || intArg1 == Component.interface_950.component_950_54 || intArg1 == Component.interface_950.component_950_49 || intArg1 == Component.interface_950.component_950_58) && (invGetobj(94, 5) == Obj.rand_reward_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box_b) && varc_1402 > 0) {
            int2 = int2 + varc_1402 * 5;
        }
        if ((intArg1 == Component.interface_192.component_192_84 || intArg1 == Component.interface_192.component_192_87 || intArg1 == Component.interface_192.component_192_89 || intArg1 == Component.interface_192.component_192_91 || intArg1 == Component.interface_950.component_950_61 || intArg1 == Component.interface_950.component_950_63 || intArg1 == Component.interface_950.component_950_62 || intArg1 == Component.interface_950.component_950_67) && (invGetobj(94, 5) == Obj.rand_reward_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box_b) && varc_1403 > 0) {
            int2 = int2 + varc_1403 * 7;
        }
        if (cs2_5481() == 1) {
            int2 = int2 + invTotal(Inv.inv, Obj.hvh_elemental_rune);
        }
        return int2;
    }

    if (intArg0 == Obj.waterrune) {
        if (ocParam(int3, Param.magic_supplies_water_runes) == 1) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.staff_of_water) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_water_staff_1) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_water_staff_2) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_water_staff_1_b) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_water_staff_2_b) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_reward_tome_of_frost) > 0) {
            return 99999999;
        }
        if (varbit_dom_staff_effect == 1) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.water_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_water_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mud_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_mud_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.godwars_steam_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.godwars_mystic_steam_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.trail_animal_water_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21491) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21495) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21499) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21506) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21507) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21504) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21505) > 0) {
            return 99999999;
        }
        int2 = int2 + invTotal(Inv.inv, Obj.waterrune) + invTotal(Inv.inv, Obj.rand_waterrune) + invTotal(Inv.inv, Obj.rand_waterrune_b) + inv_total_available(Inv.inv, Obj.steamrune) + inv_total_available(Inv.inv, Obj.mistrune) + inv_total_available(Inv.inv, Obj.mudrune) + invTotal(Inv.inv, Obj.fremsaga_waterrune);
        if (cs2_5481() == 1) {
            int2 = int2 + invTotal(Inv.inv, Obj.hvh_elemental_rune);
        }
        return int2;
    }

    if (intArg0 == Obj.earthrune) {
        if (ocParam(int3, Param.magic_supplies_earth_runes) == 1) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.staff_of_earth) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_earth_staff_1) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_earth_staff_2) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_earth_staff_1_b) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_earth_staff_2_b) > 0) {
            return 99999999;
        }
        if (varbit_dom_staff_effect == 1) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.earth_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_earth_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.lava_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_lava_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mud_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_mud_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.trail_animal_earth_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21492) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21497) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21501) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21502) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21503) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21504) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21505) > 0) {
            return 99999999;
        }
        int2 = int2 + invTotal(Inv.inv, Obj.earthrune) + invTotal(Inv.inv, Obj.rand_earthrune) + invTotal(Inv.inv, Obj.rand_earthrune_b) + inv_total_available(Inv.inv, Obj.dustrune) + inv_total_available(Inv.inv, Obj.lavarune) + inv_total_available(Inv.inv, Obj.mudrune) + invTotal(Inv.inv, Obj.fremsaga_earthrune);
        if (cs2_5481() == 1) {
            int2 = int2 + invTotal(Inv.inv, Obj.hvh_elemental_rune);
        }
        return int2;
    }

    if (intArg0 == Obj.firerune) {
        if (ocParam(int3, Param.magic_supplies_fire_runes) == 1) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.staff_of_fire) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_fire_staff_1) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_fire_staff_2) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_fire_staff_1_b) > 0) {
            return 99999999;
        }
        if (invTotal(Inv.worn, Obj.rand_fire_staff_2_b) > 0) {
            return 99999999;
        }
        if (varbit_dom_staff_effect == 1) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.fire_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_fire_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.lava_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.mystic_lava_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.godwars_steam_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.godwars_mystic_steam_battlestaff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.trail_animal_fire_staff) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21493) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21494) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21498) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21502) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21503) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21506) > 0) {
            return 99999999;
        }
        if (inv_total_available(Inv.worn, Obj.obj_21507) > 0) {
            return 99999999;
        }
        int2 = int2 + invTotal(Inv.inv, Obj.firerune) + invTotal(Inv.inv, Obj.rand_firerune) + invTotal(Inv.inv, Obj.rand_firerune_b) + inv_total_available(Inv.inv, Obj.steamrune) + inv_total_available(Inv.inv, Obj.smokerune) + inv_total_available(Inv.inv, Obj.lavarune) + invTotal(Inv.inv, Obj.fremsaga_firerune);
        if (cs2_5481() == 1) {
            int2 = int2 + invTotal(Inv.inv, Obj.hvh_elemental_rune);
        }
        return int2;
    }

    if (intArg0 == Obj.obj_8843) {
        return inv_total_available(Inv.worn, Obj.guthix_staff) + inv_total_available(Inv.worn, Obj.pest_void_knight_mace);
    }

    if (intArg0 == Obj.slayer_staff) {
        return inv_total_available(Inv.worn, Obj.slayer_staff) + inv_total_available(Inv.worn, Obj.staff_of_light) + inv_total_available(Inv.worn, Obj.lent_staff_of_light) + inv_total_available(Inv.worn, Obj.staff_of_light_red) + inv_total_available(Inv.worn, Obj.staff_of_light_green) + inv_total_available(Inv.worn, Obj.staff_of_light_blue) + inv_total_available(Inv.worn, Obj.staff_of_light_yellow) + cs2_6185(intArg0, intArg1);
    }

    if (intArg0 == Obj.ibanstaff || intArg0 == Obj.saradomin_staff || intArg0 == Obj.zamorak_staff) {
        return inv_total_available(Inv.worn, intArg0);
    }

    if (intArg0 == Obj.pvpw_staff) {
        if (inv_total_available(Inv.worn, Obj.obj_13869) > 0) {
            return inv_total_available(Inv.worn, Obj.obj_13869);
        } else if (inv_total_available(Inv.worn, Obj.obj_13941) > 0) {
            return inv_total_available(Inv.worn, Obj.obj_13941);
        } else if (inv_total_available(Inv.worn, Obj.obj_13943) > 0) {
            return inv_total_available(Inv.worn, Obj.obj_13943);
        } else {
            return inv_total_available(Inv.worn, intArg0);
        }
    }

    if (intArg0 == Obj.hlr4m_power_amulet_charged) {
        return inv_total_available(Inv.worn, Obj.hlr4m_power_amulet_charged);
    }

    if (cs2_5481() == 1) {
        switch (intArg0) {
            case Obj.bodyrune:
            case Obj.mindrune:
            case Obj.cosmicrune:
            case Obj.chaosrune:
            case Obj.naturerune:
            case Obj.deathrune:
            case Obj.lawrune:
            case Obj.soulrune:
            case Obj.bloodrune:
            case Obj.astralrune:
            case Obj.mah5_armadyl_rune:
                return inv_total_available(Inv.inv, intArg0) + inv_total_available(Inv.inv, Obj.hvh_catalytic_rune);
        }
    }

    switch (intArg0) {
        case Obj.bodyrune:
            if (ocParam(int3, Param.magic_supplies_body_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.mindrune:
            if (ocParam(int3, Param.magic_supplies_mind_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.cosmicrune:
            if (ocParam(int3, Param.magic_supplies_cosmic_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.chaosrune:
            if (ocParam(int3, Param.magic_supplies_chaos_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.naturerune:
            if (ocParam(int3, Param.magic_supplies_nature_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.deathrune:
            if (ocParam(int3, Param.magic_supplies_death_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.lawrune:
            if (ocParam(int3, Param.magic_supplies_law_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.soulrune:
            if (ocParam(int3, Param.magic_supplies_soul_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.bloodrune:
            if (ocParam(int3, Param.magic_supplies_blood_runes) == 1) {
                int4 = 99999999;
            }
            break;
        case Obj.astralrune:
            if (ocParam(int3, Param.magic_supplies_astral_runes) == 1) {
                int4 = 99999999;
            }
            break;
    }

    switch (intArg0) {
        case Obj.bodyrune:
            return int2 + int4 + invTotal(Inv.inv, Obj.bodyrune) + invTotal(Inv.inv, Obj.rand_bodyrune) + invTotal(Inv.inv, Obj.rand_bodyrune_b) + invTotal(Inv.inv, Obj.fremsaga_bodyrune);
        case Obj.mindrune:
            return int2 + int4 + invTotal(Inv.inv, Obj.mindrune) + invTotal(Inv.inv, Obj.rand_mindrune) + invTotal(Inv.inv, Obj.rand_mindrune_b) + invTotal(Inv.inv, Obj.fremsaga_mindrune);
        case Obj.cosmicrune:
            return int2 + int4 + invTotal(Inv.inv, Obj.cosmicrune) + invTotal(Inv.inv, Obj.rand_cosmicrune) + invTotal(Inv.inv, Obj.rand_cosmicrune_b);
        case Obj.chaosrune:
            if ((intArg1 == Component.interface_192.component_192_34 || intArg1 == Component.interface_192.component_192_39 || intArg1 == Component.interface_192.component_192_42 || intArg1 == Component.interface_192.component_192_45 || intArg1 == Component.interface_950.component_950_32 || intArg1 == Component.interface_950.component_950_37 || intArg1 == Component.interface_950.component_950_36 || intArg1 == Component.interface_950.component_950_41) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1334 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.chaosrune) + invTotal(Inv.inv, Obj.rand_chaosrune) + invTotal(Inv.inv, Obj.rand_chaosrune_b) + varc_1334 + invTotal(Inv.inv, Obj.fremsaga_chaosrune);
            } else {
                return int2 + int4 + invTotal(Inv.inv, Obj.chaosrune) + invTotal(Inv.inv, Obj.rand_chaosrune) + invTotal(Inv.inv, Obj.rand_chaosrune_b) + invTotal(Inv.inv, Obj.fremsaga_chaosrune);
            }
            break;
        case Obj.naturerune:
            if (invGetobj(94, 3) == Obj.rand_reward_nature_staff && varc_1234 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.naturerune) + invTotal(Inv.inv, Obj.rand_naturerune) + invTotal(Inv.inv, Obj.rand_naturerune_b) + varc_1234 + invTotal(Inv.inv, Obj.fremsaga_naturerune);
            } else {
                return int2 + int4 + invTotal(Inv.inv, Obj.naturerune) + invTotal(Inv.inv, Obj.rand_naturerune) + invTotal(Inv.inv, Obj.rand_naturerune_b);
            }
            break;
        case Obj.deathrune:
            if ((intArg1 == Component.interface_192.component_192_49 || intArg1 == Component.interface_192.component_192_52 || intArg1 == Component.interface_192.component_192_58 || intArg1 == Component.interface_192.component_192_63 || intArg1 == Component.interface_950.component_950_42 || intArg1 == Component.interface_950.component_950_45 || intArg1 == Component.interface_950.component_950_43 || intArg1 == Component.interface_950.component_950_47) && (invGetobj(94, 5) == Obj.rand_reward_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box || invGetobj(94, 5) == Obj.rand_bolt_blast_box_b) && varc_1335 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.deathrune) + invTotal(Inv.inv, Obj.rand_deathrune) + invTotal(Inv.inv, Obj.rand_deathrune_b) + varc_1335 + invTotal(Inv.inv, Obj.fremsaga_deathrune);
            } else if ((intArg1 == Component.interface_192.component_192_84 || intArg1 == Component.interface_192.component_192_87 || intArg1 == Component.interface_192.component_192_89 || intArg1 == Component.interface_192.component_192_91 || intArg1 == Component.interface_950.component_950_61 || intArg1 == Component.interface_950.component_950_63 || intArg1 == Component.interface_950.component_950_62 || intArg1 == Component.interface_950.component_950_67) && (invGetobj(94, 5) == Obj.rand_reward_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box_b) && varc_1403 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.deathrune) + invTotal(Inv.inv, Obj.rand_deathrune) + invTotal(Inv.inv, Obj.rand_deathrune_b) + varc_1403;
            } else {
                return int2 + int4 + invTotal(Inv.inv, Obj.deathrune) + invTotal(Inv.inv, Obj.rand_deathrune) + invTotal(Inv.inv, Obj.rand_deathrune_b) + invTotal(Inv.inv, Obj.fremsaga_deathrune);
            }
            break;
        case Obj.lawrune:
            if (invGetobj(94, 3) == Obj.rand_reward_law_staff && varc_1235 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.lawrune) + invTotal(Inv.inv, Obj.rand_lawrune) + invTotal(Inv.inv, Obj.rand_lawrune_b) + varc_1235 + invTotal(Inv.inv, Obj.fremsaga_lawrune);
            } else {
                return int2 + int4 + invTotal(Inv.inv, Obj.lawrune) + invTotal(Inv.inv, Obj.rand_lawrune) + invTotal(Inv.inv, Obj.rand_lawrune_b);
            }
            break;
        case Obj.soulrune:
            return int2 + int4 + inv_total_available(Inv.inv, Obj.soulrune) + inv_total_available(Inv.inv, Obj.rand_soulrune) + inv_total_available(Inv.inv, Obj.rand_soulrune_b);
        case Obj.bloodrune:
            if ((intArg1 == Component.interface_192.component_192_70 || intArg1 == Component.interface_192.component_192_73 || intArg1 == Component.interface_192.component_192_77 || intArg1 == Component.interface_192.component_192_80 || intArg1 == Component.interface_950.component_950_48 || intArg1 == Component.interface_950.component_950_54 || intArg1 == Component.interface_950.component_950_49 || intArg1 == Component.interface_950.component_950_58) && (invGetobj(94, 5) == Obj.rand_reward_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box_b) && varc_1402 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.bloodrune) + invTotal(Inv.inv, Obj.rand_bloodrune) + invTotal(Inv.inv, Obj.rand_bloodrune_b) + varc_1402;
            } else if ((intArg1 == Component.interface_192.component_192_84 || intArg1 == Component.interface_192.component_192_87 || intArg1 == Component.interface_192.component_192_89 || intArg1 == Component.interface_192.component_192_91 || intArg1 == Component.interface_950.component_950_61 || intArg1 == Component.interface_950.component_950_63 || intArg1 == Component.interface_950.component_950_62 || intArg1 == Component.interface_950.component_950_67) && (invGetobj(94, 5) == Obj.rand_reward_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box || invGetobj(94, 5) == Obj.rand_wave_surge_box_b) && varc_1403 > 0) {
                return int2 + int4 + invTotal(Inv.inv, Obj.bloodrune) + invTotal(Inv.inv, Obj.rand_bloodrune) + invTotal(Inv.inv, Obj.rand_bloodrune_b) + varc_1403;
            } else {
                return int2 + int4 + inv_total_available(Inv.inv, Obj.bloodrune) + inv_total_available(Inv.inv, Obj.rand_bloodrune) + inv_total_available(Inv.inv, Obj.rand_bloodrune_b);
            }
            break;
        case Obj.astralrune:
            return int2 + int4 + inv_total_available(Inv.inv, Obj.astralrune) + inv_total_available(Inv.inv, Obj.rand_astralrune) + inv_total_available(Inv.inv, Obj.rand_astralrune_b);
    }
    return int2 + int4 + inv_total_available(Inv.inv, intArg0);
}
