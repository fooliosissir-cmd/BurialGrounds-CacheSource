/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1611

function cs2_1611(): number {
    let int0: number = varbit_atvar_str_potion + varbit_atvar_enter_champions + varbit_atvar_use_chaos + varbit_atvar_full_rats + varbit_atvar_collect_egg + varbit_atvar_spirit_tree + varbit_atvar_kitten_colour + varbit_atvar_under_wall + varbit_atvar_enter_tolna + varbit_atvar_necklace_digsite + varbit_atvar_earth_tiara + varbit_atvar_pickpocket_guard + varbit_atvar_tele_varrock + varbit_atvar_slayer_task + varbit_atvar_20_planks + varbit_atvar_pick_fruit + varbit_atvar_use_balloon + varbit_atvar_rat_medal + varbit_atvar_fairy_circle + varbit_atvar_runite_armour;

    if (varbit_atvar_perform_emotes == 4) {
        int0 = int0 + 1;
    }
    return int0;
}
