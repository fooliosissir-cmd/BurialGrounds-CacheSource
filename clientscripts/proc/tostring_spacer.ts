/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tostring_spacer]

function tostring_spacer(intArg0: number, strArg0: string): string {
    let int1: number = intArg0 / 1000000000;
    let int2: number = (intArg0 - int1 * 1000000000) / 1000000;
    let int3: number = (intArg0 - (int1 * 1000000000 + int2 * 1000000)) / 1000;
    let int4: number = intArg0 - (int1 * 1000000000 + int2 * 1000000 + int3 * 1000);

    if (int1 > 0) {
        return tostring(int1) + strArg0 + cs2_47(int2) + strArg0 + cs2_47(int3) + strArg0 + cs2_47(int4);
    }

    if (int2 > 0) {
        return tostring(int2) + strArg0 + cs2_47(int3) + strArg0 + cs2_47(int4);
    }

    if (int3 > 0) {
        return tostring(int3) + strArg0 + cs2_47(int4);
    }
    return tostring(intArg0);
}
