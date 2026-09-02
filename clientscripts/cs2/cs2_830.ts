/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_830

function cs2_830(intArg0: component, intArg1: component): void {
    ifSetModelAnim(3320, intArg1);
    ifSetOnVarTransmit(hook(cs2_831, "IY", [intArg0], [425]), intArg0);
    cs2_834(intArg0);
}
