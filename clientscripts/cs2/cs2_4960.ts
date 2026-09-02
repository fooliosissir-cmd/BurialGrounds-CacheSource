/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4960

function cs2_4960(intArg0: number): number {
    let int1: number = 0;

    if (clanProfileFind() == 1) {
        int1 = cs2_4948(intArg0);
        if (int1 <= 0) {
            return 0;
        }
        return cs2_4959(int1);
    }
    return 0;
}
