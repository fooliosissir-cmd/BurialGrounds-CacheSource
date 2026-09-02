/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5209

function cs2_5209(): void {
    let str0: string = "Pin this skill plot's information to this side interface?";

    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1117.component_1117_0, Component.interface_1117.component_1117_136, -1, str0, 160, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1117.component_1117_136);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1117.component_1117_0]), Component.interface_1117.component_1117_136);
}
