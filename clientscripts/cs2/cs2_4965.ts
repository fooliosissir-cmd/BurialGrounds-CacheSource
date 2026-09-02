/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4965

function cs2_4965(intArg0: number): number {
    let int1: number = -1;

    if (clanProfileFind() == 1) {
        int1 = cs2_4948(intArg0);
        return cs2_4959(intArg0);
    }
    return 0;
}
