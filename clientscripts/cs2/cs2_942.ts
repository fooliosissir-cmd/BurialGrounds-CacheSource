/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_942

function cs2_942(intArg0: number): [number, string] {
    if (varp_1469 == enumOp(type_int, type_coord, Enum.enum_2536, intArg0)) {
        return [0, "null"];
    }

    switch (intArg0) {
        case 0:
            return [1, enumOp(type_int, type_string, Enum.enum_2535, 0)];
        case 1:
            return [1, enumOp(type_int, type_string, Enum.enum_2535, 1)];
        case 2:
            return [1, enumOp(type_int, type_string, Enum.enum_2535, 2)];
        case 3:
            return [1, enumOp(type_int, type_string, Enum.enum_2535, 3)];
        case 4:
            return [1, enumOp(type_int, type_string, Enum.enum_2535, 4)];
        case 5:
            if (varbit_farming_spirit_tree_varbit_1 == 20) {
                return [1, enumOp(type_int, type_string, Enum.enum_2535, 5)];
            }
            break;
        case 6:
            if (varbit_farming_spirit_tree_varbit_2 == 20) {
                return [1, enumOp(type_int, type_string, Enum.enum_2535, 6)];
            }
            break;
        case 7:
            if (varbit_farming_spirit_tree_varbit_3 == 20) {
                return [1, enumOp(type_int, type_string, Enum.enum_2535, 7)];
            }
            break;
        case 8:
            if (varbit_pog_spirit >= 3) {
                return [1, enumOp(type_int, type_string, Enum.enum_2535, 8)];
            }
            break;
        default:
            return [-1, "null"];
    }
    return [0, "null"];
}
