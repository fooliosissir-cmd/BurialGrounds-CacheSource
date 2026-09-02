/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6373

function cs2_6373(intArg0: number, intArg1: number): [number, number, number] {
    let int2: number = clientClock() % 36;
    let int3: number = min(intArg0 + 8, max(intArg0 + enumOp(type_int, type_int, Enum.if_highlight_size_sin_lookup, int2), intArg0));
    let int4: number = min(intArg1 + 8, max(intArg1 + enumOp(type_int, type_int, Enum.if_highlight_size_sin_lookup, int2), intArg1));
    let int5: number = min(255, max(enumOp(type_int, type_int, Enum.if_highlight_transparency_sin_lookup, int2), 0));

    return [int3, int4, int5];
}
