/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_7

function cs2_7(): void {
    let int0: number = varc_10 - 100;

    varc_10 = 0;

    if (int0 < -1 || int0 == cs2_1305()) {
        return;
    }
    let int1: component = cs2_8(int0);

    if (int1 == -1) {
        return;
    }

    if (ifHasSub(int1) == 0) {
        return;
    }
    cs2_71(int0);
}
