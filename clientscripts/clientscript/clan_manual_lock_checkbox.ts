/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_manual_lock_checkbox]

function clan_manual_lock_checkbox(): void {
    if (ifGetGraphic(Component.interface_1260.component_1260_89) == Graphic.aif_checkbox_small_1) {
        ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_89);
    } else if (ifGetGraphic(Component.interface_1260.component_1260_89) == Graphic.aif_checkbox_small_3) {
        ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_1260.component_1260_89);
        ifSetGraphic(Graphic.aif_checkbox_small_3, Component.interface_1260.component_1260_87);
    }
}
