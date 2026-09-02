/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1010

function cs2_1010(intArg0: number, intArg1: number): [obj, obj, string, string] {
    switch (intArg0) {
        case 0:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.shortbow, "Standard bow" + "<br>" + " Ammo: Arrows up to iron", "You can now use " + "<col=000080>" + "standard bows" + "</col>" + "."];
                case 1:
                    return [Obj.mcannonbook, Obj.oak_shortbow, "Oak bow" + "<br>" + " Ammo: Arrows up to steel", "You can now use " + "<col=000080>" + "oak bows" + "</col>" + "."];
                case 2:
                    return [Obj.whitecog, Obj.willow_shortbow, "Willow bow" + "<br>" + " Ammo: Arrows up to mithril", "You can now use " + "<col=000080>" + "willow bows" + "</col>" + "."];
                case 3:
                    return [Obj.bucket_wax, Obj.maple_shortbow, "Maple bow" + "<br>" + " Ammo: Arrows up to adamant", "You can now use " + "<col=000080>" + "maple bows" + "</col>" + "."];
                case 4:
                    return [Obj.bucket_wax, Obj.ogre_bow, "Members: Ogre bow (after Big Chompy Bird Hunting)" + "<br>" + " Ammo: Ogre arrows", "Members now have the Ranged level to use " + "<col=000080>" + "ogre bows" + "</col>" + " (after Big Chompy Bird Hunting)."];
                case 5:
                    return [Obj.bucket_wax, Obj.obj_4827, "Members: Ogre composite bow (after Zogre Flesh Eaters)" + "<br>" + " Ammo: 'Brutal' arrows up to rune", "Members now have the Ranged level to use " + "<col=000080>" + "ogre composite bows" + "</col>" + " (after Zogre Flesh Eaters)."];
                case 6:
                    return [Obj.iron_arrowheads, Obj.yew_shortbow, "Members: Yew bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now use " + "<col=000080>" + "yew bows" + "</col>" + "."];
                case 7:
                    return [Obj.iron_arrowheads, Obj.sc_reward_bow, "Members: Sacred clay bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now wield " + "<col=000080>" + "sacred clay bows" + "</col>" + "."];
                case 8:
                    return [Obj.opal_bolttips, Obj.rand_reward_scoped_maple_longbow, "Maple longbow (focused)" + "<br>" + " Ammo: Arrows up to rune" + "<br>" + " (with 45 Dungeoneering)", "You can now use " + "<col=000080>" + "maple longbows (focused)" + "</col>" + ". (You also need level 45 Dungeoneering.)"];
                case 9:
                    return [Obj.opal_bolttips, Obj.obj_18373, "Gravite shortbow" + "<br>" + " Ammo: Arrows up to rune" + "<br>" + " (with 45 Dungeoneering)", "You can now wield " + "<col=000080>" + "gravite shortbows" + "</col>" + ". (You also need level 45 Dungeoneering.)"];
                case 10:
                    return [Obj.obj_50, Obj.magic_shortbow, "Members: Magic bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now use " + "<col=000080>" + "magic bows" + "</col>" + "."];
                case 11:
                    return [Obj.obj_50, Obj.daganoth_cave_magic_shortbow, "Members: Seercull" + "<br>" + " Ammo: Arrows up to rune", "Members can now use the " + "<col=000080>" + "Seercull" + "</col>" + "."];
                case 12:
                    return [Obj.obj_55, Obj.rand_reward_scoped_magic_longbow, "Members: Magic longbow (focused)" + "<br>" + " Ammo: Arrows up to rune" + "<br>" + " (with 45 Dungeoneering)", "Members can now use " + "<col=000080>" + "magic longbows (focused)" + "</col>" + ". (They also need level 45 Dungeoneering.)"];
                case 13:
                    return [Obj.obj_55, Obj.trail_saradomin_godbow, "Members: Saradomin bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now wield " + "<col=000080>" + "Saradomin bows" + "</col>" + "."];
                case 14:
                    return [Obj.obj_55, Obj.trail_guthix_godbow, "Members: Guthix bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now wield " + "<col=000080>" + "Guthix bows" + "</col>" + "."];
                case 15:
                    return [Obj.obj_55, Obj.trail_zamorak_godbow, "Members: Zamorak bow" + "<br>" + " Ammo: Arrows up to rune", "Members can now wield " + "<col=000080>" + "Zamorak bows" + "</col>" + "."];
                case 16:
                    return [Obj.obj_60, Obj.darkbow, "Members: Dark bow" + "<br>" + " Ammo: Arrows up to dragon", "Members can now use " + "<col=000080>" + "dark bows" + "</col>" + "."];
                case 17:
                    return [Obj.obj_70, Obj.obj_4212, "Members: Crystal bow (after Roving Elves and with 50 Agility)" + "<br>" + " Ammo: None", "Members now have the Ranged level to use " + "<col=000080>" + "crystal bows" + "</col>" + " (after Roving Elves, with level 50 Agility)."];
                case 18:
                    return [Obj.obj_80, Obj.godwars2_zaryte_bow_100, "Members: Zaryte bow" + "<br>" + " Ammo: None", "Members now have the Ranged level to use " + "<col=000080>" + "Zaryte bows" + "</col>" + "."];
            }
            break;
        case 1:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.bronze_dart, "Members: Bronze dart", "Members can now throw " + "<col=000080>" + "bronze darts" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.bronze_javelin, "Members: Bronze javelin", "Members can now throw " + "<col=000080>" + "bronze javelins" + "</col>" + "."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.obj_800, "Members: Bronze throwing axe", "Members can now throw " + "<col=000080>" + "bronze throwing axes" + "</col>" + "."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.bronze_knife, "Members: Bronze throwing knife", "Members can now throw " + "<col=000080>" + "bronze throwing knives" + "</col>" + "."];
                case 4:
                    return [Obj.mcannontoolkit, Obj.iron_dart, "Members: Iron dart", "Members can now throw " + "<col=000080>" + "iron darts" + "</col>" + "."];
                case 5:
                    return [Obj.mcannontoolkit, Obj.iron_javelin, "Members: Iron javelin", "Members can now throw " + "<col=000080>" + "iron javelins" + "</col>" + "."];
                case 6:
                    return [Obj.mcannontoolkit, Obj.obj_801, "Members: Iron throwing axe", "Members can now throw " + "<col=000080>" + "iron throwing axes" + "</col>" + "."];
                case 7:
                    return [Obj.mcannontoolkit, Obj.iron_knife, "Members: Iron throwing knife", "Members can now throw " + "<col=000080>" + "iron throwing knives" + "</col>" + "."];
                case 8:
                    return [Obj.mcannonbook, Obj.steel_dart, "Members: Steel dart", "Members can now throw " + "<col=000080>" + "steel darts" + "</col>" + "."];
                case 9:
                    return [Obj.mcannonbook, Obj.steel_javelin, "Members: Steel javelin", "Members can now throw " + "<col=000080>" + "steel javelins" + "</col>" + "."];
                case 10:
                    return [Obj.mcannonbook, Obj.obj_802, "Members: Steel throwing axe", "Members can now throw " + "<col=000080>" + "steel throwing axes" + "</col>" + "."];
                case 11:
                    return [Obj.mcannonbook, Obj.steel_knife, "Members: Steel throwing knife", "Members can now throw " + "<col=000080>" + "steel throwing knives" + "</col>" + "."];
                case 12:
                    return [Obj.twpart3, Obj.black_dart, "Members: Black dart", "Members can now throw " + "<col=000080>" + "black darts" + "</col>" + "."];
                case 13:
                    return [Obj.twpart3, Obj.black_knife, "Members: Black throwing knife", "Members can now throw " + "<col=000080>" + "black throwing knives" + "</col>" + "."];
                case 14:
                    return [Obj.whitecog, Obj.mithril_dart, "Members: Mithril dart", "Members can now throw " + "<col=000080>" + "mithril darts" + "</col>" + "."];
                case 15:
                    return [Obj.whitecog, Obj.mithril_javelin, "Members: Mithril javelin", "Members can now throw " + "<col=000080>" + "mithril javelins" + "</col>" + "."];
                case 16:
                    return [Obj.whitecog, Obj.obj_803, "Members: Mithril throwing axe", "Members can now throw " + "<col=000080>" + "mithril throwing axes" + "</col>" + "."];
                case 17:
                    return [Obj.whitecog, Obj.mithril_knife, "Members: Mithril throwing knife", "Members can now throw " + "<col=000080>" + "mithril throwing knives" + "</col>" + "."];
                case 18:
                    return [Obj.whitecog, Obj.obj_13953, "Members: Corrupt Morrigan's javelin", "Members can now throw " + "<col=000080>" + "corrupt Morrigan's javelin" + "</col>" + "."];
                case 19:
                    return [Obj.whitecog, Obj.obj_13957, "Members: Corrupt Morrigan's throwing axe", "Members can now throw " + "<col=000080>" + "corrupt Morrigan's throwing axe" + "</col>" + "."];
                case 20:
                    return [Obj.bucket_wax, Obj.adamant_dart, "Members: Adamant dart", "Members can now throw " + "<col=000080>" + "adamant darts."];
                case 21:
                    return [Obj.bucket_wax, Obj.adamant_javelin, "Members: Adamant javelin", "Members can now throw " + "<col=000080>" + "adamant javelins" + "</col>" + "."];
                case 22:
                    return [Obj.bucket_wax, Obj.obj_804, "Members: Adamant throwing axe", "Members can now throw " + "<col=000080>" + "adamant throwing axes" + "</col>" + "."];
                case 23:
                    return [Obj.bucket_wax, Obj.adamant_knife, "Members: Adamant throwing knife", "Members can now throw " + "<col=000080>" + "adamant throwing knives" + "</col>" + "."];
                case 24:
                    return [Obj.iron_arrowheads, Obj.rune_dart, "Members: Rune dart", "Members can now throw " + "<col=000080>" + "rune darts" + "</col>" + "."];
                case 25:
                    return [Obj.iron_arrowheads, Obj.rune_javelin, "Members: Rune javelin", "Members can now throw " + "<col=000080>" + "rune javelins" + "</col>" + "."];
                case 26:
                    return [Obj.iron_arrowheads, Obj.obj_805, "Members: Rune throwing axe", "Members can now throw " + "<col=000080>" + "rune throwing axes" + "</col>" + "."];
                case 27:
                    return [Obj.iron_arrowheads, Obj.rune_knife, "Members: Rune throwing knife", "Members can now throw " + "<col=000080>" + "rune throwing knives" + "</col>" + "."];
                case 28:
                    return [Obj.opal_bolttips, Obj.chinchompa_captured, "Members: Chinchompa", "Members can now throw " + "<col=000080>" + "chinchompas" + "</col>" + "."];
                case 29:
                    return [Obj.obj_55, Obj.chinchompa_big_captured, "Members: Red chinchompa", "Members can now throw " + "<col=000080>" + "red chinchompas" + "</col>" + "."];
                case 30:
                    return [Obj.obj_60, Obj.dragon_dart, "Members: Dragon dart", "Members can now throw " + "<col=000080>" + "dragon darts" + "</col>" + "."];
                case 31:
                    return [Obj.obj_60, Obj.tzhaar_throwingring, "Members: Toktz-Xil-Ul", "Members can now throw " + "<col=000080>" + "Toktz-Xil-Ul" + "</col>" + "."];
                case 32:
                    return [Obj.obj_70, Obj.myq5_blisterwood_stake, "Members: Blisterwood stake (after The Branches of Darkmeyer)", "Members can now throw " + "<col=000080>" + "blisterwood stakes" + "</col>" + " (after The Branches of Darkmeyer)."];
                case 33:
                    return [Obj.obj_72, Obj.jaro_sagaie, "Members: Sagaie", "Members can now throw " + "<col=000080>" + "sagaies" + "</col>" + "."];
                case 34:
                    return [Obj.khazard_cellkeys, Obj.jaro_bolas, "Members: Bolas", "Members can now throw " + "<col=000080>" + "bolas" + "</col>" + "."];
                case 35:
                    return [Obj.ice_arrow, Obj.pvpw_javelin, "Members: Morrigan's javelin", "Members can now throw " + "<col=000080>" + "Morrigan's javelin" + "</col>" + "."];
                case 36:
                    return [Obj.ice_arrow, Obj.pvpw_thrownaxe, "Members: Morrigan's throwing axe", "Members can now throw " + "<col=000080>" + "Morrigan's throwing axe" + "</col>" + "."];
            }
            break;
        case 2:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.leather_armour, "Plain leather items", "You can now wear " + "<col=000080>" + "plain leather" + "</col>" + " items."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.obj_1131, "Hard leather body" + "<br>" + " (with 10 Defence)", "You now have the Ranged level required to wear " + "<col=000080>" + "hard leather" + "</col>" + " bodies. (You also need level 10 Defence.)"];
                case 2:
                    return [Obj.mcannontoolkit, Obj.dagganoth_range_feet, "Members: Spined boots", "Members can now wear " + "<col=000080>" + "spined boots" + "</col>" + "."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.dagganoth_range_gloves, "Members: Spined gloves", "Members can now wear " + "<col=000080>" + "spined gloves" + "</col>" + "."];
                case 4:
                    return [Obj.mcannontoolkit, Obj.viking_helmet_range, "Members: Archer helm (after Fremennik Trials and with 45 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "archer helms" + "</col>" + " (after Fremennik Trials and with level 45 Defence)."];
                case 5:
                    return [Obj.whitecog, Obj.studded_body, "Studded leather body" + "<br>" + " (with 20 Defence)", "You now have the Ranged level required to wear " + "<col=000080>" + "studded leather bodies" + "</col>" + ". (You also need level 20 Defence.)"];
                case 6:
                    return [Obj.whitecog, Obj.studded_chaps, "Studded leather chaps", "You can now wear " + "<col=000080>" + "studded leather chaps" + "</col>" + "."];
                case 7:
                    return [Obj.whitecog, Obj.obj_1169, "Coif", "You can now wear " + "<col=000080>" + "coifs" + "</col>" + "."];
                case 8:
                    return [Obj.whitecog, Obj.obj_13950, "Members: Corrupt Morrigan's coif" + "<br>" + " (with 20 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "corrupt Morrigan's coif" + "</col>" + ". (They also need level 20 Defence)"];
                case 9:
                    return [Obj.whitecog, Obj.obj_13944, "Members: Corrupt Morrigan's leather body" + "<br>" + " (with 20 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "corrupt Morrigan's leather body" + "</col>" + ". (They also need level 20 Defence)"];
                case 10:
                    return [Obj.whitecog, Obj.obj_13947, "Members: Corrupt Morrigan's leather chaps" + "<br>" + " (with 20 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "corrupt Morrigan's leather chaps" + "</col>" + ". (They also need level 20 Defence)"];
                case 11:
                    return [Obj.whitecog, Obj.slayer_range_mask, "Members: Focus sight" + "<br>" + " (with 10 Defence)", "Members can now wear " + "<col=000080>" + "focus sights" + "</col>" + "."];
                case 12:
                    return [Obj.whitecog, Obj.slayer_helmet_allcombats, "Members: Full Slayer helmet" + "<br>" + " (after Smoking Kills with 10 Defence, 20 Magic and Strength)", "Members can now wear " + "<col=000080>" + "full slayer helmets" + "</col>" + " (after Smoking Kills with 10 Defence, 20 Magic and Strength)."];
                case 13:
                    return [Obj.red_vine_worm, Obj.dorgesh_frog_armour_top, "Members: Frog-leather body" + "<br>" + " (with 25 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "frog-leather bodies" + "</col>" + ". (They also need level 25 Defence.)"];
                case 14:
                    return [Obj.red_vine_worm, Obj.dorgesh_frog_armour_bottoms, "Members: Frog-leather chaps" + "<br>" + " (with 25 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "frog-leather chaps" + "</col>" + ". (They also need level 25 Defence.)"];
                case 15:
                    return [Obj.red_vine_worm, Obj.dorgesh_frog_armour_shoes, "Members: Frog-leather boots" + "<br>" + " (with 25 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "frog-leather boots" + "</col>" + ". (They also need level 25 Defence.)."];
                case 16:
                    return [Obj.bucket_wax, Obj.snakeskin_body, "Members: Snakeskin body" + "<br>" + " (with 30 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "snakeskin bodies" + "</col>" + ". (They also need level 30 Defence.)"];
                case 17:
                    return [Obj.bucket_wax, Obj.snakeskin_chaps, "Members: Snakeskin chaps" + "<br>" + " (with 30 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "snakeskin chaps" + "</col>" + ". (They also need level 30 Defence.)"];
                case 18:
                    return [Obj.bucket_wax, Obj.snakeskin_vambraces, "Members: Snakeskin vambraces" + "<br>" + " (with 30 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "snakeskin vambraces" + "</col>" + ". (They also need level 30 Defence.)"];
                case 19:
                    return [Obj.bucket_wax, Obj.snakeskin_bandana, "Members: Snakeskin bandana" + "<br>" + " (with 30 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "snakeskin bandanas" + "</col>" + ". (They also need level 30 Defence.)"];
                case 20:
                    return [Obj.bucket_wax, Obj.snakeskin_boots, "Members: Snakeskin boots" + "<br>" + " (with 30 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "snakeskin boots" + "</col>" + ". (They also need level 30 Defence.)"];
                case 21:
                    return [Obj.iron_arrowheads, Obj.boots_ranger, "Members: Ranger boots", "Members can now wear " + "<col=000080>" + "ranger boots" + "</col>" + "."];
                case 22:
                    return [Obj.iron_arrowheads, Obj.obj_2581, "Members: Robin Hood hat", "Members can now wear " + "<col=000080>" + "Robin Hood hats" + "</col>" + "."];
                case 23:
                    return [Obj.iron_arrowheads, Obj.obj_1065, "Green dragonhide vambraces", "You can now wear " + "<col=000080>" + "green dragonhide vambraces" + "</col>" + "."];
                case 24:
                    return [Obj.iron_arrowheads, Obj.obj_1099, "Green dragonhide chaps", "You can now wear " + "<col=000080>" + "green dragonhide chaps" + "</col>" + "."];
                case 25:
                    return [Obj.iron_arrowheads, Obj.obj_1135, "Green dragonhide body" + "<br>" + " (after Dragon Slayer and with 40 Defence)", "You now have the Ranged level required to wear " + "<col=000080>" + "green dragonhide bodies" + "</col>" + ". (You also need to have completed Dragon Slayer and have level 40 Defence.)"];
                case 26:
                    return [Obj.iron_arrowheads, Obj.obj_12936, "Green dragonhide coif" + "<br>" + " (with 40 Defence)", "You now have the Ranged level required to wear " + "<col=000080>" + "green dragonhide coifs" + "</col>" + ". (You also need level 40 Defence.)"];
                case 27:
                    return [Obj.iron_arrowheads, Obj.dagganoth_ranged_body, "Members: Spined body" + "<br>" + " (after Fremennik Trials and with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "spined bodies" + "</col>" + " (after Fremennik Trials, with level 40 Defence)."];
                case 28:
                    return [Obj.iron_arrowheads, Obj.dagganoth_ranged_legs, "Members: Spined chaps" + "<br>" + " (after Fremennik Trials and with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "spined chaps" + "</col>" + " (after Fremennik Trials, with level 40 Defence)."];
                case 29:
                    return [Obj.iron_arrowheads, Obj.dagganoth_ranged_helm, "Members: Spined helm" + "<br>" + " (after Fremennik Trials and with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "spined helms" + "</col>" + " (after Fremennik Trials, with level 40 Defence)."];
                case 30:
                    return [Obj.iron_arrowheads, Obj.sc_reward_coif, "Members: Sacred clay coif" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "sacred clay coifs" + "</col>" + ". (They also need level 40 Defence.)"];
                case 31:
                    return [Obj.iron_arrowheads, Obj.sc_reward_leather_body, "Members: Sacred clay body" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "sacred clay bodies" + "</col>" + ". (They also need level 40 Defence.)"];
                case 32:
                    return [Obj.iron_arrowheads, Obj.sc_reward_chaps, "Members: Sacred clay chaps" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "sacred clay chaps" + "</col>" + ". (They also need level 40 Defence.)"];
                case 33:
                    return [Obj.mithril_arrowheads, Obj.obj_11665, "Members: Void melee helm", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void melee helms" + "</col>" + "."];
                case 34:
                    return [Obj.mithril_arrowheads, Obj.obj_11664, "Members: Void ranger helm", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void ranger helms" + "</col>" + "."];
                case 35:
                    return [Obj.mithril_arrowheads, Obj.obj_11663, "Members: Void mage helm", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void mage helms" + "</col>" + "."];
                case 36:
                    return [Obj.mithril_arrowheads, Obj.pest_void_knight_top, "Members: Void knight top", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void knight tops" + "</col>" + "."];
                case 37:
                    return [Obj.mithril_arrowheads, Obj.obj_8840, "Members: Void knight robe", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void knight robes" + "</col>" + "."];
                case 38:
                    return [Obj.mithril_arrowheads, Obj.pest_void_knight_gloves, "Members: Void knight gloves", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void knight gloves" + "</col>" + "."];
                case 39:
                    return [Obj.mithril_arrowheads, Obj.conq_reward_shield, "Members: Void knight deflector", "Members now have the Ranged level required to wear " + "<col=000080>" + "Void knight deflectors" + "</col>" + "."];
                case 40:
                    return [Obj.mithril_arrowheads, Obj.obj_7620, "Void knight equipment requires 42 Attack, Defence, Strength, Ranged, Magic and Constitution and 22 Prayer.", "<col=000080>" + "Void knight equipment" + "</col>" + " requires 42 Attack, Defence, Strength, Ranged, Magic and Constitution and 22 Prayer."];
                case 41:
                    return [Obj.obj_50, Obj.obj_2487, "Members: Blue dragonhide vambraces", "Members can now wear " + "<col=000080>" + "blue dragonhide vambraces" + "</col>" + "."];
                case 42:
                    return [Obj.obj_50, Obj.obj_2493, "Members: Blue dragonhide chaps", "Members can now wear " + "<col=000080>" + "blue dragonhide chaps" + "</col>" + "."];
                case 43:
                    return [Obj.obj_50, Obj.obj_2499, "Members: Blue dragonhide body" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "blue dragonhide bodies" + "</col>" + ". (They also need level 40 Defence.)"];
                case 44:
                    return [Obj.obj_50, Obj.obj_12943, "Members: Blue dragonhide coif" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "blue dragonhide coifs" + "</col>" + ". (They also need level 40 Defence.)"];
                case 45:
                    return [Obj.obj_60, Obj.obj_2489, "Members: Red dragonhide vambraces", "Members can now wear " + "<col=000080>" + "red dragonhide vambraces" + "</col>" + "."];
                case 46:
                    return [Obj.obj_60, Obj.obj_2495, "Members: Red dragonhide chaps", "Members can now wear " + "<col=000080>" + "red dragonhide chaps" + "</col>" + "."];
                case 47:
                    return [Obj.obj_60, Obj.obj_2501, "Members: Red dragonhide body" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "red dragonhide bodies" + "</col>" + ". (They also need level 40 Defence.)"];
                case 48:
                    return [Obj.obj_60, Obj.obj_12950, "Members: Red dragonhide coif" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "red dragonhide coifs" + "</col>" + ". (They also need level 40 Defence.)"];
                case 49:
                    return [Obj.obj_65, Obj.obj_10334, "Members: Third-Age range coif" + "<br>" + " (with 45 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Third-Age range coifs" + "</col>" + ". (They also need level 45 Defence.)"];
                case 50:
                    return [Obj.obj_65, Obj.obj_10330, "Members: Third-Age range top" + "<br>" + " (with 45 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Third-Age range tops" + "</col>" + ". (They also need level 45 Defence.)"];
                case 51:
                    return [Obj.obj_65, Obj.obj_10332, "Members: Third-Age range legs" + "<br>" + " (with 45 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Third-Age range legs" + "</col>" + ". (They also need level 45 Defence.)"];
                case 52:
                    return [Obj.obj_65, Obj.obj_10336, "Members: Third-Age range vambraces" + "<br>" + " (with 45 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Third-Age range vambraces" + "</col>" + ". (They also need level 45 Defence.)"];
                case 53:
                    return [Obj.obj_70, Obj.obj_2491, "Members: Black dragonhide vambraces", "Members can now wear " + "<col=000080>" + "black dragonhide vambraces" + "</col>" + "."];
                case 54:
                    return [Obj.obj_70, Obj.obj_2497, "Members: Black dragonhide chaps", "Members can now wear " + "<col=000080>" + "black dragonhide chaps" + "</col>" + "."];
                case 55:
                    return [Obj.obj_70, Obj.obj_2503, "Members: Black dragonhide body" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "black dragonhide bodies" + "</col>" + ". (They also need level 40 Defence.)"];
                case 56:
                    return [Obj.obj_70, Obj.obj_12957, "Members: Black dragonhide coif" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "black dragonhide coifs" + "</col>" + ". (They also need level 40 Defence.)"];
                case 57:
                    return [Obj.obj_70, Obj.obj_10374, "Members: Blessed dragonhide coif" + "<br>" + " (with 40 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "blessed dragonhide coifs" + "</col>" + ". (They also need level 40 Defence.)"];
                case 58:
                    return [Obj.obj_70, Obj.barrows_karil_head, "Members: Karil's coif" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Karil's Coif" + "</col>" + ". (They also need level 70 Defence.)"];
                case 59:
                    return [Obj.obj_70, Obj.barrows_karil_body, "Members: Karil's leather top" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Karil's leather top" + "</col>" + ". (They also need level 70 Defence.)"];
                case 60:
                    return [Obj.obj_70, Obj.barrows_karil_legs, "Members: Karil's leather skirt" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "Karil's leather skirt" + "</col>" + ". (They also need level 70 Defence.)"];
                case 61:
                    return [Obj.obj_70, Obj.godwars_armor_armadyl_helmet, "Members: Armadyl helmet" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear Armadyl helmets. (They also need level 70 Defence.)"];
                case 62:
                    return [Obj.obj_70, Obj.godwars_armor_armadyl_chestplate, "Members: Armadyl chestplate" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear Armadyl chestplates. (They also need level 70 Defence.)"];
                case 63:
                    return [Obj.obj_70, Obj.godwars_armor_armadyl_armored_skirt, "Members: Armadyl chainskirt" + "<br>" + " (with 70 Defence)", "Members now have the Ranged level required to wear Armadyl chainskirts. (They also need level 70 Defence.)"];
                case 64:
                    return [Obj.obj_73, Obj.rand_reward_mercenarys_gloves, "Members: Mercenary's gloves" + "<br>" + " (with 73 Dungeoneering)", "Members can now wear " + "<col=000080>" + "mercenary's gloves" + "</col>" + ". (They also need level 73 Dungeoneering.)"];
                case 65:
                    return [Obj.khazard_platemail, Obj.glacor_range_boots, "Members: Glaiven boots" + "<br>" + " (with 75 Defence)", "Members now have the Ranged level required to wear " + "<col=000080>" + "glaiven boots" + "</col>" + " (with 75 Defence)."];
                case 66:
                    return [Obj.ice_arrow, Obj.pvpw_coif, "Members: Morrigan's coif" + "<br>" + " (with 78 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "Morrigan's coif" + "</col>" + ". (They also need level 78 Defence)"];
                case 67:
                    return [Obj.ice_arrow, Obj.pvpw_leather_body, "Members: Morrigan's leather body" + "<br>" + " (with 78 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "Morrigan's leather body" + "</col>" + ". (They also need level 78 Defence)"];
                case 68:
                    return [Obj.ice_arrow, Obj.pvpw_leather_chaps, "Members: Morrigan's leather chaps" + "<br>" + " (with 78 Defence)", "Members now have the Ranged level required to wield " + "<col=000080>" + "Morrigan's leather chaps" + "</col>" + ". (They also need level 78 Defence)"];
                case 69:
                    return [Obj.obj_80, Obj.godwars2_helm_range_100, "Members: Pernix cowl" + "<br>" + " (with 80 Defence and Constitution)", "Members can now wear " + "<col=000080>" + "pernix cowls" + "</col>" + ". (They also need level 80 Defence and Constitution.)"];
                case 70:
                    return [Obj.obj_80, Obj.godwars2_body_range_100, "Members: Pernix body" + "<br>" + " (with 80 Defence and Constitution)", "Members can now wear " + "<col=000080>" + "pernix bodies" + "</col>" + ". (They also need level 80 Defence and Constitution.)"];
                case 71:
                    return [Obj.obj_80, Obj.godwars2_legs_range_100, "Members: Pernix chaps" + "<br>" + " (with 80 Defence and Constitution)", "Members can now wear " + "<col=000080>" + "pernix chaps" + "</col>" + ". (They also need level 80 Defence and Constitution.)"];
                case 72:
                    return [Obj.obj_80, Obj.dom_gloves_range_col1, "Members: Swift gloves", "Members can now wear " + "<col=000080>" + "swift gloves" + "</col>" + "."];
            }
            break;
        case 3:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.crossbow, "Crossbow" + "<br>" + "  Ammo: Bronze crossbow bolts", "You can now " + "<col=000080>" + "fire crossbows" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.phoenix_crossbow, "Phoenix crossbow" + "<br>" + "  Ammo: Bronze crossbow bolts", "You can now fire " + "<col=000080>" + "phoenix crossbows" + "</col>" + "."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.xbows_crossbow_bronze, "Members: Bronze crossbow" + "<br>" + "  Ammo: Bronze crossbow bolts", "Members can now fire " + "<col=000080>" + "bronze crossbows" + "</col>" + "."];
                case 3:
                    return [Obj.magic_whistle, Obj.xbows_crossbow_blurite, "Members: Blurite crossbow" + "<br>" + "  Ammo: Bolts up to blurite", "Members can now fire " + "<col=000080>" + "blurite crossbows" + "</col>" + "."];
                case 4:
                    return [Obj.hemenster_fishing_trophy, Obj.xbows_crossbow_iron, "Members: Iron crossbow" + "<br>" + "  Ammo: Bolts up to iron", "Members can now fire " + "<col=000080>" + "iron crossbows" + "</col>" + "."];
                case 5:
                    return [Obj.insect_repellent, Obj.obj_8880, "Members: Dorgeshuun crossbow" + "<br>" + "  Ammo: Bolts up to iron", "Members can now fire " + "<col=000080>" + "Dorgeshuun crossbows" + "</col>" + "."];
                case 6:
                    return [Obj.obj_31, Obj.xbows_crossbow_steel, "Members: Steel crossbow" + "<br>" + "  Ammo: Bolts up to steel", "Members can now fire " + "<col=000080>" + "steel crossbows" + "</col>" + "."];
                case 7:
                    return [Obj.obj_33, Obj.trail_black_crossbow, "Members: Black crossbow" + "<br>" + "  Ammo: Bolts up to black", "Members can now fire " + "<col=000080>" + "black crossbows" + "</col>" + "."];
                case 8:
                    return [Obj.obj_36, Obj.obj_9181, "Members: Mithril crossbow" + "<br>" + "  Ammo: Bolts up to mithril", "Members can now fire " + "<col=000080>" + "mithril crossbows" + "</col>" + "."];
                case 9:
                    return [Obj.pearl_bolttips, Obj.xbows_crossbow_adamantite, "Members: Adamant crossbow" + "<br>" + "  Ammo: Bolts up to adamant", "Members can now fire " + "<col=000080>" + "adamant crossbows" + "</col>" + "."];
                case 10:
                    return [Obj.obj_48, Obj.chosen_godslayer_crossbow, "Members: Zanik's crossbow (after The Chosen Commander)" + "<br>" + "  Ammo: Bolts up to adamant", "Members can now fire " + "<col=000080>" + "Zanik's crossbow" + "</col>" + " (after The Chosen Commander)."];
                case 11:
                    return [Obj.obj_50, Obj.hunting_crossbow, "Members: Hunters' crossbow" + "<br>" + "  Ammo: Kebbit and long kebbit bolts", "Members can now fire " + "<col=000080>" + "hunters' crossbows" + "</col>" + "."];
                case 12:
                    return [Obj.obj_61, Obj.xbows_crossbow_runite, "Members: Runite crossbow" + "<br>" + "  Ammo: Bolts up to rune", "Members can now fire " + "<col=000080>" + "runite crossbows" + "</col>" + "."];
                case 13:
                    return [Obj.obj_70, Obj.barrows_karil_weapon, "Members: Karil's crossbow" + "<br>" + " Ammo: Bolt racks", "Members can now use " + "<col=000080>" + "Karil's crossbow" + "</col>" + "."];
                case 14:
                    return [Obj.obj_80, Obj.rand_xbow_80_reward_broken, "Members: Chaotic crossbow" + "<br>" + "  Ammo: Bolts up to rune" + "<br>" + " (with 80 Dungeoneering)", "Members can now wield " + "<col=000080>" + "chaotic crossbows" + "</col>" + ". (They also need level 80 Dungeoneering.)"];
            }
            break;
        case 4:
            switch (intArg1) {
                case 0:
                    return [Obj.holy_grail, Obj.agility_climb, "Members: Falador wall" + "<br>" + " (with 11 Agility and 37 Strength)", "Members now have the Ranged level required to scale the " + "<col=000080>" + "Falador wall" + "</col>" + ". (They also need level 11 Agility and level 37 Strength.)"];
                case 1:
                    return [Obj.blackcog, Obj.agility_climb, "Members: Yanille wall " + "<br>" + " (with 39 Agility and 38 Strength)", "Members now have the Ranged level required to scale the " + "<col=000080>" + "Yanille wall" + "</col>" + ". (You also need level 39 Agility and level 38 Strength.)"];
                case 2:
                    return [Obj.excalibur, Obj.agility_climb, "Members: Catherby cliff " + "<br>" + " (after Fishing Contest, with 32 Agility and 35 Strength)", "Members now have the Ranged level required to scale the " + "<col=000080>" + "Catherby cliff" + "</col>" + " (after Fishing Contest, with level 32 Agility and 35 Strength)."];
                case 3:
                    return [Obj.obj_37, Obj.agility_balance, "Members: River crossing to Al Kharid " + "<br>" + " (with 8 Agility and 19 Strength)", "Members now have the Ranged level required to cross the " + "<col=000080>" + "River Lum" + "</col>" + " to " + "<col=000080>" + "Al Kharid" + "</col>" + ". (You also need level 8 Agility and level 19 Strength.)"];
                case 4:
                    return [Obj.bronze_arrowheads, Obj.agility_balance, "Members: Water Obelisk Island escape " + "<br>" + " (with 36 Agility and 22 Strength)", "Members now have the Ranged level required to complete the " + "<col=000080>" + "Water Obelisk Island escape" + "</col>" + ". (You also need level 36 Agility and level 22 Strength)."];
                case 5:
                    return [Obj.mithril_arrowheads, Obj.agility_balance, "Members: Karamja crossing, south of the volcano " + "<br>" + " (with 53 Agility and 21 Strength)", "Members now have the Ranged level required to use the " + "<col=000080>" + "Karamja Agility shortcut" + "</col>" + ". (You also need level 53 Agility and level 21 Strength.)"];
                case 6:
                    return [Obj.obj_60, Obj.agility_balance, "Members: Cross Bandos's throne room " + "<br>" + " (after The Chosen Commander and with 60 Agility and 60 Strength)", "Members now have the Ranged level required to cross " + "<col=000080>" + "Bandos's throne room" + "</col>" + " (after The Chosen Commander and with 60 Agility and 60 Strength."];
                case 7:
                    return [Obj.obj_80, Obj.agility_balance, "Members: Cross cave, south of Dorgesh-Kaan " + "<br>" + " (with 80 Agility and 80 Strength)", "Members now have the Ranged level required to cross the " + "<col=000080>" + "cave south of Dorgesh-Kaan" + "</col>" + ". (You also need level 80 Agility and 80 Strength."];
            }
            break;
        case 5:
            switch (intArg1) {
                case 0:
                    return [Obj.bucket_wax, Obj.obj_10149, "Members: Swamp lizard" + "<br>" + " (with 30 Attack and 30 Magic)", "Members now have the Ranged level required to use " + "<col=000080>" + "swamp lizards" + "</col>" + ". (They also need level 30 Attack and level 30 Magic.)"];
                case 1:
                    return [Obj.obj_50, Obj.orange_salamander, "Members: Orange salamander" + "<br>" + " (with 50 Attack and 50 Magic)", "Members now have the Ranged level required to use " + "<col=000080>" + "orange salamanders" + "</col>" + ". (They also need level 50 Attack and level 50 Magic.)"];
                case 2:
                    return [Obj.obj_60, Obj.red_salamander, "Members: Red salamander" + "<br>" + " (with 60 Attack and 60 Magic)", "Members now have the Ranged level required to use " + "<col=000080>" + "red salamanders" + "</col>" + ". (They also need level 60 Attack and level 60 Magic.)"];
                case 3:
                    return [Obj.obj_70, Obj.black_salamander, "Members: Black salamander" + "<br>" + " (with 70 Attack and 70 Magic)", "Members now have the Ranged level required to use " + "<col=000080>" + "black salamanders" + "</col>" + ". (They also need level 70 Attack and level 70 Magic.)"];
            }
            break;
        case 6:
            if (intArg1 == 0) {
                return [Obj.obj_70, Obj.obj_9419, "Members: Armadyl's Eyrie in the God Wars Dungeon", "Members can now enter " + "<col=000080>" + "Armadyl's Eyrie" + "</col>" + " in the " + "<col=000080>" + "God Wars Dungeon" + "</col>" + "."];
            }
            break;
        case 7:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.obj_19830, "Sling" + "<br>" + " Ammo: None needed", "You can now use a " + "<col=000080>" + "sling" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.obj_15597, "Kayle's sling (after The Blood Pact)" + "<br>" + " Ammo: None needed", "You can now use " + "<col=000080>" + "Kayle's sling" + "</col>" + " (after The Blood Pact)."];
                case 2:
                    return [Obj.bucket_wax, Obj.anma_30_reward, "Members: Ava's Attractor (after Animal Magnetism)", "Members now have the Ranged level required to use " + "<col=000080>" + "Ava's Attractor" + "</col>" + " (after Animal Magnetism)."];
                case 3:
                    return [Obj.mithril_arrowheads, Obj.pest_void_knight_mace, "Members: Void knight mace", "Members now have the Ranged level required to wield " + "<col=000080>" + "Void knight maces" + "</col>" + "."];
                case 4:
                    return [Obj.opal_bolttips, Obj.rand_reward_longbow_scope, "Longbow sight" + "<br>" + " (with 45 Dungeoneering)", "You can now use " + "<col=000080>" + "longbow sights" + "</col>" + ". (You also need level 45 Dungeoneering.)"];
                case 5:
                    return [Obj.obj_50, Obj.anma_50_reward, "Members: Ava's Accumulator (after Animal Magnetism)", "Members now have the Ranged level required to use " + "<col=000080>" + "Ava's Accumulator" + "</col>" + " (after Animal Magnetism)."];
                case 6:
                    return [Obj.obj_50, Obj.apmeken_alerter_reward, "Members: Ava's Alerter (after Do No Evil)", "Members now have the Ranged level required to use " + "<col=000080>" + "Ava's Alerter" + "</col>" + " (after Do No Evil)."];
                case 7:
                    return [Obj.obj_50, Obj.slayerguide_broad_arrows, "Members: Broad arrows" + "<br>" + " (with 55 Slayer)", "Members now have the Ranged level required to shoot " + "<col=000080>" + "broad arrows" + "</col>" + ", Ranged weapons used for killing turoth and kurask. (You also need level 55 Slayer.)"];
                case 8:
                    return [Obj.obj_50, Obj.xbows_slayer_bolts, "Members: Broad-tipped bolts" + "<br>" + " (with 55 Slayer)", "Members now have the Ranged level required to shoot " + "<col=000080>" + "broad-tipped bolts" + "</col>" + ", Ranged weapons used for killing turoth and kurask. (You also need level 55 Slayer.)"];
                case 9:
                    return [Obj.obj_50, Obj.mah5_dragonbane_arrow, "Members: Bane arrows" + "<br>" + " (after Ritual of the Mahjarrat)", "Members now have the Ranged level required to shoot " + "<col=000080>" + "bane arrows" + "</col>" + ", Ranged weapons used for effectively killing specific creatures. (after Ritual of the Mahjarrat.)"];
                case 10:
                    return [Obj.obj_50, Obj.obj_21660, "Members: Bane bolts" + "<br>" + " (after Ritual of the Mahjarrat)", "Members now have the Ranged level required to shoot " + "<col=000080>" + "bane bolts" + "</col>" + ", Ranged weapons used for effectively killing specific creatures. (after Ritual of the Mahjarrat.)"];
                case 11:
                    return [Obj.khazard_platemail, Obj.ra3_arquebus, "Members: Chaos dwarf hand cannon" + "<br>" + " (with 61 Firemaking and after Forgiveness of a Chaos Dwarf)", "Members now have the Ranged level required to fire the " + "<col=000080>" + "chaos dwarf hand cannon" + "</col>" + " (after Forgiveness of a Chaos Dwarf and with 61 Firemaking)."];
            }
            break;
        case 8:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.sc_bow_1, "Members: Stealing Creation - class 1 bow", "Members can now wield " + "<col=000080>" + "class 1 bows" + "</col>" + " in Stealing Creation."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.sc_ranger_head_1, "Members: Stealing Creation - class 1 coif", "Members can now wear " + "<col=000080>" + "class 1 coifs" + "</col>" + " in Stealing Creation."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.sc_ranger_body_1, "Members: Stealing Creation - class 1 leather body", "Members can now wear " + "<col=000080>" + "class 1 leather bodies" + "</col>" + " in Stealing Creation."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.sc_ranger_legs_1, "Members: Stealing Creation - class 1 chaps", "Members can now wear " + "<col=000080>" + "class 1 chaps" + "</col>" + " in Stealing Creation."];
                case 4:
                    return [Obj.whitecog, Obj.sc_bow_2, "Members: Stealing Creation - class 2 bow", "Members can now wield " + "<col=000080>" + "class 2 bows" + "</col>" + " in Stealing Creation."];
                case 5:
                    return [Obj.whitecog, Obj.sc_ranger_head_2, "Members: Stealing Creation - class 2 coif", "Members can now wear " + "<col=000080>" + "class 2 coifs" + "</col>" + " in Stealing Creation."];
                case 6:
                    return [Obj.whitecog, Obj.sc_ranger_body_2, "Members: Stealing Creation - class 2 leather body", "Members can now wear " + "<col=000080>" + "class 2 leather bodies" + "</col>" + " in Stealing Creation."];
                case 7:
                    return [Obj.whitecog, Obj.sc_ranger_legs_2, "Members: Stealing Creation - class 2 chaps", "Members can now wear " + "<col=000080>" + "class 2 chaps" + "</col>" + " in Stealing Creation."];
                case 8:
                    return [Obj.iron_arrowheads, Obj.sc_bow_3, "Members: Stealing Creation - class 3 bow", "Members can now wield " + "<col=000080>" + "class 3 bows" + "</col>" + " in Stealing Creation."];
                case 9:
                    return [Obj.iron_arrowheads, Obj.sc_ranger_head_3, "Members: Stealing Creation - class 3 coif", "Members can now wear " + "<col=000080>" + "class 3 coifs" + "</col>" + " in Stealing Creation."];
                case 10:
                    return [Obj.iron_arrowheads, Obj.sc_ranger_body_3, "Members: Stealing Creation - class 3 leather body", "Members can now wear " + "<col=000080>" + "class 3 leather bodies" + "</col>" + " in Stealing Creation."];
                case 11:
                    return [Obj.iron_arrowheads, Obj.sc_ranger_legs_3, "Members: Stealing Creation - class 3 chaps", "Members can now wear " + "<col=000080>" + "class 3 chaps" + "</col>" + " in Stealing Creation."];
                case 12:
                    return [Obj.obj_60, Obj.sc_bow_4, "Members: Stealing Creation - class 4 bow", "Members can now wield " + "<col=000080>" + "class 4 bows" + "</col>" + " in Stealing Creation."];
                case 13:
                    return [Obj.obj_60, Obj.sc_ranger_head_4, "Members: Stealing Creation - class 4 coif", "Members can now wear " + "<col=000080>" + "class 4 coifs" + "</col>" + " in Stealing Creation."];
                case 14:
                    return [Obj.obj_60, Obj.sc_ranger_body_4, "Members: Stealing Creation - class 4 leather body", "Members can now wear " + "<col=000080>" + "class 4 leather bodies" + "</col>" + " in Stealing Creation."];
                case 15:
                    return [Obj.obj_60, Obj.sc_ranger_legs_4, "Members: Stealing Creation - class 4 chaps", "Members can now wear " + "<col=000080>" + "class 4 chaps" + "</col>" + " in Stealing Creation."];
                case 16:
                    return [Obj.obj_80, Obj.sc_bow_5, "Members: Stealing Creation - class 5 bow", "Members can now wield " + "<col=000080>" + "class 5 bows" + "</col>" + " in Stealing Creation."];
                case 17:
                    return [Obj.obj_80, Obj.sc_ranger_head_5, "Members: Stealing Creation - class 5 coif", "Members can now wear " + "<col=000080>" + "class 5 coifs" + "</col>" + " in Stealing Creation."];
                case 18:
                    return [Obj.obj_80, Obj.sc_ranger_body_5, "Members: Stealing Creation - class 5 leather body", "Members can now wear " + "<col=000080>" + "class 5 leather bodies" + "</col>" + " in Stealing Creation."];
                case 19:
                    return [Obj.obj_80, Obj.sc_ranger_legs_5, "Members: Stealing Creation - class 5 chaps", "Members can now wear " + "<col=000080>" + "class 5 chaps" + "</col>" + " in Stealing Creation."];
                case 20:
                    return [Obj.ikov_shinykey, Obj.hlr4m_trickster_helm_cosmetic, "Members: Trickster hood" + "<br>" + " (with 85 Defence and 85 Magic)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Trickster hoods" + "</col>" + ". (They also need level 85 Defence and level 85 Magic)"];
                case 21:
                    return [Obj.ikov_shinykey, Obj.hlr4m_trickster_robe_cosmetic, "Members: Trickster robe" + "<br>" + " (with 85 Defence and 85 Magic)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Trickster robes" + "</col>" + ". (They also need level 85 Defence and level 85 Magic)"];
                case 22:
                    return [Obj.ikov_shinykey, Obj.hlr4m_trickster_legs_cosmetic, "Members: Trickster legs" + "<br>" + " (with 85 Defence and 85 Magic)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Trickster legs" + "</col>" + ". (They also need level 85 Defence and level 85 Magic)"];
                case 23:
                    return [Obj.ikov_shinykey, Obj.hlr4m_trickster_gloves_cosmetic, "Members: Trickster gloves" + "<br>" + " (with 85 Defence and 85 Magic)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Trickster gloves" + "</col>" + ". (They also need level 85 Defence and level 85 Magic)"];
                case 24:
                    return [Obj.ikov_shinykey, Obj.hlr4m_trickster_boots_cosmetic, "Members: Trickster boots" + "<br>" + " (with 85 Defence and 85 Magic)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Trickster boots" + "</col>" + ". (They also need level 85 Defence and level 85 Magic)"];
                case 25:
                    return [Obj.ikov_shinykey, Obj.hlr4m_vanguard_helm_cosmetic, "Members: Vanguard helm" + "<br>" + " (with 85 Defence and 85 Strength)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Vanguard helms" + "</col>" + ". (They also need level 85 Defence and level 85 Strength.)"];
                case 26:
                    return [Obj.ikov_shinykey, Obj.hlr4m_vanguard_robe_cosmetic, "Members: Vanguard body" + "<br>" + " (with 85 Defence and 85 Strength)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Vanguard body armour" + "</col>" + ". (They also need level 85 Defence and level 85 Strength.)"];
                case 27:
                    return [Obj.ikov_shinykey, Obj.hlr4m_vanguard_legs_cosmetic, "Members: Vanguard legs" + "<br>" + " (with 85 Defence and 85 Strength)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Vanguard leg armour" + "</col>" + ". (They also need level 85 Defence and level 85 Strength.)"];
                case 28:
                    return [Obj.ikov_shinykey, Obj.hlr4m_vanguard_gloves_cosmetic, "Members: Vanguard gloves" + "<br>" + " (with 85 Defence and 85 Strength)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Vanguard gloves" + "</col>" + ". (They also need level 85 Defence and level 85 Strength.)"];
                case 29:
                    return [Obj.ikov_shinykey, Obj.hlr4m_vanguard_boots_cosmetic, "Members: Vanguard boots" + "<br>" + " (with 85 Defence and 85 Strength)", "Members now have the Ranged requirement to wear " + "<col=000080>" + "Vanguard boots" + "</col>" + ". (They also need level 85 Defence and level 85 Strength.)"];
                case 30:
                    return [Obj.childs_blanket, Obj.dom_crossbow, "Members: Dominion crossbow" + "<br>" + "  Ammo: Bolts up to rune", "Members can now wield " + "<col=000080>" + "Dominion crossbows" + "</col>" + " in the Dominion Tower."];
            }
            break;
        case 9:
            switch (intArg1) {
                case 0:
                    return [-1, Obj.rand_mission_contract, "Dungeoneering skill tasks" + "<br>" + "As your Ranged level increases, you will be able to attempt higher-level ranged tasks within Daemonheim. You will also be more likely to succeed when attempting ranged tasks within Daemonheim.", ""];
                case 1:
                    return [Obj.mcannontoolkit, Obj.rand_shortbow_1, "Tangle gum shortbow (Tier 1)", "You can now wield " + "<col=000080>" + "tangle gum shortbows" + "</col>" + " within Daemonheim."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.rand_longbow_1, "Tangle gum longbow (Tier 1)", "You can now wield " + "<col=000080>" + "tangle gum shortbows" + "</col>" + " within Daemonheim."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.rand_arrow_1, "Novite arrows (Tier 1)", "You can now use " + "<col=000080>" + "novite arrows" + "</col>" + " within Daemonheim."];
                case 4:
                    return [Obj.mcannontoolkit, Obj.rand_coif_1, "Protoleather coifs (Tier 1)" + "<br>" + " (with 1 Defence)", "You can now wear " + "<col=000080>" + "protoleather coif" + "</col>" + " within Daemonheim. (You also need level 1 Defence.)"];
                case 5:
                    return [Obj.mcannontoolkit, Obj.rand_leather_body_1, "Protoleather body (Tier 1)" + "<br>" + " (with 1 Defence)", "You can now wear " + "<col=000080>" + "protoleather bodies" + "</col>" + " within Daemonheim. (You also need level 1 Defence)."];
                case 6:
                    return [Obj.mcannontoolkit, Obj.rand_chaps_1, "Protoleather chaps (Tier 1)" + "<br>" + " (with 1 Defence)", "You can now wear " + "<col=000080>" + "protoleather chaps" + "</col>" + " within Daemonheim. (You also need level 1 Defence)."];
                case 7:
                    return [Obj.mcannontoolkit, Obj.rand_vambraces_1, "Protoleather vambraces (Tier 1)" + "<br>" + " (with 1 Defence)", "You can now wear " + "<col=000080>" + "protoleather vambraces" + "</col>" + " within Daemonheim. (You also need level 1 Defence)."];
                case 8:
                    return [Obj.mcannontoolkit, Obj.rand_leather_boots_1, "Protoleather boots (Tier 1)" + "<br>" + " (with 1 Defence)", "You can now wear " + "<col=000080>" + "protoleather boots" + "</col>" + " within Daemonheim. (You also need level 1 Defence)."];
                case 9:
                    return [Obj.twpart3, Obj.rand_shortbow_2, "Seeping elm shortbow (Tier 2)", "You can now wield " + "<col=000080>" + "seeping elm shortbows" + "</col>" + " within Daemonheim."];
                case 10:
                    return [Obj.twpart3, Obj.rand_longbow_2, "Seeping elm longbow (Tier 2)", "You can now wield " + "<col=000080>" + "seeping elm longbows" + "</col>" + " within Daemonheim."];
                case 11:
                    return [Obj.twpart3, Obj.rand_arrow_2, "Bathus arrows (Tier 2)", "You can now use " + "<col=000080>" + "bathus arrows" + "</col>" + " within Daemonheim."];
                case 12:
                    return [Obj.twpart3, Obj.rand_coif_2, "Subleather coifs (Tier 2)" + "<br>" + " (with 10 Defence)", "You can now wear " + "<col=000080>" + "subleather coif" + "</col>" + " within Daemonheim. (You also need level 10 Defence)."];
                case 13:
                    return [Obj.twpart3, Obj.rand_leather_body_2, "Subleather body (Tier 2)" + "<br>" + " (with 10 Defence)", "You can now wear " + "<col=000080>" + "subleather bodies" + "</col>" + " within Daemonheim. (You also need level 10 Defence)."];
                case 14:
                    return [Obj.twpart3, Obj.rand_chaps_2, "Subleather chaps (Tier 2)" + "<br>" + " (with 10 Defence)", "You can now wear " + "<col=000080>" + "subleather chaps" + "</col>" + " within Daemonheim. (You also need level 10 Defence)."];
                case 15:
                    return [Obj.twpart3, Obj.rand_vambraces_2, "Subleather vambraces (Tier 2)" + "<br>" + " (with 10 Defence)", "You can now wear " + "<col=000080>" + "subleather vambraces" + "</col>" + " within Daemonheim. (You also need level 10 Defence)."];
                case 16:
                    return [Obj.twpart3, Obj.rand_leather_boots_2, "Subleather boots (Tier 2)" + "<br>" + " (with 10 Defence)", "You can now wear " + "<col=000080>" + "subleather boots" + "</col>" + " within Daemonheim. (You also need level 10 Defence)."];
                case 17:
                    return [Obj.whitecog, Obj.rand_shortbow_3, "Blood spindle shortbow (Tier 3)", "You can now wield " + "<col=000080>" + "blood spindle shortbows" + "</col>" + " within Daemonheim."];
                case 18:
                    return [Obj.whitecog, Obj.rand_longbow_3, "Blood spindle longbow (Tier 3)", "You can now wield " + "<col=000080>" + "blood spindle longbows" + "</col>" + " within Daemonheim."];
                case 19:
                    return [Obj.whitecog, Obj.rand_arrow_3, "Marmaros arrows (Tier 3)", "You can now use " + "<col=000080>" + "marmaros arrows" + "</col>" + " within Daemonheim."];
                case 20:
                    return [Obj.whitecog, Obj.rand_coif_3, "Paraleather coif (Tier 3)" + "<br>" + " (with 20 Defence)", "You can now wear " + "<col=000080>" + "paraleather coifs" + "</col>" + " within Daemonheim. (You also need level 20 Defence)."];
                case 21:
                    return [Obj.whitecog, Obj.rand_leather_body_3, "Paraleather body (Tier 3)" + "<br>" + " (with 20 Defence)", "You can now wear " + "<col=000080>" + "paraleather bodies" + "</col>" + " within Daemonheim. (You also need level 20 Defence)."];
                case 22:
                    return [Obj.whitecog, Obj.rand_chaps_3, "Paraleather chaps (Tier 3)" + "<br>" + " (with 20 Defence)", "You can now wear " + "<col=000080>" + "paraleather chaps" + "</col>" + " within Daemonheim. (You also need level 20 Defence)."];
                case 23:
                    return [Obj.whitecog, Obj.rand_vambraces_3, "Paraleather vambraces (Tier 3)" + "<br>" + " (with 20 Defence)", "You can now wear " + "<col=000080>" + "paraleather vambraces" + "</col>" + " within Daemonheim. (You also need level 20 Defence)."];
                case 24:
                    return [Obj.whitecog, Obj.rand_leather_boots_3, "Paraleather boots (Tier 3)" + "<br>" + " (with 20 Defence)", "You can now wear " + "<col=000080>" + "paraleather boots" + "</col>" + " within Daemonheim. (You also need level 20 Defence)."];
                case 25:
                    return [Obj.bucket_wax, Obj.rand_shortbow_4, "Utuku shortbow (Tier 4)", "You can now wield " + "<col=000080>" + "utuku shortbows" + "</col>" + " within Daemonheim."];
                case 26:
                    return [Obj.bucket_wax, Obj.rand_longbow_4, "Utuku longbow (Tier 4)", "You can now wield " + "<col=000080>" + "utuku longbows" + "</col>" + " within Daemonheim."];
                case 27:
                    return [Obj.bucket_wax, Obj.rand_arrow_4, "Kratonite arrows (Tier 4)", "You can now use " + "<col=000080>" + "kratonite arrows" + "</col>" + " within Daemonheim."];
                case 28:
                    return [Obj.bucket_wax, Obj.rand_coif_4, "Archleather coif (Tier 4)" + "<br>" + " (with 30 Defence)", "You can now wear " + "<col=000080>" + "archleather coifs" + "</col>" + " within Daemonheim. (You also need level 30 Defence)."];
                case 29:
                    return [Obj.bucket_wax, Obj.rand_leather_body_4, "Archleather body (Tier 4)" + "<br>" + " (with 30 Defence)", "You can now wear " + "<col=000080>" + "archleather bodies" + "</col>" + " within Daemonheim. (You also need level 30 Defence)."];
                case 30:
                    return [Obj.bucket_wax, Obj.rand_chaps_4, "Archleather chaps (Tier 4)" + "<br>" + " (with 30 Defence)", "You can now wear " + "<col=000080>" + "archleather chaps" + "</col>" + " within Daemonheim. (You also need level 30 Defence)."];
                case 31:
                    return [Obj.bucket_wax, Obj.rand_vambraces_4, "Archleather vambraces (Tier 4)" + "<br>" + " (with 30 Defence)", "You can now wear " + "<col=000080>" + "archleather vambraces" + "</col>" + " within Daemonheim. (You also need level 30 Defence)."];
                case 32:
                    return [Obj.bucket_wax, Obj.rand_leather_boots_4, "Archleather boots (Tier 4)" + "<br>" + " (with 30 Defence)", "You can now wear " + "<col=000080>" + "archleather boots" + "</col>" + " within Daemonheim. (You also need level 30 Defence)."];
                case 33:
                    return [Obj.iron_arrowheads, Obj.rand_shortbow_5, "Spinebeam shortbow (Tier 5)", "You can now wield " + "<col=000080>" + "spinebeam shortbows" + "</col>" + " within Daemonheim."];
                case 34:
                    return [Obj.iron_arrowheads, Obj.rand_longbow_5, "Spinebeam longbow (Tier 5)", "You can now wield " + "<col=000080>" + "spinebeam longbows" + "</col>" + " within Daemonheim."];
                case 35:
                    return [Obj.iron_arrowheads, Obj.rand_arrow_5, "Fractite arrows (Tier 5)", "You can now use " + "<col=000080>" + "fractite arrows" + "</col>" + " within Daemonheim."];
                case 36:
                    return [Obj.iron_arrowheads, Obj.rand_coif_5, "Dromoleather coif (Tier 5)" + "<br>" + " (with 40 Defence)", "You can now wear " + "<col=000080>" + "dromoleather coifs" + "</col>" + " within Daemonheim. (You also need level 40 Defence)."];
                case 37:
                    return [Obj.iron_arrowheads, Obj.rand_leather_body_5, "Dromoleather body (Tier 5)" + "<br>" + " (with 40 Defence)", "You can now wear " + "<col=000080>" + "dromoleather bodies" + "</col>" + " within Daemonheim. (You also need level 40 Defence)."];
                case 38:
                    return [Obj.iron_arrowheads, Obj.rand_chaps_5, "Dromoleather chaps (Tier 5)" + "<br>" + " (with 40 Defence)", "You can now wear " + "<col=000080>" + "dromoleather chaps" + "</col>" + " within Daemonheim. (You also need level 40 Defence)."];
                case 39:
                    return [Obj.iron_arrowheads, Obj.rand_vambraces_5, "Dromoleather vambraces (Tier 5)" + "<br>" + " (with 40 Defence)", "You can now wear " + "<col=000080>" + "dromoleather vambraces" + "</col>" + " within Daemonheim. (You also need level 40 Defence)."];
                case 40:
                    return [Obj.iron_arrowheads, Obj.rand_leather_boots_5, "Dromoleather boots (Tier 5)" + "<br>" + " (with 40 Defence)", "You can now wear " + "<col=000080>" + "dromoleather boots" + "</col>" + " within Daemonheim. (You also need level 40 Defence)."];
                case 41:
                    return [Obj.obj_50, Obj.rand_shortbow_6, "Members: Bovistrangler shortbow (Tier 6)", "Members can now wield " + "<col=000080>" + "bovistrangler shortbows" + "</col>" + " within Daemonheim."];
                case 42:
                    return [Obj.obj_50, Obj.rand_longbow_6, "Members: Bovistrangler longbow (Tier 6)", "Members can now wield " + "<col=000080>" + "bovistrangler longbows" + "</col>" + " within Daemonheim."];
                case 43:
                    return [Obj.obj_50, Obj.rand_arrow_6, "Members: Zephyrium arrows (Tier 6)", "Members can now use " + "<col=000080>" + "zephyrium arrows" + "</col>" + " within Daemonheim."];
                case 44:
                    return [Obj.obj_50, Obj.rand_coif_6, "Members: Spinoleather coif (Tier 6)" + "<br>" + " (with 50 Defence)", "Members can now wear " + "<col=000080>" + "spinoleather coifs" + "</col>" + " within Daemonheim. (They also need level 50 Defence)."];
                case 45:
                    return [Obj.obj_50, Obj.rand_leather_body_6, "Members: Spinoleather body (Tier 6)" + "<br>" + " (with 50 Defence)", "Members can now wear " + "<col=000080>" + "spinoleather bodies" + "</col>" + " within Daemonheim. (They also need level 50 Defence)."];
                case 46:
                    return [Obj.obj_50, Obj.rand_chaps_6, "Members: Spinoleather chaps (Tier 6)" + "<br>" + " (with 50 Defence)", "Members can now wear " + "<col=000080>" + "spinoleather chaps" + "</col>" + " within Daemonheim. (They also need level 50 Defence)."];
                case 47:
                    return [Obj.obj_50, Obj.rand_vambraces_6, "Members: Spinoleather vambraces (Tier 6)" + "<br>" + " (with 50 Defence)", "Members can now wear " + "<col=000080>" + "spinoleather vambraces" + "</col>" + " within Daemonheim. (They also need level 50 Defence)."];
                case 48:
                    return [Obj.obj_50, Obj.rand_leather_boots_6, "Members: Spinoleather boots (Tier 6)" + "<br>" + " (with 50 Defence)", "Members can now wear " + "<col=000080>" + "spinoleather boots" + "</col>" + " within Daemonheim. (They also need level 50 Defence)."];
                case 49:
                    return [Obj.obj_60, Obj.rand_shortbow_7, "Members: Thigat shortbow (Tier 7)", "Members can now wield " + "<col=000080>" + "thigat shortbows" + "</col>" + " within Daemonheim."];
                case 50:
                    return [Obj.obj_60, Obj.rand_longbow_7, "Members: Thigat longbow (Tier 7)", "Members can now wield " + "<col=000080>" + "thigat longbows" + "</col>" + " within Daemonheim."];
                case 51:
                    return [Obj.obj_60, Obj.rand_arrow_7, "Members: Argonite arrows (Tier 7)", "Members can now use " + "<col=000080>" + "argonite arrows" + "</col>" + " within Daemonheim."];
                case 52:
                    return [Obj.obj_60, Obj.rand_coif_7, "Members: Gallileather coif (Tier 7)" + "<br>" + " (with 60 Defence)", "Members can now wear " + "<col=000080>" + "gallileather coifs" + "</col>" + " within Daemonheim. (They also need level 60 Defence)."];
                case 53:
                    return [Obj.obj_60, Obj.rand_leather_body_7, "Members: Gallileather body (Tier 7)" + "<br>" + " (with 60 Defence)", "Members can now wear " + "<col=000080>" + "gallileather bodies" + "</col>" + " within Daemonheim. (They also need level 60 Defence)."];
                case 54:
                    return [Obj.obj_60, Obj.rand_chaps_7, "Members: Gallileather chaps (Tier 7)" + "<br>" + " (with 60 Defence)", "Members can now wear " + "<col=000080>" + "gallileather chaps" + "</col>" + " within Daemonheim. (They also need level 60 Defence)."];
                case 55:
                    return [Obj.obj_60, Obj.rand_vambraces_7, "Members: Gallileather vambraces (Tier 7)" + "<br>" + " (with 60 Defence)", "Members can now wear " + "<col=000080>" + "gallileather vambraces" + "</col>" + " within Daemonheim. (They also need level 60 Defence)."];
                case 56:
                    return [Obj.obj_60, Obj.rand_leather_boots_7, "Members: Gallileather boots (Tier 7)" + "<br>" + " (with 60 Defence)", "Members can now wear " + "<col=000080>" + "gallileather boots" + "</col>" + " within Daemonheim. (They also need level 60 Defence)."];
                case 57:
                    return [Obj.obj_70, Obj.rand_shortbow_8, "Members: Corpsethorn shortbow (Tier 8)", "Members can now wield " + "<col=000080>" + "corpsethorn shortbows" + "</col>" + " within Daemonheim."];
                case 58:
                    return [Obj.obj_70, Obj.rand_longbow_8, "Members: Corpsethorn longbow (Tier 8)", "Members can now wield " + "<col=000080>" + "corpsethorn longbows" + "</col>" + " within Daemonheim."];
                case 59:
                    return [Obj.obj_70, Obj.rand_arrow_8, "Members: Katagon arrows (Tier 8)", "Members can now use " + "<col=000080>" + "katagon arrows" + "</col>" + " within Daemonheim."];
                case 60:
                    return [Obj.obj_70, Obj.rand_coif_8, "Members: Stegoleather coif (Tier 8)" + "<br>" + " (with 70 Defence)", "Members can now wear " + "<col=000080>" + "stegoleather coifs" + "</col>" + " within Daemonheim. (They also need level 70 Defence)."];
                case 61:
                    return [Obj.obj_70, Obj.rand_leather_body_8, "Members: Stegoleather body (Tier 8)" + "<br>" + " (with 70 Defence)", "Members can now wear " + "<col=000080>" + "stegoleather bodies" + "</col>" + " within Daemonheim. (They also need level 70 Defence)."];
                case 62:
                    return [Obj.obj_70, Obj.rand_chaps_8, "Members: Stegoleather chaps (Tier 8)" + "<br>" + " (with 70 Defence)", "Members can now wear " + "<col=000080>" + "stegoleather chaps" + "</col>" + " within Daemonheim. (They also need level 70 Defence)."];
                case 63:
                    return [Obj.obj_70, Obj.rand_vambraces_8, "Members: Stegoleather vambraces (Tier 8)" + "<br>" + " (with 70 Defence)", "Members can now wear " + "<col=000080>" + "stegoleather vambraces" + "</col>" + " within Daemonheim. (They also need level 70 Defence)."];
                case 64:
                    return [Obj.obj_70, Obj.rand_leather_boots_8, "Members: Stegoleather boots (Tier 8)" + "<br>" + " (with 70 Defence)", "Members can now wear " + "<col=000080>" + "stegoleather boots" + "</col>" + " within Daemonheim. (They also need level 70 Defence)."];
                case 65:
                    return [Obj.obj_80, Obj.rand_shortbow_9, "Members: Entgallow shortbow (Tier 9)", "Members can now wield " + "<col=000080>" + "entgallow shortbows" + "</col>" + " within Daemonheim."];
                case 66:
                    return [Obj.obj_80, Obj.rand_longbow_9, "Members: Entgallow longbow (Tier 9)", "Members can now wield " + "<col=000080>" + "entgallow longbows" + "</col>" + " within Daemonheim."];
                case 67:
                    return [Obj.obj_80, Obj.rand_arrow_9, "Members: Gorgonite arrows (Tier 9)", "Members can now use " + "<col=000080>" + "gorgonite arrows" + "</col>" + " within Daemonheim."];
                case 68:
                    return [Obj.obj_80, Obj.rand_coif_9, "Members: Megaleather coif (Tier 9)" + "<br>" + " (with 80 Defence)", "Members can now wear " + "<col=000080>" + "megaleather coifs" + "</col>" + " within Daemonheim. (They also need level 80 Defence)."];
                case 69:
                    return [Obj.obj_80, Obj.rand_leather_body_9, "Members: Megaleather body (Tier 9)" + "<br>" + " (with 80 Defence)", "Members can now wear " + "<col=000080>" + "megaleather bodies" + "</col>" + " within Daemonheim. (They also need level 80 Defence)."];
                case 70:
                    return [Obj.obj_80, Obj.rand_chaps_9, "Members: Megaleather chaps (Tier 9)" + "<br>" + " (with 80 Defence)", "Members can now wear " + "<col=000080>" + "megaleather chaps" + "</col>" + " within Daemonheim. (They also need level 80 Defence)."];
                case 71:
                    return [Obj.obj_80, Obj.rand_vambraces_9, "Members: Megaleather vambraces (Tier 9)" + "<br>" + " (with 80 Defence)", "Members can now wear " + "<col=000080>" + "megaleather vambraces" + "</col>" + " within Daemonheim. (They also need level 80 Defence)."];
                case 72:
                    return [Obj.obj_80, Obj.rand_leather_boots_9, "Members: Megaleather boots (Tier 9)" + "<br>" + " (with 80 Defence)", "Members can now wear " + "<col=000080>" + "megaleather boots" + "</col>" + " within Daemonheim. (They also need level 80 Defence)."];
                case 73:
                    return [Obj.ikov_lever, Obj.rand_grounding_boots, "Members: Grounding boots" + "<br>" + " (with 83 Defence)", "Members can now wear " + "<col=000080>" + "grounding boots" + "</col>" + " within Daemonheim. (They also need level 83 Defence.)"];
                case 74:
                    return [Obj.childs_blanket, Obj.rand_shortbow_10, "Members: Grave creeper shortbow (Tier 10)", "Members can now wield " + "<col=000080>" + "grave creeper shortbows" + "</col>" + " within Daemonheim."];
                case 75:
                    return [Obj.childs_blanket, Obj.rand_longbow_10, "Members: Grave creeper longbow (Tier 10)", "Members can now wield " + "<col=000080>" + "grave creeper longbows" + "</col>" + " within Daemonheim."];
                case 76:
                    return [Obj.childs_blanket, Obj.rand_arrow_10, "Members: Promethium arrows (Tier 10)", "Members can now use " + "<col=000080>" + "promethium arrows" + "</col>" + " within Daemonheim."];
                case 77:
                    return [Obj.childs_blanket, Obj.rand_coif_10, "Members: Tyrannoleather coif (Tier 10)" + "<br>" + " (with 90 Defence)", "Members can now wear " + "<col=000080>" + "tyrannoleather coifs" + "</col>" + " within Daemonheim. (They also need level 90 Defence)."];
                case 78:
                    return [Obj.childs_blanket, Obj.rand_leather_body_10, "Members: Tyrannoleather body (Tier 10)" + "<br>" + " (with 90 Defence)", "Members can now wear " + "<col=000080>" + "tyrannoleather bodies" + "</col>" + " within Daemonheim. (They also need level 90 Defence)."];
                case 79:
                    return [Obj.childs_blanket, Obj.rand_chaps_10, "Members: Tyrannoleather chaps (Tier 10)" + "<br>" + " (with 90 Defence)", "Members can now wear " + "<col=000080>" + "tyrannoleather chaps" + "</col>" + " within Daemonheim. (They also need level 90 Defence)."];
                case 80:
                    return [Obj.childs_blanket, Obj.rand_vambraces_10, "Members: Tyrannoleather vambraces (Tier 10)" + "<br>" + " (with 90 Defence)", "Members can now wear " + "<col=000080>" + "tyrannoleather vambraces" + "</col>" + " within Daemonheim. (They also need level 90 Defence)."];
                case 81:
                    return [Obj.childs_blanket, Obj.rand_leather_boots_10, "Members: Tyrannoleather boots (Tier 10)" + "<br>" + " (with 90 Defence)", "Members can now wear " + "<col=000080>" + "tyrannoleather boots" + "</col>" + " within Daemonheim. (They also need level 90 Defence)."];
                case 82:
                    return [Obj.obj_98, Obj.rand_mage_slayer_bow, "Members: Hexhunter bow", "Members can now wield " + "<col=000080>" + "hexhunter shortbows" + "</col>" + " within Daemonheim."];
                case 83:
                    return [Obj.obj_99, Obj.rand_shortbow_11, "Members: Sagittarian shortbow (Tier 11)", "Members can now wield " + "<col=000080>" + "sagittarian shortbows" + "</col>" + " within Daemonheim."];
                case 84:
                    return [Obj.obj_99, Obj.rand_longbow_11, "Members: Sagittarian longbow (Tier 11)", "Members can now wield " + "<col=000080>" + "sagittarian longbows" + "</col>" + " within Daemonheim."];
                case 85:
                    return [Obj.obj_99, Obj.rand_arrow_11, "Members: Sagittarian arrows (Tier 11)", "Members can now use " + "<col=000080>" + "sagittarian arrows" + "</col>" + " within Daemonheim."];
                case 86:
                    return [Obj.obj_99, Obj.rand_coif_11, "Members: Sagittarian coif (Tier 11)" + "<br>" + " (with 99 Defence)", "Members can now wear " + "<col=000080>" + "sagittarian coifs" + "</col>" + " within Daemonheim. (They also need level 99 Defence)."];
                case 87:
                    return [Obj.obj_99, Obj.rand_leather_body_11, "Members: Sagittarian body (Tier 11)" + "<br>" + " (with 99 Defence)", "Members can now wear " + "<col=000080>" + "sagittarian bodies" + "</col>" + " within Daemonheim. (They also need level 99 Defence)."];
                case 88:
                    return [Obj.obj_99, Obj.rand_chaps_11, "Members: Sagittarian chaps (Tier 11)" + "<br>" + " (with 99 Defence)", "Members can now wear " + "<col=000080>" + "sagittarian chaps" + "</col>" + " within Daemonheim. (They also need level 99 Defence)."];
                case 89:
                    return [Obj.obj_99, Obj.rand_vambraces_11, "Members: Sagittarian vambraces (Tier 11)" + "<br>" + " (with 99 Defence)", "Members can now wear " + "<col=000080>" + "sagittarian vambraces" + "</col>" + " within Daemonheim. (They also need level 99 Defence)."];
                case 90:
                    return [Obj.obj_99, Obj.rand_leather_boots_11, "Members: Sagittarian boots (Tier 11)" + "<br>" + " (with 99 Defence)", "Members can now wear " + "<col=000080>" + "sagittarian boots" + "</col>" + " within Daemonheim. (They also need level 99 Defence)."];
            }
            break;
        case 10:
            switch (intArg1) {
                case 0:
                    return [Obj.iron_arrowheads, Obj.poh_ranging_game_3, "Members: Ranging Guild", "Members can now enter the prestigious " + "<col=000080>" + "Ranging Guild" + "</col>" + " in Hemenster and play the " + "<col=000080>" + "Target Practice" + "</col>" + " game there."];
                case 1:
                    return [Obj.obj_99, Obj.obj_9756, "Skill mastery", "<col=000080>" + "Congratulations! You are now a master of " + "<col=800000>" + "Ranged" + "<col=000080>" + ". Members can visit the " + "<col=800000>" + "armour salesman" + "<col=000080>" + " at the " + "<col=800000>" + "Ranging Guild" + "<col=000080>" + ". He has something special only available to true masters of the " + "<col=800000>" + "Ranged" + "<col=000080>" + " skill!"];
            }
            break;
    }
    return [Obj.mcannonremains, -1, "", ""];
}
