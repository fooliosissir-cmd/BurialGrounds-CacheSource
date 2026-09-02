/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6287

function cs2_6287(): void {
    if (varc_cruc_overlay_sh_state < 0) {
        varc_cruc_overlay_sh_state = 0;
    }

    if (varc_cruc_overlay_sh_state == 0) {
        varc_cruc_overlay_sh_state = 1;
        ifSetHide(false, Component.interface_1296.component_1296_1);
        ifSet2dangle(32768, Component.interface_1296.component_1296_4);
    } else {
        varc_cruc_overlay_sh_state = 0;
        ifSetHide(true, Component.interface_1296.component_1296_1);
        ifSet2dangle(0, Component.interface_1296.component_1296_4);
    }
}
