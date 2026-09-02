/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5740

function cs2_5740(intArg0: component): void {
    ifSetText("", intArg0);
    ifSetOnMouseOver(noHook(""), intArg0);
    hookMouseExit(noHook(""), intArg0);
    ifClearops(intArg0);
    ifSetHide(true, intArg0);
}
