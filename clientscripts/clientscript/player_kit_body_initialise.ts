/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_body_initialise]

function player_kit_body_initialise(): void {
    ccDeleteAll(Component.interface_729.component_729_1);
    cs2_1088(Component.interface_729.component_729_1, 22);
    ccDeleteAll(Component.interface_729.component_729_11);
    cs2_333(Component.interface_729.component_729_11, colour(0x483F33), colour(0x302922), 0, 0);
    cs2_2647(Component.interface_729.component_729_11);
    ccDeleteAll(Component.interface_729.component_729_14);
    cs2_333(Component.interface_729.component_729_14, colour(0x483F33), colour(0x302922), 0, 0);
    player_kit_player_create(Component.interface_729.component_729_14, 380, 100);
    cs2_2647(Component.interface_729.component_729_14);
    ccDeleteAll(Component.interface_729.component_729_16);
    cs2_2647(Component.interface_729.component_729_16);
    varc_player_kit_body_layer = varbit_player_kit_body_viewing;
    player_kit_body_redraw();
    ifSetOnVarTransmit(hook(player_kit_body_vartransmit, "Y", [], [1057]), Component.interface_729.component_729_1);
    ifSetOnVarcTransmit(hook(player_kit_body_varctransmit, "Y", [], [1010, 1011, 1012, 1013, 1016, 1017]), Component.interface_729.component_729_1);
    ifSetOnOpt(hook(cs2_1512, "ii", [event_opindex, 0]), Component.interface_729.component_729_6);
    ifSetOnOpt(hook(cs2_1512, "ii", [event_opindex, 1]), Component.interface_729.component_729_7);
    ifSetOnOpt(hook(cs2_1512, "ii", [event_opindex, 2]), Component.interface_729.component_729_8);
    ifSetOnOpt(hook(cs2_1512, "ii", [event_opindex, 3]), Component.interface_729.component_729_9);
    let str0: string = "Choose a top";
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_729.component_729_23, str0, 25, 512]), Component.interface_729.component_729_6);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_729.component_729_23]), Component.interface_729.component_729_6);
    str0 = "Choose some sleeves";
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_729.component_729_23, str0, 25, 512]), Component.interface_729.component_729_7);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_729.component_729_23]), Component.interface_729.component_729_7);
    str0 = "Decorate your wrists";
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_729.component_729_23, str0, 25, 512]), Component.interface_729.component_729_8);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_729.component_729_23]), Component.interface_729.component_729_8);
    str0 = "Choose some leggings";
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_729.component_729_23, str0, 25, 512]), Component.interface_729.component_729_9);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_729.component_729_23]), Component.interface_729.component_729_9);
}
