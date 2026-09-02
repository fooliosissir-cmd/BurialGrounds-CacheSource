/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4618

function cs2_4618(intArg0: number, intArg1: number): [number, number] {
    if (intArg0 == 0) {
        return [0, 0];
    }
    let int2: number = intArg0;
    let int3: number = intArg1;
    let int4: number = 0;

    if (loadClanSettingVarbit<5>() == 1) {
        int4 = max(loadClanSettingVar(), 0 - loadClanSettingVar());
    }
    int3 = intArg1 / 10 * 60 + intArg1 % 10 * 10;

    if (loadClanSettingVarbit<5>() == 1) {
        if (loadClanSettingVar() < 0) {
            if (int3 + int4 >= 1440) {
                int2 = int2 + 1;
                int3 = int3 + int4 - 1440;
            } else {
                int3 = int3 + int4;
            }
        } else if (int3 - int4 < 0) {
            int2 = int2 - 1;
            int3 = 1440 + intArg1 - int4;
        } else {
            int3 = int3 - int4;
        }
    }
    return [int2, int3];
}
