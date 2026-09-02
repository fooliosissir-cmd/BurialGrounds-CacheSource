/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2760

function cs2_2760(intArg0: component): void {
    if (varc_173 == 1 || varbit_cutscene_status == 1) {
        ifClearops(intArg0);
        ifSetOnOpt(noHook(""), intArg0);
        ifSetnoclickthrough(false, intArg0);
    } else {
        ifSetOp(1, "Face North", intArg0);
        ifSetOnOpt(hook(cs2_2757, "i", [event_opindex]), intArg0);
        ifSetnoclickthrough(true, intArg0);
    }
}
