/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,bankpin_shuffle]

function bankpin_shuffle(intArg0: number): void {
    let int1: boolean = true;
    let int2: boolean = false;

    switch (varbit_bankpin_counter) {
        case 0:
            ifSetText("First click the FIRST digit.", Component.interface_13.component_13_28);
            ifSetText("?", Component.interface_13.component_13_1);
            ifSetText("?", Component.interface_13.component_13_2);
            ifSetText("?", Component.interface_13.component_13_3);
            ifSetText("?", Component.interface_13.component_13_4);
            break;
        case 1:
            ifSetText("Now click the SECOND digit.", Component.interface_13.component_13_28);
            ifSetText("*", Component.interface_13.component_13_1);
            ifSetText("?", Component.interface_13.component_13_2);
            ifSetText("?", Component.interface_13.component_13_3);
            ifSetText("?", Component.interface_13.component_13_4);
            break;
        case 2:
            ifSetText("Time for the THIRD digit.", Component.interface_13.component_13_28);
            ifSetText("*", Component.interface_13.component_13_1);
            ifSetText("*", Component.interface_13.component_13_2);
            ifSetText("?", Component.interface_13.component_13_3);
            ifSetText("?", Component.interface_13.component_13_4);
            break;
        case 3:
            ifSetText("Finally, the FOURTH digit.", Component.interface_13.component_13_28);
            ifSetText("*", Component.interface_13.component_13_1);
            ifSetText("*", Component.interface_13.component_13_2);
            ifSetText("*", Component.interface_13.component_13_3);
            ifSetText("?", Component.interface_13.component_13_4);
            [int1, int2] = [false, true];
            break;
        default:
            ifSetText("Please wait...", Component.interface_13.component_13_28);
            ifSetText("*", Component.interface_13.component_13_1);
            ifSetText("*", Component.interface_13.component_13_2);
            ifSetText("*", Component.interface_13.component_13_3);
            ifSetText("*", Component.interface_13.component_13_4);
            [int1, int2] = [true, true];
            break;
    }
    let int3: number = 0;

    if (intArg0 == 0) {
        while (int3 < 10) {
            ifSetHide(int1, enumOp(type_int, type_component, Enum.enum_3555, int3));
            ifSetHide(int2, enumOp(type_int, type_component, Enum.enum_3554, int3));
            int3 = int3 + 1;
        }
        return;
    }
    let int4: number = random(10);
    defineArray(0, type_int, 10);
    array0[0] = int4;
    array0[1] = (int4 + 1) % 10;
    array0[2] = (int4 + 2) % 10;
    array0[3] = (int4 + 3) % 10;
    array0[4] = (int4 + 4) % 10;
    array0[5] = (int4 + 5) % 10;
    array0[6] = (int4 + 6) % 10;
    array0[7] = (int4 + 7) % 10;
    array0[8] = (int4 + 8) % 10;
    array0[9] = (int4 + 9) % 10;
    let int5: number = 0;

    while (int3 < 10) {
        int5 = random(9);
        int4 = array0[9];
        array0[9] = array0[int5];
        array0[int5] = int4;
        ifSetPosition(25 - randominc(50), 20 - randominc(40), 1, 1, enumOp(type_int, type_component, Enum.enum_3557, int3));
        ifSetHide(int1, enumOp(type_int, type_component, Enum.enum_3555, int3));
        ifSetHide(int2, enumOp(type_int, type_component, Enum.enum_3554, int3));
        int3 = int3 + 1;
    }
    let int6: number = ifGetWidth(Component.interface_13.component_13_6);
    let int7: number = ifGetHeight(Component.interface_13.component_13_6);
    let int8: number = (ifGetWidth(Component.interface_13.component_13_5) - int6) / 3;
    let int9: number = (ifGetHeight(Component.interface_13.component_13_5) - int7) / 2;
    let int10: number = int8 * 2;
    let int11: number = int9 * 2;
    let int12: number = int8 * 3;
    ifSetPosition(0, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[0]));
    ifSetPosition(0, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[0]));
    ifSetPosition(int8, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[1]));
    ifSetPosition(int8, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[1]));
    ifSetPosition(int10, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[2]));
    ifSetPosition(int10, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[2]));
    ifSetPosition(int12, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[3]));
    ifSetPosition(int12, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[3]));
    ifSetPosition(0, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[4]));
    ifSetPosition(0, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[4]));
    ifSetPosition(int8, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[5]));
    ifSetPosition(int8, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[5]));
    ifSetPosition(int10, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[6]));
    ifSetPosition(int10, int9, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[6]));
    ifSetPosition(0, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[7]));
    ifSetPosition(0, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[7]));
    ifSetPosition(int8, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[8]));
    ifSetPosition(int8, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[8]));
    ifSetPosition(int10, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3556, array0[9]));
    ifSetPosition(int10, int11, 0, 0, enumOp(type_int, type_component, Enum.enum_3555, array0[9]));
}
