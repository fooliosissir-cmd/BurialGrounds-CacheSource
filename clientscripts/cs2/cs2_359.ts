/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_359

function cs2_359(intArg0: struct, intArg1: boolean): void {
    let int2: graphic = -1;

    if (intArg1 == true) {
        baseIdkit(2, -1);
        baseIdkit(3, -1);
        baseIdkit(4, -1);
        baseIdkit(5, -1);
        baseIdkit(6, -1);
        baseIdkit(8, -1);
        baseIdkit(14, -1);
        baseIdkit(15, -1);
        varc_1009 = -1;
        int2 = structParam(intArg0, Param.playerdesign4_outfit_torso);
        if (int2 != -1) {
            varc_1010 = int2;
            baseIdkit(9, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_arms);
        varc_1011 = int2;
        baseIdkit(10, int2);
        int2 = structParam(intArg0, Param.playerdesign4_outfit_hands);
        if (int2 != -1) {
            varc_1012 = int2;
            baseIdkit(11, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_legs);
        if (int2 != -1) {
            varc_1013 = int2;
            baseIdkit(12, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_feet);
        if (int2 != -1) {
            varc_1014 = int2;
            baseIdkit(13, int2);
        }
    } else {
        baseIdkit(9, -1);
        baseIdkit(10, -1);
        baseIdkit(11, -1);
        baseIdkit(12, -1);
        baseIdkit(13, -1);
        baseIdkit(14, -1);
        baseIdkit(15, -1);
        int2 = structParam(intArg0, Param.playerdesign4_outfit_torso);
        if (int2 != -1) {
            varc_1010 = int2;
            baseIdkit(2, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_arms);
        varc_1011 = int2;
        baseIdkit(3, int2);
        int2 = structParam(intArg0, Param.playerdesign4_outfit_hands);
        if (int2 != -1) {
            varc_1012 = int2;
            baseIdkit(4, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_legs);
        if (int2 != -1) {
            varc_1013 = int2;
            baseIdkit(5, int2);
        }
        int2 = structParam(intArg0, Param.playerdesign4_outfit_feet);
        if (int2 != -1) {
            baseIdkit(6, int2);
            varc_1014 = int2;
        }
    }
    [varc_playerdesign3_torsocol, varc_playerdesign3_legscol, varc_playerdesign3_feetcol] = cs2_360(intArg0);
    baseColour(1, varc_playerdesign3_torsocol);
    baseColour(2, varc_playerdesign3_legscol);
    baseColour(3, varc_playerdesign3_feetcol);
    let int3: number = -1;
    let int4: struct = -1;
    let int5: obj = -1;
    let int6: obj = -1;

    if (varc_86 != 0) {
        int4 = enumOp(type_int, type_struct, Enum.enum_3278, varc_197 - 1);
        if (int4 != -1) {
            int3 = structParam(int4, Param.param_1163);
            if (int3 != -1) {
                if (invSize(int3) >= 2) {
                    int5 = invGetobj(int3, 1);
                }
                if (invSize(int3) >= 3) {
                    int6 = invGetobj(int3, 2);
                }
            }
        }
        cs2_392(int4, intArg1);
    } else {
        cs2_392(-1, intArg1);
    }
    setobj(2, 19713);
    setobj(3, int5);
    setobj(5, int6);
    varbit_8092 = 0;
}
