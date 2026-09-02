/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5452

function cs2_5452(): void {
    varc_1684 = 1;
    cs2_5456();

    if (varbit_dom_achieve_climber_low == 1) {
        cs2_5453(1, 1);
    } else {
        cs2_5453(0, 1);
    }

    if (varbit_dom_achieve_endurange_low == 1) {
        cs2_5453(1, 2);
    } else {
        cs2_5453(0, 2);
    }

    if (varbit_dom_achieve_climber_med == 1) {
        cs2_5453(1, 3);
    } else {
        cs2_5453(0, 3);
    }

    if (varbit_dom_achieve_endurance_med == 1) {
        cs2_5453(1, 4);
    } else {
        cs2_5453(0, 4);
    }

    if (varbit_dom_achieve_monsters_slain >= 100) {
        cs2_5453(1, 5);
    } else {
        cs2_5453(0, 5);
    }

    if (varbit_dom_achieve_journal_half == 1) {
        cs2_5453(1, 6);
    } else {
        cs2_5453(0, 6);
    }

    if (varbit_dom_achieve_handicap_1 == 1 && varbit_dom_achieve_handicap_2 == 1 && varbit_dom_achieve_handicap_3 == 1 && varbit_dom_achieve_handicap_4 == 1 && varbit_dom_achieve_handicap_5 == 1 && varbit_dom_achieve_handicap_6 == 1 && varbit_dom_achieve_handicap_7 == 1 && varbit_dom_achieve_handicap_8 == 1 && varbit_dom_achieve_handicap_9 == 1 && varbit_dom_achieve_handicap_10 == 1 && varbit_dom_achieve_handicap_11 == 1 && varbit_dom_achieve_handicap_12 == 1 && varbit_dom_achieve_handicap_13 == 1 && varbit_dom_achieve_handicap_14 == 1 && varbit_dom_achieve_handicap_15 == 1 && varbit_dom_achieve_handicap_16 == 1 && varbit_dom_achieve_handicap_17 == 1 && varbit_dom_achieve_handicap_18 == 1 && varbit_dom_achieve_handicap_19 == 1 && varbit_dom_achieve_handicap_20 == 1 && varbit_dom_achieve_handicap_21 == 1 && varbit_dom_achieve_handicap_22 == 1) {
        cs2_5453(1, 7);
    } else {
        cs2_5453(0, 7);
    }

    if (varbit_dom_achieve_powerup_baby_bomb == 1 && varbit_dom_achieve_powerup_daddy_bomb == 1 && varbit_dom_achieve_powerup_grandaddy_bomb == 1 && varbit_dom_achieve_powerup_help_horn == 1) {
        cs2_5453(1, 8);
    } else {
        cs2_5453(0, 8);
    }

    if (varbit_dom_achieve_monsters_slain >= 200) {
        cs2_5453(1, 9);
    } else {
        cs2_5453(0, 9);
    }

    if (varbit_dom_achieve_endurance_high == 1) {
        cs2_5453(1, 10);
    } else {
        cs2_5453(0, 10);
    }

    if (varbit_dom_achieve_climber_high == 1) {
        cs2_5453(1, 11);
    } else {
        cs2_5453(0, 11);
    }

    if (varbit_dom_achieve_monsters_slain >= 300) {
        cs2_5453(1, 12);
    } else {
        cs2_5453(0, 12);
    }

    if (varbit_dom_achieve_journal_full == 1) {
        cs2_5453(1, 13);
    } else {
        cs2_5453(0, 13);
    }

    if (varbit_dom_achieve_high_factor == 1 && varbit_dom_achieve_journal_full == 1) {
        cs2_5453(1, 14);
    } else {
        cs2_5453(0, 14);
    }

    if (varbit_dom_achieve_special_1 == 1 && varbit_dom_achieve_special_2 == 1 && varbit_dom_achieve_special_3 == 1 && varbit_dom_achieve_special_4 == 1 && varbit_dom_achieve_special_5 == 1 && varbit_dom_achieve_special_6 == 1 && varbit_dom_achieve_special_7 == 1 && varbit_dom_achieve_special_8 == 1 && varbit_dom_achieve_monsters_slain >= 400) {
        cs2_5453(1, 15);
    } else {
        cs2_5453(0, 15);
    }

    if (varbit_dom_achieve_monsters_slain >= 450 && varbit_dom_achieve_spectate == 1) {
        ifSetText("Complete 5 climber, endurance or special fights.", Component.interface_1156.component_1156_152);
        ifSetText("100 dreadnips (on purchase must complete 5 more)", Component.interface_1156.component_1156_153);
        if (varbit_dom_purchase_tally > 0) {
            cs2_5453(1, 16);
        } else {
            cs2_5453(0, 16);
        }
    } else {
        cs2_5453(0, 16);
    }

    if (varbit_dom_boss_1_slain == 1 && varbit_dom_boss_4_slain == 1 && varbit_dom_boss_7_slain == 1 && varbit_dom_boss_10_slain == 1 && varbit_dom_boss_13_slain == 1 && varbit_dom_boss_16_slain == 1 && varbit_dom_achieve_monsters_slain >= 500) {
        ifSetText("Complete 5 climber, endurance or special fights.", Component.interface_1156.component_1156_155);
        ifSetText("Goliath gloves (on purchase must complete 5 more)", Component.interface_1156.component_1156_157);
        ifSetText("", Component.interface_1156.component_1156_156);
        if (varbit_dom_purchase_tally > 0) {
            cs2_5453(1, 17);
        } else {
            cs2_5453(0, 17);
        }
    }

    if (varbit_dom_boss_3_slain == 1 && varbit_dom_boss_6_slain == 1 && varbit_dom_boss_9_slain == 1 && varbit_dom_boss_12_slain == 1 && varbit_dom_boss_15_slain == 1 && varbit_dom_boss_18_slain == 1 && varbit_dom_achieve_monsters_slain >= 500) {
        ifSetText("Complete 5 climber, endurance or special fights.", Component.interface_1156.component_1156_159);
        ifSetText("Spellcaster gloves (on purchase must complete 5 more)", Component.interface_1156.component_1156_161);
        ifSetText("", Component.interface_1156.component_1156_160);
        if (varbit_dom_purchase_tally > 0) {
            cs2_5453(1, 18);
        } else {
            cs2_5453(0, 18);
        }
    }

    if (varbit_dom_boss_2_slain == 1 && varbit_dom_boss_5_slain == 1 && varbit_dom_boss_8_slain == 1 && varbit_dom_boss_11_slain == 1 && varbit_dom_boss_14_slain == 1 && varbit_dom_boss_17_slain == 1 && varbit_dom_achieve_monsters_slain >= 500) {
        ifSetText("Complete 5 climber, endurance or special fights.", Component.interface_1156.component_1156_163);
        ifSetText("Swift gloves (on purchase must complete 5 more)", Component.interface_1156.component_1156_165);
        ifSetText("", Component.interface_1156.component_1156_164);
        if (varbit_dom_purchase_tally > 0) {
            cs2_5453(1, 19);
        } else {
            cs2_5453(0, 19);
        }
    }

    if (varbit_dom_achieve_ascend_slain >= 500) {
        cs2_5453(1, 20);
    } else {
        cs2_5453(0, 20);
    }

    if (varbit_dom_achieve_monsters_slain >= 500 && varbit_dom_achieve_spectate == 1 && varbit_dom_achieve_climber_high == 1 && varbit_dom_achieve_endurance_high == 1 && varbit_dom_achieve_handicap_1 == 1 && varbit_dom_achieve_handicap_2 == 1 && varbit_dom_achieve_handicap_3 == 1 && varbit_dom_achieve_handicap_4 == 1 && varbit_dom_achieve_handicap_5 == 1 && varbit_dom_achieve_handicap_6 == 1 && varbit_dom_achieve_handicap_7 == 1 && varbit_dom_achieve_handicap_8 == 1 && varbit_dom_achieve_handicap_9 == 1 && varbit_dom_achieve_handicap_10 == 1 && varbit_dom_achieve_handicap_11 == 1 && varbit_dom_achieve_handicap_12 == 1 && varbit_dom_achieve_handicap_13 == 1 && varbit_dom_achieve_handicap_14 == 1 && varbit_dom_achieve_handicap_15 == 1 && varbit_dom_achieve_handicap_16 == 1 && varbit_dom_achieve_handicap_17 == 1 && varbit_dom_achieve_handicap_18 == 1 && varbit_dom_achieve_handicap_19 == 1 && varbit_dom_achieve_handicap_20 == 1 && varbit_dom_achieve_handicap_21 == 1 && varbit_dom_achieve_handicap_22 == 1 && varbit_dom_achieve_powerup_baby_bomb == 1 && varbit_dom_achieve_powerup_daddy_bomb == 1 && varbit_dom_achieve_powerup_grandaddy_bomb == 1 && varbit_dom_achieve_powerup_help_horn == 1 && varbit_dom_achieve_journal_full == 1 && varbit_dom_achieve_high_factor == 1 && varbit_dom_achieve_special_1 == 1 && varbit_dom_achieve_special_2 == 1 && varbit_dom_achieve_special_3 == 1 && varbit_dom_achieve_special_4 == 1 && varbit_dom_achieve_special_5 == 1 && varbit_dom_achieve_special_6 == 1 && varbit_dom_achieve_special_7 == 1 && varbit_dom_achieve_special_8 == 1 && varbit_dom_boss_1_slain == 1 && varbit_dom_boss_4_slain == 1 && varbit_dom_boss_7_slain == 1 && varbit_dom_boss_10_slain == 1 && varbit_dom_boss_13_slain == 1 && varbit_dom_boss_16_slain == 1 && varbit_dom_boss_2_slain == 1 && varbit_dom_boss_5_slain == 1 && varbit_dom_boss_8_slain == 1 && varbit_dom_boss_11_slain == 1 && varbit_dom_boss_14_slain == 1 && varbit_dom_boss_17_slain == 1 && varbit_dom_boss_3_slain == 1 && varbit_dom_boss_6_slain == 1 && varbit_dom_boss_9_slain == 1 && varbit_dom_boss_12_slain == 1 && varbit_dom_boss_15_slain == 1 && varbit_dom_boss_18_slain == 1) {
        cs2_5453(1, 21);
        cs2_5453(1, 22);
    } else {
        cs2_5453(0, 21);
        cs2_5453(0, 22);
    }
}
