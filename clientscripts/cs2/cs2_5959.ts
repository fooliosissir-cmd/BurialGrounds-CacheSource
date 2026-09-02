/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5959

function cs2_5959(): void {
    let str0: string = "";

    switch (varbit_clan_contribution_bonus_varp) {
        case 1:
            str0 = "15% Bonus Citadel Skilling XP";
            break;
        case 2:
            str0 = "30% Bonus Citadel Skilling XP";
            break;
        case 3:
            str0 = "45% Bonus Citadel Skilling XP";
            break;
    }

    if (compare(str0, "") != 0) {
        cs2_4408(Component.interface_1257.component_1257_55);
        ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1257.component_1257_84, Component.interface_1257.component_1257_55, -1, str0, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1257.component_1257_55);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1257.component_1257_84]), Component.interface_1257.component_1257_55);
    }
}
