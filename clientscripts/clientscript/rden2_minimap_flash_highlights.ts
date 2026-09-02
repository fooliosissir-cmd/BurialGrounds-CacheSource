/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_minimap_flash_highlights]

function rden2_minimap_flash_highlights(): void {
    if (varc_rden2_minimap_flash_direction == 1) {
        varc_rden2_minimap_flash_value = varc_rden2_minimap_flash_value + 1;
        if (varc_rden2_minimap_flash_value >= 80) {
            varc_rden2_minimap_flash_direction = 0;
        }
    } else {
        varc_rden2_minimap_flash_value = varc_rden2_minimap_flash_value - 1;
        if (varc_rden2_minimap_flash_value <= 0) {
            varc_rden2_minimap_flash_direction = 1;
        }
    }
    let int0: number = 255 * varc_rden2_minimap_flash_value / 80;

    if (int0 < 230 && int0 >= 123) {
        int0 = int0 - int0 / 20;
    }

    if (int0 > 25 && int0 <= 122) {
        int0 = int0 + int0 / 20;
    }
    ifSetTrans(int0, Component.interface_1182.component_1182_46);
    ifSetTrans(int0, Component.interface_1182.component_1182_45);
    int0 = 255 - int0;
    ifSetTrans(int0, Component.interface_1182.component_1182_48);
    ifSetTrans(int0, Component.interface_1182.component_1182_49);
}
