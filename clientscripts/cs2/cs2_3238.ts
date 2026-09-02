/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3238

function cs2_3238(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = login_getreply();

    if (varc_loginscreen_focus == intArg2 && (clientClock() - intArg0) % 40 < 20 && int3 != -3 && int3 != 21 && int3 != 1 && ifGetHide(Component.interface_596.component_596_6) == 1 && appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
