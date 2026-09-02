/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_361

function cs2_361(intArg0: graphic, intArg1: number): struct {
    let int2: boolean = int_to_bool(gender());
    let int3: number = enumGetoutputcount(Enum.playerdesign4_custom_roles) - 1;
    let int4: struct = -1;
    let int5: number = 0;
    let int6: struct = -1;

    while (int3 >= 0) {
        int4 = enumOp(type_int, type_struct, Enum.playerdesign4_custom_roles, int3);
        if (int4 != -1) {
            int5 = 0;
            int6 = playerdesign4_getoutfit(0, int4, int2);
            while (int6 != -1) {
                switch (intArg1) {
                    case 3:
                        if (structParam(int6, Param.playerdesign4_outfit_torso) == intArg0) {
                            return int6;
                        }
                        break;
                    case 4:
                        if (structParam(int6, Param.playerdesign4_outfit_arms) == intArg0) {
                            return int6;
                        }
                        break;
                    case 5:
                        if (structParam(int6, Param.playerdesign4_outfit_hands) == intArg0) {
                            return int6;
                        }
                        break;
                    case 6:
                        if (structParam(int6, Param.playerdesign4_outfit_legs) == intArg0) {
                            return int6;
                        }
                        break;
                    default:
                        return -1;
                }
                int5 = int5 + 1;
                int6 = playerdesign4_getoutfit(int5, int4, int2);
            }
        }
        int3 = int3 - 1;
    }
    return -1;
}
