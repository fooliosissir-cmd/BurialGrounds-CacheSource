/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5195

function cs2_5195(): void {
    ifSetHide(true, Component.interface_1122.component_1122_61);
    ifSetHide(true, Component.interface_1122.component_1122_162);
    ifSetHide(true, Component.interface_1122.component_1122_163);
    ifSetHide(true, Component.interface_1122.component_1122_164);
    ifSetColour(colour(0xB59D69), Component.interface_1122.component_1122_63);
    ifSetColour(colour(0x78664B), Component.interface_1122.component_1122_149);
    ifSetColour(colour(0x78664B), Component.interface_1122.component_1122_153);
    ifSetColour(colour(0x78664B), Component.interface_1122.component_1122_157);
    ifSetColour(colour(0x78664B), Component.interface_1122.component_1122_161);
    ifSetGraphic(Graphic.aif_display_number_2, Component.interface_1122.component_1122_25);
    ifSetGraphic(Graphic.aif_display_number_1, Component.interface_1122.component_1122_147);
    ifSetGraphic(Graphic.aif_display_number_1, Component.interface_1122.component_1122_151);
    ifSetGraphic(Graphic.aif_display_number_1, Component.interface_1122.component_1122_155);
    ifSetGraphic(Graphic.aif_display_number_1, Component.interface_1122.component_1122_159);
    ifSetHide(true, Component.interface_1122.component_1122_26);
    ifSetHide(true, Component.interface_1122.component_1122_148);
    ifSetHide(true, Component.interface_1122.component_1122_152);
    ifSetHide(true, Component.interface_1122.component_1122_156);
    ifSetHide(true, Component.interface_1122.component_1122_160);

    if (varc_hcape_current_tier >= 1) {
        ifSetHide(false, Component.interface_1122.component_1122_61);
        ifSetGraphic(Graphic.aif_display_number_2, Component.interface_1122.component_1122_147);
        ifSetColour(colour(0xB59D69), Component.interface_1122.component_1122_149);
    }

    if (varc_hcape_current_tier >= 2) {
        ifSetHide(false, Component.interface_1122.component_1122_162);
        ifSetGraphic(Graphic.aif_display_number_2, Component.interface_1122.component_1122_151);
        ifSetColour(colour(0xB59D69), Component.interface_1122.component_1122_153);
    }

    if (varc_hcape_current_tier >= 3) {
        ifSetHide(false, Component.interface_1122.component_1122_163);
        ifSetGraphic(Graphic.aif_display_number_2, Component.interface_1122.component_1122_155);
        ifSetColour(colour(0xB59D69), Component.interface_1122.component_1122_157);
    }

    if (varc_hcape_current_tier >= 4) {
        ifSetHide(false, Component.interface_1122.component_1122_164);
        ifSetGraphic(Graphic.aif_display_number_2, Component.interface_1122.component_1122_159);
        ifSetColour(colour(0xB59D69), Component.interface_1122.component_1122_161);
    }

    switch (varc_hcape_current_tier) {
        case 0:
            ifSetHide(false, Component.interface_1122.component_1122_26);
            break;
        case 1:
            ifSetHide(false, Component.interface_1122.component_1122_148);
            break;
        case 2:
            ifSetHide(false, Component.interface_1122.component_1122_152);
            break;
        case 3:
            ifSetHide(false, Component.interface_1122.component_1122_156);
            break;
        case 4:
            ifSetHide(false, Component.interface_1122.component_1122_160);
            break;
    }
}
