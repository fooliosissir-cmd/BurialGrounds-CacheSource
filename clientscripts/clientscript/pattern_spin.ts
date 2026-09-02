/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pattern_spin]

function pattern_spin(intArg0: component): void {
    let int1: number = random(63);
    let int2: number = random(127);

    ifSetModelTint(int1, 4, 60, int2, intArg0);
    let int3: number = randominc(25) + 10;
    let int4: number = randominc(25) + 20;
    let int5: number = clientClock() + 100;
    ifSetOnTimer(hook(cs2_5612, "Iiiiiii", [intArg0, int1, int2, random(2), int5, int3, int4]), intArg0);
}
