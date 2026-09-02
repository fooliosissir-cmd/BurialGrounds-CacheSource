/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5227

function cs2_5227(): void {
    cs2_5228(4);
    cs2_5228(5);
    cs2_5228(6);
    cs2_5228(7);
    cs2_5228(8);
    cs2_5228(9);
    cs2_5228(10);
    cs2_5228(11);
    cs2_5228(12);
    cs2_5228(13);
    cs2_5228(14);
    cs2_5228(15);
    let int0: component = ifGetParentLayer(Component.interface_1259.component_1259_174);

    if (int0 == -1) {
        return;
    }
    let int1: number = 2;

    if (ifGetY(Component.interface_1259.component_1259_174) > ifGetHeight(int0) / 2) {
        int1 = 0;
    }
    let str0: string = "Teleport to the keep.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, Component.interface_1259.component_1259_174, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int1, event_mousex, event_mousey]), Component.interface_1259.component_1259_174);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), Component.interface_1259.component_1259_174);
    ifSetOp(1, "Teleport to keep", Component.interface_1259.component_1259_174);
    int1 = 2;

    if (ifGetY(Component.interface_1259.component_1259_177) > ifGetHeight(int0) / 2) {
        int1 = 0;
    }
    str0 = "Teleport to the town square.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, Component.interface_1259.component_1259_177, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int1, event_mousex, event_mousey]), Component.interface_1259.component_1259_177);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), Component.interface_1259.component_1259_177);
    ifSetOp(1, "Teleport to town square", Component.interface_1259.component_1259_177);
    int1 = 2;

    if (ifGetY(Component.interface_1259.component_1259_175) > ifGetHeight(int0) / 2) {
        int1 = 0;
    }
    str0 = "Teleport to the portal.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, Component.interface_1259.component_1259_175, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int1, event_mousex, event_mousey]), Component.interface_1259.component_1259_175);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), Component.interface_1259.component_1259_175);
    ifSetOp(1, "Teleport to portal", Component.interface_1259.component_1259_175);
    int1 = 2;

    if (ifGetY(Component.interface_1259.component_1259_176) > ifGetHeight(int0) / 2) {
        int1 = 0;
    }
    str0 = "Teleport to the welcome area.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, Component.interface_1259.component_1259_176, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int1, event_mousex, event_mousey]), Component.interface_1259.component_1259_176);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), Component.interface_1259.component_1259_176);
    ifSetOp(1, "Teleport to welcome area", Component.interface_1259.component_1259_176);
    int1 = 2;

    if (ifGetY(Component.interface_1259.component_1259_178) > ifGetHeight(int0) / 2) {
        int1 = 0;
    }
    str0 = "Teleport to the battlefield.";
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, Component.interface_1259.component_1259_178, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int1, event_mousex, event_mousey]), Component.interface_1259.component_1259_178);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), Component.interface_1259.component_1259_178);
    ifSetOp(1, "Teleport to welcome area", Component.interface_1259.component_1259_176);
}
