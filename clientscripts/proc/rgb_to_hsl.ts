/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rgb_to_hsl]

function rgb_to_hsl(intArg0: number, intArg1: number, intArg2: number): [number, number, number] {
    let int3: number = min(intArg0, min(intArg1, intArg2));
    let int4: number = max(intArg0, max(intArg1, intArg2));
    let int5: number = int4 - int3;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = (int3 + int4) / 2;

    if (int5 != 0) {
        if (int8 < 128) {
            int7 = scale(int5, 2 * int8, 255);
        } else {
            int7 = scale(int5, 510 - 2 * int8, 255);
        }
        if (intArg0 == int4) {
            int6 = scale((scale(intArg1 - intArg2, int5, 10000) + 60000) % 60000, 10000, 60);
        }
        if (intArg1 == int4) {
            int6 = scale(scale(intArg2 - intArg0, int5, 10000) + 20000, 10000, 60);
        }
        if (intArg2 == int4) {
            int6 = scale(scale(intArg0 - intArg1, int5, 10000) + 40000, 10000, 60);
        }
    }
    return [int6, int7, int8];
}
