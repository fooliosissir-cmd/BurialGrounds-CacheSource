/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5914

function cs2_5914(): void {
    let int0: component = Component.interface_1253.component_1253_46;

    ifSetPosition(181, 93, 1, 1, int0);
    ifSetOnTimer(hook(cs2_5915, "Ii", [event_com, 0]), int0);
    ifSetGraphic(cs2_6267(Graphic.graphic_9890), int0);
    ifSetSize(108, 120, 0, 0, int0);
    ifSetHide(true, Component.interface_1253.component_1253_37);
}
