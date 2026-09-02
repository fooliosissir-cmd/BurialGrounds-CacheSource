/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1169

function cs2_1169(intArg0: number, intArg1: number, strArg0: string): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_737, intArg1);

    ifSetOnTimer(hook(cs2_1168, "isI", [intArg0, strArg0, int2]), int2);
}
