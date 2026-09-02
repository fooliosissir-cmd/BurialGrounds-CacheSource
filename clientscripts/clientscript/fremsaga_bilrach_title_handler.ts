/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_title_handler]

function fremsaga_bilrach_title_handler(intArg0: number): void {
    varc_fremsaga_bilrach_title_counter = varc_fremsaga_bilrach_title_counter + 1;

    switch (intArg0) {
        case 1:
            if (varc_fremsaga_bilrach_title_counter > 50) {
                varc_fremsaga_bilrach_title_counter = 0;
                ifSetTrans(255, Component.fremsaga_bilrach_title.title_foreground);
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [2]), Component.fremsaga_bilrach_title.title_background);
            } else {
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [1]), Component.fremsaga_bilrach_title.title_background);
                ifSetTrans(scale(varc_fremsaga_bilrach_title_counter, 50, 255), Component.fremsaga_bilrach_title.title_foreground);
            }
            break;
        case 2:
            if (varc_fremsaga_bilrach_title_counter > 150) {
                varc_fremsaga_bilrach_title_counter = 0;
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [3]), Component.fremsaga_bilrach_title.title_background);
            } else {
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [2]), Component.fremsaga_bilrach_title.title_background);
            }
            break;
        case 3:
            if (varc_fremsaga_bilrach_title_counter > 50) {
                varc_fremsaga_bilrach_title_counter = 0;
                ifSetTrans(0, Component.fremsaga_bilrach_title.title_foreground);
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [4]), Component.fremsaga_bilrach_title.title_background);
                ifSetHide(true, Component.fremsaga_bilrach_title.title_foreground);
                ifSetHide(true, Component.fremsaga_bilrach_title.title_text);
            } else {
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [3]), Component.fremsaga_bilrach_title.title_background);
                ifSetTrans(255 - scale(varc_fremsaga_bilrach_title_counter, 50, 255), Component.fremsaga_bilrach_title.title_foreground);
            }
            break;
        case 4:
            if (varc_fremsaga_bilrach_title_counter > 150) {
                varc_fremsaga_bilrach_title_counter = 0;
                ifSetTrans(255, Component.fremsaga_bilrach_title.title_background);
                ifSetOnTimer(noHook(""), Component.fremsaga_bilrach_title.title_background);
            } else {
                ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [4]), Component.fremsaga_bilrach_title.title_background);
                ifSetTrans(scale(varc_fremsaga_bilrach_title_counter, 150, 255), Component.fremsaga_bilrach_title.title_background);
            }
            break;
    }
}
