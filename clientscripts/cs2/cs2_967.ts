/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_967

function cs2_967(intArg0: number, intArg1: number): number {
    if (intArg1 > intArg0) {
        if (intArg1 - intArg0 <= 1024) {
            return min(intArg0 + 6, intArg1);
        }
        if (intArg0 >= 6) {
            return intArg0 - 6;
        }
        return max(cs2_686(intArg0 - 6, 2048), intArg1);
    }

    if (intArg0 - intArg1 <= 1024) {
        return max(intArg0 - 6, intArg1);
    }

    if (intArg0 < 2048 - 6) {
        return intArg0 + 6;
    }
    return min((intArg0 + 6) % 2048, intArg1);
}
