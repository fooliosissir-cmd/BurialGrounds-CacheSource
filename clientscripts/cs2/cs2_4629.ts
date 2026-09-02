/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4629

function cs2_4629(intArg0: number): void {
    let int1: number = 0;

    if (ifFind(Component.interface_1110.component_1110_20) == 1) {
        if (intArg0 == 1) {
            int1 = ccGetWidth() + 3;
            int1 = min(48, int1);
            if (int1 == 48) {
                ccSetOnTimer(noHook(""));
            }
        } else {
            int1 = ccGetWidth() - 3;
            int1 = max(1, int1);
            if (int1 == 1) {
                ccSetOnTimer(noHook(""));
                ifSetHide(true, Component.interface_1110.component_1110_13);
            }
        }
        ccSetSize(int1, 19, 0, 0);
    }
}
