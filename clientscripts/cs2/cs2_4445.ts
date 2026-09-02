/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4445

function cs2_4445(): void {
    ccDeleteAll(Component.interface_1110.component_1110_5);
    ccDeleteAll(Component.interface_1110.component_1110_8);
    ccDeleteAll(Component.interface_1110.component_1110_6);
    ccDeleteAll(Component.interface_1110.component_1110_7);
    ccDeleteAll(Component.interface_1110.component_1110_4);
    ifSetOp(1, "Join chat", Component.interface_1110.component_1110_91);
    ifSetGraphic(Graphic.aif_clanchat_icons_13, Component.interface_1110.component_1110_92);
    ifSetHide(true, Component.interface_1110.component_1110_39);
    ifSetHide(false, Component.interface_1110.component_1110_64);
    ifSetText("", Component.interface_1110.component_1110_65);
    let str0: string = "Join another" + "<br>" + "clan's clanchat.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1110.component_1110_124, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1110.component_1110_91);
    ifSetOp(1, "Join Clan Chat channel", Component.interface_1110.component_1110_91);
}
