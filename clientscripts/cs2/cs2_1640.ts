/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1640

function cs2_1640(intArg0: component, intArg1: component, intArg2: graphic): void {
    let str0: string = varcstr_274;
    let int3: number = ifGetWidth(intArg0);

    if (parawidth(str0 + " ", int3, intArg2) > int3) {
        while (parawidth(str0 + "... ", 2147483647, intArg2) > int3) {
            str0 = subString(str0, 0, stringLength(str0) - 1);
        }
        str0 = str0 + "...";
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, intArg1, varcstr_274, 25, 5000]), intArg0);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [intArg1]), intArg0);
    } else {
        ifSetOnMouseRepeat(noHook(""), intArg0);
        ifSetOnMouseLeave(noHook(""), intArg0);
    }
    ifSetText(str0, intArg0);
}
