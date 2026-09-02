/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_search_close]

function music_search_close(): void {
    proc_meslayer_close(14);
    varcstr_196 = "";
    ifSetOnTimer(hook(music_v3_setcolour, "", []), Component.interface_187.component_187_18);
    ifSetGraphic(Graphic.graphic_3245, Component.interface_187.component_187_18);
}
