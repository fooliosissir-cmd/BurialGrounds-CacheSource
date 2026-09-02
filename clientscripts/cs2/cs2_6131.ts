/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6131

function cs2_6131(intArg0: number, intArg1: number): void {
    varc_fremsaga_bilrach_mind_mouse_x = intArg0;
    varc_fremsaga_bilrach_mind_mouse_y = intArg1;
    varc_fremsaga_bilrach_mind_cursor_timeout = 50;
    ifSetOnTimer(noHook(""), Component.interface_1270.component_1270_34);
    ifSetOnTimer(hook(cs2_6140, "ii", [intArg0, intArg1]), Component.interface_1270.component_1270_34);
}
