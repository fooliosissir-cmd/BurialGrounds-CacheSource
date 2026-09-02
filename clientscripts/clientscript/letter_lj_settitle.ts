/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,letter_lj_settitle]

function letter_lj_settitle(intArg0: component, intArg1: component): void {
    let str0: string = varcstr_211;
    let int2: number = ifGetWidth(intArg0);

    if (parawidth(str0, 2147483647, Graphic.quill_oblique_large) > int2) {
        while (parawidth(str0 + "...", 2147483647, Graphic.quill_oblique_large) > int2) {
            str0 = subString(str0, 0, stringLength(str0) - 1);
        }
        str0 = str0 + "...";
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, intArg1, varcstr_211, 25, 5000]), intArg0);
        hookMouseExit(hook(clientscript_deltooltip, "I", [intArg1]), intArg0);
    } else {
        ifSetOnMouseOver(noHook(""), intArg0);
        hookMouseExit(noHook(""), intArg0);
    }
    ifSetText(str0, intArg0);
}
