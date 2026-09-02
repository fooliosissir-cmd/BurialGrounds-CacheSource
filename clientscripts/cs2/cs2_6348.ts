/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6348

function cs2_6348(intArg0: component): [component, number] {
    let [int1, int2, int3] = cs2_6380(intArg0);

    if (int1 == -1) {
        return [-1, -1];
    }
    let [int4, int5] = cs2_6349(int1, int2, int3);
    return [int4, int5];
}
