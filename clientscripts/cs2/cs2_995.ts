/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_995

function cs2_995(intArg0: number): [string, number] {
    switch (intArg0) {
        case 0:
            return ["Normal Spells", 0];
        case 1:
            return ["Ancient Magicks", 1];
        case 2:
            return ["Lunar Spells", 1];
        case 3:
            return ["Enchantment", 0];
        case 4:
            return ["Armour", 0];
        case 5:
            return ["Weapons", 0];
        case 6:
            return ["Books and wands", 0];
        case 7:
            return ["Salamanders", 1];
        case 8:
            return ["Minigames", 0];
        case 9:
            return ["Dungeoneering", 0];
        case 10:
            return ["Milestones", 0];
        default:
            return ["", -1];
    }
}
