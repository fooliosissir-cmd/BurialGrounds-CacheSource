/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5957

function cs2_5957(): void {
    if (ifGetGraphic(Component.interface_1260.component_1260_87) == Graphic.aif_checkbox_small_1) {
        ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_87);
    } else if (ifGetGraphic(Component.interface_1260.component_1260_87) == Graphic.aif_checkbox_small_3) {
        ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_1260.component_1260_87);
        ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_89);
    }
}
