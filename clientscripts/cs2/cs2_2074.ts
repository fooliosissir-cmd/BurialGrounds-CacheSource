/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2074

function cs2_2074(): void {
    if (varc_snp_game_in_progress_client == 0) {
        ifSetText("Players needed", Component.interface_837.component_837_8);
    } else {
        ifSetText("Players in game", Component.interface_837.component_837_8);
    }
}
