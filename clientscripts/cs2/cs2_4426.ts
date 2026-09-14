/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4426

function cs2_4426(intArg0: component, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    cs2_2732(intArg0, intArg1, varbit_option_friendchatcolour, 2);
    ifSetOnOp(hook(cs2_4427, "iiIIIIII", [event_opindex, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7]), intArg0);
}
