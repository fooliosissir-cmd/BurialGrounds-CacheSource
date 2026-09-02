/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_ending_montage_slice_checker]

function fremsaga_thok2_ending_montage_slice_checker(intArg0: component): void {
    if ((varc_fremsaga_thok2_ending_montage_slice_count < 5 || varc_fremsaga_thok2_ending_montage_slice_count > 9) && ifGetTrans(intArg0) != 255) {
        ifSetTrans(255, intArg0);
        ifSetHide(true, Component.fremsaga_thok2_ending_montage.image_graphic);
        ifSetHide(true, Component.fremsaga_thok2_ending_montage.text_description);
    } else if (varc_fremsaga_thok2_ending_montage_slice_count > 4 && varc_fremsaga_thok2_ending_montage_slice_count < 10 && ifGetTrans(intArg0) != 0) {
        ifSetTrans(0, intArg0);
        ifSetHide(false, Component.fremsaga_thok2_ending_montage.image_graphic);
        ifSetHide(false, Component.fremsaga_thok2_ending_montage.text_description);
    }
}
