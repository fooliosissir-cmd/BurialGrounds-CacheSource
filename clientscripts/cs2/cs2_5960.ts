/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5960

function cs2_5960(intArg0: component, intArg1: number): void {
    let str0: string = "";

    switch (cs2_5956(intArg1)) {
        case 0:
            ifSetGraphic(Graphic.aif_clan_loyalty_lock_3, intArg0);
            str0 = "Unlocked";
            break;
        case 1:
            ifSetGraphic(Graphic.aif_clan_loyalty_lock_1, intArg0);
            str0 = "Pending Lock: This skillplot will lock once the resource target has been met.";
            break;
        case 2:
            ifSetGraphic(Graphic.aif_clan_loyalty_lock_0, intArg0);
            str0 = "Pending Unlock: This skillplot will unlock once all resource targets have been met.";
            break;
        case 3:
            ifSetGraphic(Graphic.aif_clan_loyalty_lock_0, intArg0);
            str0 = "Locked: This skillplot has been manually locked.";
            break;
    }
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1117.component_1117_144, intArg0, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), intArg0);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1117.component_1117_144]), intArg0);
}
