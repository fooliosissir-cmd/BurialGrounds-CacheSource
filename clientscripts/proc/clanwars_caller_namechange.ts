/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_caller_namechange]

function proc_clanwars_caller_namechange(intArg0: component, intArg1: component, intArg2: component): void {
    let str0: string = "";

    if (stringLength(varcstr_clanwars_caller) > 0) {
        str0 = cs2_1814(varcstr_clanwars_caller);
        ifSetText(str0, intArg1);
        ifSetSize(parawidth(str0, 512, Graphic.b12_full), 15, 0, 0, intArg1);
    } else {
        ifSetText("", intArg1);
        ifSetSize(0, 15, 0, 0, intArg1);
    }
    varc_clanwars_caller_lastindex = -1;
    varcstr_clanwars_caller_lastusedstring = "";
    cs2_1811(intArg0, intArg1, intArg2);
}
