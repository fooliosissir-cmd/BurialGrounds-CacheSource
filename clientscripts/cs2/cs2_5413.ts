/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5413

function cs2_5413(): void {
    let str0: string = "Shows a 'Report' option when right-clicking on other players or chat.";

    ifSetOnMouseOver(hook(cs2_5332, "IIsii", [event_com, Component.interface_261.component_261_31, str0, 25, 180]), Component.interface_261.component_261_28);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_261.component_261_31]), Component.interface_261.component_261_28);
    varc_tooltip_built = 0;

    if (varbit_snapshot_right_click_enabled == 1) {
        ifSetGraphic(Graphic.aif_checkbox_large_0, Component.interface_261.component_261_6);
        ifSetGraphic(Graphic.aif_checkbox_large_1, Component.interface_261.component_261_7);
    } else {
        ifSetGraphic(Graphic.aif_checkbox_large_5, Component.interface_261.component_261_6);
        ifSetGraphic(Graphic.aif_checkbox_large_6, Component.interface_261.component_261_7);
    }
    rebuildchatbox();
    cs2_89();
}
