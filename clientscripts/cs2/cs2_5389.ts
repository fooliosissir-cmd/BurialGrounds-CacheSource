/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5389

function cs2_5389(): void {
    if (varbit_hlr4m_sc_volatile == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_99);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_4);
    }

    if (varbit_hlr4m_sc_proto == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_129);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_106);
    }

    if (varbit_hlr4m_sc_body == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_167);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_144);
    }

    if (varbit_hlr4m_sc_legs == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_204);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_181);
    }

    if (varbit_hlr4m_sc_head == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_241);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_218);
    }

    if (varbit_hlr4m_sc_weapon == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_278);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_255);
    }

    if (varbit_hlr4m_sc_shield == 1) {
        ifSetHide(false, Component.interface_1128.component_1128_315);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), Component.interface_1128.component_1128_292);
    }
}
