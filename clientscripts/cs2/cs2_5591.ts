/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5591

function cs2_5591(intArg0: number, intArg1: number): void {
    if (intArg0 == 16) {
        ifSetColour(colour(0xDB9000), Component.interface_1185.component_1185_20);
        ifSetColour(colour(0xDB9000), Component.interface_1185.component_1185_21);
        ifResumePauseButton(Component.interface_1185.component_1185_15);
    } else if (intArg0 == 17) {
        ifSetColour(colour(0xDB9000), Component.interface_1185.component_1185_25);
        ifSetColour(colour(0xDB9000), Component.interface_1185.component_1185_26);
        ifResumePauseButton(Component.interface_1185.component_1185_16);
    }
}
