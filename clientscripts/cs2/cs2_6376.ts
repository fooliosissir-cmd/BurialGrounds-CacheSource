/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6376

function cs2_6376(): number {
    let int0: number = 0;
    let int1: number = 0;
    let int2: component = ccGetLayer();

    if (int2 == -1) {
        return 0;
    }
    let int3: number = ccGetX();
    let int4: number = ccGetY();

    while (int2 != -1) {
        int3 = int3 + ifGetX(int2) - ifGetScrollX(int2);
        int4 = int4 + ifGetY(int2) - ifGetScrollY(int2);
        if (int3 < ifGetX(int2) || int4 < ifGetY(int2)) {
            return 1;
        }
        if (int3 + ccGetWidth() > ifGetX(int2) + ifGetWidth(int2) || int4 + ccGetHeight() > ifGetY(int2) + ifGetHeight(int2)) {
            return 1;
        }
        int2 = ifGetLayer(int2);
    }
    return 0;
}
