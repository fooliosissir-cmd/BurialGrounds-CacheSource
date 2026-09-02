/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2095

function cs2_2095(): void {
    if (varc_snp_tut_flash_counter_client < 100) {
        varc_snp_tut_flash_counter_client = varc_snp_tut_flash_counter_client + 1;
    }

    if (varc_snp_tut_flash_counter_client == 50) {
        ifSetHide(true, Component.interface_834.component_834_48);
        ifSetHide(true, Component.interface_834.component_834_52);
        ifSetHide(true, Component.interface_834.component_834_56);
    }

    if (varc_snp_tut_flash_counter_client == 100) {
        ifSetHide(false, Component.interface_834.component_834_48);
        ifSetHide(false, Component.interface_834.component_834_52);
        ifSetHide(false, Component.interface_834.component_834_56);
        varc_snp_tut_flash_counter_client = 0;
    }
}
