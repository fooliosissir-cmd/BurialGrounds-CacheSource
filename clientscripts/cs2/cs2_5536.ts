/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5536

function cs2_5536(intArg0: number): void {
    varc_1725 = intArg0;
    varc_1724 = 1;
    varc_1808 = 1;

    if (intArg0 >= 1 && intArg0 <= 4) {
        cs2_6071(0);
    } else if (intArg0 >= 11 && intArg0 <= 12) {
        cs2_6071(1);
    }

    switch (intArg0) {
        case 1:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_12, Component.interface_1178.component_1178_49);
            ifSetText("Tool Belt - General", Component.interface_1178.component_1178_77);
            ifSetHide(false, Component.interface_1178.component_1178_79);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_13, Component.interface_1178.component_1178_50);
            ifSetText("Tool Belt - Fishing", Component.interface_1178.component_1178_77);
            ifSetHide(false, Component.interface_1178.component_1178_79);
            break;
        case 3:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_14, Component.interface_1178.component_1178_51);
            ifSetText("Tool Belt - Crafting", Component.interface_1178.component_1178_77);
            ifSetHide(false, Component.interface_1178.component_1178_79);
            break;
        case 4:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_15, Component.interface_1178.component_1178_52);
            ifSetText("Tool Belt - Farming", Component.interface_1178.component_1178_77);
            ifSetHide(false, Component.interface_1178.component_1178_79);
            break;
        case 11:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_16, Component.interface_1178.component_1178_53);
            ifSetText("Dungeoneering - Tools", Component.interface_1178.component_1178_77);
            ifSetHide(false, Component.interface_1178.component_1178_79);
            break;
        case 12:
            ifSetGraphic(Graphic.aif_toolbelt_catbtn_1_17, Component.interface_1178.component_1178_54);
            ifSetText("Dungeoneering - Keys", Component.interface_1178.component_1178_77);
            ifSetHide(true, Component.interface_1178.component_1178_79);
            break;
    }
    cs2_6069();
    cs2_5537();
    cs2_5539();
    cs2_5544();
}
