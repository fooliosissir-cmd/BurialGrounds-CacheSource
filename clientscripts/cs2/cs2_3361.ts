/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3361

function cs2_3361(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_lorebob_01:
            return [7, "Second Wind (Tier 1)", Obj.rand_lorebob_01_spell];
        case Obj.rand_lorebob_02:
            return [17, "Second Wind (Tier 2)", Obj.rand_lorebob_02_spell];
        case Obj.rand_lorebob_03:
            return [27, "Second Wind (Tier 3)", Obj.rand_lorebob_03_spell];
        case Obj.rand_lorebob_04:
            return [37, "Second Wind (Tier 4)", Obj.rand_lorebob_04_spell];
        case Obj.rand_lorebob_05:
            return [47, "Second Wind (Tier 5)", Obj.rand_lorebob_05_spell];
        case Obj.rand_lorebob_06:
            return [57, "Second Wind (Tier 6)", Obj.rand_lorebob_06_spell];
        case Obj.rand_lorebob_07:
            return [67, "Second Wind (Tier 7)", Obj.rand_lorebob_07_spell];
        case Obj.rand_lorebob_08:
            return [77, "Second Wind (Tier 8)", Obj.rand_lorebob_08_spell];
        case Obj.rand_lorebob_09:
            return [87, "Second Wind (Tier 9)", Obj.rand_lorebob_09_spell];
        case Obj.rand_lorebob_10:
            return [97, "Second Wind (Tier 10)", Obj.rand_lorebob_10_spell];
        default:
            return [7, "Second Wind (Tier 1)", Obj.rand_lorebob_01_spell];
    }
}
