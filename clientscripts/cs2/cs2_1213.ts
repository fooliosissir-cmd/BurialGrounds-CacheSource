/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1213

function cs2_1213(intArg0: number): void {
    let int1: number = 0;

    if (intArg0 == 0) {
        while (int1 < 10) {
            cs2_5498(int1, Component.interface_746.component_746_46);
            int1 = int1 + 1;
        }
        if (ccFind(Component.interface_746.component_746_46, 9) == 1 && ccGetTrans() == 255) {
            info_reset();
        }
    } else if (ifFind(Component.interface_746.component_746_46) == 1) {
        ccSetOnTimer(hook(cs2_1213, "i", [intArg0 - 1]));
    }
}
