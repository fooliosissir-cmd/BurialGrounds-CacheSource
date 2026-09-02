/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1179

function cs2_1179(): void {
    if (varbit_doublexp_setupflag == 1) {
        if (mapLang() == 1) {
            ifSetGraphic(Graphic.xp_token_with_plus_3, Component.interface_548.component_548_35);
            ifSetGraphic(Graphic.aif_xp_token_plus_3, Component.interface_746.component_746_55);
        } else {
            ifSetGraphic(Graphic.xp_token_with_plus_1, Component.interface_548.component_548_35);
            ifSetGraphic(Graphic.aif_xp_token_plus_1, Component.interface_746.component_746_55);
        }
    } else if (mapLang() == 1) {
        ifSetGraphic(Graphic.xp_token_3, Component.interface_548.component_548_35);
        ifSetGraphic(Graphic.aif_xp_token_3, Component.interface_746.component_746_55);
    } else {
        ifSetGraphic(Graphic.xp_token_1, Component.interface_548.component_548_35);
        ifSetGraphic(Graphic.aif_xp_token_1, Component.interface_746.component_746_55);
    }
}
