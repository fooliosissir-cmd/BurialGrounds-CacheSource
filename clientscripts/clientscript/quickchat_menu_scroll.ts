/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,quickchat_menu_scroll]

function clientscript_quickchat_menu_scroll(intArg0: component, intArg1: number): void {
    if (ifGetScrollX(intArg0) > intArg1) {
        ifSetScrollSize(ifGetScrollWidth(intArg0) - 10, 0, intArg0);
        ifSetScrollPos(ifGetScrollX(intArg0) - 10, 0, intArg0);
        if (ifGetScrollX(intArg0) < intArg1) {
            ifSetScrollSize(intArg1 + ifGetWidth(intArg0), 0, intArg0);
            ifSetScrollPos(intArg1, 0, intArg0);
            ifSetOnTimer(noHook(""), intArg0);
            return;
        }
    } else if (ifGetScrollX(intArg0) < intArg1) {
        ifSetScrollSize(ifGetScrollWidth(intArg0) + 10, 0, intArg0);
        ifSetScrollPos(ifGetScrollX(intArg0) + 10, 0, intArg0);
        if (ifGetScrollX(intArg0) > intArg1) {
            ifSetScrollSize(intArg1 + ifGetWidth(intArg0), 0, intArg0);
            ifSetScrollPos(intArg1, 0, intArg0);
            ifSetOnTimer(noHook(""), intArg0);
            return;
        }
    } else {
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }
}
