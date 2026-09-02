/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,omge_hooks_staff_mouseover]

function omge_hooks_staff_mouseover(intArg0: number): void {
    switch (intArg0) {
        case 80936962:
            ifSetGraphic(Graphic.aif_wickhood_button_1_0, Component.interface_1235.component_1235_3);
            ifSetGraphic(Graphic.aif_wicked_hood_rune_icon_2, Component.interface_1235.component_1235_4);
            break;
        case 80936965:
            ifSetGraphic(Graphic.aif_wickhood_button_1_0, Component.interface_1235.component_1235_6);
            ifSetGraphic(Graphic.aif_wicked_hood_rune_icon_1, Component.interface_1235.component_1235_7);
            break;
        case 80936968:
            ifSetGraphic(Graphic.aif_wickhood_button_1_0, Component.interface_1235.component_1235_9);
            ifSetGraphic(Graphic.aif_wicked_hood_rune_icon_3, Component.interface_1235.component_1235_10);
            break;
        case 80936971:
            ifSetGraphic(Graphic.aif_wickhood_button_1_0, Component.interface_1235.component_1235_12);
            ifSetGraphic(Graphic.aif_wicked_hood_rune_icon_0, Component.interface_1235.component_1235_13);
            break;
    }
}
