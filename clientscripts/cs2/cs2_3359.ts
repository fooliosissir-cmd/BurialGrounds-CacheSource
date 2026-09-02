/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3359

function cs2_3359(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_loremag_01:
            return [3, "Snaring Wave (Tier 1)", Obj.rand_loremag_01_spell];
        case Obj.rand_loremag_02:
            return [13, "Snaring Wave (Tier 2)", Obj.rand_loremag_02_spell];
        case Obj.rand_loremag_03:
            return [23, "Snaring Wave (Tier 3)", Obj.rand_loremag_03_spell];
        case Obj.rand_loremag_04:
            return [33, "Snaring Wave (Tier 4)", Obj.rand_loremag_04_spell];
        case Obj.rand_loremag_05:
            return [43, "Snaring Wave (Tier 5)", Obj.rand_loremag_05_spell];
        case Obj.rand_loremag_06:
            return [53, "Snaring Wave (Tier 6)", Obj.rand_loremag_06_spell];
        case Obj.rand_loremag_07:
            return [63, "Snaring Wave (Tier 7)", Obj.rand_loremag_07_spell];
        case Obj.rand_loremag_08:
            return [73, "Snaring Wave (Tier 8)", Obj.rand_loremag_08_spell];
        case Obj.rand_loremag_09:
            return [83, "Snaring Wave (Tier 9)", Obj.rand_loremag_09_spell];
        case Obj.rand_loremag_10:
            return [93, "Snaring Wave (Tier 10)", Obj.rand_loremag_10_spell];
        default:
            return [3, "Snaring Wave (Tier 1)", Obj.rand_loremag_01_spell];
    }
}
