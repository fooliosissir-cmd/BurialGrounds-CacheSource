/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4563

function cs2_4563(intArg0: component, intArg1: number): void {
    ifSetHide(true, Component.interface_589.component_589_54);
    ifSetHide(true, Component.interface_589.component_589_34);

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnMouseOver(noHook(""));
    }
}
