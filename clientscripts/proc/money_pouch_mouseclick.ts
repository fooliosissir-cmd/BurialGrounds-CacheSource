/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,money_pouch_mouseclick]

function proc_money_pouch_mouseclick(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (ifGetHide(Component.interface_746.component_746_205) == 1) {
        ifSetHide(false, Component.interface_746.component_746_205);
    } else {
        ifSetHide(true, Component.interface_746.component_746_205);
    }

    if (ifGetHide(Component.interface_548.component_548_198) == 1) {
        ifSetHide(false, Component.interface_548.component_548_198);
    } else {
        ifSetHide(true, Component.interface_548.component_548_198);
    }
}
