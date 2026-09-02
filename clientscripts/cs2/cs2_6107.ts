/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6107

function cs2_6107(): void {
    ifSetHide(false, Component.interface_1265.component_1265_172);
    ifSetText("Select an item", Component.interface_1265.component_1265_39);
    ifSetObject(-1, -1, Component.interface_1265.component_1265_41);
    ifSetText("N/A", Component.interface_1265.component_1265_205);
    let int0: number = parawidth(ifGetText(Component.interface_1265.component_1265_205), ifGetWidth(Component.interface_1265.component_1265_79), Graphic.verdana_11pt_regular);
    ifSetSize(int0, 15, 0, 0, Component.interface_1265.component_1265_17);
    ifSetText("", Component.interface_1265.component_1265_40);
    ifSetText("", Component.interface_1265.component_1265_43);
    ifSetText("", Component.interface_1265.component_1265_44);
    ifSetText("Transaction:", Component.interface_1265.component_1265_19);
    ifSetText("Price:", Component.interface_1265.component_1265_78);
    ifSetGraphic(-1, Component.interface_1265.component_1265_18);
    ifSetHide(true, Component.shop_side.select_reticule);
    ifSetHide(false, Component.interface_1265.component_1265_82);
    ifSetHide(false, Component.interface_1265.component_1265_202);
    ifSetColour(colour(0x827F79), Component.interface_1265.component_1265_204);
    ifSetText("N/A", Component.interface_1265.component_1265_204);
    ifSetHide(true, Component.interface_1265.component_1265_63);
    ifSetGraphic(-1, Component.interface_1265.component_1265_42);
    ifSetOnMouseOver(noHook(""), Component.interface_1265.component_1265_42);
    cs2_6094();
}
