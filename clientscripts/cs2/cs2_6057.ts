/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6057

function cs2_6057(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 0;

    intArg3 = intArg3 + 1;

    if (ccFind(intArg0, intArg1) == 1) {
        int4 = ccGetX();
        if (intArg2 == 0 && int4 < -20) {
            int4 = min(int4 + 25, -20);
            if (int4 == -20) {
                intArg2 = -1;
                intArg3 = 0;
            }
        }
        if (intArg2 == 1) {
            if (int4 - 10 < -219) {
                ccDelete();
                return;
            } else {
                int4 = int4 - 10;
            }
        } else if (intArg3 >= 100) {
            intArg2 = 1;
        }
        ccSetPosition(int4, ccGetY(), 0, 0);
        ccSetOnTimer(hook(cs2_6057, "Iiii", [intArg0, intArg1, intArg2, intArg3]));
    }
}
