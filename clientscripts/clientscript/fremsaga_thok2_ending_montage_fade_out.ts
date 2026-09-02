/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_ending_montage_fade_out]

function fremsaga_thok2_ending_montage_fade_out(): void {
    ifSetTrans(254, Component.fremsaga_thok2_ending_montage.fade_rect);
    ifSetOnTimer(hook(cs2_6113, "Ii", [event_com, 3]), Component.fremsaga_thok2_ending_montage.fade_rect);
}
