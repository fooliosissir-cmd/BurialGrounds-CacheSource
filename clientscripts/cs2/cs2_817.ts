/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_817

function cs2_817(intArg0: stat): void {
    let int1: number = 31;
    let int2: number = 0;
    let int3: number = 31;
    let int4: number = 3;
    let int5: number = 25;

    if (intArg0 == 5) {
        if (varbit_prayer_points >= cs2_5255()) {
            int2 = 0;
        } else if (statBase(intArg0) == 0 || statBase(intArg0) == -1) {
            int2 = 0;
        } else {
            int2 = int4 + (int5 - scale(varbit_prayer_points, cs2_5255(), int5));
        }
    } else if (stat(intArg0) >= statBase(intArg0)) {
        int2 = 0;
    } else if (statBase(intArg0) == 0 || statBase(intArg0) == -1) {
        int2 = 0;
    } else {
        int2 = int4 + (int5 - scale(stat(intArg0), statBase(intArg0), int5));
    }

    if (intArg0 == 5) {
        ifSetSize(int3, int2, 0, 0, Component.interface_749.component_749_1);
    } else if (intArg0 == 23) {
        ifSetSize(int3, int2, 0, 0, Component.interface_747.component_747_1);
    }
}
