/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6130

function cs2_6130(): void {
    ifSetOnTimer(hook(fremsaga_bilrach_mind_init_rockslugs, "", []), Component.interface_1270.component_1270_5);
    ifSetOnMouseOver(hook(cs2_6131, "ii", [event_mousex, event_mousey]), Component.interface_1270.component_1270_38);
    varc_fremsaga_bilrach_mind_cursor_animation_counter = 0;
    varc_fremsaga_bilrach_mind_cursor_timeout = 0;
    ifSetHide(true, Component.interface_1270.component_1270_35);
}
