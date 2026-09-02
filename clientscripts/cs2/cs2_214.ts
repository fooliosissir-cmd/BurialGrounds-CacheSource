/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_214

function cs2_214(intArg0: component, intArg1: number): void {
    let int2: component = ifGetLayer(intArg0);

    ifSetOnVarTransmit(hook(cs2_1660, "IiIY", [intArg0, intArg1, int2], [281, 1255]), int2);
    cs2_1661(intArg0, intArg1, int2);
}
