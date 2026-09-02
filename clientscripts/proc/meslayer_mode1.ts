/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_mode1]

function meslayer_mode1(strArg0: string): void {
    if (varc_meslayermode > 1) {
        return;
    }

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetTextFont(Graphic.q8_full, Component.interface_752.component_752_4);
    ifSetTextFont(Graphic.q8_full, Component.interface_752.component_752_5);
    ifSetSize(0, 20, 1, 1, Component.interface_752.component_752_4);
    ifSetSize(0, 20, 1, 0, Component.interface_752.component_752_5);
    ifSetPosition(0, 0, 1, 0, Component.interface_752.component_752_4);
    ifSetPosition(0, 0, 1, 2, Component.interface_752.component_752_5);
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText(strArg0, Component.interface_752.component_752_4);
    ifSetText("Click here to continue", Component.interface_752.component_752_5);
    varc_meslayermode = 1;
    ifSetOnClick(hook(clientscript_meslayer_close, "", []), Component.interface_752.component_752_3);
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    ccDeleteAll(Component.interface_752.component_752_3);
    ifSetColour(colour(0x000080), Component.interface_752.component_752_5);
    ifSetOnMouseOver(hook(text_colour_swapper, "Ii", [event_com, colour(0xFFFFFF)]), Component.interface_752.component_752_5);
    hookMouseExit(hook(text_colour_swapper, "Ii", [event_com, colour(0x000080)]), Component.interface_752.component_752_5);
    cs2_1188();
    ifSetHide(true, Component.interface_752.component_752_6);
    ifSetOnTimer(noHook(""), Component.interface_752.component_752_5);
    ifSetOnClick(noHook(""), Component.interface_752.component_752_5);
    ifSetonsubchange(hook(cs2_3450, "i", [1]), 49283077);
}
