/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_row_in_tab]

function skillguide_row_in_tab(intArg0: struct, intArg1: number): number {
    if (intArg1 <= 0 || structParam(intArg0, Param.skillguide_filter) == intArg1) {
        return 1;
    }
    if (intArg1 == 1 && structParam(intArg0, Param.skillguide_is_milestone) == 1) {
        return 1;
    }
    return 0;
}
