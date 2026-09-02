/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3131

function cs2_3131(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ifSetHide(false, Component.interface_910.component_910_65);
        ifSetHide(false, Component.interface_910.component_910_66);
        ifSetPosition(ifGetX(Component.interface_910.component_910_65), ccGetY(), 0, 0, Component.interface_910.component_910_65);
        ifSetPosition(ifGetX(Component.interface_910.component_910_66), ccGetY(), 0, 0, Component.interface_910.component_910_66);
    }
    ifSetColour(colour(0x404040), Component.interface_910.component_910_66);
    ifSetColour(colour(0x606060), Component.interface_910.component_910_65);
}
