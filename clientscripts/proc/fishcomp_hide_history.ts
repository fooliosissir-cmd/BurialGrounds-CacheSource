/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_hide_history]

function proc_fishcomp_hide_history(): void {
    ifSetSize(ifGetWidth(Component.interface_919.component_919_47), 88, 0, 0, Component.interface_919.component_919_47);
    ccDeleteAll(Component.interface_919.component_919_58);
    ifSetvflip(true, Component.interface_919.component_919_68);
    ifSetvflip(true, Component.interface_919.component_919_69);
    ifSetScrollPos(0, 0, Component.interface_919.component_919_59);
    ifSetHide(true, Component.interface_919.component_919_48);
    ifSetHide(true, Component.interface_919.component_919_53);
    ifSetHide(true, Component.interface_919.component_919_56);
    ifSetHide(false, Component.interface_919.component_919_86);
    ifSetPosition(177, 9, 0, 2, Component.interface_919.component_919_55);
}
