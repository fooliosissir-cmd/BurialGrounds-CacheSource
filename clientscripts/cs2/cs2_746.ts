/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_746

function cs2_746(intArg0: boolean): void {
    if (intArg0 == true) {
        ifSetHide(false, Component.interface_18.component_18_42);
        hookMouseEnter(noHook(""), Component.interface_18.component_18_29);
        hookMouseExit(noHook(""), Component.interface_18.component_18_29);
    } else {
        ifSetHide(true, Component.interface_18.component_18_42);
        hookMouseEnter(hook(cs2_748, "1", [true]), Component.interface_18.component_18_29);
        hookMouseExit(hook(cs2_748, "1", [false]), Component.interface_18.component_18_29);
    }
    cs2_749(false);
    deltooltip_action(Component.interface_18.component_18_41);
}
