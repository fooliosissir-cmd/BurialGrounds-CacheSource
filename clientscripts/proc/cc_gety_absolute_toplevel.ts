/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_gety_absolute_toplevel]

function cc_gety_absolute_toplevel(): number {
    let int0: number = ccGetY();
    let int1: component = ccGetParentLayer();

    while (int1 != -1) {
        int0 = int0 + ifGetY(int1) - ifGetScrollY(int1);
        int1 = ifGetParentLayer(int1);
    }

    if (getWindowMode() < 2) {
        return int0 - ifGetHeight(Component.interface_548.component_548_2);
    } else {
        return int0 - ifGetHeight(Component.interface_746.component_746_239);
    }
}
