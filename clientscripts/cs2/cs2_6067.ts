/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6067

function cs2_6067(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetTrans(255, Component.interface_1183.component_1183_1);
    ifSetTrans(255, Component.interface_1183.component_1183_24);
    ifSetOnKey(hook(cs2_6068, "izII", [event_keycode, event_keychar, intArg0, intArg1]), intArg2);
}
