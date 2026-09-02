/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2075

function cs2_2075(): void {
    let int0: number = 0;

    if (varc_snp_game_in_progress_client == 0) {
        if (10 - varc_633 > 0) {
            int0 = 10 - varc_633;
        } else {
            int0 = 0;
        }
        ifSetText(tostring(int0), Component.interface_837.component_837_3);
    } else {
        ifSetText(tostring(varc_637), Component.interface_837.component_837_3);
    }
}
