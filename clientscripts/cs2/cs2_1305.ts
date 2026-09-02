/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1305

function cs2_1305(): number {
    let int0: number = 0;

    if (cs2_1314(99) == 0) {
        return 99;
    }

    if (cs2_1314(95) == 0) {
        return 95;
    }

    if (cs2_1314(98) == 0) {
        return 98;
    }

    while (int0 < 16) {
        if (cs2_1314(int0) == 0) {
            return int0;
        } else {
            int0 = int0 + 1;
        }
    }
    return -1;
}
