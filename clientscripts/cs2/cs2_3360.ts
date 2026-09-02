/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3360

function cs2_3360(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.rand_loreskill_01:
            return [5, "Aptitude (Tier 1)", Obj.rand_loreskill_01_spell];
        case Obj.rand_loreskill_02:
            return [15, "Aptitude (Tier 2)", Obj.rand_loreskill_02_spell];
        case Obj.rand_loreskill_03:
            return [25, "Aptitude (Tier 3)", Obj.rand_loreskill_03_spell];
        case Obj.rand_loreskill_04:
            return [35, "Aptitude (Tier 4)", Obj.rand_loreskill_04_spell];
        case Obj.rand_loreskill_05:
            return [45, "Aptitude (Tier 5)", Obj.rand_loreskill_05_spell];
        case Obj.rand_loreskill_06:
            return [55, "Aptitude (Tier 6)", Obj.rand_loreskill_06_spell];
        case Obj.rand_loreskill_07:
            return [65, "Aptitude (Tier 7)", Obj.rand_loreskill_07_spell];
        case Obj.rand_loreskill_08:
            return [75, "Aptitude (Tier 8)", Obj.rand_loreskill_08_spell];
        case Obj.rand_loreskill_09:
            return [85, "Aptitude (Tier 9)", Obj.rand_loreskill_09_spell];
        case Obj.rand_loreskill_10:
            return [95, "Aptitude (Tier 10)", Obj.rand_loreskill_10_spell];
        default:
            return [5, "Aptitude (Tier 1)", Obj.rand_loreskill_01_spell];
    }
}
