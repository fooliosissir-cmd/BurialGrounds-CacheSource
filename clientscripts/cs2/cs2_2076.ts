/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2076

function cs2_2076(): void {
    let int0: number = 0;

    if (varc_snp_game_in_progress_client == 0) {
        if (10 - varc_634 > 0) {
            int0 = 10 - varc_634;
        } else {
            int0 = 0;
        }
        ifSetText(tostring(int0), Component.interface_837.component_837_5);
    } else {
        ifSetText(tostring(varc_638), Component.interface_837.component_837_5);
    }
}
