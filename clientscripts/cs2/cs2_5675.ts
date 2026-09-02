/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5675

function cs2_5675(): void {
    let int0: number = 0;

    switch (varp_2478) {
        case 2:
            int0 = varbit_xpdisplay_counter_2_tracking;
            break;
        case 3:
            int0 = varbit_xpdisplay_counter_3_tracking;
            break;
        default:
            int0 = varbit_xpdisplay_counter_1_tracking;
            break;
    }
    let int1: component = -1;

    switch (int0) {
        case 2:
            int1 = Component.interface_1214.component_1214_32;
            break;
        case 5:
            int1 = Component.interface_1214.component_1214_33;
            break;
        case 6:
            int1 = Component.interface_1214.component_1214_36;
            break;
        case 3:
            int1 = Component.interface_1214.component_1214_34;
            break;
        case 4:
            int1 = Component.interface_1214.component_1214_35;
            break;
        case 7:
            int1 = Component.interface_1214.component_1214_37;
            break;
        case 12:
            int1 = Component.interface_1214.component_1214_49;
            break;
        case 11:
            int1 = Component.interface_1214.component_1214_41;
            break;
        case 13:
            int1 = Component.interface_1214.component_1214_43;
            break;
        case 14:
            int1 = Component.interface_1214.component_1214_44;
            break;
        case 15:
            int1 = Component.interface_1214.component_1214_45;
            break;
        case 16:
            int1 = Component.interface_1214.component_1214_46;
            break;
        case 17:
            int1 = Component.interface_1214.component_1214_47;
            break;
        case 18:
            int1 = Component.interface_1214.component_1214_48;
            break;
        case 8:
            int1 = Component.interface_1214.component_1214_38;
            break;
        case 9:
            int1 = Component.interface_1214.component_1214_39;
            break;
        case 10:
            int1 = Component.interface_1214.component_1214_40;
            break;
        case 19:
            int1 = Component.interface_1214.component_1214_42;
            break;
        case 20:
            int1 = Component.interface_1214.component_1214_50;
            break;
        case 21:
            int1 = Component.interface_1214.component_1214_51;
            break;
        case 22:
            int1 = Component.interface_1214.component_1214_52;
            break;
        case 23:
            int1 = Component.interface_1214.component_1214_53;
            break;
        case 24:
            int1 = Component.interface_1214.component_1214_54;
            break;
        case 25:
            int1 = Component.interface_1214.component_1214_55;
            break;
        case 30:
            int1 = Component.interface_1214.component_1214_56;
            break;
        case 31:
            int1 = Component.interface_1214.component_1214_57;
            break;
        default:
            int1 = Component.interface_1214.component_1214_31;
            break;
    }
    let int2: number = ifGetX(int1) - 1;
    let int3: number = ifGetY(int1) - 1;
    ifSetPosition(int2, int3, 0, 0, Component.interface_1214.component_1214_58);
    ifSetPosition(int2, int3, 0, 0, Component.interface_1214.component_1214_30);
    ifSetHide(false, Component.interface_1214.component_1214_58);
    ifSetHide(false, Component.interface_1214.component_1214_30);
}
