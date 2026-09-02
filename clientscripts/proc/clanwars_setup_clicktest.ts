/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_setup_clicktest]

function clanwars_setup_clicktest(intArg0: number): number {
    if (varp_clanwars_challengeuid == -1) {
        return 0;
    }

    if (intArg0 != 1) {
        return 0;
    }
    return 1;
}
