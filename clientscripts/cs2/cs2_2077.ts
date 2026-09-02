/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2077

function cs2_2077(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (varc_snp_game_in_progress_client == 0) {
        int0 = 3 - varc_635;
        if (int0 == 1) {
            ifSetText("New game: " + tostring(int0) + " min", Component.interface_837.component_837_9);
        } else {
            ifSetText("New game: " + tostring(int0) + " mins", Component.interface_837.component_837_9);
        }
    } else {
        int1 = 20 - varc_snp_game_duration_client;
        int0 = int1 + 3;
        ifSetText("New game: " + tostring(int0) + " mins", Component.interface_837.component_837_9);
    }
}
