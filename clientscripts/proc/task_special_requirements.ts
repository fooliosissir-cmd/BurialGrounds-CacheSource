/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,task_special_requirements]

function task_special_requirements(intArg0: number, intArg1: number): string {
    let str0: string = "";
    let int2: number = 0;

    switch (intArg0) {
        case 23:
        case 147:
        case 167:
        case 249:
        case 294:
        case 961:
            if (intArg1 == 1) {
                str0 = "You must have access to the fairy ring network to complete this Task.";
                if (varbit_fairyring_use == 1) {
                    int2 = 1;
                }
            }
            break;
        case 49:
            if (intArg1 == 1) {
                str0 = "You must unlock 500 music tracks in order to perform the Air Guitar emote.";
                if (varbit_emote_music == 1) {
                    int2 = 1;
                }
            }
            break;
        case 59:
            if (intArg1 == 2) {
                str0 = "You must also have completed the Abyss miniquest.";
                if (varp_492 >= 4) {
                    int2 = 1;
                }
            }
            break;
        case 107:
            if (intArg1 == 1) {
                str0 = "You must have progressed to a certain point in the Dragon Slayer quest.";
                if ((varp_176 >= 2 && varbit_dragonslayer_instructions_shield == 0) || varp_176 >= 10) {
                    int2 = 1;
                }
            }
            break;
        case 178:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_fishing_s > 0) {
                    int2 = 1;
                }
            }
            break;
        case 180:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_craft_ship > 0) {
                    int2 = 1;
                }
            }
            break;
        case 177:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_craft_ship > 0) {
                    int2 = 1;
                }
            }
            break;
        case 316:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_fishing_s > 0) {
                    int2 = 1;
                }
            }
            break;
        case 321:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_craft_ship > 0) {
                    int2 = 1;
                }
            }
            break;
        case 322:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_smith_hasta > 0) {
                    int2 = 1;
                }
            }
            break;
        case 323:
            if (intArg1 == 1) {
                str0 = "You must begin the relevant section of Otto Godblessed's barbarian training.";
                if (varbit_brut_herb_potion > 0) {
                    int2 = 1;
                }
            }
            break;
        case 175:
            if (intArg1 == 1) {
                str0 = "You must complete the Bar Crawl miniquest.";
                if (varp_76 >= 6 || varbit_3378 == 1) {
                    int2 = 1;
                }
            }
            break;
        case 331:
        case 219:
            if (intArg1 == 2) {
                str0 = "You must have a combat level of at least 100 to accept an assignment in Shilo Village.";
                if (comlevel() >= Obj.obj_100) {
                    int2 = 1;
                }
            }
            break;
        case 248:
            if (intArg1 == 1) {
                str0 = "You must have completed the Knight Waves in Camelot.";
                if (varbit_kr_knightwaves_state == 8) {
                    int2 = 1;
                }
            }
            break;
        case 276:
        case 3011:
            if (intArg1 == 1) {
                str0 = "You require 33 Quest Points to enter the Champions' Guild.";
                if (varp_qp >= 33) {
                    int2 = 1;
                }
            }
            break;
        case 281:
            if (intArg1 == 1) {
                str0 = "You must unlock all four emotes by completing levels of the Stronghold of Security.";
                if (varbit_sos_emote_flap == 1 && varbit_sos_emote_doh == 1 && varbit_sos_emote_idea == 1 && varbit_sos_emote_stamp == 1) {
                    int2 = 1;
                }
            }
            break;
        case 285:
            if (intArg1 == 1) {
                str0 = "You must learn the secret of the Senntisten necklace.";
                if (varbit_vm_necklace == 1) {
                    int2 = 1;
                }
            }
            break;
        case 289:
            if (intArg1 == 1) {
                str0 = "You must have a combat level of at least 40 to accept an assignment from Vannaka.";
                if (comlevel() >= Obj.iron_arrowheads) {
                    int2 = 1;
                }
            }
            break;
        case 300:
            if (intArg1 == 1) {
                str0 = "Completing quests will increase your access to Kudos with the Varrock Museum.";
                if (cs2_4035() >= 153) {
                    int2 = 1;
                }
            }
            break;
        case 3000:
            if (intArg1 == 2) {
                if (dateMinutes() >= varp_451) {
                    int2 = 1;
                }
                str0 = "You may gather the Tears of Guthix once every week.";
            } else if (intArg1 == 3) {
                if (varp_qp >= varbit_tog_qp_before_return || cs2_4218() <= 0) {
                    int2 = 1;
                }
                str0 = "You must have gained a Quest Point or 100,000 total experience to enter Juna's cavern.";
            }
            break;
        case 3001:
        case 3013:
        case 3031:
        case 912:
        case 914:
        case 913:
            if (intArg1 == 1) {
                str0 = "You must have a combat level of at least 40.";
                if (comlevelActive() >= 40) {
                    int2 = 1;
                }
            }
            break;
        case 3002:
            if (intArg1 == 1) {
                str0 = "You must have Larry or Chuck explain the purpose of penguin spying.";
                if (varbit_peng_spy_explain == 1) {
                    int2 = 1;
                }
            } else if (intArg1 == 2) {
                str0 = "You must have spied on fewer than ten penguins already this week.";
                if (varbit_peng_spy_week_peng < 10) {
                    int2 = 1;
                }
            } else if (intArg1 == 3) {
                str0 = "You may spy on penguins if your total Penguin Points are less than the maximum of fifty.";
                if (varbit_5275 < 50) {
                    int2 = 1;
                }
            }
            break;
        case 12:
            if (intArg1 == 1) {
                str0 = "You must have Larry or Chuck explain the purpose of Penguin Hide and Seek.";
                if (varbit_peng_spy_explain == 1) {
                    int2 = 1;
                }
            }
            break;
        case 3003:
            if (intArg1 == 1) {
                str0 = "You may not chop down more than two evil trees per day.";
                if (varbit_eviltree_interactions_today < 2) {
                    int2 = 1;
                }
            }
            break;
        case 3007:
            if (intArg1 == 1) {
                str0 = "You may attempt the Agility, Magic and Ranged performances after a week has passed since your last show.";
                if (varbit_crcs_agility_complete == 0 || varbit_crcs_magic_complete == 0 || varbit_crcs_ranged_complete == 0) {
                    int2 = 1;
                }
            }
            break;
        case 3008:
            if (intArg1 == 2) {
                str0 = "You must wait at least a day since you last faced Bork.";
                if (varp_1199 != dateRuneday()) {
                    int2 = 1;
                }
            }
            break;
        case 3010:
            if (intArg1 == 2) {
                str0 = "At least a week must pass since you last faced the Skeletal Horror.";
                if (dateMinutes() > varbit_6305) {
                    int2 = 1;
                }
            }
            break;
        case 3012:
            if (intArg1 == 1) {
                str0 = "You require 50 Runecrafting to enter the Runecrafters' Guild.";
                if (statBase(20) >= 50) {
                    int2 = 1;
                }
            }
            break;
        case 3015:
            if (intArg1 == 2) {
                str0 = "You must have at least 65 Attack or Defence in order to take on a case.";
                if (statBase(0) >= 65 || statBase(1) >= 65) {
                    int2 = 1;
                }
            }
            break;
        case 3034:
            if (intArg1 == 1) {
                str0 = "To enter the Warriors' Guild your Attack or Strength level must be 99, or your combined Attack and Strength levels must total 130 or more.";
                if (statBase(2) + statBase(0) >= 130 || statBase(0) >= 99 || statBase(2) >= 99) {
                    int2 = 1;
                }
            }
            break;
        case 610:
            if (intArg1 == 2) {
                str0 = "You need to have made some progress in the Icthlarin's Little Helper quest to enter Sophanem.";
                if (varbit_ics_little_var >= 3) {
                    int2 = 1;
                }
            }
            break;
        case 448:
            if (intArg1 == 10) {
                str0 = "You must have at least 56 Quest Points to begin this quest.";
                if (varp_qp > 55) {
                    int2 = 1;
                }
            }
            break;
        case 466:
            if (intArg1 == 3) {
                str0 = "You must complete the bar crawl miniquest.";
                if (varp_76 >= 6 || varbit_3378 == 1) {
                    int2 = 1;
                }
            }
            break;
        case 457:
            if (intArg1 == 5) {
                str0 = "You must have a combat level of at least 85 to begin this quest.";
                if (comlevel() >= Obj.ikov_shinykey) {
                    int2 = 1;
                }
            }
            break;
        case 497:
            if (intArg1 == 9) {
                str0 = "You must have at least 101 Quest Points to begin this quest.";
                if (varp_qp >= 101) {
                    int2 = 1;
                }
            }
            break;
        case 506:
            if (intArg1 == 4) {
                str0 = "You must have at least 21 Quest Points to begin this quest.";
                if (varp_qp >= 21) {
                    int2 = 1;
                }
            }
            break;
        case 858:
            if (intArg1 == 2) {
                str0 = "You must have either started The Giant Dwarf or completed Priest in Peril to complete this task.";
                if (varp_priestperil >= 60 || varbit_giantdwarf_quest >= 5) {
                    int2 = 1;
                }
            }
            break;
        case 881:
            if (intArg1 == 2) {
                str0 = "You must have finished the gnome cooking and gnome cocktail tutorials to complete this task.";
                if (varp_205 >= 7 && varp_206 >= 7) {
                    int2 = 1;
                }
            }
            break;
        case 911:
            if (intArg1 == 1) {
                str0 = "You should have a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 916:
        case 915:
            if (intArg1 == 1) {
                str0 = "You should have a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 513:
            if (intArg1 == 5) {
                str0 = "You must play a game of Pest Control.";
                if (varbit_pest_points_old2 > 0 || varbit_pc_played_once == 1) {
                    int2 = 1;
                }
            }
            break;
        case 518:
            if (intArg1 == 1) {
                str0 = "You require at least 13 Quest Points.";
                if (varp_qp >= 13) {
                    int2 = 1;
                }
            }
            break;
        case 530:
            if (intArg1 == 4) {
                str0 = "You require at least 44 Quest Points.";
                if (varp_qp >= 44) {
                    int2 = 1;
                }
            }
            break;
        case 656:
            if (intArg1 == 2) {
                str0 = "You need to have partially completed the Zogre Flesh Eaters quest (learning how to cure disease from Sithik Ints).";
                if (varbit_thzfe_makecuredisease == 1) {
                    int2 = 1;
                }
            }
            break;
        case 818:
            if (intArg1 == 2) {
                str0 = "You need a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 819:
            if (intArg1 == 2) {
                str0 = "You need a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 820:
            if (intArg1 == 3) {
                str0 = "You need a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 822:
            if (intArg1 == 3) {
                str0 = "You need a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 928:
        case 933:
            if (intArg1 == 2) {
                str0 = "You need to find and free Skaldrun from the frozen floors in Daemonheim.";
                if (varbit_fremsaga_skaldrun >= 3) {
                    int2 = 1;
                }
            }
            break;
        case 623:
            if (intArg1 == 2) {
                str0 = "You need to complete the first Thieves' Guild caper: From Tiny Acorns.";
                if (varbit_thigui_quest >= 20) {
                    int2 = 1;
                }
            }
            break;
        case 908:
            if (intArg1 == 1) {
                str0 = "You need a combat level of at least " + tostring(structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) + ".";
                if (comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                    int2 = 1;
                }
            }
            break;
        case 447:
            if (intArg1 == 6) {
                str0 = "You need to work on the Tai Bwo Wannai Cleanup.";
                if (varbit_cleanup_progress > 0) {
                    int2 = 1;
                }
            }
            break;
        case 659:
            if (intArg1 == 2) {
                str0 = "You need to learn how to brew this during the In Aid of the Myreque quest.";
                if (varbit_myreque_2_quest >= 280) {
                    int2 = 1;
                }
            }
            break;
        case 449:
            if (intArg1 == 4) {
                str0 = "You need to rescue Mad Eadgar from the Troll Stronghold.";
                if (varbit_troll_freed_eadgar != 0) {
                    int2 = 1;
                }
            }
            break;
        case 985:
            if (intArg1 == 1) {
                str0 = "You need to own and be able to use a Blood Altar teleport tablet.";
                if (invTotal(Inv.inv, Obj.rcguild_tablet_blood) + invTotal(Inv.bank, Obj.rcguild_tablet_blood) > 0 && varbit_myq4_main_quest >= 490) {
                    int2 = 1;
                }
            }
            break;
        case 976:
            if (intArg1 == 2) {
                str0 = "You need to have cremated 200 or more Vyrewatch.";
                if (varbit_myq4_vyrewatch_cremate_count >= 200) {
                    int2 = 1;
                }
            }
            break;
        case 991:
            if (intArg1 == 1) {
                str0 = "You need to have a combined level of 500 or more for your Temple Trekking companions.";
                if (cs2_6034() >= 500) {
                    int2 = 1;
                }
            }
            break;
        case 980:
            if (intArg1 == 1) {
                str0 = "You need to have achieved level 70 Defence and either level 70 Attack or Ranged.";
                if (statBase(1) >= 70 && (statBase(0) >= 70 || statBase(4) > 70)) {
                    int2 = 1;
                }
            }
            break;
        case 982:
            if (intArg1 == 3) {
                str0 = "You need to have started the quest Branches of Darkmeyer.";
                if (varbit_myq5_main >= 110) {
                    int2 = 1;
                }
            }
            break;
        default:
            str0 = "";
            int2 = 0;
            break;
    }

    if (int2 == 1) {
        str0 = append("<str>", str0);
    }
    return str0;
}
