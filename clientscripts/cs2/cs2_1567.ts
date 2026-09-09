/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1567

function cs2_1567(intArg0: number, intArg1: number, intArg2: number): [obj, graphic, string, string] {
    let int3: struct = skillguide_tab_row(intArg0, intArg1, intArg2);
    if (int3 < 0) {
        return [int3, -1, "", ""];
    }
    return [structParam(int3, Param.skillguide_level), structParam(int3, Param.param_2214), skillguide_legacy_name(int3), skillguide_legacy_unlock(int3)];
}
