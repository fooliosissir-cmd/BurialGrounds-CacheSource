/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_246

function cs2_246(): void {
    ifSetOnKey(hook(cs2_247, "iz", [event_keycode, event_keychar]), Component.interface_594.component_594_53);
    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);
    varc_snapshot_mute = 0;
    varc_snapshot_open = 1;

    if (ifGetHide(Component.interface_752.component_752_3) == 0) {
        ifSetHide(true, Component.interface_752.component_752_3);
        ifSetHide(false, Component.interface_752.component_752_8);
        varc_meslayermode = 0;
        varcstr_meslayerinput = "";
    }
}
