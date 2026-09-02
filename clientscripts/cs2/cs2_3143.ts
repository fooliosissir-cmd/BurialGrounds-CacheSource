/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3143

function cs2_3143(intArg0: number, strArg0: string): void {
    if (intArg0 == 0) {
        ifSetColour(colour(0xEBE0BC), Component.interface_910.component_910_8);
    } else if (intArg0 == 1) {
        ifSetColour(colour(0xFF0000), Component.interface_910.component_910_8);
    }
    ifSetText(strArg0, Component.interface_910.component_910_8);
}
