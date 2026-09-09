/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_14

function cs2_14(intArg0: number, intArg1: number, intArg2: number): [obj, obj, string, string] {
    let int3: struct = skillguide_tab_row(intArg0, intArg1, intArg2);
    if (int3 < 0) {
        return [int3, -1, "", ""];
    }
    return [structParam(int3, Param.skillguide_level), structParam(int3, Param.skillguide_item), skillguide_legacy_name(int3), skillguide_legacy_unlock(int3)];
}
