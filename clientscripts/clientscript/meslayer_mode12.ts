/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode12]

function meslayer_mode12(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);

    if (bool_to_int(varc_clanwars_caller_init) == 0) {
        varcstr_clanwars_caller = "";
        varcstr_clanwars_caller_lastusedstring = "";
        varc_clanwars_caller_init = true;
    }

    if (stringLength(varcstr_clanwars_caller) > 0) {
        ifSetText("Edit the name of your caller:" + "<br>" + "(Delete it to disable this feature.)", Component.interface_752.component_752_4);
    } else {
        ifSetText("Enter the name of your caller:", Component.interface_752.component_752_4);
    }
    varc_meslayermode = 12;
    meslayer_setupinput(varcstr_clanwars_caller);
    ifSetOnClick(hook(clanwars_caller_click, "", []), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    cs2_1188();
}
