/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1433

function cs2_1433(): void {
    cs2_6382();

    if (getWindowMode() >= 1) {
        ifSetOnVarcTransmit(hook(toplevel_fovchange, "Y", [], [184]), Component.interface_746.component_746_11);
        ifSetOnVarcTransmit(hook(toplevel_fovchange, "Y", [], [184]), Component.interface_548.component_548_3);
    }
    ifSetOnVarcTransmit(hook(meslayer_varc_update, "Y", [], [5]), Component.interface_752.component_752_3);
    ifSetOnResize(hook(cs2_721, "", []), Component.interface_746.component_746_52);

    if (varc_1694 == -1) {
        varc_1694 = 100;
    }
    toplevel_minimenu_setup();
}
