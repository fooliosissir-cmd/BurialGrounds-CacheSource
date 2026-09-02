/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3370

function cs2_3370(intArg0: number, intArg1: number): void {
    if (ccFind(Component.interface_1216.component_1216_3, intArg0) == 1) {
        if (clientClock() > intArg1 + 50) {
            ccSetPosition(ccGetX(), max(ccGetY() - 2, 0), 0, 0);
            ccSetTrans(min(255, ccGetTrans() + 7));
        }
        if (ccGetTrans() >= 255) {
            ccDelete();
        }
    }
}
