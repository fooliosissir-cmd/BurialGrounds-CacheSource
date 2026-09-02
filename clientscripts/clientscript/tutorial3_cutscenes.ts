/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cutscenes]

function tutorial3_cutscenes(intArg0: component): void {
    if (varc_tutorial3_cutscene_tracker <= 0) {
        camSmoothreset();
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 100) {
        tutorial3_battle(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 200) {
        cs2_2762(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 300) {
        tutorial3_explosion(intArg0, cs2_284(coord()));
        return;
    }
    cs2_2826(intArg0, cs2_284(coord()));
}
