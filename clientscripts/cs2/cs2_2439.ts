/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2439

function cs2_2439(): void {
    if (varc_818 == 1) {
        ifSetText("Net: Ripped!", Component.interface_15.component_15_16);
        ifSetColour(colour(0xE12323), Component.interface_15.component_15_16);
    } else {
        ifSetText("Net: OK", Component.interface_15.component_15_16);
        ifSetColour(colour(0xFF9900), Component.interface_15.component_15_16);
    }
}
