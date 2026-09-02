/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4988

function cs2_4988(intArg0: number): void {
    let int1: number = -1;
    let int2: number = -1;
    let int3: struct = -1;
    let int4: struct = -1;

    if (clanProfileFind() == 1) {
        [int1, int3, int4, int2] = cs2_4957(intArg0);
        cs2_4981(intArg0, int1, int3, int4, int2);
        cs2_4937();
    }
}
