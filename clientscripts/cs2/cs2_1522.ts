/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1522

function cs2_1522(intArg0: component): void {
    if (varbit_tutorial_version != 2) {
        return;
    }

    if (varp_tutorial == 1000) {
        ifSetColour(colour(0x99FF00), intArg0);
        return;
    } else if (varp_tutorial == 0) {
        ifSetColour(colour(0xFF1E1E), intArg0);
        return;
    } else {
        switch (intArg0) {
            case Component.interface_761.component_761_10:
                if (varp_tutorial >= 90) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varp_tutorial == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_11:
                if (varp_tutorial >= 180) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varp_tutorial < 100) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_12:
                if (varbit_tutorial2_ranged >= 50) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_ranged == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_13:
                if (varbit_tutorial2_fishing >= 20) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_fishing == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_14:
                if (varbit_tutorial2_cooking >= 25) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_cooking == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_15:
                if (varbit_tutorial2_magic >= 25) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_magic == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_19:
                if (varbit_tutorial2_wood >= 15) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_wood == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_20:
                if (varbit_tutorial2_fire >= 20) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varbit_tutorial2_fire == 0) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
            case Component.interface_761.component_761_21:
                if (varp_tutorial == 1000) {
                    ifSetColour(colour(0x99FF00), intArg0);
                } else if (varp_tutorial < 190) {
                    ifSetColour(colour(0xFF1E1E), intArg0);
                } else {
                    ifSetColour(colour(0xFFFF66), intArg0);
                }
                break;
        }
    }
}
