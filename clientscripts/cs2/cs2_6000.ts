/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6000

function cs2_6000(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: graphic, intArg8: graphic, intArg9: graphic): [number, number, number, number, number] {
    let int10: component = Component.interface_1143.component_1143_76;
    let int11: number = 0;
    let int12: struct = -1;
    let str0: string = "";
    let int13: number = 0;
    let int14: Enum = Enum.enum_5724;
    let int15: number = enumGetoutputcount(int14);

    defineArray(0, type_int, int15 + 1);
    defineArray(1, type_struct, enumGetoutputcount(int14));
    let int16: number = -1;
    let int17: number = 0;
    let int18: number = 0;

    while (int17 < int15) {
        array0[int17] = int17;
        int17 = int17 + 1;
    }
    int17 = 0;
    let int19: number = 1;
    let int20: number = 0;
    let int21: number = 0;

    switch (varc_1659) {
        case 1:
            array0[enumGetoutputcount(int14)] = -1;
            cs2_5999(0, 0, enumGetoutputcount(int14), int14);
            int17 = int15 - 1;
            while (int17 >= 0) {
                if (enumOp(type_int, type_struct, int14, array0[int15 - int17]) != -1) {
                    array1[int17] = enumOp(type_int, type_struct, int14, array0[int15 - int17]);
                }
                int17 = int17 - 1;
            }
            break;
        case 2:
            array0[enumGetoutputcount(int14)] = -1;
            cs2_5998(0, 0, enumGetoutputcount(int14), int14);
            int17 = int15 + 1;
            if (enumOp(type_int, type_struct, int14, array0[0]) != -1) {
                array1[int17] = enumOp(type_int, type_struct, int14, array0[0]);
            }
            while (int17 >= 0) {
                if (enumOp(type_int, type_struct, int14, array0[int17 + 1]) != -1) {
                    array1[int17] = enumOp(type_int, type_struct, int14, array0[int17 + 1]);
                }
                int17 = int17 - 1;
            }
            break;
        case 3:
            array0[enumGetoutputcount(int14)] = -1;
            cs2_5998(0, 0, enumGetoutputcount(int14), int14);
            int17 = int15 - 1;
            while (int17 >= 0) {
                if (enumOp(type_int, type_struct, int14, array0[int15 - int17]) != -1) {
                    array1[int17] = enumOp(type_int, type_struct, int14, array0[int15 - int17]);
                }
                int17 = int17 - 1;
            }
            break;
        default:
            array0[enumGetoutputcount(int14)] = -1;
            cs2_5999(0, 0, enumGetoutputcount(int14), int14);
            int17 = int15 - 1;
            while (int17 >= 0) {
                if (enumOp(type_int, type_struct, int14, array0[int17 + 1]) != -1) {
                    array1[int17] = enumOp(type_int, type_struct, int14, array0[int17 + 1]);
                }
                int17 = int17 - 1;
            }
            break;
    }
    int17 = 0;
    let int22: number = 1;
    let int23: number = 1;

    while (int22 <= 1) {
        if (int23 > 1) {
            ccCreate(int10, 4, intArg5);
            intArg5 = intArg5 + 1;
            if (int22 == 1) {
                ccSetPosition(11, intArg4, 0, 0);
            } else {
                intArg2 = intArg2 + intArg3 + intArg4;
                ccSetPosition(11, intArg2, 0, 0);
            }
            int11 = ccGetY();
            ccSetSize(ifGetWidth(int10) - 20, 13, 0, 0);
            switch (int22) {
                case 1:
                    ccSetText("Tier 1");
                    break;
                case 2:
                    ccSetText("Tier 2");
                    break;
                case 3:
                    ccSetText("Tier 3");
                    break;
                case 4:
                    ccSetText("Tier 4");
                    break;
            }
            ccSetTextFont(Graphic.graphic_4040);
            ccSetTextShadow(true);
            ccSetColour(colour(0xE6BE78));
            ccSetTextAlign(0, 1, 13);
            if (int22 == 1) {
                ccCreate(int10, 4, intArg5);
                intArg5 = intArg5 + 1;
                ccSetPosition(7, int11, 2, 0);
                ccSetSize(ifGetWidth(int10) - 20, 13, 0, 0);
                ccSetText("Scroll Down For More Tiers");
                ccSetTextFont(Graphic.graphic_4040);
                ccSetTextShadow(true);
                ccSetColour(colour(0xE6BE78));
                ccSetTextAlign(2, 1, 13);
            }
            ccCreate(int10, 3, intArg5);
            intArg5 = intArg5 + 1;
            if (int22 == 1) {
                ccSetPosition(11, 23, 0, 0);
            } else {
                intArg2 = intArg2 + 17;
                ccSetPosition(11, intArg2, 0, 0);
            }
            ccSetSize(ifGetWidth(int10) - 20, 1, 0, 0);
            ccSetColour(colour(0xE6BE78));
            intArg2 = ccGetY() + ccGetHeight();
        }
        int17 = 0;
        intArg0 = 0;
        intArg1 = intArg4;
        while (int17 < enumGetoutputcount(int14)) {
            int12 = array1[int17];
            if (structParam(int12, Param.param_1993) == int22) {
                [intArg0, intArg1, intArg2, intArg3, intArg5] = cs2_5351(int12, intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9);
            }
            int17 = int17 + 1;
        }
        int22 = int22 + 1;
    }
    return [intArg0, intArg1, intArg2, intArg3, intArg5];
}
