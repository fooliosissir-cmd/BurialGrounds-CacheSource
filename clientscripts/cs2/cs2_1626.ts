/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1626

function cs2_1626(): void {
    let str0: string = "Curtsy";
    let str1: string = "Bow";

    if (gender() > 0) {
        ifSetGraphic(Graphic.emotes_47, Component.interface_464.component_464_4);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_464.component_464_54, str0, 50, 150]), Component.interface_464.component_464_4);
        ifSetOp(1, str0, Component.interface_464.component_464_4);
        ifSetOp(2, str1, Component.interface_464.component_464_4);
    } else {
        ifSetGraphic(Graphic.emotes_3, Component.interface_464.component_464_4);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_464.component_464_54, str1, 50, 150]), Component.interface_464.component_464_4);
        ifSetOp(2, str0, Component.interface_464.component_464_4);
        ifSetOp(1, str1, Component.interface_464.component_464_4);
    }
}
