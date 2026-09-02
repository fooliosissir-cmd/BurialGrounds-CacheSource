/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3409

function cs2_3409(intArg0: component): void {
    let str0: string = "Access Forums";

    cs2_3408(intArg0, str0);
    ifSetSize(stringWidth(str0, Graphic.p12_full), ifGetHeight(intArg0), 0, 0, intArg0);
    ifSetText("<u=64c8fa>" + str0 + "</u>", intArg0);
    ifSetOnOpt(hook(cs2_3410, "", []), intArg0);
}
