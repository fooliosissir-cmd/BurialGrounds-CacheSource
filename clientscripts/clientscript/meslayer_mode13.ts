/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode13]

function meslayer_mode13(strArg0: string, strArg1: string): void {
    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText(strArg0, Component.interface_752.component_752_4);
    varc_meslayermode = 13;
    meslayer_setupinput(strArg1);
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    ifSetondialogabort(hook(meslayer_ondialogabort, "", []), 49283077);
    cs2_1188();
}
