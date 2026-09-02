/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5875

function cs2_5875(intArg0: number, intArg1: number, intArg2: number): [obj, number] {
    let int3: Enum = -1;

    switch (intArg0) {
        case 1:
            if (intArg1 == 1) {
                int3 = Enum.enum_5694;
            } else {
                int3 = Enum.enum_5695;
            }
            break;
        case 2:
            if (intArg1 == 4) {
                int3 = Enum.enum_5695;
            } else if (intArg1 == 5) {
                const [tmpInt2, tmpInt3] = cs2_5876(intArg2);
                return [tmpInt2, tmpInt3];
            } else {
                int3 = Enum.enum_5695;
            }
            break;
        case 4:
            if (intArg1 == 2 || intArg1 == 3) {
                int3 = Enum.enum_5702;
            } else {
                int3 = Enum.enum_5701;
            }
            break;
        case 3:
            int3 = Enum.enum_5696;
            break;
        case 5:
        case 6:
        case 7:
            int3 = Enum.enum_5700;
            break;
        case 8:
        case 9:
        case 10:
            int3 = Enum.enum_5699;
            break;
        case 11:
            int3 = Enum.enum_5697;
            break;
        case 12:
            if (varbit_11031 == 0) {
                int3 = Enum.enum_5698;
            } else {
                int3 = Enum.enum_5697;
            }
            break;
        case 14:
        case 13:
            const [tmpInt0, tmpInt1] = cs2_5876(intArg2);
            return [tmpInt0, tmpInt1];
        default:
            return [-1, 0];
    }
    let int4: obj = enumOp(type_int, type_obj, int3, intArg2);
    let int5: number = 0;

    if (int4 != -1) {
        int5 = ocParam(int4, Param.param_2270);
        if (int5 > 1) {
            int4 = ocParam(int4, Param.param_2271);
        }
        return [int4, int5];
    }
    return [-1, 0];
}
