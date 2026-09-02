/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5524

function cs2_5524(intArg0: number): void {
    if (ifGetHide(Component.interface_916.component_916_4) == 0) {
        if (intArg0 == 1) {
            ifSetGraphic(Graphic.graphic_3860, Component.interface_916.component_916_1);
            ifSetGraphic(Graphic.graphic_3861, Component.interface_916.component_916_2);
            ifSetGraphic(Graphic.graphic_3862, Component.interface_916.component_916_0);
            ifSetGraphic(Graphic.graphic_3884, Component.interface_916.component_916_3);
        }
        if (intArg0 == 0) {
            ifSetGraphic(Graphic.graphic_3857, Component.interface_916.component_916_1);
            ifSetGraphic(Graphic.graphic_3858, Component.interface_916.component_916_2);
            ifSetGraphic(Graphic.graphic_3859, Component.interface_916.component_916_0);
            ifSetGraphic(Graphic.graphic_3883, Component.interface_916.component_916_3);
            deltooltip_action(Component.interface_905.component_905_29);
        }
    }
}
