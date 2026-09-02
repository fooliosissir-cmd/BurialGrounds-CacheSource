/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3044

function cs2_3044(intArg0: component): void {
    if (chatGetFilterPrivate() == -1) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);
    cs2_3045();
}
