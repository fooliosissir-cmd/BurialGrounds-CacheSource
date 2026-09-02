/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3362

function cs2_3362(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_loreheal_01:
            return [9, "Glimmer of Light (Tier 1)", Obj.rand_loreheal_01_spell];
        case Obj.rand_loreheal_02:
            return [19, "Glimmer of Light (Tier 2)", Obj.rand_loreheal_02_spell];
        case Obj.rand_loreheal_03:
            return [29, "Glimmer of Light (Tier 3)", Obj.rand_loreheal_03_spell];
        case Obj.rand_loreheal_04:
            return [39, "Glimmer of Light (Tier 4)", Obj.rand_loreheal_04_spell];
        case Obj.rand_loreheal_05:
            return [49, "Glimmer of Light (Tier 5)", Obj.rand_loreheal_05_spell];
        case Obj.rand_loreheal_06:
            return [59, "Glimmer of Light (Tier 6)", Obj.rand_loreheal_06_spell];
        case Obj.rand_loreheal_07:
            return [69, "Glimmer of Light (Tier 7)", Obj.rand_loreheal_07_spell];
        case Obj.rand_loreheal_08:
            return [79, "Glimmer of Light (Tier 8)", Obj.rand_loreheal_08_spell];
        case Obj.rand_loreheal_09:
            return [89, "Glimmer of Light (Tier 9)", Obj.rand_loreheal_09_spell];
        case Obj.rand_loreheal_10:
            return [99, "Glimmer of Light (Tier 10)", Obj.rand_loreheal_10_spell];
        default:
            return [9, "Glimmer of Light (Tier 1)", Obj.rand_loreheal_01_spell];
    }
}
