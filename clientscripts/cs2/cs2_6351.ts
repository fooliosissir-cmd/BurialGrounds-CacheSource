/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6351

function cs2_6351(): number {
    let int0: component = Component.interface_746.component_746_48;

    if (getWindowMode() < 2) {
        int0 = Component.interface_548.component_548_204;
    }

    if (ccGetHide() == 1) {
        return 0;
    }
    let int1: component = ccGetParentLayer();

    while (int1 != -1) {
        if (ifGetHide(int1) == 1) {
            return 0;
        }
        if (int1 == int0) {
            return 1;
        }
        int1 = ifGetParentLayer(int1);
    }
    return 0;
}
