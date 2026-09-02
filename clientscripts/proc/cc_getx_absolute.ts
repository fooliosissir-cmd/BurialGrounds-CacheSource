/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_getx_absolute]

function cc_getx_absolute(): number {
    let int0: number = ccGetX();
    let int1: component = ccGetLayer();

    while (int1 != -1) {
        int0 = int0 + ifGetX(int1) - ifGetScrollX(int1);
        int1 = ifGetLayer(int1);
    }
    return int0;
}
