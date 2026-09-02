/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1146

function cs2_1146(intArg0: number): number {
    if (intArg0 >= 10000000) {
        return 65408;
    } else if (intArg0 >= 100000) {
        return 16777215;
    } else {
        return 16776960;
    }
}
