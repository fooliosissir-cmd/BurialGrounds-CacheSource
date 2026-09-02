/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5614

function cs2_5614(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): [number, number, number] {
    if (clientClock() > intArg4) {
        intArg4 = clientClock() + 50;
        if (intArg3 == 1) {
            if (intArg2 + 5 <= 100) {
                intArg2 = intArg2 + 5;
            } else {
                intArg2 = 100;
                intArg3 = 0;
            }
        } else if (intArg2 - 5 >= 0) {
            intArg2 = intArg2 - 5;
        } else {
            intArg2 = 0;
            intArg3 = 1;
        }
        ifSetModelTint(intArg1, 5, 60, intArg2, intArg0);
    }
    return [intArg2, intArg3, intArg4];
}
