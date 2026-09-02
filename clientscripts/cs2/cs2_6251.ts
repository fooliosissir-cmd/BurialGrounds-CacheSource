/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6251

function cs2_6251(intArg0: number, intArg1: component, intArg2: component, strArg0: string): void {
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [intArg1, event_com, -1, strArg0, 128, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, intArg0, event_mousex, event_mousey]), intArg2);
    hookMouseExit(hook(clientscript_deltooltip, "I", [intArg1]), intArg2);
}
