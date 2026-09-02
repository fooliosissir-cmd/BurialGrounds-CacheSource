/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5460

function cs2_5460(): number {
    let int0: number = 0;

    if (varbit_dom_handicap_reduce_melee_att == 1) {
        int0 = int0 + 220;
    }

    if (varbit_dom_handicap_reduce_mage_att == 1) {
        int0 = int0 + 220;
    }

    if (varbit_dom_handicap_reduce_range_att == 1) {
        int0 = int0 + 220;
    }

    if (varbit_dom_handicap_reduce_melee_def == 1) {
        int0 = int0 + 200;
    }

    if (varbit_dom_handicap_reduce_mage_def == 1) {
        int0 = int0 + 160;
    }

    if (varbit_dom_handicap_reduce_range_def == 1) {
        int0 = int0 + 160;
    }

    if (varbit_dom_handicap_no_shield == 1) {
        int0 = int0 + 130;
    }

    if (varbit_dom_handicap_no_food == 1) {
        int0 = int0 + 270;
    }

    if (varbit_dom_handicap_random_freeze == 1) {
        int0 = int0 + 110;
    }

    if (varbit_dom_handicap_halved_hp == 1) {
        int0 = int0 + 140;
    }

    if (varbit_dom_handicap_no_body_armour == 1) {
        int0 = int0 + 200;
    }

    if (varbit_dom_handicap_poisoned == 1) {
        int0 = int0 + 90;
    }

    if (varbit_dom_handicap_diseased == 1) {
        int0 = int0 + 80;
    }

    if (varbit_dom_handicap_no_familiar == 1) {
        int0 = int0 + 90;
    }

    if (varbit_dom_handicap_no_prayers == 1) {
        int0 = int0 + 280;
    }

    if (varbit_dom_handicap_no_potions == 1) {
        int0 = int0 + 200;
    }

    if (varbit_dom_handicap_no_special_attacks == 1) {
        int0 = int0 + 50;
    }

    if (varbit_dom_handicap_slip_fingers == 1) {
        int0 = int0 + 240;
    }

    if (varbit_dom_handicap_random_daze == 1) {
        int0 = int0 + 260;
    }

    if (varbit_dom_handicap_no_powerups == 1) {
        int0 = int0 + 70;
    }

    if (varbit_dom_handicap_life_saver == 1) {
        int0 = int0 + -50;
    }

    if (varbit_dom_handicap_monster_stun == 1) {
        int0 = int0 + -40;
    }
    return int0;
}
