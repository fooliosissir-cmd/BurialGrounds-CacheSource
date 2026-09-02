/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_getx_absolute_toplevel]

function cc_getx_absolute_toplevel(): number {
    let int0: number = ccGetX();
    let int1: component = ccGetParentLayer();

    while (int1 != -1) {
        int0 = int0 + ifGetX(int1) - ifGetScrollX(int1);
        int1 = ifGetParentLayer(int1);
    }
    return int0;
}
