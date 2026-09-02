/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2477

function cs2_2477(): void {
    if (varbit_mob_tutorial_status == 28) {
        ifSetColour(colour(0xFFFF33), Component.interface_854.component_854_1);
    } else {
        ifSetColour(colour(0x00FF00), Component.interface_854.component_854_1);
    }

    if (varbit_mob_tutorial_status < 30) {
        ifSetColour(colour(0xFF0000), Component.interface_854.component_854_2);
    } else if (varbit_mob_tutorial_status == 30) {
        ifSetColour(colour(0xFFFF33), Component.interface_854.component_854_2);
    } else {
        ifSetColour(colour(0x00FF00), Component.interface_854.component_854_2);
    }

    if (varbit_mob_tutorial_status < 32) {
        ifSetColour(colour(0xFF0000), Component.interface_854.component_854_3);
    } else if (varbit_mob_tutorial_status == 32) {
        ifSetColour(colour(0xFFFF33), Component.interface_854.component_854_3);
    } else {
        ifSetColour(colour(0x00FF00), Component.interface_854.component_854_3);
    }

    if (varbit_mob_tutorial_status < 34) {
        ifSetColour(colour(0xFF0000), Component.interface_854.component_854_4);
    } else if (varbit_mob_tutorial_status == 34) {
        ifSetColour(colour(0xFFFF33), Component.interface_854.component_854_4);
    } else {
        ifSetColour(colour(0x00FF00), Component.interface_854.component_854_4);
    }

    if (varbit_mob_tutorial_status < 36) {
        ifSetColour(colour(0xFF0000), Component.interface_854.component_854_5);
    } else if (varbit_mob_tutorial_status == 36) {
        ifSetColour(colour(0xFFFF33), Component.interface_854.component_854_5);
    } else {
        ifSetColour(colour(0x00FF00), Component.interface_854.component_854_5);
    }
}
