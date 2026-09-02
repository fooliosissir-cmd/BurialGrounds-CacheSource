/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_theatre_spot_switch]

function clan_theatre_spot_switch(): void {
    if (varbit_clan_keep_theatre_spot1 == 1) {
        ifSetColour(colour(0xAAAA00), Component.interface_824.component_824_13);
        ifSetText("On", Component.interface_824.component_824_59);
    } else {
        ifSetColour(colour(0x000000), Component.interface_824.component_824_13);
        ifSetText("Off", Component.interface_824.component_824_59);
    }

    if (varbit_clan_keep_theatre_spot2 == 1) {
        ifSetColour(colour(0xAAAA00), Component.interface_824.component_824_100);
        ifSetText("On", Component.interface_824.component_824_101);
    } else {
        ifSetColour(colour(0x000000), Component.interface_824.component_824_100);
        ifSetText("Off", Component.interface_824.component_824_101);
    }

    if (varbit_clan_keep_theatre_spot3 == 1) {
        ifSetColour(colour(0xAAAA00), Component.interface_824.component_824_153);
        ifSetText("On", Component.interface_824.component_824_154);
    } else {
        ifSetColour(colour(0x000000), Component.interface_824.component_824_153);
        ifSetText("Off", Component.interface_824.component_824_154);
    }

    if (varbit_clan_keep_theatre_spot4 == 1) {
        ifSetColour(colour(0xAAAA00), Component.interface_824.component_824_190);
        ifSetText("On", Component.interface_824.component_824_191);
    } else {
        ifSetColour(colour(0x000000), Component.interface_824.component_824_190);
        ifSetText("Off", Component.interface_824.component_824_191);
    }
}
