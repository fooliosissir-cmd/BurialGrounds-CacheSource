/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1587

function cs2_1587(strArg0: string, intArg0: component, intArg1: component, intArg2: graphic): void {
    let str1: string = strArg0;
    let int3: number = ifGetWidth(intArg0);

    if (parawidth(str1 + " ", int3, intArg2) > int3) {
        while (parawidth(str1 + "... ", 2147483647, intArg2) > int3) {
            str1 = subString(str1, 0, stringLength(str1) - 1);
        }
        str1 = str1 + "...";
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, intArg1, strArg0, 25, 5000]), intArg0);
        hookMouseExit(hook(clientscript_deltooltip, "I", [intArg1]), intArg0);
    } else {
        ifSetOnMouseOver(noHook(""), intArg0);
        hookMouseExit(noHook(""), intArg0);
    }
    ifSetText(str1, intArg0);
}
