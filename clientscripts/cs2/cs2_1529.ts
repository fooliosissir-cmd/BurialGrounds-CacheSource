/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1529

function cs2_1529(): number {
    let int0: number = varbit_atjun_easy_swing + varbit_atjun_easy_gold + varbit_atjun_easy_boat_sarim + varbit_atjun_easy_boat_ardy + varbit_atjun_easy_cairn + varbit_atjun_easy_fishing + varbit_atjun_easy_tzhaar + varbit_atjun_easy_jogre;

    if (varbit_atjun_easy_banana == 5) {
        int0 = int0 + 1;
    }

    if (varbit_atjun_easy_seaweed == 5) {
        int0 = int0 + 1;
    }
    return int0;
}
