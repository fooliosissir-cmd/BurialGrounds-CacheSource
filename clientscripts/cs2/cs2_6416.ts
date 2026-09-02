/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6416

function cs2_6416(): void {
    if (ifGetGraphic(Component.interface_1308.component_1308_140) == Graphic.aif_button_large_text_orange_9) {
        ifSetText(tostring(varbit_ss_points), Component.interface_1308.component_1308_342);
    } else {
        ifSetText(tostring(varbit_smki_slayer_points), Component.interface_1308.component_1308_342);
    }
}
