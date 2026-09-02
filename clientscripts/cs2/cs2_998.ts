/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_998

function cs2_998(intArg0: number, intArg1: number): [obj, obj, string, string] {
    switch (intArg0) {
        case 0:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.net, "Small net", "You can now fish with a " + "<col=000080>" + "small net" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.crayfish_cage, "Crayfish cage", "You can now fish with a " + "<col=000080>" + "crayfish cage" + "</col>" + "."];
                case 2:
                    return [Obj.mcannonbook, Obj.fishing_rod, "Bait fishing", "You can now fish with " + "<col=000080>" + "fishing rods" + "</col>" + " and bait" + "</col>" + "."];
                case 3:
                    return [Obj.magic_whistle, Obj.big_net, "Members: Big net", "Members can now fish with " + "<col=000080>" + "big nets" + "</col>" + "."];
                case 4:
                    return [Obj.whitecog, Obj.fly_fishing_rod, "Fly fishing rod", "You can now fish with " + "<col=000080>" + "fly fishing rods" + "</col>" + " and " + "<col=000080>" + "feathers" + "</col>" + "."];
                case 5:
                    return [Obj.excalibur, Obj.harpoon, "Harpoon", "You can now fish with " + "<col=000080>" + "harpoons" + "</col>" + "."];
                case 6:
                    return [Obj.iron_arrowheads, Obj.lobster_pot, "Lobster pot", "You can now fish with " + "<col=000080>" + "lobster pots" + "</col>" + "."];
                case 7:
                    return [Obj.iron_arrowheads, Obj.sc_reward_harpoon, "Members: Sacred clay harpoon", "Members can now use " + "<col=000080>" + "sacred clay harpoons" + "</col>" + "."];
                case 8:
                    return [Obj.iron_arrowheads, Obj.sc_reward_volatile_harpoon, "Members: Volatile harpoon", "Members can now use " + "<col=000080>" + "volatile harpoons" + "</col>" + "."];
                case 9:
                    return [Obj.obj_48, Obj.brut_fishing_rod, "Members: Heavy rod" + "<br>" + " (with 15 Agility and 15 Strength)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to fish with " + "<col=000080>" + "heavy rods" + "</col>" + ". (They also need level 15 Agility and level 15 Strength.)"];
                case 10:
                    return [Obj.obj_65, Obj.tbwt_karambwan_vessel, "Members: Vessel fishing" + "<br>" + " (after starting Tai Bwo Wannai Trio)", "Members now have the Fishing level required to use " + "<col=000080>" + "karambwan vessels" + "</col>" + " to fish for " + "<col=000080>" + "karambwan" + "</col>" + " (after starting Tai Bwo Wannai Trio)."];
                case 11:
                    return [Obj.obj_65, Obj.hvh_swordfish_gloves, "Swordfish gloves", "You can now wear " + "<col=000080>" + "swordfish gloves" + "</col>" + "."];
                case 12:
                    return [Obj.obj_70, Obj.net_wieldable, "Members: Small cast net (after completing Deadliest Catch)", "You can now fish with " + "<col=000080>" + "small cast nets" + "</col>" + " (after completing Deadliest Catch)."];
                case 13:
                    return [Obj.obj_70, Obj.big_net_wieldable, "Members: Big cast net (after completing Deadliest Catch)", "Members can now fish with " + "<col=000080>" + "big cast nets" + "</col>" + " (after completing Deadliest Catch)."];
                case 14:
                    return [Obj.childs_blanket, Obj.hvh_shark_gloves, "Members: Shark gloves", "Members can now wear " + "<col=000080>" + "shark gloves" + "</col>" + "."];
            }
            break;
        case 1:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.raw_shrimp, "Shrimp - Net fishing", "You can now catch " + "<col=000080>" + "shrimp" + "</col>" + " with a net."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.raw_crayfish, "Crayfish - Crayfish cage", "You can now catch " + "<col=000080>" + "crayfish" + "</col>" + " with a crayfish cage."];
                case 2:
                    return [Obj.mcannonbook, Obj.raw_sardine, "Sardine - Sea bait fishing", "You can now catch " + "<col=000080>" + "sardines" + "</col>" + " with a fishing rod."];
                case 3:
                    return [Obj.mcannonbook, Obj.tbwt_raw_karambwanji, "Members: Karambwanji - Net fishing", "Members can now catch " + "<col=000080>" + "karabwanji" + "</col>" + " with a net."];
                case 4:
                    return [Obj.twpart3, Obj.raw_herring, "Herring - Sea bait fishing", "You can now catch " + "<col=000080>" + "herring" + "</col>" + " with a fishing rod."];
                case 5:
                    return [Obj.holy_table_napkin, Obj.raw_anchovies, "Anchovies - Net fishing", "You can now catch " + "<col=000080>" + "anchovies" + "</col>" + " with a net."];
                case 6:
                    return [Obj.magic_whistle, Obj.raw_mackerel, "Members: Mackerel - Big net fishing", "Members can now catch " + "<col=000080>" + "mackerel" + "</col>" + " with a big net."];
                case 7:
                    return [Obj.magic_whistle, Obj.oystershell, "Members: Oyster - Big net fishing", "Members can now catch " + "<col=000080>" + "oysters" + "</col>" + " with a big net."];
                case 8:
                    return [Obj.magic_whistle, Obj.casket, "Members: Casket - Big net fishing", "Members can now catch " + "<col=000080>" + "caskets" + "</col>" + " with a big net."];
                case 9:
                    return [Obj.magic_whistle, Obj.seaweed, "Members: Seaweed - Big net fishing", "Members can now catch " + "<col=000080>" + "seaweed" + "</col>" + " with a big net."];
                case 10:
                    return [Obj.whitecog, Obj.raw_trout, "Trout - Fly-fishing", "You can now catch " + "<col=000080>" + "trout" + "</col>" + " with a fly-fishing rod."];
                case 11:
                    return [Obj.redcog, Obj.raw_cod, "Members: Cod - Big net fishing", "Members can now catch " + "<col=000080>" + "cod" + "</col>" + " with a big net."];
                case 12:
                    return [Obj.red_vine_worm, Obj.raw_pike, "Pike - River bait fishing", "You can now catch " + "<col=000080>" + "pike" + "</col>" + " with a fishing rod."];
                case 13:
                    return [Obj.insect_repellent, Obj.mort_slimey_eel, "Members: Slimy eel - River bait fishing", "Members can now catch " + "<col=000080>" + "slimy eels" + "</col>" + " with a fishing rod."];
                case 14:
                    return [Obj.bucket_wax, Obj.raw_salmon, "Salmon - Fly-fishing", "You can now catch " + "<col=000080>" + "salmon" + "</col>" + " with a fly-fishing rod."];
                case 15:
                    return [Obj.obj_33, Obj.giant_frogspawn, "Members: Giant frogspawn - Net fishing", "Members can now catch " + "<col=000080>" + "giant frogspawn" + "</col>" + " with a net."];
                case 16:
                    return [Obj.excalibur, Obj.raw_tuna, "Tuna - Harpoon fishing", "You can now catch " + "<col=000080>" + "tuna" + "</col>" + " with a harpoon."];
                case 17:
                    return [Obj.unlit_black_candle, Obj.hunting_raw_fish_special, "Members: Rainbow fish - Stripy fly-fishing", "Members can now catch " + "<col=000080>" + "rainbow fish" + "</col>" + " with a fly-fishing rod."];
                case 18:
                    return [Obj.unlit_black_candle, Obj.raw_cave_eel, "Members: Cave eel - River bait fishing", "Members can now catch " + "<col=000080>" + "cave eels" + "</col>" + " with a fishing rod."];
                case 19:
                    return [Obj.iron_arrowheads, Obj.raw_lobster, "Lobster - Lobster pot fishing", "You can now catch " + "<col=000080>" + "lobsters" + "</col>" + " with a lobster pot."];
                case 20:
                    return [Obj.pearl_bolttips, Obj.raw_bass, "Members: Bass - Big net fishing", "Members can now catch " + "<col=000080>" + "bass" + "</col>" + " with a big net."];
                case 21:
                    return [Obj.obj_50, Obj.raw_swordfish, "Swordfish - Harpoon fishing", "You can now catch " + "<col=000080>" + "swordfish" + "</col>" + " with a harpoon."];
                case 22:
                    return [Obj.obj_53, Obj.raw_lava_eel, "Members: Lava eel - Bait fishing (oily fishing rod)", "Members can now catch " + "<col=000080>" + "lava eels" + "</col>" + " with an oily fishing rod."];
                case 23:
                    return [Obj.obj_62, Obj.raw_monkfish, "Members: Monkfish - Net fishing", "Members can now catch " + "<col=000080>" + "monkfish" + "</col>" + " with a net."];
                case 24:
                    return [Obj.obj_65, Obj.tbwt_raw_karambwan, "Members: Karambwan - Vessel fishing", "Members can now catch " + "<col=000080>" + "karambwan" + "</col>" + " with a karambwan vessel in Karamja."];
                case 25:
                    return [Obj.khazard_cellkeys, Obj.raw_shark, "Members: Shark - Harpoon fishing", "Members can now catch " + "<col=000080>" + "sharks" + "</col>" + " with a harpoon."];
                case 26:
                    return [Obj.obj_79, Obj.raw_seaturtle, "Members: Sea turtle - Fishing Trawler", "Members can now catch " + "<col=000080>" + "sea turtles" + "</col>" + " in Fishing Trawler."];
                case 27:
                    return [Obj.obj_81, Obj.raw_mantaray, "Members: Manta ray - Fishing Trawler", "Members can now catch " + "<col=000080>" + "manta rays" + "</col>" + " in Fishing Trawler."];
                case 28:
                    return [Obj.ikov_shinykey, Obj.lrc_cavefish_raw, "Members: Cavefish - Cave bait fishing", "Members can now catch " + "<col=000080>" + "cavefish" + "</col>" + " with a fishing rod."];
                case 29:
                    return [Obj.childs_blanket, Obj.lrc_rocktail_raw, "Members: Rocktail - Living minerals cave bait fishing", "Members can now catch " + "<col=000080>" + "rocktails" + "</col>" + " with a fishing rod."];
                case 30:
                    return [Obj.obj_95, Obj.hlr4m_tiger_shark_raw, "Members: Tiger shark - Fishing Trawler", "Members can now catch " + "<col=000080>" + "tiger sharks" + "</col>" + " in Fishing Trawler."];
            }
            break;
        case 2:
            switch (intArg1) {
                case 0:
                    return [-1, Obj.obj_7620, "To start fishing like a barbarian, talk to Otto Godblessed when you have at least level 48 Fishing, level 15 Agility and level 15 Strength.", ""];
                case 1:
                    return [Obj.obj_48, Obj.brut_spawning_trout, "Members: Leaping trout" + "<br>" + " (with 15 Strength and 15 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "leaping trout" + "</col>" + " with a heavy rod. (They also need level 15 Agility and level 15 Strength.)"];
                case 2:
                    return [Obj.obj_55, Obj.raw_tuna, "Members: Tuna" + "<br>" + " (with 35 Strength)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "tuna" + "</col>" + " without a harpoon. (They also need level 35 Strength.)"];
                case 3:
                    return [Obj.obj_55, Obj.raw_tuna, "Members: Possibility of catching two tuna in one fishing attempt" + "<br>" + " (with 35 Strength and 35 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to potentially catch two " + "<col=000080>" + "tuna" + "</col>" + " in one attempt without a harpoon. (They also need level 35 Strength and 35 Agility.)"];
                case 4:
                    return [Obj.obj_58, Obj.brut_spawning_salmon, "Members: Leaping salmon" + "<br>" + " (with 30 Strength and 30 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "leaping salmon" + "</col>" + " with a heavy rod. (They also need level 30 Agility and level 30 Strength.)"];
                case 5:
                    return [Obj.obj_70, Obj.raw_swordfish, "Members: Swordfish" + "<br>" + " (with 50 Strength)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "swordfish" + "</col>" + " without a harpoon. (They also need level 50 Strength.)"];
                case 6:
                    return [Obj.obj_70, Obj.raw_swordfish, "Members: Possibility of catching two swordfish in one fishing attempt" + "<br>" + " (with 50 Strength and 50 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch two " + "<col=000080>" + "swordfish" + "</col>" + " without a harpoon. (They also need level 50 Strength and 50 Agility.)"];
                case 7:
                    return [Obj.obj_70, Obj.brut_sturgeon, "Members: Leaping sturgeon" + "<br>" + " (with 45 Strength and 45 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "leaping sturgeon" + "</col>" + " with a heavy rod. (They also need level 45 Agility and level 45 Strength.)"];
                case 8:
                    return [Obj.obj_96, Obj.raw_shark, "Members: Shark" + "<br>" + " (with 76 Strength)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to catch " + "<col=000080>" + "sharks" + "</col>" + " without a harpoon. (They also need level 76 Strength.)"];
                case 9:
                    return [Obj.obj_96, Obj.raw_shark, "Members: Possibility of catching two sharks in one fishing attempt" + "<br>" + " (with 76 Strength and 76 Agility)", "Members who are versed in the art of barbarian fishing now have the Fishing level required to potentially catch two " + "<col=000080>" + "sharks" + "</col>" + " in one attempt without a harpoon. (They also need level 76 Strength and 76 Agility.)"];
            }
            break;
        case 3:
            switch (intArg1) {
                case 0:
                    return [Obj.excalibur, Obj.raw_tuna, "Possibility of catching two tuna in one fishing attempt" + "<br>" + " (with 35 Agility)", "You now have the Fishing level required to potentially catch two " + "<col=000080>" + "tuna" + "</col>" + " in one fishing attempt. (You also need level 35 Agility.)"];
                case 1:
                    return [Obj.obj_50, Obj.raw_swordfish, "Possibility of catching two swordfish in one fishing attempt" + "<br>" + " (with 50 Agility)", "You now have the Fishing level required to potentially catch two " + "<col=000080>" + "swordfish" + "</col>" + " in one fishing attempt. (You also need level 50 Agility.)"];
                case 2:
                    return [Obj.khazard_cellkeys, Obj.raw_shark, "Possibility of catching two sharks in one fishing attempt" + "<br>" + " (with 76 Agility)", "You now have the Fishing level required to potentially catch two " + "<col=000080>" + "sharks" + "</col>" + " in one fishing attempt. (You also need level 76 Agility.)"];
            }
            break;
        case 4:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_91, Obj.effi_ancient_effigy_level_0, "Members: Starved ancient effigies", "Members can now investigate " + "<col=000080>" + "starved ancient effigies" + "</col>" + " using their knowledge of Fishing."];
                case 1:
                    return [Obj.obj_93, Obj.effi_ancient_effigy_level_1, "Members: Nourished ancient effigies", "Members can now investigate " + "<col=000080>" + "nourished ancient effigies" + "</col>" + " using their knowledge of Fishing."];
                case 2:
                    return [Obj.obj_95, Obj.effi_ancient_effigy_level_2, "Members: Sated ancient effigies", "Members can now investigate " + "<col=000080>" + "sated ancient effigies" + "</col>" + " using their knowledge of Fishing."];
                case 3:
                    return [Obj.obj_97, Obj.effi_ancient_effigy_level_3, "Members: Gorged ancient effigies", "Members can now investigate " + "<col=000080>" + "gorged ancient effigies" + "</col>" + " using their knowledge of Fishing."];
            }
            break;
        case 5:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.sc_harpoon_1, "Members: Stealing Creation - class 1 harpoon", "Members can now use " + "<col=000080>" + "class 1 harpoons" + "</col>" + " in Stealing Creation."];
                case 1:
                    return [Obj.whitecog, Obj.sc_clay_2, "Members: Stealing Creation - catch class 2 sacred clay", "Members can now catch " + "<col=000080>" + "class 2 sacred clay" + "</col>" + " in Stealing Creation."];
                case 2:
                    return [Obj.whitecog, Obj.sc_harpoon_2, "Members: Stealing Creation - class 2 harpoon", "Members can now use " + "<col=000080>" + "class 2 harpoons" + "</col>" + " in Stealing Creation."];
                case 3:
                    return [Obj.iron_arrowheads, Obj.sc_clay_3, "Members: Stealing Creation - catch class 3 sacred clay", "Members can now catch " + "<col=000080>" + "class 3 sacred clay" + "</col>" + " in Stealing Creation."];
                case 4:
                    return [Obj.iron_arrowheads, Obj.sc_harpoon_3, "Members: Stealing Creation - class 3 harpoon", "Members can now use " + "<col=000080>" + "class 3 harpoons" + "</col>" + " in Stealing Creation."];
                case 5:
                    return [Obj.obj_60, Obj.sc_clay_4, "Members: Stealing Creation - catch class 4 sacred clay", "Members can now catch " + "<col=000080>" + "class 4 sacred clay" + "</col>" + " in Stealing Creation."];
                case 6:
                    return [Obj.obj_60, Obj.sc_harpoon_4, "Members: Stealing Creation - class 4 harpoon", "Members can now use " + "<col=000080>" + "class 4 harpoons" + "</col>" + " in Stealing Creation."];
                case 7:
                    return [Obj.obj_80, Obj.sc_clay_5, "Members: Stealing Creation - catch class 5 sacred clay", "Members can now catch " + "<col=000080>" + "class 5 sacred clay" + "</col>" + " in Stealing Creation."];
                case 8:
                    return [Obj.obj_80, Obj.sc_harpoon_5, "Members: Stealing Creation - class 5 harpoon", "Members can now use " + "<col=000080>" + "class 5 harpoons" + "</col>" + " in Stealing Creation."];
            }
            break;
        case 6:
            switch (intArg1) {
                case 0:
                    return [-1, Obj.rand_mission_contract, "Dungeoneering skill tasks" + "<br>" + "As your Fishing level increases, you will be able to attempt higher-level fishing tasks within Daemonheim. You will also be more likely to succeed when attempting fishing tasks within Daemonheim.", ""];
                case 1:
                    return [Obj.mcannontoolkit, Obj.rand_raw_fish_1, "Heim crab (Tier 1)", "You can now catch " + "<col=000080>" + "heim crabs" + "</col>" + " within Daemonheim."];
                case 2:
                    return [Obj.twpart3, Obj.rand_raw_fish_2, "Red-eye (Tier 2)", "You can now catch " + "<col=000080>" + "red-eye" + "</col>" + " within Daemonheim."];
                case 3:
                    return [Obj.whitecog, Obj.rand_raw_fish_3, "Dusk eel (Tier 3)", "You can now catch " + "<col=000080>" + "dusk eels" + "</col>" + " within Daemonheim."];
                case 4:
                    return [Obj.bucket_wax, Obj.rand_raw_fish_4, "Giant flatfish (Tier 4)", "You can now catch " + "<col=000080>" + "giant flatfish" + "</col>" + " within Daemonheim."];
                case 5:
                    return [Obj.iron_arrowheads, Obj.rand_raw_fish_5, "Short-finned eel (Tier 5)", "You can now catch " + "<col=000080>" + "short-finned eels" + "</col>" + " within Daemonheim."];
                case 6:
                    return [Obj.obj_50, Obj.rand_raw_fish_6, "Members: Web snipper (Tier 6)", "Members can now catch " + "<col=000080>" + "web snippers" + "</col>" + " within Daemonheim."];
                case 7:
                    return [Obj.obj_60, Obj.rand_raw_fish_7, "Members: Bouldabass (Tier 7)", "Members can now catch " + "<col=000080>" + "bouldabass" + "</col>" + " within Daemonheim."];
                case 8:
                    return [Obj.obj_70, Obj.rand_raw_fish_8, "Members: Salve eel (Tier 8)", "Members can now catch " + "<col=000080>" + "salve eels" + "</col>" + " within Daemonheim."];
                case 9:
                    return [Obj.obj_80, Obj.rand_raw_fish_9, "Members: Blue crab (Tier 9)", "Members can now catch " + "<col=000080>" + "blue crabs" + "</col>" + " within Daemonheim."];
                case 10:
                    return [Obj.childs_blanket, Obj.rand_raw_fish_10, "Members: Cave moray (Tier 10)", "Members can now catch " + "<col=000080>" + "cave morays" + "</col>" + " within Daemonheim."];
            }
            break;
        case 7:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_68, Obj.raw_shark, "Members: Fishing Guild", "Members can now enter the " + "<col=000080>" + "Fishing Guild" + "</col>" + "."];
                case 1:
                    return [Obj.obj_99, Obj.skillcape_fishing, "Skill mastery", "<col=000080>" + "Congratulations! You are now a master of " + "<col=800000>" + "Fishing" + "<col=000080>" + ". Members can visit the " + "<col=800000>" + "Master Fisherman" + "<col=000080>" + " at the " + "<col=800000>" + "Fishing Guild" + "<col=000080>" + ". He has something special that is only available to true masters of the " + "<col=800000>" + "Fishing" + "<col=000080>" + " skill!"];
            }
            break;
    }
    return [Obj.mcannonremains, -1, "", ""];
}
