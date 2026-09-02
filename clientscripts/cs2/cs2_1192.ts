/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1192

function cs2_1192(intArg0: component, intArg1: component): void {
    ifSetSize(parawidth(ifGetText(intArg1), 512, Graphic.p12_full) + 34, ifGetHeight(intArg0), 0, 0, intArg0);
    ifSetOnVarcTransmit(hook(cs2_1193, "1Y", [true], [1002]), intArg0);
    ifSetOnTimer(hook(cs2_1193, "1", [false]), intArg0);
    cs2_1194();
}
