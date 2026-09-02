/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6097

function cs2_6097(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetHide(true, Component.interface_1265.component_1265_226);
        ifSetHide(false, Component.interface_1265.component_1265_33);
        ifSetSize(ifGetWidth(Component.interface_1265.component_1265_29), 22, 0, 0, Component.interface_1265.component_1265_29);
        ifSetSize(ifGetWidth(Component.interface_1265.component_1265_28), 20, 0, 0, Component.interface_1265.component_1265_28);
        ifSetColour(colour(0xF7EDB7), Component.interface_1265.component_1265_227);
        ifSetColour(colour(0xE5B051), Component.interface_1265.component_1265_34);
        ifSetGraphic(Graphic.aif_shop_tab_button_2, Component.interface_1265.component_1265_223);
        ifSetGraphic(Graphic.aif_shop_tab_button_3, Component.interface_1265.component_1265_224);
        ifSetGraphic(Graphic.aif_shop_tab_button_2, Component.interface_1265.component_1265_225);
        ifSetGraphic(Graphic.aif_shop_tab_button_0, Component.interface_1265.component_1265_30);
        ifSetGraphic(Graphic.aif_shop_tab_button_1, Component.interface_1265.component_1265_31);
        ifSetGraphic(Graphic.aif_shop_tab_button_0, Component.interface_1265.component_1265_32);
        hookMouseEnter(hook(cs2_6098, "iiIII", [1, 1, Component.interface_1265.component_1265_223, Component.interface_1265.component_1265_224, Component.interface_1265.component_1265_225]), Component.interface_1265.component_1265_29);
        hookMouseExit(hook(cs2_6098, "iiIII", [1, 0, Component.interface_1265.component_1265_223, Component.interface_1265.component_1265_224, Component.interface_1265.component_1265_225]), Component.interface_1265.component_1265_29);
        hookMouseEnter(hook(cs2_6098, "iiIII", [0, 1, Component.interface_1265.component_1265_30, Component.interface_1265.component_1265_31, Component.interface_1265.component_1265_32]), Component.interface_1265.component_1265_28);
        hookMouseExit(hook(cs2_6098, "iiIII", [0, 0, Component.interface_1265.component_1265_30, Component.interface_1265.component_1265_31, Component.interface_1265.component_1265_32]), Component.interface_1265.component_1265_28);
    } else {
        ifSetHide(true, Component.interface_1265.component_1265_33);
        ifSetHide(false, Component.interface_1265.component_1265_226);
        ifSetSize(ifGetWidth(Component.interface_1265.component_1265_28), 22, 0, 0, Component.interface_1265.component_1265_28);
        ifSetSize(ifGetWidth(Component.interface_1265.component_1265_29), 20, 0, 0, Component.interface_1265.component_1265_29);
        ifSetColour(colour(0xF7EDB7), Component.interface_1265.component_1265_34);
        ifSetColour(colour(0xE5B051), Component.interface_1265.component_1265_227);
        ifSetGraphic(Graphic.aif_shop_tab_button_2, Component.interface_1265.component_1265_30);
        ifSetGraphic(Graphic.aif_shop_tab_button_3, Component.interface_1265.component_1265_31);
        ifSetGraphic(Graphic.aif_shop_tab_button_2, Component.interface_1265.component_1265_32);
        ifSetGraphic(Graphic.aif_shop_tab_button_0, Component.interface_1265.component_1265_223);
        ifSetGraphic(Graphic.aif_shop_tab_button_1, Component.interface_1265.component_1265_224);
        ifSetGraphic(Graphic.aif_shop_tab_button_0, Component.interface_1265.component_1265_225);
        hookMouseEnter(hook(cs2_6098, "iiIII", [1, 1, Component.interface_1265.component_1265_30, Component.interface_1265.component_1265_31, Component.interface_1265.component_1265_32]), Component.interface_1265.component_1265_28);
        hookMouseExit(hook(cs2_6098, "iiIII", [1, 0, Component.interface_1265.component_1265_30, Component.interface_1265.component_1265_31, Component.interface_1265.component_1265_32]), Component.interface_1265.component_1265_28);
        hookMouseEnter(hook(cs2_6098, "iiIII", [0, 1, Component.interface_1265.component_1265_223, Component.interface_1265.component_1265_224, Component.interface_1265.component_1265_225]), Component.interface_1265.component_1265_29);
        hookMouseExit(hook(cs2_6098, "iiIII", [0, 0, Component.interface_1265.component_1265_223, Component.interface_1265.component_1265_224, Component.interface_1265.component_1265_225]), Component.interface_1265.component_1265_29);
    }
}
