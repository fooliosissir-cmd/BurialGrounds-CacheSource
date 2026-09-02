/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1636

function cs2_1636(intArg0: component, intArg1: component): void {
    ccDeleteAll(intArg0);
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    while (int4 < 50) {
        [int3, int2] = cs2_1637(intArg0, int3, cs2_1638(int4), int2);
        int4 = int4 + 1;
    }

    if (int3 == 0) {
        const [tmpInt2, tmpInt3] = cs2_1637(intArg0, 0, "Loading...", 0);
        discard(tmpInt3);
        discard(tmpInt2);
    }
    let int5: number = 0;
    let int6: number = 0;

    if (int2 > 15) {
        int5 = ifGetScrollY(intArg0);
        int6 = int2 * 15 + 8;
        ifSetScrollSize(0, int6, intArg0);
        if (int5 > int6) {
            int5 = int6;
        }
        scrollbar_resize(intArg1, intArg0, int5);
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ifSetScrollPos(0, 0, intArg0);
        scrollbar_resize(intArg1, intArg0, 0);
    }
}
