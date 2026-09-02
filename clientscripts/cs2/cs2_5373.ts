/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5373

function cs2_5373(intArg0: component, intArg1: number): void {
    if (intArg1 == -1) {
        soundVorbisVolume(7715, 45, 0, 100);
        ifSetOnTimer(hook(cs2_5369, "I", [intArg0]), intArg0);
    } else {
        ifSetOnTimer(noHook(""), intArg0);
        if (intArg1 == -2) {
            ifSetText("-", intArg0);
        } else {
            ifSetText(tostring(intArg1), intArg0);
        }
    }
}
