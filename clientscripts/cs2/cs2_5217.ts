/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5217

function cs2_5217(intArg0: component, intArg1: number, intArg2: component, intArg3: component): void {
    cs2_5981(intArg0);
    cs2_4161(intArg0, 255);
    ifSetOnMouseOver(noHook(""), intArg0);
    ifSetOnMouseOver(noHook(""), intArg3);
    ifSetOnMouseOver(hook(cs2_5218, "IIiiI", [intArg0, intArg3, 0, 0, intArg2]), intArg2);
    ifSetOnMouseLeave(hook(cs2_5218, "IIiiI", [intArg0, intArg3, 1, 0, intArg2]), intArg0);
    ifSetHide(true, ifGetParentLayer(intArg3));
}
