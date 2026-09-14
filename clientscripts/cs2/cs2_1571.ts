/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1571

function cs2_1571(intArg0: component, intArg1: component, intArg2: graphic): void {
    let str0: string = varcstr_203;
    let int3: number = ifGetWidth(intArg0);

    if (parawidth(str0 + " ", int3, intArg2) > int3) {
        while (stringWidth(str0 + "... ", intArg2) > int3) {
            str0 = subString(str0, 0, stringLength(str0) - 1);
        }
        str0 = str0 + "...";
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, intArg1, varcstr_203, 25, 5000]), intArg0);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [intArg1]), intArg0);
    } else {
        ifSetOnMouseRepeat(noHook(""), intArg0);
        ifSetOnMouseLeave(noHook(""), intArg0);
    }
    ifSetText(str0, intArg0);
}
