/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6103

function cs2_6103(): void {
    ifSetText(varcstr_362, Component.interface_1265.component_1265_40);
    let str0: string = "";
    let str1: string = "";

    switch (varc_1876) {
        case 0:
        case 1:
        case 3:
        case 4:
        case 5:
        case 6:
            str0 = "This is a piece of apparel.";
            break;
        case 2:
        case 7:
            str0 = "This is a piece of jewellery.";
            break;
        case 9:
            str0 = "This is a shield.";
            break;
        case 11:
        case 14:
            str0 = "This is a melee weapon.";
            break;
        case 12:
        case 15:
            str0 = "This is a ranged weapon.";
            break;
        case 13:
            str0 = "This is a weapon for mages.";
            break;
        case 8:
            str0 = "This is ammunition for a ranged weapon.";
            break;
        case 60:
            str0 = "This is an aura focus.";
            break;
        case 30:
        case 31:
        case 32:
            str0 = "This is a tool.";
            break;
        case 33:
        case 34:
            str0 = "This is a piece of food.";
            break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
            str0 = "This is a usable item.";
            break;
        case 36:
            str0 = "This is a magic rune.";
            break;
    }
    ifSetText(str0, Component.interface_1265.component_1265_43);

    switch (varc_1876) {
        case 0:
            str1 = "It is worn on the head.";
            break;
        case 1:
            str1 = "It is worn on the back.";
            break;
        case 3:
            str1 = "It is worn on the torso.";
            break;
        case 4:
            str1 = "It is worn on the legs.";
            break;
        case 5:
            str1 = "It is worn on the hands.";
            break;
        case 6:
            str1 = "It is worn on the feet.";
            break;
        case 9:
            str1 = "It is held in the left hand.";
            break;
        case 11:
        case 12:
        case 13:
            str1 = "It is wielded in the right hand.";
            break;
        case 14:
        case 15:
            str1 = "It is wielded in both hands.";
            break;
        case 2:
            str1 = "It is worn around the neck.";
            break;
        case 7:
            str1 = "It is worn on the hand.";
            break;
        case 8:
            str1 = "It is carried in the quiver.";
            break;
        case 60:
            str1 = "It imbues you when activated.";
            break;
        case 30:
            str1 = "You can place it in your tool belt to save space.";
            break;
        case 31:
            str1 = "You have one in your tool belt already.";
            break;
        case 34:
            str1 = "It needs cooking to be edible.";
            break;
        case 36:
            str1 = "Runes are needed to cast spells.";
            break;
        case 90:
            str1 = "It is mainly used in combat.";
            break;
        case 91:
            str1 = "It is mainly used in prayer.";
            break;
        case 92:
            str1 = "It is mainly used in agility.";
            break;
        case 93:
            str1 = "It is mainly used in herblore.";
            break;
        case 94:
            str1 = "It is mainly used in thieving.";
            break;
        case 95:
            str1 = "It is mainly used in crafting.";
            break;
        case 96:
            str1 = "It is mainly used in runecrafting.";
            break;
        case 97:
            str1 = "It is mainly used in mining.";
            break;
        case 98:
            str1 = "It is mainly used in smithing.";
            break;
        case 99:
            str1 = "It is mainly used in fishing.";
            break;
        case 100:
            str1 = "It is mainly used in cooking.";
            break;
        case 101:
            str1 = "It is mainly used in firemaking.";
            break;
        case 102:
            str1 = "It is mainly used in woodcutting.";
            break;
        case 103:
            str1 = "It is mainly used in fletching.";
            break;
        case 104:
            str1 = "It is mainly used in slaying.";
            break;
        case 105:
            str1 = "It is mainly used in farming.";
            break;
        case 106:
            str1 = "It is mainly used in construction.";
            break;
        case 107:
            str1 = "It is mainly used in hunting.";
            break;
        case 108:
            str1 = "It is mainly used in summoning.";
            break;
        case 109:
            str1 = "It is mainly used in dungeoneering.";
            break;
    }
    ifSetText(str1, Component.interface_1265.component_1265_44);

    if ((ocMembers(varp_2562) == 0 || mapMembers() == 1) && ((varc_1876 >= 0 && varc_1876 < 30) || varc_1876 == 32 || varp_2562 == Obj.bronze_pickaxe || varp_2562 == Obj.bronze_axe)) {
        ifSetHide(true, Component.interface_1265.component_1265_172);
    } else {
        ifSetHide(false, Component.interface_1265.component_1265_172);
    }
}
