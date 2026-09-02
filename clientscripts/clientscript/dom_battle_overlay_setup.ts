/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_battle_overlay_setup]

function dom_battle_overlay_setup(): void {
    let str0: string = "";
    let str1: string = chatPlayerName();
    let int0: number = 0;
    let int1: struct = enumOp(type_int, type_struct, Enum.dom_special_boss_id_to_struct, varbit_dom_special_match);

    if (int1 == -1) {
        int1 = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, varbit_dom_boss_assigned);
    }
    varc_dom_battle_infobox_state = 0;
    let str2: string = structParam(int1, Param.param_2095);

    if (varbit_dom_special_match == 7) {
        ifSetHide(false, Component.dom_battle_overlay.timer_layer);
    } else {
        ifSetHide(true, Component.dom_battle_overlay.timer_layer);
    }
    varc_dom_battle_current_x = 0;
    varc_dom_battle_current_z = 0;
    ifSetText(str2, Component.dom_battle_overlay.boss_name);
    ifSetText(str1, Component.dom_battle_overlay.player_name);

    if (varbit_dom_climber_prog > 0) {
        str0 = "Climber. Floor " + tostring(varbit_dom_climber_prog);
    } else if (varbit_dom_endurance_prog > 0) {
        str0 = "Endurance. Floor " + tostring(varbit_dom_endurance_prog);
    } else if (varbit_dom_special_match > 0) {
        str0 = "Special. Fight: " + str2;
    } else if (varbit_dom_boss_assigned != 0) {
        str0 = "Freestyle. Fight: " + str2;
    } else {
        str0 = "Unknown";
    }
    ifSetText(str0, Component.dom_battle_overlay.status_text);
    ifSetSize(ifGetWidth(Component.dom_battle_overlay.stats_layer), 37, 0, 0, Component.dom_battle_overlay.stats_layer);
    ifSetSize(ifGetWidth(Component.dom_battle_overlay.handicap_icons_layer), 1, 0, 0, Component.dom_battle_overlay.handicap_icons_layer);
    ifSetSize(ifGetWidth(Component.dom_battle_overlay.player_health_layer) - 10, ifGetHeight(Component.dom_battle_overlay.player_healthbar), 0, 0, Component.dom_battle_overlay.player_healthbar);
    ifSetSize(ifGetWidth(Component.dom_battle_overlay.boss_health_layer) - 10, ifGetHeight(Component.dom_battle_overlay.boss_healthbar), 0, 0, Component.dom_battle_overlay.boss_healthbar);
    soundVorbisVolume(8105, 1, 60, 255);

    if (varbit_dom_handicap_reduce_melee_att == 1) {
        cs2_5462(1, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_shield == 1) {
        cs2_5462(2, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_food == 1) {
        cs2_5462(3, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_reduce_melee_def == 1) {
        cs2_5462(4, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_random_freeze == 1) {
        cs2_5462(5, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_halved_hp == 1) {
        cs2_5462(6, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_body_armour == 1) {
        cs2_5462(7, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_reduce_range_att == 1) {
        cs2_5462(8, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_familiar == 1) {
        cs2_5462(9, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_monster_stun == 1) {
        cs2_5462(10, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_prayers == 1) {
        cs2_5462(11, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_slip_fingers == 1) {
        cs2_5462(12, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_reduce_mage_att == 1) {
        cs2_5462(13, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_diseased == 1) {
        cs2_5462(14, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_special_attacks == 1) {
        cs2_5462(15, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_reduce_mage_def == 1) {
        cs2_5462(16, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_random_daze == 1) {
        cs2_5462(17, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_poisoned == 1) {
        cs2_5462(18, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_reduce_range_def == 1) {
        cs2_5462(19, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_powerups == 1) {
        cs2_5462(20, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_no_potions == 1) {
        cs2_5462(21, int0);
        int0 = int0 + 1;
    }

    if (varbit_dom_handicap_life_saver == 1) {
        cs2_5462(22, int0);
        int0 = int0 + 1;
    }
    ifSetOnTimer(hook(cs2_5467, "", []), Component.dom_battle_overlay.global_layer);
    varc_dom_battle_topinfo_pos = -45;
    varc_dom_battle_bottominfo_pos = -75;
    ifSetPosition(0, varc_dom_battle_topinfo_pos, 1, 0, Component.dom_battle_overlay.health_bars_layer);
    ifSetPosition(3, varc_dom_battle_bottominfo_pos, 2, 2, Component.dom_battle_overlay.stats_layer);
}
