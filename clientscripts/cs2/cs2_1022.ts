/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1022

function cs2_1022(intArg0: number, intArg1: number): [obj, obj, string, string] {
    switch (intArg0) {
        case 0:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.bronze_bar, "Bronze" + "<br>" + " 1 tin ore and 1 copper ore", "You can now smelt " + "<col=000080>" + "bronze" + "</col>" + "."];
                case 1:
                    return [Obj.twpart2, Obj.blurite_bar, "Blurite" + "<br>" + " (after The Knight's Sword)", "You now have the Smithing level required to smelt " + "<col=000080>" + "blurite" + "</col>" + " (after The Knight's Sword)."];
                case 2:
                    return [Obj.holy_table_napkin, Obj.iron_bar, "Iron" + "<br>" + " 50% chance of success, rising until level 45", "You can now smelt " + "<col=000080>" + "iron" + "</col>" + "."];
                case 3:
                    return [Obj.whitecog, Obj.elemental_workshop_bar, "Members: Elemental metal" + "<br>" + " (after Elemental Workshop)", "Members now have the Smithing level required to smelt " + "<col=000080>" + "elemental metal" + "</col>" + " (after Elemental Workshop)."];
                case 4:
                    return [Obj.whitecog, Obj.silver_bar, "Silver", "You can now smelt " + "<col=000080>" + "silver" + "</col>" + "."];
                case 5:
                    return [Obj.bucket_wax, Obj.steel_bar, "Steel" + "<br>" + " 2 coal and 1 iron ore", "You can now smelt " + "<col=000080>" + "steel" + "</col>" + "."];
                case 6:
                    return [Obj.iron_arrowheads, Obj.gold_bar, "Gold", "You can now smelt " + "<col=000080>" + "gold" + "</col>" + "."];
                case 7:
                    return [Obj.opal_bolttips, Obj.iron_bar, "Iron" + "<br>" + " 80% chance of success", "Your chance of successfully smelting " + "<col=000080>" + "iron" + "</col>" + " has reached its maximum."];
                case 8:
                    return [Obj.obj_50, Obj.mithril_bar, "Mithril" + "<br>" + " 4 coal and 1 mithril ore", "You can now smelt " + "<col=000080>" + "mithril" + "</col>" + "."];
                case 9:
                    return [Obj.obj_70, Obj.adamantite_bar, "Adamant" + "<br>" + " 6 coal and 1 adamantite ore", "You can now smelt " + "<col=000080>" + "adamantite" + "</col>" + "."];
                case 10:
                    return [Obj.khali_brew, Obj.obj_21778, "Members: Bane ore" + "<br>" + " (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smelt " + "<col=000080>" + "bane ore" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 11:
                    return [Obj.ikov_shinykey, Obj.runite_bar, "Rune" + "<br>" + " 8 coal and 1 runite ore", "You can now smelt " + "<col=000080>" + "runite" + "</col>" + "."];
            }
            break;
        case 1:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.bronze_dagger, "Bronze dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bronze daggers" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.bronze_med_helm, "Bronze helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bronze helms" + "</col>" + "."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.bronze_axe, "Bronze hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bronze hatchets" + "</col>" + "."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.bronze_arrowheads, "Members: Bronze arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "bronze arrowheads" + "</col>" + "."];
                case 4:
                    return [Obj.mcannonball, Obj.bronze_mace, "Bronze mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bronze maces" + "</col>" + "."];
                case 5:
                    return [Obj.nulodions_notes, Obj.xbows_crossbow_bolts_bronze_unfeathered, "Members: Bronze crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "bronze crossbow bolts" + "</col>" + "."];
                case 6:
                    return [Obj.ammo_mould, Obj.bronze_sword, "Bronze sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bronze swords" + "</col>" + "."];
                case 7:
                    return [Obj.ammo_mould, Obj.bronze_dart_tip, "Members: Bronze dart tip" + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith bronze dart tips" + "</col>" + " (after Tourist Trap)."];
                case 8:
                    return [Obj.ammo_mould, Obj.bronzecraftwire, "Members: Bronze wire" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "bronze wire" + "</col>" + "."];
                case 9:
                    return [Obj.ammo_mould, Obj.nails_bronze, "Members: Bronze nails" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "bronze nails" + "</col>" + "."];
                case 10:
                    return [Obj.mcannonbook, Obj.bronze_scimitar, "Bronze scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bronze scimitars" + "</col>" + "."];
                case 11:
                    return [Obj.mcannonbook, Obj.bronze_spear, "Members: Bronze spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "bronze spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 12:
                    return [Obj.mcannonbook, Obj.brut_bronze_spear, "Members: Bronze hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "bronze hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 13:
                    return [Obj.mcannonbook, Obj.bronze_pickaxe, "Members: Bronze pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith bronze " + "<col=000080>" + "pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 14:
                    return [Obj.twpart1, Obj.xbows_crossbow_limbs_bronze, "Members: Bronze crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "bronze crossbow limbs" + "</col>" + "."];
                case 15:
                    return [Obj.twpart1, Obj.bronze_longsword, "Bronze longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bronze longswords" + "</col>" + "."];
                case 16:
                    return [Obj.cert_twpart1, Obj.bronze_full_helm, "Bronze full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bronze full helms" + "</col>" + "."];
                case 17:
                    return [Obj.cert_twpart1, Obj.bronze_knife, "Members: Bronze throwing knife" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "bronze throwing knives" + "</col>" + "."];
                case 18:
                    return [Obj.twpart2, Obj.obj_1173, "Bronze square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bronze square shields" + "</col>" + "."];
                case 19:
                    return [Obj.cert_twpart2, Obj.bronze_warhammer, "Bronze warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze warhammers" + "</col>" + "."];
                case 20:
                    return [Obj.twpart3, Obj.bronze_battleaxe, "Bronze battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze battleaxes" + "</col>" + "."];
                case 21:
                    return [Obj.cert_twpart3, Obj.bronze_chainbody, "Bronze chainbody" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze chainbodies" + "</col>" + "."];
                case 22:
                    return [Obj.twpart4, Obj.bronze_kiteshield, "Bronze kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze kiteshields" + "</col>" + "."];
                case 23:
                    return [Obj.cert_twpart4, Obj.bronze_claws, "Members: Bronze claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "bronze claws" + "</col>" + " (after Death Plateau)."];
                case 24:
                    return [Obj.obj_14, Obj.bronze_2h_sword, "Bronze two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze two-handed swords" + "</col>" + "."];
                case 25:
                    return [Obj.magic_whistle, Obj.bronze_platelegs, "Bronze platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze platelegs" + "</col>" + "."];
                case 26:
                    return [Obj.magic_whistle, Obj.bronze_plateskirt, "Bronze plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bronze plateskirts" + "</col>" + "."];
                case 27:
                    return [Obj.magic_golden_feather, Obj.bronze_platebody, "Bronze platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "bronze platebodies" + "</col>" + "."];
            }
            break;
        case 2:
            if (intArg1 == 0) {
                return [-1, Obj.obj_7620, "You will not be able to smith blurite until you have completed The Knight's Sword.", ""];
            }
            if (intArg1 == 1) {
                return [Obj.twpart2, Obj.xbows_crossbow_bolts_blurite_unfeathered, "Blurite crossbow bolts" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "blurite crossbow bolts" + "</col>" + " (after the Knight's Sword)."];
            }
            if (intArg1 == 2) {
                return [Obj.cert_twpart4, Obj.xbows_crossbow_limbs_blurite, "Blurite crossbow limbs" + "<br>" + " 1 bar", "Members now have the Smithing level required to smith " + "<col=000080>" + "blurite crossbow limbs" + "</col>" + " (after The Knight's Sword)."];
            }
            break;
        case 3:
            switch (intArg1) {
                case 0:
                    return [Obj.holy_table_napkin, Obj.iron_dagger, "Iron dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "iron daggers" + "</col>" + "."];
                case 1:
                    return [Obj.magic_whistle, Obj.iron_axe, "Iron hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "iron hatchets" + "</col>" + "."];
                case 2:
                    return [Obj.grail_bell, Obj.iron_mace, "Iron mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "iron maces" + "</col>" + "."];
                case 3:
                    return [Obj.grail_bell, Obj.spit_iron, "Members: Iron spit" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "iron spits" + "</col>" + "."];
                case 4:
                    return [Obj.magic_golden_feather, Obj.iron_med_helm, "Iron helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "iron helms" + "</col>" + "."];
                case 5:
                    return [Obj.magic_golden_feather, Obj.xbows_crossbow_bolts_iron_unfeathered, "Members: Iron crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "iron crossbow bolts" + "</col>" + "."];
                case 6:
                    return [Obj.holy_grail, Obj.iron_sword, "Iron sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "iron swords" + "</col>" + "."];
                case 7:
                    return [Obj.holy_grail, Obj.iron_dart_tip, "Members: Iron dart tip" + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "iron dart tips" + "</col>" + " (after Tourist Trap)."];
                case 8:
                    return [Obj.holy_grail, Obj.nails_iron, "Members: Iron nails" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "iron nails" + "</col>" + "."];
                case 9:
                    return [Obj.whitecog, Obj.iron_scimitar, "Iron scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "iron scimitars" + "</col>" + "."];
                case 10:
                    return [Obj.whitecog, Obj.iron_spear, "Members: Iron spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 oak log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "iron spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.whitecog, Obj.brut_iron_spear, "Members: Iron hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 oak log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "iron hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 12:
                    return [Obj.whitecog, Obj.iron_arrowheads, "Members: Iron arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "iron arrowheads" + "</col>" + "."];
                case 13:
                    return [Obj.whitecog, Obj.iron_pickaxe, "Members: Iron pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "iron pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 14:
                    return [Obj.blackcog, Obj.iron_longsword, "Iron longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "iron longswords" + "</col>" + "."];
                case 15:
                    return [Obj.bluecog, Obj.iron_full_helm, "Iron full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "iron full helms" + "</col>" + "."];
                case 16:
                    return [Obj.bluecog, Obj.iron_knife, "Members: Iron throwing knife" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "iron throwing knives" + "</col>" + "."];
                case 17:
                    return [Obj.redcog, Obj.obj_1175, "Iron square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "iron square shields" + "</col>" + "."];
                case 18:
                    return [Obj.redcog, Obj.xbows_crossbow_limbs_iron, "Members: Iron crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "iron crossbow limbs" + "</col>" + "."];
                case 19:
                    return [Obj.rat_poison, Obj.iron_warhammer, "Iron warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron warhammers" + "</col>" + "."];
                case 20:
                    return [Obj.red_vine_worm, Obj.iron_battleaxe, "Iron battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron battleaxes" + "</col>" + "."];
                case 21:
                    return [Obj.hemenster_fishing_trophy, Obj.iron_chainbody, "Iron chainbody" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron chainbodies" + "</col>" + "."];
                case 22:
                    return [Obj.hemenster_fishing_trophy, Obj.oil_lantern_frame, "Members: Oil lantern frame" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "oil lantern frames" + "</col>" + "."];
                case 23:
                    return [Obj.fishing_competition_pass, Obj.iron_kiteshield, "Iron kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron kiteshields" + "</col>" + "."];
                case 24:
                    return [Obj.insect_repellent, Obj.iron_claws, "Members: Iron claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "iron claws" + "</col>" + " (after Death Plateau)."];
                case 25:
                    return [Obj.obj_29, Obj.iron_2h_sword, "Iron two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron two-handed swords" + "</col>" + "."];
                case 26:
                    return [Obj.obj_31, Obj.iron_platelegs, "Iron platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron platelegs" + "</col>" + "."];
                case 27:
                    return [Obj.obj_31, Obj.iron_plateskirt, "Iron plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "iron plateskirts" + "</col>" + "."];
                case 28:
                    return [Obj.obj_33, Obj.iron_platebody, "Iron platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "iron platebodies" + "</col>" + "."];
            }
            break;
        case 4:
            switch (intArg1) {
                case 0:
                    return [Obj.bucket_wax, Obj.steel_dagger, "Steel dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "steel daggers" + "</col>" + "."];
                case 1:
                    return [Obj.obj_31, Obj.steel_axe, "Steel hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "steel hatchets" + "</col>" + "."];
                case 2:
                    return [Obj.obj_32, Obj.steel_mace, "Steel mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "steel maces" + "</col>" + "."];
                case 3:
                    return [Obj.obj_33, Obj.steel_med_helm, "Steel helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "steel helms" + "</col>" + "."];
                case 4:
                    return [Obj.obj_33, Obj.xbows_crossbow_bolts_steel_unfeathered, "Members: Steel crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "steel crossbow bolts" + "</col>" + "."];
                case 5:
                    return [Obj.obj_34, Obj.steel_sword, "Steel sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "steel swords" + "</col>" + "."];
                case 6:
                    return [Obj.obj_34, Obj.nails, "Steel nails" + "<br>" + " 1 bar makes 15", "You can now smith " + "<col=000080>" + "steel nails" + "</col>" + "."];
                case 7:
                    return [Obj.obj_34, Obj.steel_dart_tip, "Members: Steel dart tip" + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "steel dart tips" + "</col>" + " (after Tourist Trap)."];
                case 8:
                    return [Obj.excalibur, Obj.steel_scimitar, "Steel scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "steel scimitars" + "</col>" + "."];
                case 9:
                    return [Obj.excalibur, Obj.steel_spear, "Members: Steel spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 willow log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "steel spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 10:
                    return [Obj.excalibur, Obj.brut_steel_spear, "Members: Steel hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 willow log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "steel hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.excalibur, Obj.steel_arrowheads, "Members: Steel arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "steel arrowheads" + "</col>" + "."];
                case 12:
                    return [Obj.excalibur, Obj.mcannonball, "Members: Cannonball" + "<br>" + " (after Dwarf Cannon)" + "<br>" + " 1 bar makes 4", "Members now have the Smithing level required to smith " + "<col=000080>" + "steel cannonballs" + "</col>" + " (after Dwarf Cannon)."];
                case 13:
                    return [Obj.excalibur, Obj.steel_pickaxe, "Members: Steel pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "steel pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 14:
                    return [Obj.obj_36, Obj.xbows_crossbow_limbs_steel, "Members: Steel crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "steel crossbow limbs" + "</col>" + "."];
                case 15:
                    return [Obj.obj_36, Obj.steel_longsword, "Steel longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "steel longswords" + "</col>" + "."];
                case 16:
                    return [Obj.obj_36, Obj.studs, "Members: Steel studs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "steel studs" + "</col>" + "."];
                case 17:
                    return [Obj.obj_37, Obj.steel_full_helm, "Steel full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "steel full helms" + "</col>" + "."];
                case 18:
                    return [Obj.obj_37, Obj.steel_knife, "Members: Steel throwing knife" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "steel throwing knives" + "</col>" + "."];
                case 19:
                    return [Obj.unlit_black_candle, Obj.steel_sq_shield, "Steel square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "steel square shields" + "</col>" + "."];
                case 20:
                    return [Obj.bronze_arrowheads, Obj.steel_warhammer, "Steel warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel warhammers" + "</col>" + "."];
                case 21:
                    return [Obj.iron_arrowheads, Obj.steel_battleaxe, "Steel battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel battleaxes" + "</col>" + "."];
                case 22:
                    return [Obj.steel_arrowheads, Obj.steel_chainbody, "Steel chainbody" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel chainbodies" + "</col>" + "."];
                case 23:
                    return [Obj.mithril_arrowheads, Obj.steel_kiteshield, "Steel kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel kiteshields" + "</col>" + "."];
                case 24:
                    return [Obj.adamant_arrowheads, Obj.steel_claws, "Members: Steel claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "steel claws" + "</col>" + " (after Death Plateau)."];
                case 25:
                    return [Obj.rune_arrowheads, Obj.steel_2h_sword, "Steel two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel two-handed swords" + "</col>" + "."];
                case 26:
                    return [Obj.pearl_bolttips, Obj.steel_platelegs, "Steel platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel platelegs" + "</col>" + "."];
                case 27:
                    return [Obj.pearl_bolttips, Obj.steel_plateskirt, "Steel plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "steel plateskirts" + "</col>" + "."];
                case 28:
                    return [Obj.obj_48, Obj.steel_platebody, "Steel platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "steel platebodies" + "</col>" + "."];
                case 29:
                    return [Obj.obj_49, Obj.bullseye_lantern_nolens, "Members: Bullseye lantern frame" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "bullseye lantern frames" + "</col>" + "."];
            }
            break;
        case 5:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_50, Obj.mithril_dagger, "Mithril dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "mithril daggers" + "</col>" + "."];
                case 1:
                    return [Obj.obj_51, Obj.mithril_axe, "Mithril hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "mithril hatchets" + "</col>" + "."];
                case 2:
                    return [Obj.obj_52, Obj.mithril_mace, "Mithril mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "mithril maces" + "</col>" + "."];
                case 3:
                    return [Obj.obj_53, Obj.mithril_med_helm, "Mithril helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "mithril helms" + "</col>" + "."];
                case 4:
                    return [Obj.obj_53, Obj.xbows_crossbow_bolts_mithril_unfeathered, "Members: Mithril crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "mithril crossbow bolts" + "</col>" + "."];
                case 5:
                    return [Obj.obj_54, Obj.mithril_sword, "Mithril sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "mithril swords" + "</col>" + "."];
                case 6:
                    return [Obj.obj_54, Obj.mithril_dart_tip, "Members: Mithril dart tip" + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "mithril dart tips" + "</col>" + " (after Tourist Trap)."];
                case 7:
                    return [Obj.obj_54, Obj.nails_mithril, "Members: Mithril nail" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "mithril nails" + "</col>" + "."];
                case 8:
                    return [Obj.obj_55, Obj.mithril_scimitar, "Mithril scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "mithril scimitars" + "</col>" + "."];
                case 9:
                    return [Obj.obj_55, Obj.mithril_spear, "Members: Mithril spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 maple log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "mithril spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 10:
                    return [Obj.obj_55, Obj.brut_mithril_spear, "Members: Mithril hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 maple log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "mithril hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.obj_55, Obj.mithril_arrowheads, "Members: Mithril arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "mithril arrowheads" + "</col>" + "."];
                case 12:
                    return [Obj.obj_55, Obj.mithril_pickaxe, "Members: Mithril pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "mithril pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 13:
                    return [Obj.obj_56, Obj.xbows_crossbow_limbs_mithril, "Members: Mithril crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "mithril crossbow limbs" + "</col>" + "."];
                case 14:
                    return [Obj.obj_56, Obj.mithril_longsword, "Mithril longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "mithril longswords" + "</col>" + "."];
                case 15:
                    return [Obj.obj_57, Obj.mithril_full_helm, "Mithril full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "mithril full helms" + "</col>" + "."];
                case 16:
                    return [Obj.obj_57, Obj.mithril_knife, "Members: Mithril throwing knife" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "mithril throwing knives" + "</col>" + "."];
                case 17:
                    return [Obj.obj_58, Obj.mithril_sq_shield, "Mithril square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "mithril square shields" + "</col>" + "."];
                case 18:
                    return [Obj.obj_59, Obj.mithril_warhammer, "Mithril warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril warhammers" + "</col>" + "."];
                case 19:
                    return [Obj.obj_59, Obj.obj_9416, "Members: Mithril crossbow grapple tip" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "mithril crossbow grapple tips" + "</col>" + "."];
                case 20:
                    return [Obj.obj_60, Obj.mithril_battleaxe, "Mithril battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril battleaxes" + "</col>" + "."];
                case 21:
                    return [Obj.obj_61, Obj.mithril_chainbody, "Mithril chainbody" + "<br>" + " 3 bars", "You can now smith" + "<col=000080>" + " mithril chainbodies" + "</col>" + "."];
                case 22:
                    return [Obj.obj_62, Obj.mithril_kiteshield, "Mithril kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril kiteshields" + "</col>" + "."];
                case 23:
                    return [Obj.obj_63, Obj.mithril_claws, "Members: Mithril claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "mithril claws" + "</col>" + " (after Death Plateau)."];
                case 24:
                    return [Obj.obj_64, Obj.mithril_2h_sword, "Mithril two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril two-handed swords" + "</col>" + "."];
                case 25:
                    return [Obj.obj_66, Obj.mithril_platelegs, "Mithril platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril platelegs" + "</col>" + "."];
                case 26:
                    return [Obj.obj_66, Obj.mithril_plateskirt, "Mithril plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "mithril plateskirts" + "</col>" + "."];
                case 27:
                    return [Obj.obj_68, Obj.mithril_platebody, "Mithril platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "mithril platebodies" + "</col>" + "."];
            }
            break;
        case 6:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_70, Obj.adamant_dagger, "Adamant dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "adamant daggers" + "</col>" + "."];
                case 1:
                    return [Obj.obj_71, Obj.adamant_axe, "Adamant hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "adamant hatchets" + "</col>" + "."];
                case 2:
                    return [Obj.obj_72, Obj.adamant_mace, "Adamant mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "adamant maces" + "</col>" + "."];
                case 3:
                    return [Obj.obj_73, Obj.adamant_med_helm, "Adamant helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "adamant helms" + "</col>" + "."];
                case 4:
                    return [Obj.obj_73, Obj.xbows_crossbow_bolts_adamantite_unfeathered, "Members: Adamant crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "adamant crossbow bolts" + "</col>" + "."];
                case 5:
                    return [Obj.khazard_helmet, Obj.adamant_sword, "Adamant sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "adamant swords" + "</col>" + "."];
                case 6:
                    return [Obj.khazard_helmet, Obj.adamant_dart_tip, "Members: Adamant dart tip" + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "adamant dart tips" + "</col>" + " (after Tourist Trap)."];
                case 7:
                    return [Obj.khazard_helmet, Obj.obj_4823, "Members: Adamant nail" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "adamant nails" + "</col>" + "."];
                case 8:
                    return [Obj.khazard_platemail, Obj.adamant_scimitar, "Adamant scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "adamant scimitars" + "</col>" + "."];
                case 9:
                    return [Obj.khazard_platemail, Obj.adamant_spear, "Members: Adamant spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 yew log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "adamant spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 10:
                    return [Obj.khazard_platemail, Obj.brut_adamant_spear, "Members: Adamant hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 yew log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "adamant hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.khazard_platemail, Obj.adamant_arrowheads, "Members: Adamant arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "adamant arrowheads" + "</col>" + "."];
                case 12:
                    return [Obj.khazard_platemail, Obj.adamant_pickaxe, "Members: Adamant pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "adamant pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 13:
                    return [Obj.khazard_cellkeys, Obj.obj_9429, "Members: Adamant crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "adamant crossbow limbs" + "</col>" + "."];
                case 14:
                    return [Obj.khazard_cellkeys, Obj.adamant_longsword, "Adamant longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "adamant longswords" + "</col>" + "."];
                case 15:
                    return [Obj.khali_brew, Obj.adamant_full_helm, "Adamant full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "adamant full helms" + "</col>" + "."];
                case 16:
                    return [Obj.khali_brew, Obj.adamant_knife, "Member: Adamant throwing knives" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "adamant throwing knives" + "</col>" + "."];
                case 17:
                    return [Obj.ice_arrow, Obj.adamant_sq_shield, "Adamant square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "adamant square shields" + "</col>" + "."];
                case 18:
                    return [Obj.obj_79, Obj.adamant_warhammer, "Adamant warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant warhammers" + "</col>" + "."];
                case 19:
                    return [Obj.obj_80, Obj.adamant_battleaxe, "Adamant battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant battleaxes" + "</col>" + "."];
                case 20:
                    return [Obj.obj_81, Obj.adamant_chainbody, "Adamant chainbody" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant chainbodies" + "</col>" + "."];
                case 21:
                    return [Obj.obj_82, Obj.adamant_kiteshield, "Adamant kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant kiteshields" + "</col>" + "."];
                case 22:
                    return [Obj.ikov_lever, Obj.adamant_claws, "Members: Adamant claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "adamant claws" + "</col>" + " (after Death Plateau)."];
                case 23:
                    return [Obj.obj_84, Obj.adamant_2h_sword, "Adamant two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant two-handed swords" + "</col>" + "."];
                case 24:
                    return [Obj.obj_86, Obj.adamant_platelegs, "Adamant platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant platelegs" + "</col>" + "."];
                case 25:
                    return [Obj.obj_86, Obj.adamant_plateskirt, "Adamant plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "adamant plateskirts" + "</col>" + "."];
                case 26:
                    return [Obj.ikov_bootsoflightness, Obj.adamant_platebody, "Adamant platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "adamant platebodies" + "</col>" + "."];
            }
            break;
        case 7:
            switch (intArg1) {
                case 0:
                    return [Obj.ikov_shinykey, Obj.rune_dagger, "Rune dagger" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "rune daggers" + "</col>" + "."];
                case 1:
                    return [Obj.obj_86, Obj.rune_axe, "Rune hatchet" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "rune hatchets" + "</col>" + "."];
                case 2:
                    return [Obj.ikov_pendantofarmardyl, Obj.rune_mace, "Rune mace" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "rune maces" + "</col>" + "."];
                case 3:
                    return [Obj.ikov_bootsoflightness, Obj.rune_med_helm, "Rune helm" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "rune helms" + "</col>" + "."];
                case 4:
                    return [Obj.ikov_bootsoflightness, Obj.obj_9381, "Members: Rune crossbow bolt" + "<br>" + " 1 bar makes 10", "Members can now smith " + "<col=000080>" + "rune crossbow bolts" + "</col>" + "."];
                case 5:
                    return [Obj.ikov_bootsoflightnessworn, Obj.rune_sword, "Rune sword" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "rune swords" + "</col>" + "."];
                case 6:
                    return [Obj.ikov_bootsoflightnessworn, Obj.rune_dart_tip, "Members: Rune dart tip " + "<br>" + " (after Tourist Trap)" + "<br>" + " 1 bar makes 10", "Members now have the Smithing level required to smith " + "<col=000080>" + "rune dart tips" + "</col>" + " (after Tourist Trap)."];
                case 7:
                    return [Obj.ikov_bootsoflightnessworn, Obj.nails_rune, "Members: Rune nails" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "rune nails" + "</col>" + "."];
                case 8:
                    return [Obj.childs_blanket, Obj.rune_scimitar, "Rune scimitar" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "rune scimitars" + "</col>" + "."];
                case 9:
                    return [Obj.childs_blanket, Obj.rune_spear, "Members: Rune spear" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 magic log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "rune spears" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 10:
                    return [Obj.childs_blanket, Obj.brut_rune_spear, "Members: Rune hasta" + "<br>" + " (after Tai Bwo Wannai Trio and learning barbarian smithing)" + "<br>" + " 1 bar, 1 magic log", "Members who are versed in the art of barbarian smithing now have the Smithing level required to smith " + "<col=000080>" + "rune hastae" + "</col>" + " (after Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.childs_blanket, Obj.rune_arrowheads, "Members: Rune arrowhead" + "<br>" + " 1 bar makes 15", "Members can now smith " + "<col=000080>" + "rune arrowheads" + "</col>" + "."];
                case 12:
                    return [Obj.childs_blanket, Obj.rune_pickaxe, "Members: Rune pickaxe" + "<br>" + " (after Perils of Ice Mountain)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "rune pickaxes" + "</col>" + " (after Perils of Ice Mountain)."];
                case 13:
                    return [Obj.obj_91, Obj.obj_9431, "Members: Rune crossbow limbs" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "rune crossbow limbs" + "</col>" + "."];
                case 14:
                    return [Obj.obj_91, Obj.rune_longsword, "Rune longsword" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "rune longswords" + "</col>" + "."];
                case 15:
                    return [Obj.obj_92, Obj.rune_full_helm, "Rune full helm" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "rune full helms" + "</col>" + "."];
                case 16:
                    return [Obj.obj_92, Obj.rune_knife, "Members: Rune throwing knife" + "<br>" + " 1 bar makes 5", "Members can now smith " + "<col=000080>" + "rune throwing knives" + "</col>" + "."];
                case 17:
                    return [Obj.obj_93, Obj.rune_sq_shield, "Rune square shield" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "rune square shields" + "</col>" + "."];
                case 18:
                    return [Obj.obj_94, Obj.rune_warhammer, "Rune warhammer" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune warhammers" + "</col>" + "."];
                case 19:
                    return [Obj.obj_95, Obj.rune_battleaxe, "Rune battleaxe" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune battleaxes" + "</col>" + "."];
                case 20:
                    return [Obj.obj_96, Obj.rune_chainbody, "Rune chainbody" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune chainbodies" + "</col>" + "."];
                case 21:
                    return [Obj.obj_97, Obj.rune_kiteshield, "Rune kiteshield" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune kiteshields" + "</col>" + "."];
                case 22:
                    return [Obj.obj_98, Obj.rune_claws, "Members: Rune claws" + "<br>" + " (after Death Plateau)" + "<br>" + " 2 bars", "Members now have the Smithing level required to smith " + "<col=000080>" + "rune claws" + "</col>" + " (after Death Plateau)."];
                case 23:
                    return [Obj.obj_99, Obj.rune_2h_sword, "Rune two-handed sword" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune two-handed swords" + "</col>" + "."];
                case 24:
                    return [Obj.obj_99, Obj.rune_platelegs, "Rune platelegs" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune platelegs" + "</col>" + "."];
                case 25:
                    return [Obj.obj_99, Obj.rune_plateskirt, "Rune plateskirt" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "rune plateskirts" + "</col>" + "."];
                case 26:
                    return [Obj.obj_99, Obj.rune_platebody, "Rune platebody" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "rune platebodies" + "</col>" + "."];
            }
            break;
        case 8:
            if (intArg1 == 0) {
                return [Obj.obj_50, Obj.goldbowl_empty, "Members: Gold bowl" + "<br>" + " (after starting Legends' Quest)", "Members now have the Smithing level required to smith " + "<col=000080>" + "gold bowls" + "</col>" + " (after starting Legends' Quest)."];
            }
            if (intArg1 == 1) {
                return [Obj.obj_50, Obj.dwarf_goldrock_helmet, "Members: Gold helmet" + "<br>" + " (after starting Between a Rock...)", "Members now have the Smithing level required to smith " + "<col=000080>" + "gold helmets" + "</col>" + " (after starting Between a Rock...)."];
            }
            break;
        case 9:
            switch (intArg1) {
                case 0:
                    return [Obj.whitecog, Obj.elemental_shield, "Members: Elemental shield" + "<br>" + " (after Elemental Workshop I)", "Members now have the Smithing level required to smith " + "<col=000080>" + "elemental shields" + "</col>" + " (after Elemental Workshop I)."];
                case 1:
                    return [Obj.bucket_wax, Obj.elem_elemental_helm, "Members: Elemental helmet" + "<br>" + " (after Elemental Workshop II)", "Members now have the Smithing level required to smith " + "<col=000080>" + "elemental helms" + "</col>" + " (after Elemental Workshop II)."];
                case 2:
                    return [Obj.bucket_wax, Obj.elemental_mind_shield, "Members: Mind shield" + "<br>" + " (after Elemental Workshop II)", "Members now have the Smithing level required to smith " + "<col=000080>" + "mind shields" + "</col>" + " (after Elemental Workshop II)."];
                case 3:
                    return [Obj.bucket_wax, Obj.elem_mind_helm, "Members: Mind helmet" + "<br>" + " (after Elemental Workshop II)", "Members now have the Smithing level required to smith " + "<col=000080>" + "mind helmets" + "</col>" + " (after Elemental Workshop II)."];
                case 4:
                    return [Obj.obj_33, Obj.elemental_body_shield, "Members: Body shield" + "<br>" + " (after Elemental Workshop III)", "Members now have the Smithing level required to smith " + "<col=000080>" + "body shields" + "</col>" + " (after Elemental Workshop III)."];
                case 5:
                    return [Obj.obj_33, Obj.elem_body_helm, "Members: Body helmet" + "<br>" + " (after Elemental Workshop III)", "Members now have the Smithing level required to smith " + "<col=000080>" + "body helmets" + "</col>" + " (after Elemental Workshop III)."];
                case 6:
                    return [Obj.obj_33, Obj.elem3_elem_body, "Members: Elemental body" + "<br>" + " (after Elemental Workshop III)", "Members now have the Smithing level required to smith " + "<col=000080>" + "elemental bodies" + "</col>" + " (after Elemental Workshop III)."];
                case 7:
                    return [Obj.obj_33, Obj.elem3_mind_body, "Members: Mind body" + "<br>" + " (after Elemental Workshop III)", "Members now have the Smithing level required to smith " + "<col=000080>" + "mind bodies" + "</col>" + " (after Elemental Workshop III)."];
                case 8:
                    return [Obj.obj_33, Obj.elem3_body_body, "Members: Body body" + "<br>" + " (after Elemental Workshop III)", "Members now have the Smithing level required to smith " + "<col=000080>" + "body bodies" + "</col>" + " (after Elemental Workshop III)."];
                case 9:
                    return [Obj.unlit_black_candle, Obj.elem4_elem_gloves, "Members: Elemental gloves" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "elemental gloves" + "</col>" + " (after Elemental Workshop IV)."];
                case 10:
                    return [Obj.unlit_black_candle, Obj.elem4_mind_gloves, "Members: Mind gloves" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "mind gloves" + "</col>" + " (after Elemental Workshop IV)."];
                case 11:
                    return [Obj.unlit_black_candle, Obj.elem4_body_gloves, "Members: Body gloves" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "body gloves" + "</col>" + " (after Elemental Workshop IV)."];
                case 12:
                    return [Obj.unlit_black_candle, Obj.elem4_cosmic_shield, "Members: Cosmic shield" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "cosmic shields" + "</col>" + " (after Elemental Workshop IV)."];
                case 13:
                    return [Obj.unlit_black_candle, Obj.elem4_cosmic_helm, "Members: Cosmic helmet" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "cosmic helmets" + "</col>" + " (after Elemental Workshop IV)."];
                case 14:
                    return [Obj.unlit_black_candle, Obj.elem4_cosmic_body, "Members: Cosmic body" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "cosmic bodies" + "</col>" + " (after Elemental Workshop IV)."];
                case 15:
                    return [Obj.unlit_black_candle, Obj.elem4_cosmic_gloves, "Members: Cosmic gloves" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "cosmic gloves" + "</col>" + " (after Elemental Workshop IV)."];
                case 16:
                    return [Obj.mithril_arrowheads, Obj.elem4_elem_boots, "Members: Elemental boots" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "elemental boots" + "</col>" + " (after Elemental Workshop IV)."];
                case 17:
                    return [Obj.mithril_arrowheads, Obj.elem4_mind_boots, "Members: Mind boots" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "mind boots" + "</col>" + " (after Elemental Workshop IV)."];
                case 18:
                    return [Obj.mithril_arrowheads, Obj.elem4_body_boots, "Members: Body boots" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "body boots" + "</col>" + " (after Elemental Workshop IV)."];
                case 19:
                    return [Obj.mithril_arrowheads, Obj.elem4_cosmic_boots, "Members: Cosmic boots" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "cosmic boots" + "</col>" + " (after Elemental Workshop IV)."];
                case 20:
                    return [Obj.mithril_arrowheads, Obj.elem4_chaos_shield, "Members: Chaos shield" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "chaos shields" + "</col>" + " (after Elemental Workshop IV)."];
                case 21:
                    return [Obj.mithril_arrowheads, Obj.elem4_chaos_helm, "Members: Chaos helmet" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "chaos helmets" + "</col>" + " (after Elemental Workshop IV)."];
                case 22:
                    return [Obj.mithril_arrowheads, Obj.elem4_chaos_body, "Members: Chaos body" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "chaos bodies" + "</col>" + " (after Elemental Workshop IV)."];
                case 23:
                    return [Obj.mithril_arrowheads, Obj.elem4_chaos_gloves, "Members: Chaos gloves" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "chaos gloves" + "</col>" + " (after Elemental Workshop IV)."];
                case 24:
                    return [Obj.mithril_arrowheads, Obj.elem4_chaos_boots, "Members: Chaos boots" + "<br>" + " (after Elemental Workshop IV)", "Members now have the Smithing level required to smith " + "<col=000080>" + "chaos boots" + "</col>" + " (after Elemental Workshop IV)."];
            }
            break;
        case 10:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_80, Obj.obj_21823, "Members: Dragonbane arrowheads (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "dragonbane arrowheads" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 1:
                    return [Obj.obj_80, Obj.obj_21828, "Members: Wallasalkibane arrowheads (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "wallasalkibane arrowheads" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 2:
                    return [Obj.obj_80, Obj.obj_21833, "Members: Basiliskbane arrowheads (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "basiliskbane arrowheads" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 3:
                    return [Obj.obj_80, Obj.obj_21838, "Members: Abyssalbane arrowheads (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "abyssalbane arrowheads" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 4:
                    return [Obj.obj_82, Obj.obj_21843, "Members: Dragonbane bolts (unf) (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "dragonbane bolts" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 5:
                    return [Obj.obj_82, Obj.obj_21853, "Members: Wallasalkibane bolts (unf) (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "wallasalkibane bolts" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 6:
                    return [Obj.obj_82, Obj.obj_21848, "Members: Basiliskbane bolts (unf) (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "basiliskbane bolts" + "</col>" + " (after Ritual of the Mahjarrat)."];
                case 7:
                    return [Obj.obj_82, Obj.obj_21858, "Members: Abyssalbane bolts (unf) (after Ritual of the Mahjarrat)", "Members now have the Smithing level required to smith " + "<col=000080>" + "abyssalbane bolts" + "</col>" + " (after Ritual of the Mahjarrat)."];
            }
            break;
        case 11:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.obj_20506, "Bronze rails", "You can now smith " + "<col=000080>" + "bronze rails" + "</col>" + "."];
                case 1:
                    return [Obj.mcannonball, Obj.obj_20507, "Bronze base plate", "You can now smith " + "<col=000080>" + "bronze base plates" + "</col>" + "."];
                case 2:
                    return [Obj.nulodions_notes, Obj.obj_20511, "Bronze track (40% complete)", "You can now combine bronze rails with bronze base plates to make " + "<col=000080>" + "bronze track (40% complete)" + "</col>" + "."];
                case 3:
                    return [Obj.mcannonbook, Obj.obj_20508, "Bronze spikes", "You can now smith " + "<col=000080>" + "bronze spikes" + "</col>" + "."];
                case 4:
                    return [Obj.twpart1, Obj.obj_20512, "Bronze track (60% complete)", "You can now combine bronze track (40% complete) with bronze spikes to make " + "<col=000080>" + "bronze track (60% complete)" + "</col>" + "."];
                case 5:
                    return [Obj.twpart2, Obj.obj_20509, "Bronze joint", "You can now smith " + "<col=000080>" + "bronze joints" + "</col>" + "."];
                case 6:
                    return [Obj.cert_twpart2, Obj.obj_20513, "Bronze track (80% complete)", "You can now combine bronze track (60% complete) with a bronze joint to make " + "<col=000080>" + "bronze track (80% complete)" + "</col>" + "."];
                case 7:
                    return [Obj.cert_twpart3, Obj.obj_20510, "Bronze ties", "You can now smith " + "<col=000080>" + "bronze ties" + "</col>" + "."];
                case 8:
                    return [Obj.twpart4, Obj.obj_20514, "Bronze track (100% complete)", "You can now combine bronze track (80% complete) with bronze ties to make " + "<col=000080>" + "bronze track (100% complete)" + "</col>" + "."];
                case 9:
                    return [Obj.holy_table_napkin, Obj.obj_20515, "Iron rails", "You can now smith " + "<col=000080>" + "iron rails" + "</col>" + "."];
                case 10:
                    return [Obj.holy_grail, Obj.obj_20516, "Iron base plate", "You can now smith " + "<col=000080>" + "iron base plates" + "</col>" + "."];
                case 11:
                    return [Obj.whitecog, Obj.obj_20525, "Iron track (40% complete)", "You can now combine iron rails with iron base plates to make " + "<col=000080>" + "iron track (40% complete)" + "</col>" + "."];
                case 12:
                    return [Obj.rat_poison, Obj.obj_20517, "Iron spikes", "You can now smith " + "<col=000080>" + "iron spikes" + "</col>" + "."];
                case 13:
                    return [Obj.red_vine_worm, Obj.obj_20526, "Iron track (60% complete)", "You can now combine iron track (40% complete) with iron spikes to make " + "<col=000080>" + "iron track (60% complete)" + "</col>" + "."];
                case 14:
                    return [Obj.obj_29, Obj.obj_20518, "Iron joint", "You can now smith " + "<col=000080>" + "iron joints" + "</col>" + "."];
                case 15:
                    return [Obj.bucket_wax, Obj.obj_20572, "Iron burial armour", "You can now smith iron burial armour for miners, warriors and smiths."];
                case 16:
                    return [Obj.bucket_wax, Obj.obj_20527, "Iron track (80% complete)", "You can now combine iron track (60% complete) with an iron joint to make " + "<col=000080>" + "iron track (80% complete)" + "</col>" + "."];
                case 17:
                    return [Obj.obj_34, Obj.obj_20519, "Iron ties", "You can now smith " + "<col=000080>" + "iron ties" + "</col>" + "."];
                case 18:
                    return [Obj.excalibur, Obj.obj_20528, "Iron track (100% complete)", "You can now combine iron track (80% complete) with iron ties to make " + "<col=000080>" + "iron track (100% complete)" + "</col>" + "."];
                case 19:
                    return [Obj.bronze_arrowheads, Obj.obj_20520, "Members: Steel rails", "Members can now smith " + "<col=000080>" + "steel rails" + "</col>" + "."];
                case 20:
                    return [Obj.rune_arrowheads, Obj.obj_20521, "Members: Steel base plate", "Members can now smith " + "<col=000080>" + "steel base plates" + "</col>" + "."];
                case 21:
                    return [Obj.opal_bolttips, Obj.obj_20573, "Steel burial armour", "You can now smith steel burial armour for miners, warriors and smiths."];
                case 22:
                    return [Obj.opal_bolttips, Obj.obj_20529, "Members: Steel track (40% complete)", "Members can now combine steel rails with steel base plates to make " + "<col=000080>" + "steel track (40% complete)" + "</col>" + "."];
                case 23:
                    return [Obj.obj_49, Obj.obj_20522, "Members: Steel spikes", "Members can now smith " + "<col=000080>" + "steel spikes" + "</col>" + "."];
                case 24:
                    return [Obj.obj_50, Obj.hammer, "Members: Fix pipes", "Members can now fix burst pipes in the Artisans Workshop."];
                case 25:
                    return [Obj.obj_50, Obj.obj_20530, "Members: Steel track (60% complete)", "Members can now combine steel track (40% complete) with steel spikes to make " + "<col=000080>" + "steel track (60% complete)" + "</col>" + "."];
                case 26:
                    return [Obj.obj_54, Obj.obj_20523, "Members: Steel joint", "Members can now smith " + "<col=000080>" + "steel joints" + "</col>" + "."];
                case 27:
                    return [Obj.obj_55, Obj.obj_20531, "Members: Steel track (80% complete)", "Members can now combine steel track (60% complete) with a steel joint to make " + "<col=000080>" + "steel track (80% complete)" + "</col>" + "."];
                case 28:
                    return [Obj.obj_59, Obj.obj_20524, "Members: Steel ties", "Members can now smith " + "<col=000080>" + "steel ties" + "</col>" + "."];
                case 29:
                    return [Obj.obj_60, Obj.obj_20574, "Members: Mithril burial armour", "Members can now smith mithril burial armour for miners, warriors and smiths."];
                case 30:
                    return [Obj.obj_60, Obj.obj_20532, "Members: Steel track (100% complete)", "Members can now combine steel track (80% complete) with steel ties to make " + "<col=000080>" + "steel track (100% complete)" + "</col>" + "."];
                case 31:
                    return [Obj.obj_62, Obj.obj_20480, "Members: Cannon repair", "Members can now repair cannons in the cannon repair workshop."];
                case 32:
                    return [Obj.obj_70, Obj.artisan_decorative_plans_iron, "Members: Iron ceremonial swords", "Members can now smith iron ceremonial swords."];
                case 33:
                    return [Obj.obj_70, Obj.obj_20575, "Members: Adamant burial armour", "Members can now smith adamant burial armour for miners, warriors and smiths."];
                case 34:
                    return [Obj.khazard_platemail, Obj.artisan_decorative_plans_steel, "Members: Steel ceremonial swords", "Members can now smith steel ceremonial swords."];
                case 35:
                    return [Obj.ice_arrow, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
                case 36:
                    return [Obj.obj_80, Obj.artisan_decorative_plans_mithril, "Members: Mithril ceremonial swords", "Members can now smith mithril ceremonial swords."];
                case 37:
                    return [Obj.ikov_lever, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
                case 38:
                    return [Obj.ikov_shinykey, Obj.artisan_decorative_plans_adamant, "Members: Adamant ceremonial swords", "Members can now smith adamant ceremonial swords."];
                case 39:
                    return [Obj.ikov_bootsoflightness, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
                case 40:
                    return [Obj.childs_blanket, Obj.obj_20576, "Members: Rune burial armour", "Members can now smith rune burial armour for miners, warriors and smiths."];
                case 41:
                    return [Obj.childs_blanket, Obj.artisan_decorative_plans_rune, "Members: Rune ceremonial swords", "Members can now smith rune ceremonial swords"];
                case 42:
                    return [Obj.obj_93, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
                case 43:
                    return [Obj.obj_97, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
                case 44:
                    return [Obj.obj_99, Obj.hammer, "Members: Greater precision", "Members will now smith ceremonial swords more precisely, hitting fewer 0s and generally being more precise."];
            }
            break;
        case 12:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_55, Obj.rand_reward_wasteless_smithing_unlocker, "Scroll of efficiency" + "<br>" + " (with 55 Dungeoneering)", "You can now use " + "<col=000080>" + "scrolls of efficiency" + "</col>" + ". (You also need level 55 Dungeoneering.)"];
                case 1:
                    return [Obj.obj_60, Obj.dragon_sq_shield, "Members: Dragon square shield", "Members can now make " + "<col=000080>" + "dragon square shields" + "</col>" + "."];
                case 2:
                    return [Obj.obj_80, Obj.godwars_godsword_blade1plus2plus3, "Members: Godsword blade", "Members can now make " + "<col=000080>" + "godsword blades" + "</col>" + "."];
                case 3:
                    return [Obj.ikov_shinykey, Obj.sum2_sigil_arcane, "Members: Arcane spirit shields" + "<br>" + " (after Summer's End and with 90 Prayer)", "Members can now create " + "<col=000080>" + "arcane spirit shields" + "</col>" + " (after Summer's End, with level 90 Prayer)."];
                case 4:
                    return [Obj.ikov_shinykey, Obj.sum2_sigil_divine, "Members: Divine spirit shields" + "<br>" + " (after Summer's End and with 90 Prayer)", "Members can now create " + "<col=000080>" + "divine spirit shields" + "</col>" + " (after Summer's End, with level 90 Prayer)."];
                case 5:
                    return [Obj.ikov_shinykey, Obj.sum2_sigil_elysian, "Members: Elysian spirit shields" + "<br>" + " (after Summer's End and with 90 Prayer)", "Members can now create " + "<col=000080>" + "elysian spirit shields" + "</col>" + " (after Summer's End, with level 90 Prayer)."];
                case 6:
                    return [Obj.ikov_shinykey, Obj.sum2_sigil_spectral, "Members: Spectral spirit shields" + "<br>" + " (after Summer's End and with 90 Prayer)", "Members can now create " + "<col=000080>" + "spectral spirit shields" + "</col>" + " (after Summer's End, with level 90 Prayer)."];
                case 7:
                    return [Obj.childs_blanket, Obj.dragonfire_shield, "Members: Dragonfire shield", "Members can now make " + "<col=000080>" + "dragonfire shields" + "</col>" + " from anti-dragonbreath shields and draconic visages."];
                case 8:
                    return [Obj.obj_91, Obj.effi_ancient_effigy_level_0, "Members: Starved ancient effigies", "Members can now investigate " + "<col=000080>" + "starved ancient effigies" + "</col>" + " using their knowledge of Smithing."];
                case 9:
                    return [Obj.obj_92, Obj.luc2_dragonplate_torso, "Members: Repair dragon platebody", "Members can now repair " + "<col=000080>" + "dragon platebodies" + "</col>" + " (after While Guthix Sleeps)."];
                case 10:
                    return [Obj.obj_93, Obj.effi_ancient_effigy_level_1, "Members: Nourished ancient effigies", "Members can now investigate " + "<col=000080>" + "nourished ancient effigies" + "</col>" + " using their knowledge of Smithing."];
                case 11:
                    return [Obj.obj_95, Obj.effi_ancient_effigy_level_2, "Members: Sated ancient effigies", "Members can now investigate " + "<col=000080>" + "sated ancient effigies" + "</col>" + " using their knowledge of Smithing."];
                case 12:
                    return [Obj.obj_97, Obj.effi_ancient_effigy_level_3, "Members: Gorged ancient effigies", "Members can now investigate " + "<col=000080>" + "gorged ancient effigies" + "</col>" + " using their knowledge of Smithing."];
            }
            break;
        case 13:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.sc_dagger_1, "Members: Stealing Creation - class 1 dagger", "Members can now make " + "<col=000080>" + "class 1 daggers" + "</col>" + " in Stealing Creation."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.sc_hatchet_1, "Members: Stealing Creation - class 1 hatchet", "Members can now make " + "<col=000080>" + "class 1 hatchets" + "</col>" + " in Stealing Creation."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.sc_helmet_1, "Members: Stealing Creation - class 1 helmet", "Members can now make " + "<col=000080>" + "class 1 helmets" + "</col>" + " in Stealing Creation."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.sc_scimitar_1, "Members: Stealing Creation - class 1 scimitar", "Members can now make " + "<col=000080>" + "class 1 scimitars" + "</col>" + " in Stealing Creation."];
                case 4:
                    return [Obj.mcannontoolkit, Obj.sc_pickaxe_1, "Members: Stealing Creation - class 1 pickaxe", "Members can now make " + "<col=000080>" + "class 1 pickaxes" + "</col>" + " in Stealing Creation."];
                case 5:
                    return [Obj.mcannontoolkit, Obj.sc_warhammer_1, "Members: Stealing Creation - class 1 warhammer", "Members can now make " + "<col=000080>" + "class 1 warhammers" + "</col>" + " in Stealing Creation."];
                case 6:
                    return [Obj.mcannontoolkit, Obj.sc_platelegs_1, "Members: Stealing Creation - class 1 platelegs", "Members can now make " + "<col=000080>" + "class 1 platelegs" + "</col>" + " in Stealing Creation."];
                case 7:
                    return [Obj.mcannontoolkit, Obj.sc_platebody_1, "Members: Stealing Creation - class 1 platebody", "Members can now make " + "<col=000080>" + "class 1 platebodies" + "</col>" + " in Stealing Creation."];
                case 8:
                    return [Obj.whitecog, Obj.sc_dagger_2, "Members: Stealing Creation - class 2 dagger", "Members can now make " + "<col=000080>" + "class 2 daggers" + "</col>" + " in Stealing Creation."];
                case 9:
                    return [Obj.whitecog, Obj.sc_hatchet_2, "Members: Stealing Creation - class 2 hatchet", "Members can now make " + "<col=000080>" + "class 2 hatchets" + "</col>" + " in Stealing Creation."];
                case 10:
                    return [Obj.whitecog, Obj.sc_helmet_2, "Members: Stealing Creation - class 2 helmet", "Members can now make " + "<col=000080>" + "class 2 helmets" + "</col>" + " in Stealing Creation."];
                case 11:
                    return [Obj.whitecog, Obj.sc_scimitar_2, "Members: Stealing Creation - class 2 scimitar", "Members can now make " + "<col=000080>" + "class 2 scimitars" + "</col>" + " in Stealing Creation."];
                case 12:
                    return [Obj.whitecog, Obj.sc_pickaxe_2, "Members: Stealing Creation - class 2 pickaxe", "Members can now make " + "<col=000080>" + "class 2 pickaxes" + "</col>" + " in Stealing Creation."];
                case 13:
                    return [Obj.whitecog, Obj.sc_warhammer_2, "Members: Stealing Creation - class 2 warhammer", "Members can now make " + "<col=000080>" + "class 2 warhammers" + "</col>" + " in Stealing Creation."];
                case 14:
                    return [Obj.whitecog, Obj.sc_platelegs_2, "Members: Stealing Creation - class 2 platelegs", "Members can now make " + "<col=000080>" + "class 2 platelegs" + "</col>" + " in Stealing Creation."];
                case 15:
                    return [Obj.whitecog, Obj.sc_platebody_2, "Members: Stealing Creation - class 2 platebody", "Members can now make " + "<col=000080>" + "class 2 platebodies" + "</col>" + " in Stealing Creation."];
                case 16:
                    return [Obj.iron_arrowheads, Obj.sc_dagger_3, "Members: Stealing Creation - class 3 dagger", "Members can now make " + "<col=000080>" + "class 3 daggers" + "</col>" + " in Stealing Creation."];
                case 17:
                    return [Obj.iron_arrowheads, Obj.sc_hatchet_3, "Members: Stealing Creation - class 3 hatchet", "Members can now make " + "<col=000080>" + "class 3 hatchets" + "</col>" + " in Stealing Creation."];
                case 18:
                    return [Obj.iron_arrowheads, Obj.sc_helmet_3, "Members: Stealing Creation - class 3 helmet", "Members can now make " + "<col=000080>" + "class 3 helmets" + "</col>" + " in Stealing Creation."];
                case 19:
                    return [Obj.iron_arrowheads, Obj.sc_scimitar_3, "Members: Stealing Creation - class 3 scimitar", "Members can now make " + "<col=000080>" + "class 3 scimitars" + "</col>" + " in Stealing Creation."];
                case 20:
                    return [Obj.iron_arrowheads, Obj.sc_pickaxe_3, "Members: Stealing Creation - class 3 pickaxe", "Members can now make " + "<col=000080>" + "class 3 pickaxes" + "</col>" + " in Stealing Creation."];
                case 21:
                    return [Obj.iron_arrowheads, Obj.sc_warhammer_3, "Members: Stealing Creation - class 3 warhammer", "Members can now make " + "<col=000080>" + "class 3 warhammers" + "</col>" + " in Stealing Creation."];
                case 22:
                    return [Obj.iron_arrowheads, Obj.sc_platelegs_3, "Members: Stealing Creation - class 3 platelegs", "Members can now make " + "<col=000080>" + "class 3 platelegs" + "</col>" + " in Stealing Creation."];
                case 23:
                    return [Obj.iron_arrowheads, Obj.sc_platebody_3, "Members: Stealing Creation - class 3 platebody", "Members can now make " + "<col=000080>" + "class 3 platebodies" + "</col>" + " in Stealing Creation."];
                case 24:
                    return [Obj.obj_60, Obj.obj_13256, "Members: Blast Furnace - Anvils", "Members can now use the " + "<col=000080>" + "anvils" + "</col>" + " at the Blast Furnace."];
                case 25:
                    return [Obj.obj_60, Obj.sc_dagger_4, "Members: Stealing Creation - class 4 dagger", "Members can now make " + "<col=000080>" + "class 4 daggers" + "</col>" + " in Stealing Creation."];
                case 26:
                    return [Obj.obj_60, Obj.sc_hatchet_4, "Members: Stealing Creation - class 4 hatchet", "Members can now make " + "<col=000080>" + "class 4 hatchets" + "</col>" + " in Stealing Creation."];
                case 27:
                    return [Obj.obj_60, Obj.sc_helmet_4, "Members: Stealing Creation - class 4 helmet", "Members can now make " + "<col=000080>" + "class 4 helmets" + "</col>" + " in Stealing Creation."];
                case 28:
                    return [Obj.obj_60, Obj.sc_scimitar_4, "Members: Stealing Creation - class 4 scimitar", "Members can now make " + "<col=000080>" + "class 4 scimitars" + "</col>" + " in Stealing Creation."];
                case 29:
                    return [Obj.obj_60, Obj.sc_pickaxe_4, "Members: Stealing Creation - class 4 pickaxe", "Members can now make " + "<col=000080>" + "class 4 pickaxes" + "</col>" + " in Stealing Creation."];
                case 30:
                    return [Obj.obj_60, Obj.sc_warhammer_4, "Members: Stealing Creation - class 4 warhammer", "Members can now make " + "<col=000080>" + "class 4 warhammers" + "</col>" + " in Stealing Creation."];
                case 31:
                    return [Obj.obj_60, Obj.sc_platelegs_4, "Members: Stealing Creation - class 4 platelegs", "Members can now make " + "<col=000080>" + "class 4 platelegs" + "</col>" + " in Stealing Creation."];
                case 32:
                    return [Obj.obj_60, Obj.sc_platebody_4, "Members: Stealing Creation - class 4 platebody", "Members can now make " + "<col=000080>" + "class 4 platebodies" + "</col>" + " in Stealing Creation."];
                case 33:
                    return [Obj.obj_80, Obj.sc_dagger_5, "Members: Stealing Creation - class 5 dagger", "Members can now make " + "<col=000080>" + "class 5 daggers" + "</col>" + " in Stealing Creation."];
                case 34:
                    return [Obj.obj_80, Obj.sc_hatchet_5, "Members: Stealing Creation - class 5 hatchet", "Members can now make " + "<col=000080>" + "class 5 hatchets" + "</col>" + " in Stealing Creation."];
                case 35:
                    return [Obj.obj_80, Obj.sc_helmet_5, "Members: Stealing Creation - class 5 helmet", "Members can now make " + "<col=000080>" + "class 5 helmets" + "</col>" + " in Stealing Creation."];
                case 36:
                    return [Obj.obj_80, Obj.sc_scimitar_5, "Members: Stealing Creation - class 5 scimitar", "Members can now make " + "<col=000080>" + "class 5 scimitars" + "</col>" + " in Stealing Creation."];
                case 37:
                    return [Obj.obj_80, Obj.sc_pickaxe_5, "Members: Stealing Creation - class 5 pickaxe", "Members can now make " + "<col=000080>" + "class 5 pickaxes" + "</col>" + " in Stealing Creation."];
                case 38:
                    return [Obj.obj_80, Obj.sc_warhammer_5, "Members: Stealing Creation - class 5 warhammer", "Members can now make " + "<col=000080>" + "class 5 warhammers" + "</col>" + " in Stealing Creation."];
                case 39:
                    return [Obj.obj_80, Obj.sc_platelegs_5, "Members: Stealing Creation - class 5 platelegs", "Members can now make " + "<col=000080>" + "class 5 platelegs" + "</col>" + " in Stealing Creation."];
                case 40:
                    return [Obj.obj_80, Obj.sc_platebody_5, "Members: Stealing Creation - class 5 platebody", "Members can now make " + "<col=000080>" + "class 5 platebodies" + "</col>" + " in Stealing Creation."];
            }
            break;
        case 14:
            switch (intArg1) {
                case 0:
                    return [-1, Obj.rand_mission_contract, "Dungeoneering skill tasks" + "<br>" + "As your Smithing level increases, you will be able to attempt higher-level smithing tasks within Daemonheim. You will also be more likely to succeed when attempting smithing tasks within Daemonheim.", ""];
                case 1:
                    return [Obj.mcannontoolkit, Obj.rand_bar_1, "Novite (Tier 1)", "You can now smelt " + "<col=000080>" + "novite" + "</col>" + " within Daemonheim."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.rand_arrowheads_1, "Novite arrowheads (Tier 1) (20)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite arrowheads" + "</col>" + " within Daemonheim."];
                case 3:
                    return [Obj.mcannontoolkit, Obj.rand_dagger_1, "Novite dagger (Tier 1)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite daggers" + "</col>" + " within Daemonheim."];
                case 4:
                    return [Obj.mcannontoolkit, Obj.rand_boots_1, "Novite boots (Tier 1)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite boots" + "</col>" + " within Daemonheim."];
                case 5:
                    return [Obj.mcannontoolkit, Obj.rand_gauntlets_1, "Novite gauntlets (Tier 1)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite gauntlets" + "</col>" + " within Daemonheim."];
                case 6:
                    return [Obj.mcannonball, Obj.rand_hatchet_1, "Novite hatchet (Tier 1)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite hatchets" + "</col>" + " within Daemonheim."];
                case 7:
                    return [Obj.mcannonball, Obj.rand_pickaxe_1, "Novite pickaxe (Tier 1)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "novite pickaxes" + "</col>" + " within Daemonheim."];
                case 8:
                    return [Obj.nulodions_notes, Obj.rand_warhammer_1, "Novite warhammer (Tier 1)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "novite warhammers" + "</col>" + " within Daemonheim."];
                case 9:
                    return [Obj.nulodions_notes, Obj.rand_sword_1, "Novite rapier (Tier 1)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "novite rapiers" + "</col>" + " within Daemonheim."];
                case 10:
                    return [Obj.ammo_mould, Obj.rand_longsword_1, "Novite longsword (Tier 1)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "novite longswords" + "</col>" + " within Daemonheim."];
                case 11:
                    return [Obj.mcannonbook, Obj.rand_full_helm_1, "Novite full helm (Tier 1)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "novite full helms" + "</col>" + " within Daemonheim."];
                case 12:
                    return [Obj.mcannonbook, Obj.rand_battleaxe_1, "Novite battleaxe (Tier 1)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "novite battleaxes" + "</col>" + " within Daemonheim."];
                case 13:
                    return [Obj.twpart1, Obj.rand_kiteshield_1, "Novite kiteshield (Tier 1)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "novite kiteshields" + "</col>" + " within Daemonheim."];
                case 14:
                    return [Obj.twpart1, Obj.rand_chainbody_1, "Novite chainbody (Tier 1)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "novite chainbodies" + "</col>" + " within Daemonheim."];
                case 15:
                    return [Obj.cert_twpart1, Obj.rand_platelegs_1, "Novite platelegs (Tier 1)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "novite platelegs" + "</col>" + " within Daemonheim."];
                case 16:
                    return [Obj.cert_twpart1, Obj.rand_plateskirt_1, "Novite plateskirt (Tier 1)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "novite plateskirts" + "</col>" + " within Daemonheim."];
                case 17:
                    return [Obj.cert_twpart1, Obj.rand_spear_1, "Novite spear (Tier 1)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "novite spears" + "</col>" + " within Daemonheim."];
                case 18:
                    return [Obj.twpart2, Obj.rand_maul_1, "Novite maul (Tier 1)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "novite mauls" + "</col>" + " within Daemonheim."];
                case 19:
                    return [Obj.twpart2, Obj.rand_2h_sword_1, "Novite 2h sword (Tier 1)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "novite 2h swords" + "</col>" + " within Daemonheim."];
                case 20:
                    return [Obj.cert_twpart2, Obj.rand_platebody_1, "Novite platebody (Tier 1)" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "novite platebodies" + "</col>" + " within Daemonheim."];
                case 21:
                    return [Obj.twpart3, Obj.rand_bar_2, "Bathus (Tier 2)", "You can now smelt " + "<col=000080>" + "bathus" + "</col>" + " within Daemonheim."];
                case 22:
                    return [Obj.twpart3, Obj.rand_arrowheads_2, "Bathus arrowheads (Tier 2) (20)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus arrowheads" + "</col>" + " within Daemonheim."];
                case 23:
                    return [Obj.twpart3, Obj.rand_dagger_2, "Bathus dagger (Tier 2)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus daggers" + "</col>" + " within Daemonheim."];
                case 24:
                    return [Obj.cert_twpart3, Obj.rand_boots_2, "Bathus boots (Tier 2)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus boots" + "</col>" + " within Daemonheim."];
                case 25:
                    return [Obj.cert_twpart3, Obj.rand_gauntlets_2, "Bathus gauntlets (Tier 2)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus gauntlets" + "</col>" + " within Daemonheim."];
                case 26:
                    return [Obj.twpart4, Obj.rand_hatchet_2, "Bathus hatchet (Tier 2)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus hatchets" + "</col>" + " within Daemonheim."];
                case 27:
                    return [Obj.twpart4, Obj.rand_pickaxe_2, "Bathus pickaxe (Tier 2)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "bathus pickaxes" + "</col>" + " within Daemonheim."];
                case 28:
                    return [Obj.cert_twpart4, Obj.rand_warhammer_2, "Bathus warhammer (Tier 2)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bathus warhammers" + "</col>" + " within Daemonheim."];
                case 29:
                    return [Obj.cert_twpart4, Obj.rand_sword_2, "Bathus rapier (Tier 2)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bathus rapiers" + "</col>" + " within Daemonheim."];
                case 30:
                    return [Obj.obj_14, Obj.rand_longsword_2, "Bathus longsword (Tier 2)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bathus longswords" + "</col>" + " within Daemonheim."];
                case 31:
                    return [Obj.holy_table_napkin, Obj.rand_full_helm_2, "Bathus full helm (Tier 2)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bathus full helms" + "</col>" + " within Daemonheim."];
                case 32:
                    return [Obj.holy_table_napkin, Obj.rand_battleaxe_2, "Bathus battleaxe (Tier 2)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "bathus battleaxes" + "</col>" + " within Daemonheim."];
                case 33:
                    return [Obj.magic_whistle, Obj.rand_kiteshield_2, "Bathus kiteshield (Tier 2)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bathus kiteshields" + "</col>" + " within Daemonheim."];
                case 34:
                    return [Obj.magic_whistle, Obj.rand_chainbody_2, "Bathus chainbody (Tier 2)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bathus chainbodies" + "</col>" + " within Daemonheim."];
                case 35:
                    return [Obj.grail_bell, Obj.rand_platelegs_2, "Bathus platelegs (Tier 2)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bathus platelegs" + "</col>" + " within Daemonheim."];
                case 36:
                    return [Obj.grail_bell, Obj.rand_plateskirt_2, "Bathus plateskirt (Tier 2)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "bathus plateskirts" + "</col>" + " within Daemonheim."];
                case 37:
                    return [Obj.grail_bell, Obj.rand_spear_2, "Bathus spear (Tier 2)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "bathus spears" + "</col>" + " within Daemonheim."];
                case 38:
                    return [Obj.magic_golden_feather, Obj.rand_maul_2, "Bathus maul (Tier 2)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "bathus mauls" + "</col>" + " within Daemonheim."];
                case 39:
                    return [Obj.magic_golden_feather, Obj.rand_2h_sword_2, "Bathus 2h sword (Tier 2)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "bathus 2h swords" + "</col>" + " within Daemonheim."];
                case 40:
                    return [Obj.holy_grail, Obj.rand_platebody_2, "Bathus platebody (Tier 2)" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "bathus platebodies" + "</col>" + " within Daemonheim."];
                case 41:
                    return [Obj.whitecog, Obj.rand_bar_3, "Marmaros (Tier 3)", "You can now smelt " + "<col=000080>" + "marmaros" + "</col>" + " within Daemonheim."];
                case 42:
                    return [Obj.whitecog, Obj.rand_arrowheads_3, "Marmaros arrowheads (Tier 3) (20)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros arrowheads" + "</col>" + " within Daemonheim."];
                case 43:
                    return [Obj.whitecog, Obj.rand_dagger_3, "Marmaros dagger (Tier 3)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros daggers" + "</col>" + " within Daemonheim."];
                case 44:
                    return [Obj.blackcog, Obj.rand_boots_3, "Marmaros boots (Tier 3)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros boots" + "</col>" + " within Daemonheim."];
                case 45:
                    return [Obj.blackcog, Obj.rand_gauntlets_3, "Marmaros gauntlets (Tier 3)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros gauntlets" + "</col>" + " within Daemonheim."];
                case 46:
                    return [Obj.bluecog, Obj.rand_hatchet_3, "Marmaros hatchet (Tier 3)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros hatchets" + "</col>" + " within Daemonheim."];
                case 47:
                    return [Obj.bluecog, Obj.rand_pickaxe_3, "Marmaros pickaxe (Tier 3)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "marmaros pickaxes" + "</col>" + " within Daemonheim."];
                case 48:
                    return [Obj.redcog, Obj.rand_warhammer_3, "Marmaros warhammer (Tier 3)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "marmaros warhammers" + "</col>" + " within Daemonheim."];
                case 49:
                    return [Obj.redcog, Obj.rand_sword_3, "Marmaros rapier (Tier 3)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "marmaros rapiers" + "</col>" + " within Daemonheim."];
                case 50:
                    return [Obj.rat_poison, Obj.rand_longsword_3, "Marmaros longsword (Tier 3)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "marmaros longswords" + "</col>" + " within Daemonheim."];
                case 51:
                    return [Obj.red_vine_worm, Obj.rand_full_helm_3, "Marmaros full helm (Tier 3)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "marmaros full helms" + "</col>" + " within Daemonheim."];
                case 52:
                    return [Obj.red_vine_worm, Obj.rand_battleaxe_3, "Marmaros battleaxe (Tier 3)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "marmaros battleaxes" + "</col>" + " within Daemonheim."];
                case 53:
                    return [Obj.hemenster_fishing_trophy, Obj.rand_kiteshield_3, "Marmaros kiteshield (Tier 3)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "marmaros kiteshields" + "</col>" + " within Daemonheim."];
                case 54:
                    return [Obj.hemenster_fishing_trophy, Obj.rand_chainbody_3, "Marmaros chainbody (Tier 3)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "marmaros chainbodies" + "</col>" + " within Daemonheim."];
                case 55:
                    return [Obj.fishing_competition_pass, Obj.rand_platelegs_3, "Marmaros platelegs (Tier 3)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "marmaros platelegs" + "</col>" + " within Daemonheim."];
                case 56:
                    return [Obj.fishing_competition_pass, Obj.rand_plateskirt_3, "Marmaros plateskirt (Tier 3)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "marmaros plateskirts" + "</col>" + " within Daemonheim."];
                case 57:
                    return [Obj.fishing_competition_pass, Obj.rand_spear_3, "Marmaros spear (Tier 3)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "marmaros spears" + "</col>" + " within Daemonheim."];
                case 58:
                    return [Obj.insect_repellent, Obj.rand_maul_3, "Marmaros maul (Tier 3)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "marmaros mauls" + "</col>" + " within Daemonheim."];
                case 59:
                    return [Obj.insect_repellent, Obj.rand_2h_sword_3, "Marmaros 2h sword (Tier 3)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "marmaros 2h swords" + "</col>" + " within Daemonheim."];
                case 60:
                    return [Obj.obj_29, Obj.rand_platebody_3, "Marmaros platebody (Tier 3)" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "marmaros platebodies" + "</col>" + " within Daemonheim."];
                case 61:
                    return [Obj.bucket_wax, Obj.rand_bar_4, "Kratonite (Tier 4)", "You can now smelt " + "<col=000080>" + "kratonite" + "</col>" + " within Daemonheim."];
                case 62:
                    return [Obj.bucket_wax, Obj.rand_arrowheads_4, "Kratonite arrowheads (Tier 4) (20)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite arrowheads" + "</col>" + " within Daemonheim."];
                case 63:
                    return [Obj.bucket_wax, Obj.rand_dagger_4, "Kratonite dagger (Tier 4)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite daggers" + "</col>" + " within Daemonheim."];
                case 64:
                    return [Obj.obj_31, Obj.rand_boots_4, "Kratonite boots (Tier 4)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite boots" + "</col>" + " within Daemonheim."];
                case 65:
                    return [Obj.obj_31, Obj.rand_gauntlets_4, "Kratonite gauntlets (Tier 4)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite gauntlets" + "</col>" + " within Daemonheim."];
                case 66:
                    return [Obj.obj_32, Obj.rand_hatchet_4, "Kratonite hatchet (Tier 4)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite hatchets" + "</col>" + " within Daemonheim."];
                case 67:
                    return [Obj.obj_32, Obj.rand_pickaxe_4, "Kratonite pickaxe (Tier 4)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "kratonite pickaxes" + "</col>" + " within Daemonheim."];
                case 68:
                    return [Obj.obj_33, Obj.rand_warhammer_4, "Kratonite warhammer (Tier 4)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "kratonite warhammers" + "</col>" + " within Daemonheim."];
                case 69:
                    return [Obj.obj_33, Obj.rand_sword_4, "Kratonite rapier (Tier 4)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "kratonite rapiers" + "</col>" + " within Daemonheim."];
                case 70:
                    return [Obj.obj_34, Obj.rand_longsword_4, "Kratonite longsword (Tier 4)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "kratonite longswords" + "</col>" + " within Daemonheim."];
                case 71:
                    return [Obj.excalibur, Obj.rand_full_helm_4, "Kratonite full helm (Tier 4)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "kratonite full helms" + "</col>" + " within Daemonheim."];
                case 72:
                    return [Obj.excalibur, Obj.rand_battleaxe_4, "Kratonite battleaxe (Tier 4)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "kratonite battleaxes" + "</col>" + " within Daemonheim."];
                case 73:
                    return [Obj.obj_36, Obj.rand_kiteshield_4, "Kratonite kiteshield (Tier 4)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "kratonite kiteshields" + "</col>" + " within Daemonheim."];
                case 74:
                    return [Obj.obj_36, Obj.rand_chainbody_4, "Kratonite chainbody (Tier 4)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "kratonite chainbodies" + "</col>" + " within Daemonheim."];
                case 75:
                    return [Obj.obj_37, Obj.rand_platelegs_4, "Kratonite platelegs (Tier 4)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "kratonite platelegs" + "</col>" + " within Daemonheim."];
                case 76:
                    return [Obj.obj_37, Obj.rand_plateskirt_4, "Kratonite plateskirt (Tier 4)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "kratonite plateskirts" + "</col>" + " within Daemonheim."];
                case 77:
                    return [Obj.obj_37, Obj.rand_spear_4, "Kratonite spear (Tier 4)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "kratonite spears" + "</col>" + " within Daemonheim."];
                case 78:
                    return [Obj.unlit_black_candle, Obj.rand_maul_4, "Kratonite maul (Tier 4)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "kratonite mauls" + "</col>" + " within Daemonheim."];
                case 79:
                    return [Obj.unlit_black_candle, Obj.rand_2h_sword_4, "Kratonite 2h sword (Tier 4)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "kratonite 2h swords" + "</col>" + " within Daemonheim."];
                case 80:
                    return [Obj.bronze_arrowheads, Obj.rand_platebody_4, "Kratonite platebody (Tier 4)" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "kratonite platebodies" + "</col>" + " within Daemonheim."];
                case 81:
                    return [Obj.iron_arrowheads, Obj.rand_bar_5, "Fractite (Tier 5)", "You can now smelt " + "<col=000080>" + "fractite" + "</col>" + " within Daemonheim."];
                case 82:
                    return [Obj.iron_arrowheads, Obj.rand_arrowheads_5, "Fractite arrowheads (Tier 5) (20)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite arrowheads" + "</col>" + " within Daemonheim."];
                case 83:
                    return [Obj.iron_arrowheads, Obj.rand_dagger_5, "Fractite dagger (Tier 5)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite daggers" + "</col>" + " within Daemonheim."];
                case 84:
                    return [Obj.steel_arrowheads, Obj.rand_boots_5, "Fractite boots (Tier 5)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite boots" + "</col>" + " within Daemonheim."];
                case 85:
                    return [Obj.steel_arrowheads, Obj.rand_gauntlets_5, "Fractite gauntlets (Tier 5)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite gauntlets" + "</col>" + " within Daemonheim."];
                case 86:
                    return [Obj.mithril_arrowheads, Obj.rand_hatchet_5, "Fractite hatchet (Tier 5)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite hatchets" + "</col>" + " within Daemonheim."];
                case 87:
                    return [Obj.mithril_arrowheads, Obj.rand_pickaxe_5, "Fractite pickaxe (Tier 5)" + "<br>" + " 1 bar", "You can now smith " + "<col=000080>" + "fractite pickaxes" + "</col>" + " within Daemonheim."];
                case 88:
                    return [Obj.adamant_arrowheads, Obj.rand_warhammer_5, "Fractite warhammer (Tier 5)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "fractite warhammers" + "</col>" + " within Daemonheim."];
                case 89:
                    return [Obj.adamant_arrowheads, Obj.rand_sword_5, "Fractite rapier (Tier 5)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "fractite rapiers" + "</col>" + " within Daemonheim."];
                case 90:
                    return [Obj.rune_arrowheads, Obj.rand_longsword_5, "Fractite longsword (Tier 5)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "fractite longswords" + "</col>" + " within Daemonheim."];
                case 91:
                    return [Obj.opal_bolttips, Obj.rand_full_helm_5, "Fractite full helm (Tier 5)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "fractite full helms" + "</col>" + " within Daemonheim."];
                case 92:
                    return [Obj.opal_bolttips, Obj.rand_battleaxe_5, "Fractite battleaxe (Tier 5)" + "<br>" + " 2 bars", "You can now smith " + "<col=000080>" + "fractite battleaxes" + "</col>" + " within Daemonheim."];
                case 93:
                    return [Obj.pearl_bolttips, Obj.rand_kiteshield_5, "Fractite kiteshield (Tier 5)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "fractite kiteshields" + "</col>" + " within Daemonheim."];
                case 94:
                    return [Obj.pearl_bolttips, Obj.rand_chainbody_5, "Fractite chainbody (Tier 5)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "fractite chainbodies" + "</col>" + " within Daemonheim."];
                case 95:
                    return [Obj.obj_47, Obj.rand_platelegs_5, "Fractite platelegs (Tier 5)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "fractite platelegs" + "</col>" + " within Daemonheim."];
                case 96:
                    return [Obj.obj_47, Obj.rand_plateskirt_5, "Fractite plateskirt (Tier 5)" + "<br>" + " 3 bars", "You can now smith " + "<col=000080>" + "fractite plateskirts" + "</col>" + " within Daemonheim."];
                case 97:
                    return [Obj.obj_47, Obj.rand_spear_5, "Fractite spear (Tier 5)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "fractite spears" + "</col>" + " within Daemonheim."];
                case 98:
                    return [Obj.obj_48, Obj.rand_maul_5, "Fractite maul (Tier 5)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "fractite mauls" + "</col>" + " within Daemonheim."];
                case 99:
                    return [Obj.obj_48, Obj.rand_2h_sword_5, "Fractite 2h sword (Tier 5)" + "<br>" + " 4 bars", "You can now smith " + "<col=000080>" + "fractite 2h swords" + "</col>" + " within Daemonheim."];
                case 100:
                    return [Obj.obj_49, Obj.rand_platebody_5, "Fractite platebody (Tier 5)" + "<br>" + " 5 bars", "You can now smith " + "<col=000080>" + "fractite platebodies" + "</col>" + " within Daemonheim."];
                case 101:
                    return [Obj.obj_50, Obj.rand_bar_6, "Members: Zephyrium (Tier 6)", "Members can now smelt " + "<col=000080>" + "zephyrium" + "</col>" + " within Daemonheim."];
                case 102:
                    return [Obj.obj_50, Obj.rand_arrowheads_6, "Members: Zephyrium arrowheads (Tier 6) (20)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium arrowheads" + "</col>" + " within Daemonheim."];
                case 103:
                    return [Obj.obj_50, Obj.rand_dagger_6, "Members: Zephyrium dagger (Tier 6)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium daggers" + "</col>" + " within Daemonheim."];
                case 104:
                    return [Obj.obj_51, Obj.rand_boots_6, "Members: Zephyrium boots (Tier 6)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium boots" + "</col>" + " within Daemonheim."];
                case 105:
                    return [Obj.obj_51, Obj.rand_gauntlets_6, "Members: Zephyrium gauntlets (Tier 6)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium gauntlets" + "</col>" + " within Daemonheim."];
                case 106:
                    return [Obj.obj_52, Obj.rand_hatchet_6, "Members: Zephyrium hatchet (Tier 6)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium hatchets" + "</col>" + " within Daemonheim."];
                case 107:
                    return [Obj.obj_52, Obj.rand_pickaxe_6, "Members: Zephyrium pickaxe (Tier 6)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "zephyrium pickaxes" + "</col>" + " within Daemonheim."];
                case 108:
                    return [Obj.obj_53, Obj.rand_warhammer_6, "Members: Zephyrium warhammer (Tier 6)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "zephyrium warhammers" + "</col>" + " within Daemonheim."];
                case 109:
                    return [Obj.obj_53, Obj.rand_sword_6, "Members: Zephyrium rapier (Tier 6)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "zephyrium rapiers" + "</col>" + " within Daemonheim."];
                case 110:
                    return [Obj.obj_54, Obj.rand_longsword_6, "Members: Zephyrium longsword (Tier 6)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "zephyrium longswords" + "</col>" + " within Daemonheim."];
                case 111:
                    return [Obj.obj_55, Obj.rand_full_helm_6, "Members: Zephyrium full helm (Tier 6)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "zephyrium full helms" + "</col>" + " within Daemonheim."];
                case 112:
                    return [Obj.obj_55, Obj.rand_battleaxe_6, "Members: Zephyrium battleaxe (Tier 6)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "zephyrium battleaxes" + "</col>" + " within Daemonheim."];
                case 113:
                    return [Obj.obj_56, Obj.rand_kiteshield_6, "Members: Zephyrium kiteshield (Tier 6)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "zephyrium kiteshields" + "</col>" + " within Daemonheim."];
                case 114:
                    return [Obj.obj_56, Obj.rand_chainbody_6, "Members: Zephyrium chainbody (Tier 6)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "zephyrium chainbodies" + "</col>" + " within Daemonheim."];
                case 115:
                    return [Obj.obj_57, Obj.rand_platelegs_6, "Members: Zephyrium platelegs (Tier 6)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "zephyrium platelegs" + "</col>" + " within Daemonheim."];
                case 116:
                    return [Obj.obj_57, Obj.rand_plateskirt_6, "Members: Zephyrium plateskirt (Tier 6)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "zephyrium plateskirts" + "</col>" + " within Daemonheim."];
                case 117:
                    return [Obj.obj_57, Obj.rand_spear_6, "Members: Zephyrium spear (Tier 6)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "zephyrium spears" + "</col>" + " within Daemonheim."];
                case 118:
                    return [Obj.obj_58, Obj.rand_maul_6, "Members: Zephyrium maul (Tier 6)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "zephyrium mauls" + "</col>" + " within Daemonheim."];
                case 119:
                    return [Obj.obj_58, Obj.rand_2h_sword_6, "Members: Zephyrium 2h sword (Tier 6)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "zephyrium 2h swords" + "</col>" + " within Daemonheim."];
                case 120:
                    return [Obj.obj_59, Obj.rand_platebody_6, "Members: Zephyrium platebody (Tier 6)" + "<br>" + " 5 bars", "Members can now smith " + "<col=000080>" + "zephyrium platebodies" + "</col>" + " within Daemonheim."];
                case 121:
                    return [Obj.obj_60, Obj.rand_bar_7, "Members: Argonite (Tier 7)", "Members can now smelt " + "<col=000080>" + "argonite" + "</col>" + " within Daemonheim."];
                case 122:
                    return [Obj.obj_60, Obj.rand_arrowheads_7, "Members: Argonite arrowheads (Tier 7) (20)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite arrowheads" + "</col>" + " within Daemonheim."];
                case 123:
                    return [Obj.obj_60, Obj.rand_dagger_7, "Members: Argonite dagger (Tier 7)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite daggers" + "</col>" + " within Daemonheim."];
                case 124:
                    return [Obj.obj_61, Obj.rand_boots_7, "Members: Argonite boots (Tier 7)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite boots" + "</col>" + " within Daemonheim."];
                case 125:
                    return [Obj.obj_61, Obj.rand_gauntlets_7, "Members: Argonite gauntlets (Tier 7)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite gauntlets" + "</col>" + " within Daemonheim."];
                case 126:
                    return [Obj.obj_62, Obj.rand_hatchet_7, "Members: Argonite hatchet (Tier 7)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite hatchets" + "</col>" + " within Daemonheim."];
                case 127:
                    return [Obj.obj_62, Obj.rand_pickaxe_7, "Members: Argonite pickaxe (Tier 7)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "argonite pickaxes" + "</col>" + " within Daemonheim."];
                case 128:
                    return [Obj.obj_63, Obj.rand_warhammer_7, "Members: Argonite warhammer (Tier 7)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "argonite warhammers" + "</col>" + " within Daemonheim."];
                case 129:
                    return [Obj.obj_63, Obj.rand_sword_7, "Members: Argonite rapier (Tier 7)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "argonite rapiers" + "</col>" + " within Daemonheim."];
                case 130:
                    return [Obj.obj_64, Obj.rand_longsword_7, "Members: Argonite longsword (Tier 7)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "argonite longswords" + "</col>" + " within Daemonheim."];
                case 131:
                    return [Obj.obj_65, Obj.rand_full_helm_7, "Members: Argonite full helm (Tier 7)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "argonite full helms" + "</col>" + " within Daemonheim."];
                case 132:
                    return [Obj.obj_65, Obj.rand_battleaxe_7, "Members: Argonite battleaxe (Tier 7)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "argonite battleaxes" + "</col>" + " within Daemonheim."];
                case 133:
                    return [Obj.obj_66, Obj.rand_kiteshield_7, "Members: Argonite kiteshield (Tier 7)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "argonite kiteshields" + "</col>" + " within Daemonheim."];
                case 134:
                    return [Obj.obj_66, Obj.rand_chainbody_7, "Members: Argonite chainbody (Tier 7)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "argonite chainbodies" + "</col>" + " within Daemonheim."];
                case 135:
                    return [Obj.obj_67, Obj.rand_platelegs_7, "Members: Argonite platelegs (Tier 7)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "argonite platelegs" + "</col>" + " within Daemonheim."];
                case 136:
                    return [Obj.obj_67, Obj.rand_plateskirt_7, "Members: Argonite plateskirt (Tier 7)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "argonite plateskirts" + "</col>" + " within Daemonheim."];
                case 137:
                    return [Obj.obj_67, Obj.rand_spear_7, "Members: Argonite spear (Tier 7)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "argonite spears" + "</col>" + " within Daemonheim."];
                case 138:
                    return [Obj.obj_68, Obj.rand_maul_7, "Members: Argonite maul (Tier 7)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "argonite mauls" + "</col>" + " within Daemonheim."];
                case 139:
                    return [Obj.obj_68, Obj.rand_2h_sword_7, "Members: Argonite 2h sword (Tier 7)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "argonite 2h swords" + "</col>" + " within Daemonheim."];
                case 140:
                    return [Obj.obj_69, Obj.rand_platebody_7, "Members: Argonite platebody (Tier 7)" + "<br>" + " 5 bars", "Members can now smith " + "<col=000080>" + "argonite platebodies" + "</col>" + " within Daemonheim."];
                case 141:
                    return [Obj.obj_70, Obj.rand_bar_8, "Members: Katagon (Tier 8)", "Members can now smelt " + "<col=000080>" + "katagon" + "</col>" + " within Daemonheim."];
                case 142:
                    return [Obj.obj_70, Obj.rand_arrowheads_8, "Members: Katagon arrowheads (Tier 8) (20)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon arrowheads" + "</col>" + " within Daemonheim."];
                case 143:
                    return [Obj.obj_70, Obj.rand_dagger_8, "Members: Katagon dagger (Tier 8)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon daggers" + "</col>" + " within Daemonheim."];
                case 144:
                    return [Obj.obj_71, Obj.rand_boots_8, "Members: Katagon boots (Tier 8)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon boots" + "</col>" + " within Daemonheim."];
                case 145:
                    return [Obj.obj_71, Obj.rand_gauntlets_8, "Members: Katagon gauntlets (Tier 8)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon gauntlets" + "</col>" + " within Daemonheim."];
                case 146:
                    return [Obj.obj_72, Obj.rand_hatchet_8, "Members: Katagon hatchet (Tier 8)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon hatchets" + "</col>" + " within Daemonheim."];
                case 147:
                    return [Obj.obj_72, Obj.rand_pickaxe_8, "Members: Katagon pickaxe (Tier 8)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "katagon pickaxes" + "</col>" + " within Daemonheim."];
                case 148:
                    return [Obj.obj_73, Obj.rand_warhammer_8, "Members: Katagon warhammer (Tier 8)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "katagon warhammers" + "</col>" + " within Daemonheim."];
                case 149:
                    return [Obj.obj_73, Obj.rand_sword_8, "Members: Katagon rapier (Tier 8)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "katagon rapiers" + "</col>" + " within Daemonheim."];
                case 150:
                    return [Obj.khazard_helmet, Obj.rand_longsword_8, "Members: Katagon longsword (Tier 8)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "katagon longswords" + "</col>" + " within Daemonheim."];
                case 151:
                    return [Obj.khazard_platemail, Obj.rand_full_helm_8, "Members: Katagon full helm (Tier 8)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "katagon full helms" + "</col>" + " within Daemonheim."];
                case 152:
                    return [Obj.khazard_platemail, Obj.rand_battleaxe_8, "Members: Katagon battleaxe (Tier 8)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "katagon battleaxes" + "</col>" + " within Daemonheim."];
                case 153:
                    return [Obj.khazard_cellkeys, Obj.rand_kiteshield_8, "Members: Katagon kiteshield (Tier 8)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "katagon kiteshields" + "</col>" + " within Daemonheim."];
                case 154:
                    return [Obj.khazard_cellkeys, Obj.rand_chainbody_8, "Members: Katagon chainbody (Tier 8)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "katagon chainbodies" + "</col>" + " within Daemonheim."];
                case 155:
                    return [Obj.khali_brew, Obj.rand_platelegs_8, "Members: Katagon platelegs (Tier 8)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "katagon platelegs" + "</col>" + " within Daemonheim."];
                case 156:
                    return [Obj.khali_brew, Obj.rand_plateskirt_8, "Members: Katagon plateskirt (Tier 8)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "katagon plateskirts" + "</col>" + " within Daemonheim."];
                case 157:
                    return [Obj.khali_brew, Obj.rand_spear_8, "Members: Katagon spear (Tier 8)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "katagon spears" + "</col>" + " within Daemonheim."];
                case 158:
                    return [Obj.ice_arrow, Obj.rand_maul_8, "Members: Katagon maul (Tier 8)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "katagon mauls" + "</col>" + " within Daemonheim."];
                case 159:
                    return [Obj.ice_arrow, Obj.rand_2h_sword_8, "Members: Katagon 2h sword (Tier 8)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "katagon 2h swords" + "</col>" + " within Daemonheim."];
                case 160:
                    return [Obj.obj_79, Obj.rand_platebody_8, "Members: Katagon platebody (Tier 8)" + "<br>" + " 5 bars", "Members can now smith " + "<col=000080>" + "katagon platebodies" + "</col>" + " within Daemonheim."];
                case 161:
                    return [Obj.obj_80, Obj.rand_bar_9, "Members: Gorgonite (Tier 9)", "Members can now smelt " + "<col=000080>" + "gorgonite" + "</col>" + " within Daemonheim."];
                case 162:
                    return [Obj.obj_80, Obj.rand_arrowheads_9, "Members: Gorgonite arrowheads (Tier 9) (20)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite arrowheads" + "</col>" + " within Daemonheim."];
                case 163:
                    return [Obj.obj_80, Obj.rand_dagger_9, "Members: Gorgonite dagger (Tier 9)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite daggers" + "</col>" + " within Daemonheim."];
                case 164:
                    return [Obj.obj_81, Obj.rand_boots_9, "Members: Gorgonite boots (Tier 9)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite boots" + "</col>" + " within Daemonheim."];
                case 165:
                    return [Obj.obj_81, Obj.rand_gauntlets_9, "Members: Gorgonite gauntlets (Tier 9)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite gauntlets" + "</col>" + " within Daemonheim."];
                case 166:
                    return [Obj.obj_82, Obj.rand_hatchet_9, "Members: Gorgonite hatchet (Tier 9)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite hatchets" + "</col>" + " within Daemonheim."];
                case 167:
                    return [Obj.obj_82, Obj.rand_pickaxe_9, "Members: Gorgonite pickaxe (Tier 9)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "gorgonite pickaxes" + "</col>" + " within Daemonheim."];
                case 168:
                    return [Obj.ikov_lever, Obj.rand_warhammer_9, "Members: Gorgonite warhammer (Tier 9)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "gorgonite warhammers" + "</col>" + " within Daemonheim."];
                case 169:
                    return [Obj.ikov_lever, Obj.rand_sword_9, "Members: Gorgonite rapier (Tier 9)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "gorgonite rapiers" + "</col>" + " within Daemonheim."];
                case 170:
                    return [Obj.obj_84, Obj.rand_longsword_9, "Members: Gorgonite longsword (Tier 9)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "gorgonite longswords" + "</col>" + " within Daemonheim."];
                case 171:
                    return [Obj.ikov_shinykey, Obj.rand_full_helm_9, "Members: Gorgonite full helm (Tier 9)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "gorgonite full helms" + "</col>" + " within Daemonheim."];
                case 172:
                    return [Obj.ikov_shinykey, Obj.rand_battleaxe_9, "Members: Gorgonite battleaxe (Tier 9)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "gorgonite battleaxes" + "</col>" + " within Daemonheim."];
                case 173:
                    return [Obj.obj_86, Obj.rand_kiteshield_9, "Members: Gorgonite kiteshield (Tier 9)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "gorgonite kiteshields" + "</col>" + " within Daemonheim."];
                case 174:
                    return [Obj.obj_86, Obj.rand_chainbody_9, "Members: Gorgonite chainbody (Tier 9)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "gorgonite chainbodies" + "</col>" + " within Daemonheim."];
                case 175:
                    return [Obj.ikov_pendantofarmardyl, Obj.rand_platelegs_9, "Members: Gorgonite platelegs (Tier 9)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "gorgonite platelegs" + "</col>" + " within Daemonheim."];
                case 176:
                    return [Obj.ikov_pendantofarmardyl, Obj.rand_plateskirt_9, "Members: Gorgonite plateskirt (Tier 9)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "gorgonite plateskirts" + "</col>" + " within Daemonheim."];
                case 177:
                    return [Obj.ikov_pendantofarmardyl, Obj.rand_spear_9, "Members: Gorgonite spear (Tier 9)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "gorgonite spears" + "</col>" + " within Daemonheim."];
                case 178:
                    return [Obj.ikov_bootsoflightness, Obj.rand_maul_9, "Members: Gorgonite maul (Tier 9)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "gorgonite mauls" + "</col>" + " within Daemonheim."];
                case 179:
                    return [Obj.ikov_bootsoflightness, Obj.rand_2h_sword_9, "Members: Gorgonite 2h sword (Tier 9)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "gorgonite 2h swords" + "</col>" + " within Daemonheim."];
                case 180:
                    return [Obj.ikov_bootsoflightnessworn, Obj.rand_platebody_9, "Members: Gorgonite platebody (Tier 9)" + "<br>" + " 5 bars", "Members can now smith " + "<col=000080>" + "gorgonite platebodies" + "</col>" + " within Daemonheim."];
                case 181:
                    return [Obj.childs_blanket, Obj.rand_bar_10, "Members: Promethium (Tier 10)", "Members can now smelt " + "<col=000080>" + "Promethium" + "</col>" + " within Daemonheim."];
                case 182:
                    return [Obj.childs_blanket, Obj.rand_arrowheads_10, "Members: Promethium arrowheads (Tier 10) (20)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium arrowheads" + "</col>" + " within Daemonheim."];
                case 183:
                    return [Obj.childs_blanket, Obj.rand_dagger_10, "Members: Promethium dagger (Tier 10)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium daggers" + "</col>" + " within Daemonheim."];
                case 184:
                    return [Obj.obj_91, Obj.rand_boots_10, "Members: Promethium boots (Tier 10)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium boots" + "</col>" + " within Daemonheim."];
                case 185:
                    return [Obj.obj_91, Obj.rand_gauntlets_10, "Members: Promethium gauntlets (Tier 10)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium gauntlets" + "</col>" + " within Daemonheim."];
                case 186:
                    return [Obj.obj_92, Obj.rand_hatchet_10, "Members: Promethium hatchet (Tier 10)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium hatchets" + "</col>" + " within Daemonheim."];
                case 187:
                    return [Obj.obj_92, Obj.rand_pickaxe_10, "Members: Promethium pickaxe (Tier 10)" + "<br>" + " 1 bar", "Members can now smith " + "<col=000080>" + "promethium pickaxes" + "</col>" + " within Daemonheim."];
                case 188:
                    return [Obj.obj_93, Obj.rand_warhammer_10, "Members: Promethium warhammer (Tier 10)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "promethium warhammers" + "</col>" + " within Daemonheim."];
                case 189:
                    return [Obj.obj_93, Obj.rand_sword_10, "Members: Promethium rapier (Tier 10)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "promethium rapiers" + "</col>" + " within Daemonheim."];
                case 190:
                    return [Obj.obj_94, Obj.rand_longsword_10, "Members: Promethium longsword (Tier 10)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "promethium longswords" + "</col>" + " within Daemonheim."];
                case 191:
                    return [Obj.obj_95, Obj.rand_full_helm_10, "Members: Promethium full helm (Tier 10)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "promethium full helms" + "</col>" + " within Daemonheim."];
                case 192:
                    return [Obj.obj_95, Obj.rand_battleaxe_10, "Members: Promethium battleaxe (Tier 10)" + "<br>" + " 2 bars", "Members can now smith " + "<col=000080>" + "promethium battleaxes" + "</col>" + " within Daemonheim."];
                case 193:
                    return [Obj.obj_96, Obj.rand_kiteshield_10, "Members: Promethium kiteshield (Tier 10)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "promethium kiteshields" + "</col>" + " within Daemonheim."];
                case 194:
                    return [Obj.obj_96, Obj.rand_chainbody_10, "Members: Promethium chainbody (Tier 10)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "promethium chainbodies" + "</col>" + " within Daemonheim."];
                case 195:
                    return [Obj.obj_97, Obj.rand_platelegs_10, "Members: Promethium platelegs (Tier 10)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "promethium platelegs" + "</col>" + " within Daemonheim."];
                case 196:
                    return [Obj.obj_97, Obj.rand_plateskirt_10, "Members: Promethium plateskirt (Tier 10)" + "<br>" + " 3 bars", "Members can now smith " + "<col=000080>" + "promethium plateskirts" + "</col>" + " within Daemonheim."];
                case 197:
                    return [Obj.obj_97, Obj.rand_spear_10, "Members: Promethium spear (Tier 10)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "promethium spears" + "</col>" + " within Daemonheim."];
                case 198:
                    return [Obj.obj_98, Obj.rand_maul_10, "Members: Promethium maul (Tier 10)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "promethium mauls" + "</col>" + " within Daemonheim."];
                case 199:
                    return [Obj.obj_98, Obj.rand_2h_sword_10, "Members: Promethium 2h sword (Tier 10)" + "<br>" + " 4 bars", "Members can now smith " + "<col=000080>" + "promethium 2h swords" + "</col>" + " within Daemonheim."];
                case 200:
                    return [Obj.obj_99, Obj.rand_platebody_10, "Members: Promethium platebody (Tier 10)" + "<br>" + " 5 bars", "Members can now smith " + "<col=000080>" + "promethium platebodies" + "</col>" + " within Daemonheim."];
            }
            break;
        case 15:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_99, Obj.skillcape_smithing, "Skill mastery", "<col=000080>" + "Congratulations! You are now a master smith. Members can visit " + "<col=800000>" + "Thurgo" + "<col=000080>" + ", who lives near " + "<col=800000>" + "Mudskipper Point" + "<col=000080>" + ". He has something special that is only available to true masters of the " + "<col=800000>" + "Smithing" + "<col=000080>" + " skill!"];
            }
            break;
    }
    return [Obj.mcannonremains, -1, "", ""];
}
