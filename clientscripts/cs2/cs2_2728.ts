/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2728

function cs2_2728(): number {
    if (skilltotal() > 100) {
        return 0;
    }
    let int0: number = enumGetoutputcount(Enum.int_to_stat);

    while (int0 > 0) {
        if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, int0)) > 20) {
            return 0;
        }
        int0 = int0 - 1;
    }
    return 1;
}
