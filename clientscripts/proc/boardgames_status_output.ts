/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,boardgames_status_output]

function boardgames_status_output(intArg0: component, strArg0: string, intArg1: component): void {
    let str1: string = strArg0;
    let int2: number = ifGetWidth(intArg0);

    if (parawidth(str1 + " ", int2, Graphic.b12_full) > int2) {
        while (parawidth(str1 + "... ", 2147483647, Graphic.b12_full) > int2) {
            str1 = subString(str1, 0, stringLength(str1) - 1);
        }
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, intArg1, strArg0, 25, 5000]), intArg0);
        hookMouseExit(hook(clientscript_deltooltip, "I", [intArg1]), intArg0);
        str1 = str1 + "...";
    } else {
        ifSetOnMouseOver(noHook(""), intArg0);
        hookMouseExit(noHook(""), intArg0);
    }
    ifSetText(str1, intArg0);
}
