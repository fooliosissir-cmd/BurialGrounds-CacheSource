/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,makeover_colour_resynch]

function makeover_colour_resynch(intArg0: component): void {
    let int1: component = -1;

    switch (varbit_player_kit_mom_colour) {
        case 0:
            int1 = Component.interface_900.component_900_23;
            break;
        case 1:
            int1 = Component.interface_900.component_900_24;
            break;
        case 2:
            int1 = Component.interface_900.component_900_25;
            break;
        case 3:
            int1 = Component.interface_900.component_900_26;
            break;
        case 4:
            int1 = Component.interface_900.component_900_27;
            break;
        case 5:
            int1 = Component.interface_900.component_900_28;
            break;
        case 6:
            int1 = Component.interface_900.component_900_29;
            break;
        case 7:
            int1 = Component.interface_900.component_900_22;
            break;
        case 8:
            int1 = Component.interface_900.component_900_21;
            break;
        case 9:
            int1 = Component.interface_900.component_900_20;
            break;
        case 10:
            int1 = Component.interface_900.component_900_30;
            break;
        case 11:
            int1 = Component.interface_900.component_900_31;
            break;
    }
    makeover_colour(int1, intArg0);
}
