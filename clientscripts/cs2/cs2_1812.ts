/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1812

function cs2_1812(strArg0: string, intArg0: component): void {
    if (stringLength(strArg0) == 0) {
        ifSetText("", intArg0);
        varcstr_clanwars_caller_lastusedstring = "";
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }
    ifSetText(strArg0, intArg0);
    varcstr_clanwars_caller_lastusedstring = strArg0;
    ifSetOnTimer(hook(cs2_1813, "iI", [clientClock() + 1000, intArg0]), intArg0);
}
