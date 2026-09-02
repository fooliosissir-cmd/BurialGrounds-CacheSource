/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1188

function cs2_1188(): void {
    if (getWindowMode() >= 2) {
        ifSetGraphic(Graphic.aif_chat_background, Component.interface_752.component_752_1);
        ifSetAlpha(true, Component.interface_752.component_752_1);
        ifSetHide(false, Component.interface_752.component_752_1);
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_5392(Component.interface_752.component_752_2, 0, 0);
        cs2_1652(false);
        ifSetHide(true, Component.interface_746.component_746_49);
    }
}
