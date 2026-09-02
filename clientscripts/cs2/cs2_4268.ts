/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4268

function cs2_4268(intArg0: number): void {
    switch (intArg0) {
        case 1:
            ifSetText("Teleport to South Falador", Component.interface_1083.component_1083_85);
            break;
        case 2:
            ifSetText("Repair Rune Pouch", Component.interface_1083.component_1083_85);
            break;
        case 3:
            ifSetText("Teleport to North Ardougne", Component.interface_1083.component_1083_85);
            break;
        case 4:
            ifSetText("Remote Farming", Component.interface_1083.component_1083_85);
            break;
        case 5:
            ifSetText("Spiritualise Food", Component.interface_1083.component_1083_85);
            break;
        case 6:
            ifSetText("Make Leather", Component.interface_1083.component_1083_85);
            break;
        case 7:
            ifSetText("Disruption Shield", Component.interface_1083.component_1083_85);
            break;
        case 8:
            ifSetText("Vengeance Group", Component.interface_1083.component_1083_85);
            break;
        case 9:
            ifSetText("Let it Rain Seeds!", Component.interface_1083.component_1083_85);
            break;
        case 10:
            ifSetText("Gimme Herbs!", Component.interface_1083.component_1083_85);
            break;
        case 11:
            ifSetText("Vial My Herbs!", Component.interface_1083.component_1083_85);
            break;
        case 12:
            ifSetText("Turn Lunar Lumber into Runes!", Component.interface_1083.component_1083_85);
            break;
        case 13:
            ifSetText("Reduce the Fish I Burn!", Component.interface_1083.component_1083_85);
            break;
        case 14:
            ifSetText("More Planks, Please!", Component.interface_1083.component_1083_85);
            break;
        case 15:
            ifSetText("Teleport to Trollheim", Component.interface_1083.component_1083_85);
            break;
        case 16:
            ifSetText("Teleport Group to Trollheim", Component.interface_1083.component_1083_85);
            break;
        case 17:
            ifSetText("Borrowed Power", Component.interface_1083.component_1083_85);
            break;
        case 18:
            ifSetText("Let it Rain Awesome Seeds!", Component.interface_1083.component_1083_85);
            break;
        case 19:
            ifSetText("I'd Like a New Patch!", Component.interface_1083.component_1083_85);
            break;
        case 20:
            ifSetText("Give Me An Arcane Capacitor!", Component.interface_1083.component_1083_85);
            break;
        case 21:
            ifSetText("Protect A Patch For Me!", Component.interface_1083.component_1083_85);
            break;
    }

    switch (intArg0) {
        case 1:
            ifSetText("Teleports you to the south of Falador.", Component.interface_1083.component_1083_87);
            break;
        case 2:
            ifSetText("Use on a degraded pouch to repair it and improve its strength, so it takes longer to degrade.", Component.interface_1083.component_1083_87);
            break;
        case 3:
            ifSetText("Teleports you to the north of Ardougne.", Component.interface_1083.component_1083_87);
            break;
        case 4:
            ifSetText("View the status of farming patches and cure any disease from a distance.", Component.interface_1083.component_1083_87);
            break;
        case 5:
            ifSetText("Cast on ordinary food and feed it to your familiar to heal it, boost its combat stats and extend its timer.", Component.interface_1083.component_1083_87);
            break;
        case 6:
            ifSetText("Cast on hides to turn them into leather. This will convert 5 hides at a time.", Component.interface_1083.component_1083_87);
            break;
        case 7:
            ifSetText("Nullifies the next hit you receive from another player. This works against players only, not against monsters.", Component.interface_1083.component_1083_87);
            break;
        case 8:
            ifSetText("When cast, those nearby get to rebound damage.", Component.interface_1083.component_1083_87);
            break;
        case 9:
            ifSetText("Seeds will appear on the floor. Be quick to pick up the ones you want.", Component.interface_1083.component_1083_87);
            break;
        case 10:
            ifSetText("Puts a load of grimy herbs in your inventory.", Component.interface_1083.component_1083_87);
            break;
        case 11:
            ifSetText("Takes all the clean herbs in your inventory and turns them into unfinished potions of that herb type. This will work on noted herbs of up to 50 at a time.", Component.interface_1083.component_1083_87);
            break;
        case 12:
            ifSetText("Turns all lunar lumber in your inventory into runes. You'll need a full inventory of logs.", Component.interface_1083.component_1083_87);
            break;
        case 13:
            ifSetText("For the next thirty minutes, you'll find that you burn fewer fish.", Component.interface_1083.component_1083_87);
            break;
        case 14:
            ifSetText("This will be active for the next twenty minutes: when casting Plank Make, you will have a chance of receiving additional planks.", Component.interface_1083.component_1083_87);
            break;
        case 15:
            ifSetText("Teleports you to the farming patch in Trollheim.", Component.interface_1083.component_1083_87);
            break;
        case 16:
            ifSetText("Teleports you and those nearby to the farming patch in Trollheim.", Component.interface_1083.component_1083_87);
            break;
        case 17:
            ifSetText("Allows you to store and cast certain spells from the standard spellbook." + "<br>" + "After learning this last spell, your current produce will be reduced by " + tostring_spacer(enumOp(type_int, type_int, Enum.enum_3674, 10) * 10, ",") + " and the remainder can be spent on wishes.", Component.interface_1083.component_1083_87);
            break;
        case 18:
            ifSetText("High value seeds will appear on the floor. Be quick to pick up the ones you want.", Component.interface_1083.component_1083_87);
            break;
        case 19:
            ifSetText("A new allotment patch will become available nearby. It will vanish if the patch is cleared.", Component.interface_1083.component_1083_87);
            break;
        case 20:
            ifSetText("You'll be given an Arcane Capacitor, for use with the Borrowed Power spell.", Component.interface_1083.component_1083_87);
            break;
        case 21:
            if (varbit_lunarfm_spells_unlocked < 11) {
                ifSetText("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. ", Component.interface_1083.component_1083_87);
            } else {
                ifSetText("Gives you a scroll which, when used on a fruit tree or tree patch, will protect that patch for the next 10 growths in that patch. You will need to use the scroll on a patch that is currently growing something and you must have the produce in your inventory that would cover the cost of protecting that patch normally.", Component.interface_1083.component_1083_87);
            }
            break;
    }

    switch (intArg0) {
        case 1:
            if (varbit_lunarfm_spells_unlocked < 1) {
                ifSetText("Requires level 72 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 2:
            if (varbit_lunarfm_spells_unlocked < 2) {
                ifSetText("Requires level 75 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 3:
            if (varbit_lunarfm_spells_unlocked < 3) {
                ifSetText("Requires level 76 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 4:
            if (varbit_lunarfm_spells_unlocked < 4) {
                ifSetText("Requires level 78 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 5:
            if (varbit_lunarfm_spells_unlocked < 5) {
                ifSetText("Requires level 80 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 6:
            if (varbit_lunarfm_spells_unlocked < 6) {
                ifSetText("Requires level 83 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 7:
            if (varbit_lunarfm_spells_unlocked < 7) {
                ifSetText("Requires level 90 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 8:
            if (varbit_lunarfm_spells_unlocked < 8) {
                ifSetText("Requires level 95 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 15:
            if (varbit_lunarfm_spells_unlocked < 9) {
                ifSetText("Requires level 92 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 16:
            if (varbit_lunarfm_spells_unlocked < 10) {
                ifSetText("Requires level 93 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        case 17:
            if (varbit_lunarfm_spells_unlocked < 11) {
                ifSetText("Requires level 99 Magic to cast. You must unlock the spells in order.", Component.interface_1083.component_1083_89);
            } else {
                ifSetText("Learned!", Component.interface_1083.component_1083_89);
            }
            break;
        default:
            if (varbit_lunarfm_spells_unlocked < 11) {
                ifSetText("You must unlock all the spells before you can use wishes.", Component.interface_1083.component_1083_89);
            }
            break;
    }

    if (intArg0 < 9 || (intArg0 > 14 && intArg0 < 18)) {
        ifSetHide(false, Component.interface_1083.component_1083_90);
    } else {
        ifSetHide(true, Component.interface_1083.component_1083_90);
    }

    switch (intArg0) {
        case 1:
            ifSetGraphic(Graphic.graphic_4585, Component.interface_1083.component_1083_93);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_4586, Component.interface_1083.component_1083_93);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_4587, Component.interface_1083.component_1083_93);
            break;
        case 4:
            ifSetGraphic(Graphic.graphic_4588, Component.interface_1083.component_1083_93);
            break;
        case 5:
            ifSetGraphic(Graphic.graphic_4590, Component.interface_1083.component_1083_93);
            break;
        case 6:
            ifSetGraphic(Graphic.graphic_4589, Component.interface_1083.component_1083_93);
            break;
        case 7:
            ifSetGraphic(Graphic.graphic_4591, Component.interface_1083.component_1083_93);
            break;
        case 8:
            ifSetGraphic(Graphic.graphic_4592, Component.interface_1083.component_1083_93);
            break;
        case 15:
            ifSetGraphic(Graphic.graphic_7685, Component.interface_1083.component_1083_93);
            break;
        case 16:
            ifSetGraphic(Graphic.graphic_7686, Component.interface_1083.component_1083_93);
            break;
        case 17:
            ifSetGraphic(Graphic.graphic_7687, Component.interface_1083.component_1083_93);
            break;
    }
    ifSetHide(true, Component.interface_1083.component_1083_94);
    ifSetHide(true, Component.interface_1083.component_1083_95);
    ifSetHide(true, Component.interface_1083.component_1083_96);
    ifSetHide(true, Component.interface_1083.component_1083_97);
    ifSetHide(true, Component.interface_1083.component_1083_98);
    ifSetHide(true, Component.interface_1083.component_1083_99);
    ifSetHide(true, Component.interface_1083.component_1083_100);
    ifSetHide(true, Component.interface_1083.component_1083_101);
    ifSetHide(true, Component.interface_1083.component_1083_102);
    ifSetHide(true, Component.interface_1083.component_1083_103);
    ifSetHide(true, Component.interface_1083.component_1083_104);
    ifSetHide(true, Component.interface_1083.component_1083_105);
    ifSetHide(true, Component.interface_1083.component_1083_106);
    ifSetHide(true, Component.interface_1083.component_1083_107);
    ifSetHide(true, Component.interface_1083.component_1083_460);
    ifSetHide(true, Component.interface_1083.component_1083_470);
    ifSetHide(true, Component.interface_1083.component_1083_480);
    ifSetHide(true, Component.interface_1083.component_1083_518);
    ifSetHide(true, Component.interface_1083.component_1083_528);
    ifSetHide(true, Component.interface_1083.component_1083_538);
    ifSetHide(true, Component.interface_1083.component_1083_558);

    switch (intArg0) {
        case 1:
            if (varbit_lunarfm_spells_unlocked < 1) {
                ifSetHide(false, Component.interface_1083.component_1083_94);
            }
            break;
        case 2:
            if (varbit_lunarfm_spells_unlocked < 2) {
                ifSetHide(false, Component.interface_1083.component_1083_95);
            }
            break;
        case 3:
            if (varbit_lunarfm_spells_unlocked < 3) {
                ifSetHide(false, Component.interface_1083.component_1083_96);
            }
            break;
        case 4:
            if (varbit_lunarfm_spells_unlocked < 4) {
                ifSetHide(false, Component.interface_1083.component_1083_97);
            }
            break;
        case 5:
            if (varbit_lunarfm_spells_unlocked < 5) {
                ifSetHide(false, Component.interface_1083.component_1083_98);
            }
            break;
        case 6:
            if (varbit_lunarfm_spells_unlocked < 6) {
                ifSetHide(false, Component.interface_1083.component_1083_99);
            }
            break;
        case 7:
            if (varbit_lunarfm_spells_unlocked < 7) {
                ifSetHide(false, Component.interface_1083.component_1083_100);
            }
            break;
        case 8:
            if (varbit_lunarfm_spells_unlocked < 8) {
                ifSetHide(false, Component.interface_1083.component_1083_101);
            }
            break;
        case 9:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_102);
            }
            break;
        case 10:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_103);
            }
            break;
        case 11:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_104);
            }
            break;
        case 12:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_105);
            }
            break;
        case 13:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_106);
            }
            break;
        case 14:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_107);
            }
            break;
        case 15:
            if (varbit_lunarfm_spells_unlocked < 9) {
                ifSetHide(false, Component.interface_1083.component_1083_460);
            }
            break;
        case 16:
            if (varbit_lunarfm_spells_unlocked < 10) {
                ifSetHide(false, Component.interface_1083.component_1083_470);
            }
            break;
        case 17:
            if (varbit_lunarfm_spells_unlocked < 11) {
                ifSetHide(false, Component.interface_1083.component_1083_480);
            }
            break;
        case 18:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_518);
            }
            break;
        case 19:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_528);
            }
            break;
        case 20:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_538);
            }
            break;
        case 21:
            if (varbit_lunarfm_spells_unlocked > 10) {
                ifSetHide(false, Component.interface_1083.component_1083_558);
            }
            break;
    }
    ifSetHide(true, Component.interface_1083.component_1083_385);
    ifSetHide(true, Component.interface_1083.component_1083_72);
    ifSetHide(true, Component.interface_1083.component_1083_67);
    ifSetHide(true, Component.interface_1083.component_1083_62);
    ifSetHide(true, Component.interface_1083.component_1083_57);
    ifSetHide(true, Component.interface_1083.component_1083_52);
    ifSetHide(true, Component.interface_1083.component_1083_47);
    ifSetHide(true, Component.interface_1083.component_1083_42);
    ifSetHide(true, Component.interface_1083.component_1083_37);
    ifSetHide(true, Component.interface_1083.component_1083_32);
    ifSetHide(true, Component.interface_1083.component_1083_27);
    ifSetHide(true, Component.interface_1083.component_1083_22);
    ifSetHide(true, Component.interface_1083.component_1083_17);
    ifSetHide(true, Component.interface_1083.component_1083_12);
    ifSetHide(true, Component.interface_1083.component_1083_431);
    ifSetHide(true, Component.interface_1083.component_1083_442);
    ifSetHide(true, Component.interface_1083.component_1083_453);
    ifSetHide(true, Component.interface_1083.component_1083_493);
    ifSetHide(true, Component.interface_1083.component_1083_502);
    ifSetHide(true, Component.interface_1083.component_1083_512);
    ifSetHide(true, Component.interface_1083.component_1083_552);
}
