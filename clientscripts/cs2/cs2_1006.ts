/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1006

function cs2_1006(intArg0: number, intArg1: number): [obj, obj, string, string] {
    switch (intArg0) {
        case 0:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.hunting_icon, "Lay 1 trap at a time", "You can now lay " + "<col=000080>" + "1 trap" + "</col>" + " at a time."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.hunting_ojibway_bird_snare, "Bird snare setting", "You can now set " + "<col=000080>" + "bird snares" + "</col>" + "."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.noose_wand, "Noose wand", "You can now use a " + "<col=000080>" + "noose wand" + "</col>" + " when tracking."];
                case 3:
                    return [Obj.holy_table_napkin, Obj.hunting_butterfly_net, "Butterfly netting", "You can now use a " + "<col=000080>" + "butterfly net" + "</col>" + " and " + "<col=000080>" + "butterfly jar" + "</col>" + " to catch " + "<col=000080>" + "butterflies" + "</col>" + "."];
                case 4:
                    return [Obj.whitecog, Obj.hunting_icon, "Lay up to 2 traps at a time", "You can now lay up to " + "<col=000080>" + "2 traps" + "</col>" + " at a time."];
                case 5:
                    return [Obj.redcog, Obj.logs, "Set a deadfall trap (limit of 1)", "You can now set a " + "<col=000080>" + "deadfall trap" + "</col>" + " up to a limit of 1."];
                case 6:
                    return [Obj.fishing_competition_pass, Obj.hunting_box_trap, "Set a box trap", "You can now set a " + "<col=000080>" + "box trap" + "</col>" + "."];
                case 7:
                    return [Obj.fishing_competition_pass, Obj.hunting_snare, "Set a rabbit snare", "You can now set a " + "<col=000080>" + "rabbit snare" + "</col>" + "."];
                case 8:
                    return [Obj.obj_29, Obj.net, "Set a net trap", "You can now set a " + "<col=000080>" + "net trap" + "</col>" + "."];
                case 9:
                    return [Obj.obj_31, Obj.hunting_teasing_stick, "Set a pitfall trap", "You can now set a " + "<col=000080>" + "pitfall trap" + "</col>" + "."];
                case 10:
                    return [Obj.bronze_arrowheads, Obj.torch_lit, "Use smoke to mask the scent on a trap", "You can now use " + "<col=000080>" + "smoke" + "</col>" + " to mask the scent on a trap."];
                case 11:
                    return [Obj.iron_arrowheads, Obj.hunting_icon, "Lay up to 3 traps at a time", "You can now lay up to " + "<col=000080>" + "3 traps" + "</col>" + " at a time."];
                case 12:
                    return [Obj.iron_arrowheads, Obj.sc_reward_butterfly_net, "Sacred clay butterfly net", "You can now use " + "<col=000080>" + "sacred clay butterfly nets" + "</col>"];
                case 13:
                    return [Obj.iron_arrowheads, Obj.sc_reward_volatile_butterfly_net, "Volatile butterfly net", "You can now use " + "<col=000080>" + "volatile butterfly nets" + "</col>"];
                case 14:
                    return [Obj.adamant_arrowheads, Obj.falcon_gloves, "Hunt with a falcon", "You can now hunt with a " + "<col=000080>" + "falcon" + "</col>" + "."];
                case 15:
                    return [Obj.obj_60, Obj.hunting_icon, "Lay up to 4 traps at a time", "You can now lay up to " + "<col=000080>" + "4 traps" + "</col>" + " at a time."];
                case 16:
                    return [Obj.obj_70, Obj.ecosystem_plant_trap, "Marasamaw plants (herblore habitat)", "You can now set a " + "<col=000080>" + "marasamaw plant" + "</col>" + " trap."];
                case 17:
                    return [Obj.obj_71, Obj.magic_imp_box, "Magical imp box", "You can now set a " + "<col=000080>" + "magical imp box" + "</col>" + " trap."];
                case 18:
                    return [Obj.obj_80, Obj.hunting_icon, "Lay up to 5 traps at a time", "You can now lay up to " + "<col=000080>" + " 5 traps" + "</col>" + " at a time."];
            }
            break;
        case 1:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.huntguide_polar_beast, "Polar kebbit (polar)", "You can now track " + "<col=000080>" + "polar kebbits" + "</col>" + "."];
                case 1:
                    return [Obj.nulodions_notes, Obj.huntguide_wood_beast, "Common kebbit (woodland)", "You can now track " + "<col=000080>" + "common kebbits" + "</col>" + "."];
                case 2:
                    return [Obj.cert_twpart1, Obj.huntguide_jungle_beast, "Feldip weasel (jungle)", "You can now track " + "<col=000080>" + "feldip weasels" + "</col>" + "."];
                case 3:
                    return [Obj.cert_twpart4, Obj.huntguide_desert_beast, "Desert devil (desert)", "You can now track " + "<col=000080>" + "desert devils" + "</col>" + "."];
                case 4:
                    return [Obj.opal_bolttips, Obj.hunting_penguin_obj, "Penguins (polar)" + "<br>" + " (after Hunt for Red Raktuber)", "You can now track " + "<col=000080>" + "penguins" + "</col>" + " (after Hunt for Red Raktuber)."];
                case 5:
                    return [Obj.obj_49, Obj.huntguide_razor2_beast, "Razor-backed kebbit (woodland)", "You can now track " + "<col=000080>" + "razor-backed kebbits" + "</col>" + "."];
                case 6:
                    return [Obj.obj_71, Obj.obj_19954, "Shadow jadinko (herblore habitat)", "You can now track " + "<col=000080>" + "shadow jadinkos" + "</col>" + "."];
                case 7:
                    return [Obj.ice_arrow, Obj.obj_19958, "Diseased jadinko (herblore habitat)", "You can now track " + "<col=000080>" + "diseased jadinkos" + "</col>" + "."];
                case 8:
                    return [Obj.obj_79, Obj.obj_19955, "Camouflaged jadinko (herblore habitat)", "You can now track " + "<col=000080>" + "camouflaged jadinkos" + "</col>" + "."];
            }
            break;
        case 2:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.huntguide_jungle_bird, "Crimson swift (jungle)", "You can now trap " + "<col=000080>" + "crimson swifts" + "</col>" + "."];
                case 1:
                    return [Obj.mcannonbook, Obj.huntguide_desert_bird, "Golden warbler (desert)", "You can now trap " + "<col=000080>" + "golden warblers" + "</col>" + "."];
                case 2:
                    return [Obj.cert_twpart2, Obj.huntguide_wood_bird, "Copper longtail (woodland)", "You can now trap " + "<col=000080>" + "copper longtails" + "</col>" + "."];
                case 3:
                    return [Obj.cert_twpart3, Obj.huntguide_polar_bird, "Cerulean twitch (polar)", "You can now trap " + "<col=000080>" + "cerulean twitches" + "</col>" + "."];
                case 4:
                    return [Obj.holy_grail, Obj.huntguide_coloured_bird, "Tropical wagtail (jungle)", "You can now trap " + "<col=000080>" + "tropical wagtails" + "</col>" + "."];
                case 5:
                    return [Obj.bronze_arrowheads, Obj.obj_12586, "Wimpy bird (jungle)" + "<br>" + " (after starting As a First Resort...)" + "<br>" + " Required lure: smouldering tansymum", "You can now trap " + "<col=000080>" + "wimpy birds" + "</col>" + " (after starting As a First Resort...)."];
            }
            break;
        case 3:
            switch (intArg1) {
                case 0:
                    return [Obj.holy_table_napkin, Obj.huntguide_red_butterfly, "Ruby harvest butterfly (woodland)", "You can now net " + "<col=000080>" + "ruby harvest butterflies" + "</col>" + "."];
                case 1:
                    return [Obj.grail_bell, Obj.ii_captured_impling_1, "Baby impling", "You can now net " + "<col=000080>" + "baby implings" + "</col>" + "."];
                case 2:
                    return [Obj.bluecog, Obj.ii_captured_impling_2, "Young impling", "You can now net " + "<col=000080>" + "young implings" + "</col>" + "."];
                case 3:
                    return [Obj.red_vine_worm, Obj.huntguide_blue_butterfly, "Sapphire glacialis butterfly (polar)", "You can now net " + "<col=000080>" + "sapphire glacialis butterflies" + "</col>" + "."];
                case 4:
                    return [Obj.insect_repellent, Obj.obj_11242, "Gourmet impling", "You can now net " + "<col=000080>" + "gourmet implings" + "</col>" + "."];
                case 5:
                    return [Obj.excalibur, Obj.huntguide_white_butterfly, "Snowy knight butterfly (polar)", "You can now net " + "<col=000080>" + "snowy knight butterflies" + "</col>" + "."];
                case 6:
                    return [Obj.obj_36, Obj.ii_captured_impling_4, "Earth impling", "You can now net " + "<col=000080>" + "earth implings" + "</col>" + "."];
                case 7:
                    return [Obj.mithril_arrowheads, Obj.obj_11246, "Essence impling", "You can now net " + "<col=000080>" + "essence implings" + "</col>" + "."];
                case 8:
                    return [Obj.opal_bolttips, Obj.huntguide_black_butterfly, "Black warlock butterfly (jungle)", "You can now net " + "<col=000080>" + "black warlock butterflies" + "</col>" + "."];
                case 9:
                    return [Obj.obj_50, Obj.ii_captured_impling_6, "Eclectic impling", "You can now net " + "<col=000080>" + "eclectic implings" + "</col>" + "."];
                case 10:
                    return [Obj.obj_54, Obj.ii_captured_impling_6a, "Spirit impling", "You can now net " + "<col=000080>" + "spirit implings" + "</col>" + "."];
                case 11:
                    return [Obj.obj_58, Obj.ii_captured_impling_7, "Nature impling", "You can now net " + "<col=000080>" + "nature implings" + "</col>" + "."];
                case 12:
                    return [Obj.obj_65, Obj.ii_captured_impling_8, "Magpie impling", "You can now net " + "<col=000080>" + "magpie implings" + "</col>" + "."];
                case 13:
                    return [Obj.khazard_helmet, Obj.ii_captured_impling_9, "Ninja impling", "You can now net " + "<col=000080>" + "ninja implings" + "</col>" + "."];
                case 14:
                    return [Obj.khazard_cellkeys, Obj.ii_captured_impling_11, "Pirate impling" + "<br>" + " (after Rocking Out)", "You can now net " + "<col=000080>" + "pirate implings" + "</col>" + " (after Rocking Out)."];
                case 15:
                    return [Obj.ikov_lever, Obj.ii_captured_impling_10, "Dragon impling", "You can now net " + "<col=000080>" + "dragon implings" + "</col>" + "."];
                case 16:
                    return [Obj.ikov_pendantofarmardyl, Obj.ii_captured_impling_12, "Zombie impling", "You can now net " + "<col=000080>" + "zombie implings" + "</col>" + "."];
                case 17:
                    return [Obj.obj_91, Obj.ii_captured_impling_13, "Kingly impling", "You can now net " + "<col=000080>" + "kingly implings" + "</col>" + "."];
            }
            break;
        case 4:
            switch (intArg1) {
                case 0:
                    return [Obj.redcog, Obj.huntguide_hunting_beast, "Wild kebbit (woodland)" + "<br>" + " Preferred bait: Raw meat", "You can now use deadfall traps to hunt " + "<col=000080>" + "wild kebbits" + "</col>" + "."];
                case 1:
                    return [Obj.obj_33, Obj.huntguide_barbtailed_beast, "Barb-tailed kebbit (jungle)" + "<br>" + " Preferred bait: Raw rainbow fish", "You can now use deadfall traps to hunt " + "<col=000080>" + "barb-tailed kebbits" + "</col>" + "."];
                case 2:
                    return [Obj.obj_37, Obj.huntguide_razor_beast, "Prickly kebbit (northern woodland)" + "<br>" + " Preferred bait: Barley", "You can now use deadfall traps to hunt " + "<col=000080>" + "prickly kebbits" + "</col>" + "."];
                case 3:
                    return [Obj.rune_arrowheads, Obj.obj_12587, "Diseased kebbit (jungle)" + "<br>" + " (after starting As a First Resort...)" + "<br>" + " Required lure: smouldering fever grass", "You now have the Hunter level required to use deadfall traps to hunt " + "<col=000080>" + "diseased kebbits" + "</col>" + " (after starting As a First Resort...)."];
                case 4:
                    return [Obj.obj_51, Obj.huntguide_sabre_beast, "Sabre-toothed kebbit (polar)" + "<br>" + " Preferred bait: Raw meat", "You can now use deadfall traps to hunt " + "<col=000080>" + "sabre-toothed kebbits" + "</col>" + "."];
                case 5:
                    return [Obj.obj_51, Obj.hunting_penguin_obj, "Penguins (polar)" + "<br>" + " (after Hunt for Red Raktuber)" + "<br>" + " Preferred bait: Raw cod", "You can now use deadfall traps to hunt " + "<col=000080>" + "penguins" + "</col>" + " (after Hunt for Red Raktuber)."];
            }
            break;
        case 5:
            switch (intArg1) {
                case 0:
                    return [Obj.fishing_competition_pass, Obj.hunting_ferret, "Ferret (woodland)" + "<br>" + " (after Eagles' Peak)", "You can now catch " + "<col=000080>" + "ferrets" + "</col>" + " with box traps (after Eagles' Peak)."];
                case 1:
                    return [Obj.fishing_competition_pass, Obj.lore_inventory_gecko, "Gecko" + "<br>" + " (with 10 Summoning)", "You now have the Hunter level required to catch " + "<col=000080>" + "geckos" + "</col>" + " with box traps. (You also need level 10 Summoning.)"];
                case 2:
                    return [Obj.fishing_competition_pass, Obj.lore_inventory_raccoon, "Raccoon" + "<br>" + " (with 80 Summoning)", "You now have the Hunter level required to catch " + "<col=000080>" + "raccoons" + "</col>" + " with box traps. (You also need level 80 Summoning.)"];
                case 3:
                    return [Obj.fishing_competition_pass, Obj.lore_inventory_monkey, "Monkey" + "<br>" + " (with 95 Summoning)" + "<br>" + " Preferred bait: Bananas", "You now have the Hunter level required to catch " + "<col=000080>" + "monkeys" + "</col>" + " with box traps. (You also need level 95 Summoning.)"];
                case 4:
                    return [Obj.obj_48, Obj.obj_12585, "Platypus (jungle)" + "<br>" + " (with 10 Summoning)" + "<br>" + " (after starting As a First Resort...)" + "<br>" + " Required lure: Smouldering lavender", "You now have the Hunter level required to catch " + "<col=000080>" + "platypodes" + "</col>" + " with box traps (after As a First Resort... and with level 10 Summoning)."];
                case 5:
                    return [Obj.obj_53, Obj.huntguide_chinchompa_captured, "Chinchompa (woodland)" + "<br>" + " Preferred bait: Spicy chopped tomatoes", "You can now catch " + "<col=000080>" + "chinchompas" + "</col>" + " with box traps."];
                case 6:
                    return [Obj.obj_56, Obj.hunting_penguin_obj, "Penguin (polar)" + "<br>" + " (after Hunt for Red Raktuber)" + "<br>" + " Preferred bait: Raw cod", "You can now catch " + "<col=000080>" + "penguins" + "</col>" + " with box traps (after Hunt for Red Raktuber)."];
                case 7:
                    return [Obj.obj_63, Obj.huntguide_chinchompa_big_captured, "Red chinchompa (jungle)" + "<br>" + " Preferred bait: Spicy minced meat", "You can now catch " + "<col=000080>" + "red chinchompas" + "</col>" + " with box traps."];
                case 8:
                    return [Obj.obj_66, Obj.obj_12544, "Pawya (Isafdar)" + "<br>" + " Required bait: Papaya fruit", "You can now catch " + "<col=000080>" + "pawyas" + "</col>" + " with box traps."];
                case 9:
                    return [Obj.obj_70, Obj.obj_19951, "Common jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "common jadinkos" + "</col>" + " with marasamaw plants."];
                case 10:
                    return [Obj.khazard_helmet, Obj.obj_19957, "Igneous jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "igneous jadinkos" + "</col>" + " with marasamaw plants."];
                case 11:
                    return [Obj.khazard_platemail, Obj.obj_19960, "Cannibal jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "cannibal jadinkos" + "</col>" + " with marasamaw plants."];
                case 12:
                    return [Obj.khazard_cellkeys, Obj.obj_19953, "Aquatic jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "aquatic jadinkos" + "</col>" + " with marasamaw plants."];
                case 13:
                    return [Obj.khali_brew, Obj.obj_19952, "Amphibious jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "amphibious jadinkos" + "</col>" + " with marasamaw plants."];
                case 14:
                    return [Obj.khali_brew, Obj.obj_12537, "Grenwall (Isafdar)" + "<br>" + " Required bait: Raw pawya meat", "You can now catch " + "<col=000080>" + "grenwall" + "</col>" + " with box traps."];
                case 15:
                    return [Obj.ice_arrow, Obj.obj_19959, "Carrion jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "carrion jadinkos" + "</col>" + " with marasamaw plants."];
                case 16:
                    return [Obj.obj_80, Obj.obj_19956, "Draconic jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "draconic jadinkos" + "</col>" + " with marasamaw plants."];
                case 17:
                    return [Obj.obj_81, Obj.obj_19961, "Saradomin, Guthix and Zamorak jadinko (using marasamaw plants)" + "<br>" + " Preferred bait: Withered vines", "You can now catch " + "<col=000080>" + "Saradomin, Guthix and Zamorak jadinkos" + "</col>" + " with marasamaw plants."];
            }
            break;
        case 6:
            switch (intArg1) {
                case 0:
                    return [Obj.obj_29, Obj.obj_10149, "Swamp lizard (swamp)" + "<br>" + " Preferred bait: Guam tar", "You can now catch " + "<col=000080>" + "swamp lizards" + "</col>" + " with net traps."];
                case 1:
                    return [Obj.obj_29, Obj.lore_inventory_squirrel, "Squirrel" + "<br>" + " (with 60 Summoning)" + "<br>" + " Preferred bait: Nuts", "You now have the Hunter level required to catch " + "<col=000080>" + "squirrels" + "</col>" + " with net traps. (You also need level 60 Summoning.)"];
                case 2:
                    return [Obj.obj_47, Obj.orange_salamander, "Orange salamander (desert)" + "<br>" + " Preferred bait: Marrentill tar", "You can now catch " + "<col=000080>" + "orange salamanders" + "</col>" + " with net traps."];
                case 3:
                    return [Obj.obj_50, Obj.hunting_penguin_obj, "Penguin (polar)" + "<br>" + " (after Hunt for Red Raktuber)", "You can now catch " + "<col=000080>" + "penguins" + "</col>" + " with net traps (after Hunt for Red Raktuber)."];
                case 4:
                    return [Obj.obj_59, Obj.red_salamander, "Red salamander (lava)" + "<br>" + " Preferred bait: Tarromin tar", "You can now catch " + "<col=000080>" + "red salamanders" + "</col>" + " with net traps."];
                case 5:
                    return [Obj.obj_67, Obj.black_salamander, "Black salamander (lava)" + "<br>" + " Preferred bait: Harralander tar", "You can now catch " + "<col=000080>" + "black salamanders" + "</col>" + " with net traps."];
            }
            break;
        case 7:
            if (intArg1 == 0) {
                return [Obj.obj_31, Obj.hunting_hat_jaguar, "Spined larupia (jungle)", "You can now catch " + "<col=000080>" + "spined larupias" + "</col>" + " with pit traps."];
            }
            if (intArg1 == 1) {
                return [Obj.steel_arrowheads, Obj.hunting_hat_leopard, "Horned graahk (Karamja)", "You can now catch " + "<col=000080>" + "horned graahks" + "</col>" + " with pit traps."];
            }
            if (intArg1 == 2) {
                return [Obj.obj_55, Obj.hunting_hat_tiger, "Sabre-toothed kyatt (polar)", "You can now catch " + "<col=000080>" + "sabre-toothed kyatts" + "</col>" + " with pit traps."];
            }
            break;
        case 8:
            if (intArg1 == 0) {
                return [Obj.adamant_arrowheads, Obj.huntguide_speedy_beast, "Spotted kebbit (woodland)", "You can now hunt " + "<col=000080>" + "spotted kebbits" + "</col>" + " with a falcon."];
            }
            if (intArg1 == 1) {
                return [Obj.obj_57, Obj.huntguide_silent_beast, "Dark kebbit (woodland)", "You can now hunt " + "<col=000080>" + "dark kebbits" + "</col>" + " with a falcon."];
            }
            if (intArg1 == 2) {
                return [Obj.obj_69, Obj.huntguide_speedy2_beast, "Dashing kebbit (woodland)", "You can now hunt " + "<col=000080>" + "dashing kebbits" + "</col>" + " with a falcon."];
            }
            break;
        case 9:
            if (intArg1 == 0) {
                return [Obj.obj_71, Obj.huntguide_imp, "Imp (worldwide)" + "<br>" + " Preferred bait: Magical beads", "You can now catch " + "<col=000080>" + "imps" + "</col>" + " in " + "<col=000080>" + "imp boxes" + "</col>" + "."];
            }
            break;
        case 10:
            switch (intArg1) {
                case 0:
                    return [Obj.fishing_competition_pass, Obj.huntguide_rabbit, "White rabbit (woodland)" + "<br>" + " Use a ferret to flush the rabbit out of its hole" + "<br>" + " (after Eagles' Peak)", "You now have the Hunter level required to use a " + "<col=000080>" + "ferret" + "</col>" + " to hunt " + "<col=000080>" + "white rabbits" + "</col>" + " (after Eagles' Peak)."];
                case 1:
                    return [Obj.fishing_competition_pass, Obj.huntguide_giant_eagle, "Giant eagle (various)" + "<br>" + " (after Eagles' Peak)", "You now have the Hunter level required to lasso " + "<col=000080>" + "giant eagles" + "</col>" + " (after Eagles' Peak)."];
                case 2:
                    return [Obj.obj_72, Obj.huntcharm_stave, "Charm sprites (south of the Tree Gnome Stronghold)" + "<br>" + " Use Hunter skill to catch charm sprites and gain Summoning charms", "You now have the Hunter level required to transmute " + "<col=000080>" + "charm sprites" + "</col>" + " into Summoning charm slices."];
                case 3:
                    return [Obj.obj_91, Obj.effi_ancient_effigy_level_0, "Starved ancient effigies", "You can now investigate " + "<col=000080>" + "starved ancient effigies" + "</col>" + " using your knowledge of Hunter."];
                case 4:
                    return [Obj.obj_93, Obj.effi_ancient_effigy_level_1, "Nourished ancient effigies", "You can now investigate " + "<col=000080>" + "nourished ancient effigies" + "</col>" + " using your knowledge of Hunter."];
                case 5:
                    return [Obj.obj_95, Obj.effi_ancient_effigy_level_2, "Sated ancient effigies", "You can now investigate " + "<col=000080>" + "sated ancient effigies" + "</col>" + " using your knowledge of Hunter."];
                case 6:
                    return [Obj.obj_97, Obj.effi_ancient_effigy_level_3, "Gorged ancient effigies", "You can now investigate " + "<col=000080>" + "gorged ancient effigies" + "</col>" + " using your knowledge of Hunter."];
            }
            break;
        case 11:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.hunting_camoflauge_robe_polar, "Polar kebbit fur clothing (polar)", "You can now wear " + "<col=000080>" + "polar kebbit fur clothing" + "</col>" + "."];
                case 1:
                    return [Obj.mcannontoolkit, Obj.hunting_camoflauge_robe_wood, "Common kebbit fur clothing (woodland)", "You can now wear " + "<col=000080>" + "common kebbit fur clothing" + "</col>" + "."];
                case 2:
                    return [Obj.ammo_mould, Obj.hunting_camoflauge_robe_jungle, "Feldip weasel fur clothing (jungle)", "You can now wear " + "<col=000080>" + "feldip weasel fur clothing" + "</col>" + "."];
                case 3:
                    return [Obj.twpart3, Obj.hunting_camoflauge_robe_desert, "Desert devil fur clothing (desert)", "You can now wear " + "<col=000080>" + "desert devil fur clothing" + "</col>" + "."];
                case 4:
                    return [Obj.rat_poison, Obj.hunting_strung_rabbit_foot, "Lucky rabbit's foot", "You can now wear a " + "<col=000080>" + "lucky rabbit's foot" + "</col>" + "."];
                case 5:
                    return [Obj.insect_repellent, Obj.hunting_hat_jaguar, "Larupia fur clothing", "You can now wear " + "<col=000080>" + "larupia fur clothing" + "</col>" + "."];
                case 6:
                    return [Obj.unlit_black_candle, Obj.hunting_hat_leopard, "Graahk-hide clothing", "You can now wear " + "<col=000080>" + "graahk-hide clothing" + "</col>" + "."];
                case 7:
                    return [Obj.iron_arrowheads, Obj.hunting_light_cape, "Spotted capes", "You can now wear " + "<col=000080>" + "spotted capes" + "</col>" + "."];
                case 8:
                    return [Obj.obj_52, Obj.hunting_hat_tiger, "Kyatt fur clothing", "You can now wear " + "<col=000080>" + "kyatt fur clothing" + "</col>" + "."];
                case 9:
                    return [Obj.obj_54, Obj.hunting_silent_gloves, "Gloves of silence", "You can now wear " + "<col=000080>" + "gloves of silence" + "</col>" + "."];
                case 10:
                    return [Obj.obj_66, Obj.hunting_lighter_cape, "Spottier capes", "You can now wear " + "<col=000080>" + "spottier capes" + "</col>" + "."];
                case 11:
                    return [Obj.obj_70, Obj.eco_shaman_mask, "Witchdoctor clothing", "You can now wear " + "<col=000080>" + "witchdoctor clothing" + "</col>" + "."];
            }
            break;
        case 12:
            switch (intArg1) {
                case 0:
                    return [Obj.grail_bell, Obj.ii_captured_impling_1, "Baby impling", "You can now catch " + "<col=000080>" + "baby implings" + "</col>" + " barehanded."];
                case 1:
                    return [Obj.bluecog, Obj.ii_captured_impling_2, "Young impling", "You can now catch " + "<col=000080>" + "young implings" + "</col>" + " barehanded."];
                case 2:
                    return [Obj.insect_repellent, Obj.obj_11242, "Gourmet impling", "You can now catch " + "<col=000080>" + "gourmet implings" + "</col>" + " barehanded."];
                case 3:
                    return [Obj.obj_36, Obj.ii_captured_impling_4, "Earth impling", "You can now catch " + "<col=000080>" + "earth implings" + "</col>" + " barehanded."];
                case 4:
                    return [Obj.mithril_arrowheads, Obj.obj_11246, "Essence impling", "You can now catch " + "<col=000080>" + "essence implings" + "</col>" + " barehanded."];
                case 5:
                    return [Obj.obj_50, Obj.ii_captured_impling_6, "Eclectic impling", "You can now catch " + "<col=000080>" + "eclectic implings" + "</col>" + " barehanded."];
                case 6:
                    return [Obj.obj_54, Obj.ii_captured_impling_6a, "Spirit impling", "You can now catch " + "<col=000080>" + "spirit implings" + "</col>" + " barehanded."];
                case 7:
                    return [Obj.obj_58, Obj.ii_captured_impling_7, "Nature impling", "You can now catch " + "<col=000080>" + "nature implings" + "</col>" + " barehanded."];
                case 8:
                    return [Obj.obj_65, Obj.ii_captured_impling_8, "Magpie impling", "You can now catch " + "<col=000080>" + "magpie implings" + "</col>" + " barehanded."];
                case 9:
                    return [Obj.khazard_helmet, Obj.ii_captured_impling_9, "Ninja impling", "You can now catch " + "<col=000080>" + "ninja implings" + "</col>" + " barehanded."];
                case 10:
                    return [Obj.khazard_cellkeys, Obj.ii_captured_impling_11, "Pirate impling" + "<br>" + " (after Rocking Out)", "You can now catch " + "<col=000080>" + "pirate implings" + "</col>" + " barehanded (after Rocking Out)."];
                case 11:
                    return [Obj.obj_80, Obj.huntguide_red_butterfly, "Catch ruby harvest butterfly barehanded (woodland)" + "<br>" + " (with 75 Agility)", "You now have the Hunter level to catch " + "<col=000080>" + "ruby harvest butterflies" + "</col>" + " barehanded. This feat will give you Hunter and Agility experience upon a successful catch. (You also need level 75 Agility.)"];
                case 12:
                    return [Obj.ikov_lever, Obj.ii_captured_impling_10, "Dragon impling", "You can now catch " + "<col=000080>" + "dragon implings" + "</col>" + " barehanded."];
                case 13:
                    return [Obj.ikov_shinykey, Obj.huntguide_blue_butterfly, "Catch sapphire glacialis butterfly barehanded (polar)" + "<br>" + " (with 80 Agility)", "You now have the Hunter level to catch " + "<col=000080>" + "sapphire glacialis butterflies" + "</col>" + " barehanded. This feat will give you Hunter and Agility experience upon a successful catch. (You also need level 80 Agility.)"];
                case 14:
                    return [Obj.ikov_pendantofarmardyl, Obj.ii_captured_impling_12, "Zombie impling", "You can now catch " + "<col=000080>" + "zombie implings" + "</col>" + " barehanded."];
                case 15:
                    return [Obj.childs_blanket, Obj.huntguide_white_butterfly, "Catch snowy knight butterfly barehanded (polar)" + "<br>" + " (with 85 Agility)", "You now have the Hunter level to catch " + "<col=000080>" + "snowy knight butterflies" + "</col>" + " barehanded. This feat will give you Hunter and Agility experience upon a successful catch. (You also need level 85 Agility.)"];
                case 16:
                    return [Obj.obj_91, Obj.ii_captured_impling_13, "Kingly impling", "You can now catch " + "<col=000080>" + "kingly implings" + "</col>" + " barehanded."];
                case 17:
                    return [Obj.obj_95, Obj.huntguide_black_butterfly, "Catch black warlock butterfly barehanded (jungle)" + "<br>" + " (with 90 Agility)", "You now have the Hunter level to catch " + "<col=000080>" + "black warlock butterflies" + "</col>" + " barehanded. This feat will give you Hunter and Agility experience upon a successful catch. (You also need level 90 Agility.)"];
            }
            break;
        case 13:
            switch (intArg1) {
                case 0:
                    return [Obj.mcannontoolkit, Obj.sc_butterflynet_1, "Stealing Creation - class 1 butterfly net", "Members can now use " + "<col=000080>" + "class 1 butterfly nets" + "</col>" + " in Stealing Creation."];
                case 1:
                    return [Obj.whitecog, Obj.sc_clay_2, "Stealing Creation - net class 2 sacred clay", "Members can now net " + "<col=000080>" + "class 2 sacred clay" + "</col>" + " in Stealing Creation."];
                case 2:
                    return [Obj.whitecog, Obj.sc_butterflynet_2, "Stealing Creation - class 2 butterfly net", "Members can now use " + "<col=000080>" + "class 2 butterfly nets" + "</col>" + " in Stealing Creation."];
                case 3:
                    return [Obj.iron_arrowheads, Obj.sc_clay_3, "Stealing Creation - net class 3 sacred clay", "Members can now net " + "<col=000080>" + "class 3 sacred clay" + "</col>" + " in Stealing Creation."];
                case 4:
                    return [Obj.iron_arrowheads, Obj.sc_butterflynet_3, "Stealing Creation - class 3 butterfly net", "Members can now use " + "<col=000080>" + "class 3 butterfly nets" + "</col>" + " in Stealing Creation."];
                case 5:
                    return [Obj.obj_60, Obj.sc_clay_4, "Stealing Creation - net class 4 sacred clay", "Members can now net " + "<col=000080>" + "class 4 sacred clay" + "</col>" + " in Stealing Creation."];
                case 6:
                    return [Obj.obj_60, Obj.sc_butterflynet_4, "Stealing Creation - class 4 butterfly net", "Members can now use " + "<col=000080>" + "class 4 butterfly nets" + "</col>" + " in Stealing Creation."];
                case 7:
                    return [Obj.obj_80, Obj.sc_clay_5, "Stealing Creation - net class 5 sacred clay", "Members can now net " + "<col=000080>" + "class 5 sacred clay" + "</col>" + " in Stealing Creation."];
                case 8:
                    return [Obj.obj_80, Obj.sc_butterflynet_5, "Stealing Creation - class 5 butterfly net", "Members can now use " + "<col=000080>" + "class 5 butterfly nets" + "</col>" + " in Stealing Creation."];
            }
            break;
        case 14:
            switch (intArg1) {
                case 0:
                    return [-1, Obj.rand_mission_contract, "Dungeoneering skill tasks" + "<br>" + "As your Hunter level increases, you will be able to attempt higher-level hunter tasks within Daemonheim. You will also be more likely to succeed when attempting hunter tasks within Daemonheim.", ""];
                case 1:
                    return [Obj.mcannontoolkit, Obj.rand_trap_1, "Tangle gum trap (Tier 1)", "You can now place " + "<col=000080>" + "tangle gum traps" + "</col>" + " within Daemonheim."];
                case 2:
                    return [Obj.mcannontoolkit, Obj.rand_hide_1, "Protomastyx hide (Tier 1)", "You can now gain " + "<col=000080>" + "protomastyx hides" + "</col>" + " from protomastyx carcasses within Daemonheim."];
                case 3:
                    return [Obj.twpart3, Obj.rand_trap_2, "Seeping elm trap (Tier 2)", "You can now place " + "<col=000080>" + "seeping elm traps" + "</col>" + " within Daemonheim."];
                case 4:
                    return [Obj.twpart3, Obj.rand_hide_2, "Submastyx hide (Tier 2)", "You can now gain " + "<col=000080>" + "submastyx hides" + "</col>" + " from submastyx carcasses within Daemonheim."];
                case 5:
                    return [Obj.whitecog, Obj.rand_trap_3, "Blood spindle trap (Tier 3)", "You can now place " + "<col=000080>" + "blood spindle traps" + "</col>" + " within Daemonheim."];
                case 6:
                    return [Obj.whitecog, Obj.rand_hide_3, "Paramastyx hide (Tier 3)", "You can now gain " + "<col=000080>" + "paramastyx hides" + "</col>" + " from paramastyx carcasses within Daemonheim."];
                case 7:
                    return [Obj.bucket_wax, Obj.rand_trap_4, "Utuku trap (Tier 4)", "You can now place " + "<col=000080>" + "utuku traps" + "</col>" + " within Daemonheim."];
                case 8:
                    return [Obj.bucket_wax, Obj.rand_hide_4, "Archaemastyx hide (Tier 4)", "You can now gain " + "<col=000080>" + "archaemastyx hides" + "</col>" + " from archaemastyx carcasses within Daemonheim."];
                case 9:
                    return [Obj.iron_arrowheads, Obj.rand_trap_5, "Spinebeam trap (Tier 5)", "You can now place " + "<col=000080>" + "spinebeam traps" + "</col>" + " within Daemonheim."];
                case 10:
                    return [Obj.iron_arrowheads, Obj.rand_hide_5, "Dromomastyx hide (Tier 5)", "You can now gain " + "<col=000080>" + "dromomastyx hides" + "</col>" + " from dromomastyx carcasses within Daemonheim."];
                case 11:
                    return [Obj.obj_50, Obj.rand_trap_6, "Bovistrangler trap (Tier 6)", "You can now place " + "<col=000080>" + "bovistrangler traps" + "</col>" + " within Daemonheim."];
                case 12:
                    return [Obj.obj_50, Obj.rand_hide_6, "Spinomastyx hide (Tier 6)", "You can now gain " + "<col=000080>" + "spinomastyx hides" + "</col>" + " from spinomastyx carcasses within Daemonheim."];
                case 13:
                    return [Obj.obj_60, Obj.rand_trap_7, "Thigat trap (Tier 7)", "You can now place " + "<col=000080>" + "thigat traps" + "</col>" + " within Daemonheim."];
                case 14:
                    return [Obj.obj_60, Obj.rand_hide_7, "Gallimastyx hide (Tier 7)", "You can now gain " + "<col=000080>" + "gallimastyx hides" + "</col>" + " from gallimastyx carcasses within Daemonheim."];
                case 15:
                    return [Obj.obj_70, Obj.rand_trap_8, "Corpsethorn trap (Tier 8)", "You can now place " + "<col=000080>" + "corpsethorn traps" + "</col>" + " within Daemonheim."];
                case 16:
                    return [Obj.obj_70, Obj.rand_hide_8, "Stegomastyx hide (Tier 8)", "You can now gain " + "<col=000080>" + "stegomastyx hides" + "</col>" + " from stegomastyx carcasses within Daemonheim."];
                case 17:
                    return [Obj.obj_80, Obj.rand_trap_9, "Entgallow trap (Tier 9)", "You can now place " + "<col=000080>" + "entgallow traps" + "</col>" + " within Daemonheim."];
                case 18:
                    return [Obj.obj_80, Obj.rand_hide_9, "Megamastyx hide (Tier 9)", "You can now gain " + "<col=000080>" + "megamastyx hides" + "</col>" + " from megamastyx carcasses within Daemonheim."];
                case 19:
                    return [Obj.childs_blanket, Obj.rand_trap_10, "Grave creeper trap (Tier 10)", "You can now place " + "<col=000080>" + "grave creeper traps" + "</col>" + " within Daemonheim."];
                case 20:
                    return [Obj.childs_blanket, Obj.rand_hide_10, "Tyrannomastyx hide (Tier 10)", "You can now gain " + "<col=000080>" + "tyrannomastyx hides" + "</col>" + " from tyrannomastyx carcasses within Daemonheim."];
            }
            break;
        case 15:
            if (intArg1 == 0) {
                return [Obj.obj_99, Obj.skillcape_hunting, "Skill mastery", "<col=000080>" + "Congratulations! You are now a master " + "<col=800000>" + "Hunter" + "<col=000080>" + ". Why not visit the " + "<col=800000>" + "Hunter Expert" + "<col=000080>" + ", south of the " + "<col=800000>" + "Feldip Hills" + "<col=000080>" + "? She has something special that is only available to true masters of the " + "<col=800000>" + "Hunter" + "<col=000080>" + " skill!"];
            }
            break;
    }
    return [Obj.mcannonremains, -1, "", ""];
}
