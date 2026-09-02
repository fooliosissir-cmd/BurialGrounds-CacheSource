/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rough_angle]

function rough_angle(intArg0: number, intArg1: number, intArg2: number, intArg3: number): number {
    let int4: number = intArg2 - intArg0;
    let int5: number = intArg3 - intArg1;

    if (int5 > 0) {
        if (int4 > 0) {
            if (int5 > int4) {
                return 8192 * int4 / int5;
            } else {
                return 16834 - 8192 * int5 / int4;
            }
        }
        if (int4 < 0) {
            if (0 - int4 > int5) {
                return 49152 - 8192 * int5 / int4;
            } else {
                return 65535 + 8192 * int4 / int5;
            }
        }
        return 0;
    }

    if (int5 < 0) {
        if (int4 > 0) {
            if (int4 > 0 - int5) {
                return 16834 - 8192 * int5 / int4;
            } else {
                return 32768 + 8192 * int4 / int5;
            }
        }
        if (int4 < 0) {
            if (int5 < int4) {
                return 32768 + 8192 * int4 / int5;
            } else {
                return 49152 - 8192 * int5 / int4;
            }
        }
        return 32768;
    }

    if (int4 > 0) {
        return 16384;
    }

    if (int4 < 0) {
        return 49152;
    }
    return -1;
}
