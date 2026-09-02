/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2478

function cs2_2478(intArg0: component): void {
    switch (intArg0) {
        case Component.interface_854.component_854_1:
            if (varbit_mob_tutorial_status == 28) {
                ifSetColour(colour(0xFFFF33), intArg0);
            } else {
                ifSetColour(colour(0x00FF00), intArg0);
            }
            break;
        case Component.interface_854.component_854_2:
            if (varbit_mob_tutorial_status < 30) {
                ifSetColour(colour(0xFF0000), intArg0);
            } else if (varbit_mob_tutorial_status == 30) {
                ifSetColour(colour(0xFFFF33), intArg0);
            } else {
                ifSetColour(colour(0x00FF00), intArg0);
            }
            break;
        case Component.interface_854.component_854_3:
            if (varbit_mob_tutorial_status < 32) {
                ifSetColour(colour(0xFF0000), intArg0);
            } else if (varbit_mob_tutorial_status == 32) {
                ifSetColour(colour(0xFFFF33), intArg0);
            } else {
                ifSetColour(colour(0x00FF00), intArg0);
            }
            break;
        case Component.interface_854.component_854_4:
            if (varbit_mob_tutorial_status < 34) {
                ifSetColour(colour(0xFF0000), intArg0);
            } else if (varbit_mob_tutorial_status == 34) {
                ifSetColour(colour(0xFFFF33), intArg0);
            } else {
                ifSetColour(colour(0x00FF00), intArg0);
            }
            break;
        case Component.interface_854.component_854_5:
            if (varbit_mob_tutorial_status < 36) {
                ifSetColour(colour(0xFF0000), intArg0);
            } else if (varbit_mob_tutorial_status == 36) {
                ifSetColour(colour(0xFFFF33), intArg0);
            } else {
                ifSetColour(colour(0x00FF00), intArg0);
            }
            break;
    }
}
