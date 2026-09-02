/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_scroll]

function player_kit_scroll(intArg0: component, intArg1: component): void {
    ifSetScrollSize(200, varc_player_kit_scroll_length, intArg1);
    ifSetScrollPos(0, 0, intArg1);
    proc_scrollbar_vertical(intArg0, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
