/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2656

function cs2_2656(): number {
    let int0: number = 0;

    int0 = int0 + varbit_mom2_name_progress;
    let int1: number = (1 + varbit_mom2_shadow_progress) / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_mummy_body_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_mummy_hand_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_mummy_jar_1_progress + varbit_mom2_mummy_jar_2_progress + varbit_mom2_mummy_jar_3_progress + varbit_mom2_mummy_jar_4_progress;
    int0 = int0 + int1;
    int0 = varbit_mom2_mummy_ushabti_progress + int0;
    int1 = varbit_mom2_furniture_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_wine_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_grain_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_personality_progress / 2;
    int0 = int0 + int1;
    int1 = varbit_mom2_mummy_prayer_15_progress + varbit_mom2_mummy_prayer_20_progress + varbit_mom2_mummy_prayer_30_progress + varbit_mom2_mummy_prayer_40_progress + varbit_mom2_mummy_prayer_45_progress;
    int0 = int0 + int1;
    int0 = int0 * 4;

    if (varbit_mom2_main == 20 && int0 > 75) {
        varbit_mom2_main = 50;
    }
    return int0;
}
