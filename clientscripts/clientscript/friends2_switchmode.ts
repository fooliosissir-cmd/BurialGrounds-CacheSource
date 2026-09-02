/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friends2_switchmode]

function friends2_switchmode(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetHide(true, Component.interface_550.component_550_8);
        ifSetHide(false, Component.interface_550.component_550_29);
        ifSetHide(true, Component.interface_550.component_550_47);
        ifSetHide(false, Component.interface_550.component_550_49);
        proc_ignore_init();
    } else {
        ifSetHide(true, Component.interface_550.component_550_29);
        ifSetHide(false, Component.interface_550.component_550_8);
        ifSetHide(true, Component.interface_550.component_550_49);
        ifSetHide(false, Component.interface_550.component_550_47);
        proc_friend_init();
    }
}
