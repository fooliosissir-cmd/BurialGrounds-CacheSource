/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1461

function cs2_1461(intArg0: number): void {
    let int1: component = enumOp(type_int, type_component, Enum.enum_1614, intArg0);
    let int2: component = enumOp(type_int, type_component, Enum.enum_1615, intArg0);

    ifSetHide(false, int1);
    ifSetHide(false, int2);
    ifSetObject(-1, -1, int2);
    ifSetGraphic(Graphic.bank_misc_graphics_1, int2);
    ifSetOutline(0, int2);
    ifSetGraphicShadow(0, int2);
    ifClearops(int1);
    ifSetOnClick(hook(cs2_1481, "", []), int1);
    let str0: string = "Drag an item here to create a new tab";
    ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_762.component_762_121, str0, 25, 150]), int1);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_762.component_762_121]), int1);
}
