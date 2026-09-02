/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1991

function cs2_1991(): number {
    let int0: number = varbit_atseer_archery_tickets + varbit_atseer_fremennik_agility + varbit_atseer_talk_thormac + varbit_atseer_buy_tribal_weapons + varbit_atseer_fill_coal_trucks + varbit_atseer_teleport_camelot + varbit_atseer_make_maple_fire + varbit_atseer_get_pet_fish + varbit_atseer_cook_bass + varbit_atseer_highest_point;

    if (varbit_atseer_kill_tower_guards == 15) {
        int0 = int0 + 1;
    }

    if (varbit_atseer_kill_elementals == 15) {
        int0 = int0 + 1;
    }
    return int0;
}
