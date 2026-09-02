/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,gravedigger_spin]

function gravedigger_spin(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;

    if (random(2) == 0) {
        int1 = 5 + random(12);
    } else {
        int1 = -5 - random(12);
    }

    if (random(2) == 0) {
        int2 = 5 + random(12);
    } else {
        int2 = -5 - random(12);
    }
    let int3: number = random(63);
    let int4: number = random(127);
    ifSetModelTint(int3, 4, 60, int4, intArg0);
    let int5: number = clientClock() + 100;
    ifSetOnTimer(hook(cs2_5612, "Iiiiiii", [intArg0, int3, int4, random(2), int5, int1, int2]), intArg0);
}
