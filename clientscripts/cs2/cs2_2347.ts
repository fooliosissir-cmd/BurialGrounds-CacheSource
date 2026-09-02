/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2347

function cs2_2347(intArg0: number): void {
    if (intArg0 == 1) {
        if (varbit_mah1_quest >= 250) {
            ifSetColour(colour(0x00FF00), Component.interface_723.component_723_6);
        } else if (varbit_mah1_quest == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_723.component_723_6);
        } else {
            ifSetColour(colour(0xFFFF00), Component.interface_723.component_723_6);
        }
    }

    if (intArg0 == 2) {
        if (varbit_mom2_main >= 60) {
            ifSetColour(colour(0x00FF00), Component.interface_723.component_723_7);
        } else if (varbit_mom2_main == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_723.component_723_7);
        } else {
            ifSetColour(colour(0xFFFF00), Component.interface_723.component_723_7);
        }
    }

    if (intArg0 == 3) {
        if (varbit_mah3_main >= 240) {
            ifSetColour(colour(0x00FF00), Component.interface_723.component_723_8);
        } else if (varbit_mah3_main == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_723.component_723_8);
        } else {
            ifSetColour(colour(0xFFFF00), Component.interface_723.component_723_8);
        }
    }

    if (intArg0 == 4) {
        if (varbit_mah4_main >= 100) {
            ifSetColour(colour(0x00FF00), Component.interface_723.component_723_9);
        } else if (varbit_mah4_main == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_723.component_723_9);
        } else {
            ifSetColour(colour(0xFFFF00), Component.interface_723.component_723_9);
        }
    }
}
