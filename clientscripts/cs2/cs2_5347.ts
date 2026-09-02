/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5347

function cs2_5347(): void {
    let int0: graphic = -1;
    let int1: graphic = -1;

    switch (mapLang()) {
        case 1:
            int0 = Graphic.aif_loyalty_shop_banner_text_ger_1_0;
            int1 = Graphic.aif_loyalty_shop_banner_text_ger_1_1;
            break;
        case 2:
            int0 = Graphic.aif_loyalty_shop_banner_text_fr_1_0;
            int1 = Graphic.aif_loyalty_shop_banner_text_fr_1_1;
            break;
        case 3:
            int0 = Graphic.aif_loyalty_shop_banner_text_prt_1_0;
            int1 = Graphic.aif_loyalty_shop_banner_text_prt_1_1;
            break;
        default:
            int0 = Graphic.aif_loyalty_shop_banner_text_eng_1_0;
            int1 = Graphic.aif_loyalty_shop_banner_text_eng_1_1;
            break;
    }

    switch (varc_1659) {
        case 0:
            ifSetText("Price: Low-High", Component.interface_1143.component_1143_31);
            break;
        case 1:
            ifSetText("Price: High-Low", Component.interface_1143.component_1143_31);
            break;
        case 2:
            ifSetText("Name: A-Z", Component.interface_1143.component_1143_31);
            break;
        case 3:
            ifSetText("Name: Z-A", Component.interface_1143.component_1143_31);
            break;
        default:
            ifSetText("Sort By...", Component.interface_1143.component_1143_31);
            break;
    }
    ifSetHide(true, Component.interface_1143.component_1143_26);
    ifSetGraphic(int0, Component.interface_1143.component_1143_85);
    ifSetGraphic(int1, Component.interface_1143.component_1143_86);
}
