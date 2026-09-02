/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4060

function cs2_4060(): void {
    if (varbit_warguild_token_type_multi_temp == 1) {
        if (varbit_warguild_tokens_strength < 30 || varbit_warguild_tokens_defence < 30 || varbit_warguild_tokens_attack < 30 || varbit_warguild_tokens_combat < 30 || varbit_warguild_tokens_balance < 30) {
            cs2_4061();
        } else {
            cs2_4062();
        }
    } else if (varbit_warguild_tokens_strength < 200 && varbit_warguild_tokens_defence < 200 && varbit_warguild_tokens_attack < 200 && varbit_warguild_tokens_combat < 200 && varbit_warguild_tokens_balance < 200) {
        cs2_4061();
    } else {
        cs2_4062();
    }
}
