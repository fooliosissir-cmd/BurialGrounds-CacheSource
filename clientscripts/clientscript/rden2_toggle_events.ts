/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rden2_toggle_events]

function rden2_toggle_events(): void {
    if (ifGetHide(Component.rden2_overlay.events_layer) == 1) {
        ifSetGraphic(Graphic.conq_tick_box_0, Component.rden2_overlay.showevents_button);
        ifSetHide(false, Component.rden2_overlay.events_layer);
        varc_rden2_events_hidden = 0;
    } else {
        ifSetGraphic(Graphic.conq_tick_box_1, Component.rden2_overlay.showevents_button);
        ifSetHide(true, Component.rden2_overlay.events_layer);
        varc_rden2_events_hidden = 1;
    }
}
