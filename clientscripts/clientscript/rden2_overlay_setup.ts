/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_overlay_setup]

function rden2_overlay_setup(): void {
    if (varc_rden2_events_hidden == 1) {
        ifSetGraphic(Graphic.conq_tick_box_1, Component.rden2_overlay.showevents_button);
        ifSetHide(true, Component.rden2_overlay.events_layer);
        ifSetOp(1, "Hide", Component.rden2_overlay.minimise_button);
    }

    if (varc_rden2_overlay_hidden == 1) {
        ifSet2dangle(32768, Component.rden2_overlay.minimise_button);
        ifSetHide(true, Component.rden2_overlay.info_layer);
        ifSetSize(172, 50, 0, 0, Component.rden2_overlay.gold_frame_2_layer);
        ifSetOp(1, "Unhide", Component.rden2_overlay.minimise_button);
    }
}
