/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3357

function cs2_3357(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_loremel_01:
            return [1, "Sundering Strike (Tier 1)", Obj.rand_loremel_01_spell];
        case Obj.rand_loremel_02:
            return [11, "Sundering Strike (Tier 2)", Obj.rand_loremel_02_spell];
        case Obj.rand_loremel_03:
            return [21, "Sundering Strike (Tier 3)", Obj.rand_loremel_03_spell];
        case Obj.rand_loremel_04:
            return [31, "Sundering Strike (Tier 4)", Obj.rand_loremel_04_spell];
        case Obj.rand_loremel_05:
            return [41, "Sundering Strike (Tier 5)", Obj.rand_loremel_05_spell];
        case Obj.rand_loremel_06:
            return [51, "Sundering Strike (Tier 6)", Obj.rand_loremel_06_spell];
        case Obj.rand_loremel_07:
            return [61, "Sundering Strike (Tier 7)", Obj.rand_loremel_07_spell];
        case Obj.rand_loremel_08:
            return [71, "Sundering Strike (Tier 8)", Obj.rand_loremel_08_spell];
        case Obj.rand_loremel_09:
            return [81, "Sundering Strike (Tier 9)", Obj.rand_loremel_09_spell];
        case Obj.rand_loremel_10:
            return [91, "Sundering Strike (Tier 10)", Obj.rand_loremel_10_spell];
        default:
            return [1, "Sundering Strike (Tier 1)", Obj.rand_loremel_01_spell];
    }
}
