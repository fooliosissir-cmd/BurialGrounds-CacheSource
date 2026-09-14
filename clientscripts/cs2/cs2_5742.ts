/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5742

function cs2_5742(intArg0: component, intArg1: component, intArg2: number, intArg3: number, strArg0: string): void {
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [intArg0, intArg1, -1, strArg0, intArg2, -1, -1, -1, 12, 3, intArg3, event_mousex, event_mousey]), intArg1);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [intArg0]), intArg1);
}
