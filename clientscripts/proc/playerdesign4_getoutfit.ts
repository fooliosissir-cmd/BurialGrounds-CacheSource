/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,playerdesign4_getoutfit]

function playerdesign4_getoutfit(intArg0: number, intArg1: struct, intArg2: boolean): struct {
    switch (intArg0) {
        case 0:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_0);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_0);
        case 1:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_1);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_1);
        case 2:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_2);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_2);
        case 3:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_3);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_3);
        case 4:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_4);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_4);
        case 5:
            if (intArg2 == true) {
                return structParam(intArg1, Param.playerdesign4_female_outfit_5);
            }
            return structParam(intArg1, Param.playerdesign4_male_outfit_5);
    }
    return -1;
}
