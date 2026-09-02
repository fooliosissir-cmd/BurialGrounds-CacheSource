/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_ending_montage_onload]

function fremsaga_thok2_ending_montage_onload(): void {
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.image_graphic);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.text_description);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_horz_1);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_horz_2);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_horz_3);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_horz_4);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_horz_5);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_vert_1);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_vert_2);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_vert_3);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_vert_4);
    ifSetHide(true, Component.fremsaga_thok2_ending_montage.top_vert_5);
    ifSetTrans(255, Component.fremsaga_thok2_ending_montage.fade_rect);
    ifSetTrans(255, Component.fremsaga_thok2_ending_montage.bg_rect);
    ifSetOnTimer(hook(fremsaga_thok2_ending_montage_slice_checker, "I", [event_com]), Component.fremsaga_thok2_ending_montage.bg_rect);
    varc_fremsaga_thok2_ending_montage_slice_count = 0;
}
