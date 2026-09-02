/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6145

function cs2_6145(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    intArg3 = intArg3 + 1;

    if (intArg3 < 100) {
        ifSetOnTimer(hook(cs2_6145, "Iiiii", [event_com, intArg1, intArg2, intArg3, intArg4]), intArg0);
    }

    if (intArg3 < 0) {
        return;
    }
    let int5: number = 25;
    let int6: number = scale(intArg4, 6, int5);
    int6 = scale(intArg3, 100, int6);
    let int7: number = random(int6);
    let int8: number = random(int6);

    if (random(2) == 0) {
        int7 = 0 - int7;
    }

    if (random(2) == 0) {
        int8 = 0 - int8;
    }

    if (ccFind(intArg0, 0) == 1) {
        ccSetPosition(intArg1 + int7, intArg2 + int8, 0, 0);
    }
}
