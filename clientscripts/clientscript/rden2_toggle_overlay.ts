/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_toggle_overlay]

function rden2_toggle_overlay(): void {
    if (varc_rden2_overlay_hidden == 1) {
        ifSet2dangle(0, Component.rden2_overlay.minimise_button);
        ifSetHide(false, Component.rden2_overlay.info_layer);
        ifSetSize(172, 179, 0, 0, Component.rden2_overlay.gold_frame_2_layer);
        ifSetOp(1, "Hide", Component.rden2_overlay.minimise_button);
        varc_rden2_overlay_hidden = 0;
    } else {
        ifSet2dangle(32768, Component.rden2_overlay.minimise_button);
        ifSetHide(true, Component.rden2_overlay.info_layer);
        ifSetSize(172, 50, 0, 0, Component.rden2_overlay.gold_frame_2_layer);
        ifSetOp(1, "Unhide", Component.rden2_overlay.minimise_button);
        varc_rden2_overlay_hidden = 1;
    }
}
