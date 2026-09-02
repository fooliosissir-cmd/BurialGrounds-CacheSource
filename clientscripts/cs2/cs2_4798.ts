/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4798

function cs2_4798(intArg0: number): number {
    let int1: number = 604;
    let int2: number = 0;

    if (intArg0 == 603) {
        return cs2_4800(602);
    } else if (intArg0 == 602) {
        return cs2_4800(603);
    } else if (intArg0 >= 604 && intArg0 <= 615) {
        while (int1 <= 615) {
            if (int1 != intArg0 && cs2_4800(int1) == 1) {
                int2 = int2 + 1;
                if (int2 == 2) {
                    return 1;
                }
            }
            int1 = int1 + 1;
        }
        return 0;
    }
    return 0;
}
