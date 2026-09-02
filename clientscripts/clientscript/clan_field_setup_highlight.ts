/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_setup_highlight]

function clan_field_setup_highlight(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg1 == varc_welcome_screen_time) {
        intArg2 = 255;
    }
    let int3: number = intArg1 * 10;

    if (ccFind(intArg0, int3) == 1) {
        if (intArg2 == 255) {
            ccSetOnTimer(noHook(""));
            if (ccFind<1>(intArg0, int3 + 4) == 1) {
                ccSetTrans<1>(255);
            }
            if (ccFind<1>(intArg0, int3 + 6) == 1) {
                ccSetTrans<1>(255);
            }
            if (ccFind<1>(intArg0, int3 + 8) == 1) {
                ccSetTrans<1>(255);
            }
        } else {
            ccSetOnTimer(hook(clientscript_clan_field_setup_highlight_fade, "Iii", [event_com, event_comsubid, intArg2]));
            proc_clan_field_setup_highlight_fade(intArg0, intArg2);
        }
    }
}
