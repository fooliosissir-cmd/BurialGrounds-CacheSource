/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1942

function cs2_1942(): void {
    if (varc_sc_panic_direction == 0) {
        varc_sc_panic_transparent = min(255, varc_sc_panic_transparent + 6);
        if (varc_sc_panic_transparent == 255) {
            varc_sc_panic_direction = 1;
        }
    } else if (varc_sc_panic_direction == 1) {
        varc_sc_panic_transparent = max(60, varc_sc_panic_transparent - 6);
        if (varc_sc_panic_transparent == 60) {
            varc_sc_panic_direction = 0;
        }
    }
    ifSetTrans(varc_sc_panic_transparent, Component.interface_809.component_809_14);

    if (varc_sc_panic_flash_counter < 4) {
        if (ifGetHide(Component.interface_809.component_809_18) == 1) {
            varc_sc_panic_frame_count = min(20, varc_sc_panic_frame_count + 1);
            if (varc_sc_panic_frame_count == 20) {
                varc_sc_panic_frame_count = 0;
                ifSetHide(false, Component.interface_809.component_809_18);
            }
        } else {
            varc_sc_panic_frame_count = min(35, varc_sc_panic_frame_count + 1);
            if (varc_sc_panic_frame_count == 35) {
                varc_sc_panic_frame_count = 0;
                ifSetHide(true, Component.interface_809.component_809_18);
                varc_sc_panic_flash_counter = min(4, varc_sc_panic_flash_counter + 1);
            }
        }
    }
}
