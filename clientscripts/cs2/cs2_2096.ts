/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2096

function cs2_2096(): void {
    if (varc_snp_tut_flash_counter_client < 100) {
        varc_snp_tut_flash_counter_client = varc_snp_tut_flash_counter_client + 1;
    }

    if (varc_snp_tut_flash_counter_client == 50) {
        ifSetColour(colour(0xFFFFFF), Component.interface_834.component_834_13);
    }

    if (varc_snp_tut_flash_counter_client == 100) {
        ifSetColour(colour(0xFF2323), Component.interface_834.component_834_13);
        varc_snp_tut_flash_counter_client = 0;
    }
}
