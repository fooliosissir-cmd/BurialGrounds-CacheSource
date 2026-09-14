/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5150

function cs2_5150(intArg0: component): void {
    let str0: string = "It would be advisable to retrieve items you have dropped and do not wish to lose.";

    if (ifFind(intArg0) == 1) {
        ccSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.clan_kickout_overlay.tooltip_layer, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]));
    }
}
