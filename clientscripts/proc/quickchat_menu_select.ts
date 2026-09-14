/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_menu_select]

function proc_quickchat_menu_select(intArg0: component, intArg1: component, intArg2: number, intArg3: component, intArg4: number, intArg5: number): void {
    varc_159 = 0;
    varc_158 = 0;
    let int6: number = 0;

    while (ccFind(intArg0, int6) == 1) {
        if (int6 == intArg2) {
            ccSetOnMouseOver(noHook(""));
            ccSetOnMouseLeave(noHook(""));
            if (ccFind<1>(intArg1, int6) == 1) {
                ccSetHide<1>(false);
                ccSetColour<1>(colour(0x969777));
            }
        } else {
            ccSetOnMouseOver(hook(cs2_1082, "iIi", [intArg4 - 1, intArg1, int6]));
            ccSetOnMouseLeave(hook(cs2_1083, "iIi", [intArg4 - 1, intArg1, int6]));
            if (ccFind<1>(intArg1, int6) == 1) {
                ccSetHide<1>(true);
            }
        }
        int6 = int6 + 1;
    }
    quickchat_menu_add(intArg3, intArg4, intArg5, -1, 0);
}
