/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4264

function cs2_4264(intArg0: component): void {
    ifSetColour(colour(0xFF0000), intArg0);
    hookMouseEnter(hook(cs2_4265, "Ii", [intArg0, colour(0xDD7F7F)]), intArg0);
    hookMouseExit(hook(cs2_4265, "Ii", [intArg0, colour(0xFF0000)]), intArg0);
}
