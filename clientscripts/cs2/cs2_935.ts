/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_935

function cs2_935(intArg0: obj): number {
    switch (ocParam(intArg0, Param.use_requires_special)) {
        case 1:
            if (varp_tbwt_lubufu < 10) {
                return 0;
            }
            break;
        case 2:
            if (varbit_dsd_quest < 10) {
                return 0;
            }
            break;
        default:
            return 1;
    }
    return -1;
}
