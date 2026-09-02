/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,userflowflags]

function userflowflags(intArg0: number): boolean {
    if (intArg0 < 0 || intArg0 > 63) {
        return false;
    }
    let [int1, int2] = getmachineuid();

    if (intArg0 < 32) {
        return int_to_bool(testBit(int2, intArg0));
    } else {
        return int_to_bool(testBit(int1, intArg0 - 32));
    }
}
