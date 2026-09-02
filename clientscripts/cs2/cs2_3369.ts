/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3369

function cs2_3369(intArg0: number, intArg1: number, intArg2: number): void {
    intArg2 = intArg2 + 1;

    if (ccFind(Component.interface_1216.component_1216_0, intArg0) == 1) {
        ccSetOnTimer(hook(cs2_3369, "iii", [intArg0, intArg1, intArg2]));
        if (clientClock() > intArg1 + 50) {
            ccSetPosition(ccGetX(), max(ccGetY() - 2, 0), 0, 0);
        }
        if (intArg2 > 100 && ccGetY() < 20) {
            ccDelete();
        }
    }
}
