/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_775

function cs2_775(): [number, string, obj] {
    switch (varp_follower_obj) {
        case Obj.lore_minotaur:
            return [36, "Bronze Bull Rush", Obj.obj_12461];
        case Obj.lore_minotaur_2:
            return [46, "Iron Bull Rush", Obj.obj_12462];
        case Obj.lore_minotaur_3:
            return [56, "Steel Bull Rush", Obj.obj_12463];
        case Obj.lore_minotaur_4:
            return [66, "Mithril Bull Rush", Obj.obj_12464];
        case Obj.lore_minotaur_5:
            return [76, "Adamant Bull Rush", Obj.obj_12465];
        case Obj.lore_minotaur_6:
            return [86, "Rune Bull Rush", Obj.obj_12466];
        default:
            return [36, "Bronze Bull Rush", Obj.obj_12461];
    }
}
