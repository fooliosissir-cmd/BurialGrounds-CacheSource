/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2078

function cs2_2078(): void {
    let int0: number = 20 - varc_snp_game_duration_client;

    if (int0 == 1) {
        ifSetText(tostring(int0) + " min", Component.interface_836.component_836_27);
    } else {
        ifSetText(tostring(int0) + " mins", Component.interface_836.component_836_27);
    }
}
