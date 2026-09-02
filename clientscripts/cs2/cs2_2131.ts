/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2131

function cs2_2131(intArg0: component, intArg1: component): void {
    ifSetOnTimer(hook(cs2_2132, "IiiIi", [intArg0, random(6) - 3, random(6) - 3, intArg1, 0]), intArg0);
    hookMouseEnter(hook(cs2_2133, "I", [intArg0]), intArg0);
    ifSetOnMouseOver(hook(cs2_2135, "Iii", [intArg0, event_mousex, event_mousey]), intArg0);
    hookMouseExit(hook(cs2_2134, "I", [intArg0]), intArg0);
}
