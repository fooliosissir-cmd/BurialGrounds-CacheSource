/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_mode6]

function meslayer_mode6(strArg0: string): void {
    if (varc_has_displayname_client == 0) {
        return;
    }

    if (varc_snapshot_open == 1) {
        mes("You can't do that while you're reporting abuse.");
        return;
    }

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    varcstr_23 = strArg0;
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText("Enter message to send to " + varcstr_23, Component.interface_752.component_752_4);
    varc_meslayermode = 6;
    meslayer_setupinput("");
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    cs2_1188();
}
