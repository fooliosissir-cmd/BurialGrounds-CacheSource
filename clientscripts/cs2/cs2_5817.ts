/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5817

function cs2_5817(): void {
    if (varc_chat_view == -1) {
        varc_chat_view = 0;
        proc_subchanged();
    } else {
        varc_chat_view = 0;
        cs2_181(varc_chat_view);
        cs2_178();
        rebuildchatbox();
        cs2_89();
    }
}
