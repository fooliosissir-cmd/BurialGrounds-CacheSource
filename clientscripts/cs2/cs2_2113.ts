/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2113

function cs2_2113(intArg0: component): void {
    ifSetModelAngle(0, 0, random(2048), random(2048), random(2048), ifGetModelZoom(intArg0), intArg0);

    switch (random(3)) {
        case 0:
            ifSetOnTimer(hook(spinner, "iiiI", [random(3) + 9, 0, random(3) + 9, intArg0]), intArg0);
            break;
        case 1:
            ifSetOnTimer(hook(spinner, "iiiI", [random(3) + 9, random(3) + 9, 0, intArg0]), intArg0);
            break;
        default:
            ifSetOnTimer(hook(spinner, "iiiI", [0, random(3) + 9, random(3) + 9, intArg0]), intArg0);
            break;
    }
}
