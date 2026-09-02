/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_close]

function proc_meslayer_close(intArg0: number): void {
    if (intArg0 == 0 || intArg0 == varc_meslayermode) {
        ifSetHide(true, Component.interface_752.component_752_3);
        ifSetHide(true, Component.interface_752.component_752_7);
        ifSetHide(false, Component.interface_752.component_752_8);
        cs2_2026();
        varc_meslayermode = 0;
    }

    if (getWindowMode() >= 2) {
        proc_subchanged();
    }
}
