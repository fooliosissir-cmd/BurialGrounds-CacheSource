/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1815

function cs2_1815(): number {
    let int0: number = ccGetX<1>();
    let int1: component = ccGetLayer<1>();

    while (int1 != -1) {
        int0 = int0 + ifGetX(int1) - ifGetScrollX(int1);
        int1 = ifGetLayer(int1);
    }
    return int0;
}
