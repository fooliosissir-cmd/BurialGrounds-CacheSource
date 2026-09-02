/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_signpost_populate_side]

function clan_signpost_populate_side(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: boolean): void {
    ifSetHide(true, Component.interface_1116.component_1116_85);
    ifSetText(ifGetText(intArg0), Component.interface_1116.component_1116_600);
    ifSetGraphic(ifGetGraphic(intArg1), Component.interface_1116.component_1116_602);
    ifSetGraphic(ifGetGraphic(intArg2), Component.interface_1116.component_1116_615);
    ifSetColour(ifGetColour(intArg1), Component.interface_1116.component_1116_602);
    ifSetColour(ifGetColour(intArg2), Component.interface_1116.component_1116_615);
    ifSetColour(ifGetColour(intArg3), Component.interface_1116.component_1116_611);
    ifSetColour(ifGetColour(intArg4), Component.interface_1116.component_1116_612);
    let str0: string = "";

    switch (ifGetGraphic(intArg5)) {
        case Graphic.clans_portaicons_small_0:
            ifSetGraphic(Graphic.clans_portaicons_large_0, Component.interface_1116.component_1116_591);
            str0 = "This clan is flagged as a nemesis.";
            break;
        case Graphic.clans_portaicons_small_1:
            ifSetGraphic(Graphic.clans_portaicons_large_1, Component.interface_1116.component_1116_591);
            str0 = "This clan is flagged as an enemy.";
            break;
        case Graphic.clans_portaicons_small_2:
            ifSetGraphic(Graphic.clans_portaicons_large_2, Component.interface_1116.component_1116_591);
            str0 = "This clan is flagged as neutral.";
            break;
        case Graphic.clans_portaicons_small_3:
            ifSetGraphic(Graphic.clans_portaicons_large_3, Component.interface_1116.component_1116_591);
            str0 = "This clan is flagged as a friend.";
            break;
        case Graphic.clans_portaicons_small_4:
            ifSetGraphic(Graphic.clans_portaicons_large_4, Component.interface_1116.component_1116_591);
            str0 = "This clan is flagged as an ally.";
            break;
    }
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1116.component_1116_51, Component.interface_1116.component_1116_591, -1, str0, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]), Component.interface_1116.component_1116_591);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1116.component_1116_51]), Component.interface_1116.component_1116_591);
    cs2_5106();

    if (intArg6 == true) {
        if (ifGetHide(Component.interface_1116.component_1116_3) == 1) {
            ifSetHide(false, Component.interface_1116.component_1116_4);
        } else {
            ifSetHide(false, Component.interface_1116.component_1116_3);
        }
        ifSetHide(true, Component.interface_1116.component_1116_115);
        ifSetHide(true, Component.interface_1116.component_1116_122);
        ifSetHide(true, Component.interface_1116.component_1116_108);
        ifSetHide(true, Component.interface_1116.component_1116_101);
        ifSetHide(true, Component.interface_1116.component_1116_94);
    } else {
        ifSetHide(false, Component.interface_1116.component_1116_40);
    }
}
