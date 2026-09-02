/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_mode14]

function meslayer_mode14(): void {
    if (varc_snapshot_open == 1) {
        mes("You can't do that while you're reporting abuse.");
        return;
    }

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText("Enter the name of the song you wish to search for:", Component.interface_752.component_752_4);
    varc_meslayermode = 14;
    meslayer_setupinput("");
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    cs2_1188();
}
