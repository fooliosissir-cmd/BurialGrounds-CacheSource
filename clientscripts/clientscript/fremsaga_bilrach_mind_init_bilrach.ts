/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_mind_init_bilrach]

function fremsaga_bilrach_mind_init_bilrach(): void {
    fremsaga_bilrach_mind_build_layers(1);
    ifSetOnMouseRepeat(hook(cs2_6131, "ii", [event_mousex, event_mousey]), Component.interface_1270.component_1270_38);
    ifSetHide(true, Component.interface_1270.component_1270_35);
    ifSetHide(true, Component.interface_1270.component_1270_70);
    varc_fremsaga_bilrach_mind_probe_placed = 1;
}
