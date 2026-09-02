/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5191

function cs2_5191(intArg0: number, intArg1: number): void {
    ifSetScrollPos(ifGetScrollX(Component.interface_1122.component_1122_68) + intArg1, 0, Component.interface_1122.component_1122_68);

    if ((intArg1 < 0 && ifGetScrollX(Component.interface_1122.component_1122_68) <= intArg0) || (intArg1 > 0 && ifGetScrollX(Component.interface_1122.component_1122_68) >= intArg0)) {
        ifSetScrollPos(intArg0, 0, Component.interface_1122.component_1122_68);
        ifSetOnTimer(noHook(""), Component.interface_1122.component_1122_68);
        ifSetHide(true, Component.interface_1122.component_1122_69);
    }
}
