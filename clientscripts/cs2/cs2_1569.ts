/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1569

function cs2_1569(): number {
    if (getWindowMode() >= 2) {
        if (ifHasSub(Component.interface_746.component_746_109) == 1) {
            return 1;
        }
    } else if (ifHasSub(Component.interface_548.component_548_172) == 1) {
        return 1;
    }
    return 0;
}
