/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode5]

function meslayer_mode5(): void {
    if (varc_has_displayname_client == 0) {
        return;
    }

    if (varc_snapshot_open == 1) {
        cs2_675();
    }

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText("Enter name of player to delete from list", Component.interface_752.component_752_4);
    varc_meslayermode = 5;
    meslayer_setupinput("");
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    cs2_1188();
}
