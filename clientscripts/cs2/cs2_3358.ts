/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3358

function cs2_3358(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_loreran_01:
            return [2, "Poisonous Shot (Tier 1)", Obj.rand_loreran_01_spell];
        case Obj.rand_loreran_02:
            return [12, "Poisonous Shot (Tier 2)", Obj.rand_loreran_02_spell];
        case Obj.rand_loreran_03:
            return [22, "Poisonous Shot (Tier 3)", Obj.rand_loreran_03_spell];
        case Obj.rand_loreran_04:
            return [32, "Poisonous Shot (Tier 4)", Obj.rand_loreran_04_spell];
        case Obj.rand_loreran_05:
            return [42, "Poisonous Shot (Tier 5)", Obj.rand_loreran_05_spell];
        case Obj.rand_loreran_06:
            return [52, "Poisonous Shot (Tier 6)", Obj.rand_loreran_06_spell];
        case Obj.rand_loreran_07:
            return [62, "Poisonous Shot (Tier 7)", Obj.rand_loreran_07_spell];
        case Obj.rand_loreran_08:
            return [72, "Poisonous Shot (Tier 8)", Obj.rand_loreran_08_spell];
        case Obj.rand_loreran_09:
            return [82, "Poisonous Shot (Tier 9)", Obj.rand_loreran_09_spell];
        case Obj.rand_loreran_10:
            return [92, "Poisonous Shot (Tier 10)", Obj.rand_loreran_10_spell];
        default:
            return [2, "Poisonous Shot (Tier 1)", Obj.rand_loreran_01_spell];
    }
}
