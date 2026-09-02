/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_771

function cs2_771(intArg0: obj): number {
    switch (intArg0) {
        case Obj.village_snake_hide:
            return invTotal(Inv.inv, Obj.village_snake_hide) + invTotal(Inv.inv, Obj.templetrek_swamp_snake_hide);
        case Obj.enakh_granite_tiny:
            return invTotal(Inv.inv, Obj.enakh_granite_tiny) + invTotal(Inv.inv, Obj.enakh_granite_small) + invTotal(Inv.inv, Obj.enakh_granite_medium);
        case Obj.flowers_waterfall_quest_red:
            return invTotal(Inv.inv, Obj.flowers_waterfall_quest_red) + invTotal(Inv.inv, Obj.flowers_waterfall_quest) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_blue) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_yellow) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_purple) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_orange) + invTotal(Inv.inv, Obj.flowers_waterfall_quest_mixed);
        default:
            return inv_total_available(Inv.inv, intArg0);
    }
}
