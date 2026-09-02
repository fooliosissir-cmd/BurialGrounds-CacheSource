/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4218

function cs2_4218(): number {
    let [int0, int1] = cs2_4217();
    let int2: number = varp_tog_xp_before_return_billions - int1;
    let int3: number = varp_tog_xp_before_return - int0;

    while (int2 > 0 && int3 <= 1000000000) {
        [int2, int3] = [int2 - 1, int3 + 1000000000];
    }

    while (int2 < 0 && int3 >= 1000000000) {
        [int2, int3] = [int2 + 1, int3 - 1000000000];
    }

    if (int2 < 0) {
        return 0;
    }

    if (int2 == 0 && int3 <= 100000) {
        return max(int3, 0);
    }
    return 100000;
}
