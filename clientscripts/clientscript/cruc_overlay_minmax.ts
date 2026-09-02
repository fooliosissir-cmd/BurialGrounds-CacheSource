/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_overlay_minmax]

function cruc_overlay_minmax(): void {
    if (varc_cruc_overlay_maximise_state < 0) {
        varc_cruc_overlay_maximise_state = 0;
    }

    if (varc_cruc_overlay_maximise_state == 0) {
        varc_cruc_overlay_maximise_state = 1;
        ifSetHide(true, Component.interface_1296.component_1296_22);
        ifSetHide(false, Component.interface_1296.component_1296_6);
        ifSetPosition(120, 2, 2, 0, Component.interface_1296.component_1296_23);
    } else {
        varc_cruc_overlay_maximise_state = 0;
        ifSetHide(false, Component.interface_1296.component_1296_22);
        ifSetHide(true, Component.interface_1296.component_1296_6);
        ifSetPosition(120, 60, 2, 0, Component.interface_1296.component_1296_23);
    }
}
