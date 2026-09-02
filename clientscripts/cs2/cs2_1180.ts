/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1180

function cs2_1180(): void {
    if (varbit_doublexp_setupflag == 1) {
        if (mapLang() == 1) {
            ifSetGraphic(Graphic.xp_token_with_plus_2, Component.interface_548.component_548_35);
            ifSetGraphic(Graphic.aif_xp_token_plus_2, Component.interface_746.component_746_55);
        } else {
            ifSetGraphic(Graphic.xp_token_with_plus_0, Component.interface_548.component_548_35);
            ifSetGraphic(Graphic.aif_xp_token_plus_0, Component.interface_746.component_746_55);
        }
    } else if (mapLang() == 1) {
        ifSetGraphic(Graphic.xp_token_2, Component.interface_548.component_548_35);
        ifSetGraphic(Graphic.aif_xp_token_2, Component.interface_746.component_746_55);
    } else {
        ifSetGraphic(Graphic.xp_token_0, Component.interface_548.component_548_35);
        ifSetGraphic(Graphic.aif_xp_token_0, Component.interface_746.component_746_55);
    }
}
