/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6378

function cs2_6378(intArg0: component): number {
    if (intArg0 == -1) {
        return 1;
    }
    intArg0 = cs2_6379(intArg0);

    if (getWindowMode() >= 2) {
        switch (ifGetParentLayer(intArg0)) {
            case Component.interface_746.component_746_10:
                if (ifHasSub(Component.interface_746.component_746_29) == 1) {
                    return 1;
                }
                break;
            default:
                return 0;
        }
    }
    return -1;
}
