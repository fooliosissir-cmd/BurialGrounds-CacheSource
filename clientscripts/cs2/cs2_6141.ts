/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6141

function cs2_6141(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): void {
    let int11: number = scale(intArg1, 18, 45);
    let int12: number = 0;

    intArg9 = intArg9 + 1;

    if (ccFind(intArg0, 0) == 1) {
        if (intArg9 >= intArg8) {
            ccSetPosition(intArg2 + intArg6, intArg3 + intArg7, 1, 1);
            if (intArg10 == 1) {
                int12 = 25 + random(50);
            } else {
                int12 = 25 + random(300);
            }
            ifSetOnTimer(hook(cs2_6141, "Iiiiiiiiiii", [event_com, intArg1, intArg2, intArg3, intArg6, intArg7, random(int11 + int11) - int11, random(int11 + int11) - int11, int12, 0, intArg10]), intArg0);
            return;
        }
        ccSetPosition(intArg2 + intArg4 + scale(intArg9, intArg8, intArg6 - intArg4), intArg3 + intArg5 + scale(intArg9, intArg8, intArg7 - intArg5), 1, 1);
    }
    ifSetOnTimer(hook(cs2_6141, "Iiiiiiiiiii", [event_com, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]), intArg0);
}
