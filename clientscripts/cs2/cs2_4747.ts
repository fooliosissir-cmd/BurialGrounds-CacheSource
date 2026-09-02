/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4747

function cs2_4747(intArg0: obj): string {
    switch (intArg0) {
        case Obj.wom_book_1:
        case Obj.wom_book_2:
        case Obj.wom_chicken_book:
            return "That's my book! What's it doing in your bank?";
        case Obj.tutorial3_book:
            return "You have Roddeck's book on dragon rearing in your bank. I don't think it's a great discourse on the subject, to be quite honest.";
        case Obj.tutorial3_diary:
            return "I see you're hanging on to Roddeck's diary. It's got a seeking spell on it, you know. If you get rid of it, it'll find its way back to him.";
        case Obj.obj_2399:
        case Obj.obj_2400:
        case Obj.obj_2401:
            return "You've killed Delrith, so you don't need any of the little grey keys that you collected to get Silverlight.";
        case Obj.mappart1:
        case Obj.mappart2:
        case Obj.mappart3:
        case Obj.dragonmap:
            if (varbit_dragonslayer_crandor_found_secret_door == 1) {
                return "You've opened a secret passageway to Crandor Island, so you won't need the map that showed you how to get there by sea.";
            } else {
                return "Ned knows the way to Crandor now, so you don't need the map any more. Also, if you go there, look around for secret passages. There might be another way to get back to Crandor.";
            }
            break;
        case Obj.redkey:
        case Obj.orangekey:
        case Obj.yellowkey:
        case Obj.bluekey:
        case Obj.magentakey:
        case Obj.greenkey:
            return "The coloured keys from Melzar's maze are very pretty, but you don't really need to keep them. If you ever go there again, the creatures in the maze will drop more coloured keys for you.";
        case Obj.melzarkey:
            return "You don't really need to keep the key to Melzar's Maze. If you ever go there again, you can ask for a new one from the Guildmaster of the Champions' Guild.";
        case Obj.pressure_gauge:
            return "Since you've already helped to repair Professor Oddenstein's machine, you can get rid of the pressure gauge.";
        case Obj.fish_food:
        case Obj.poisoned_fish_food:
            return "You really don't need to keep fish food in your bank.";
        case Obj.closet_key:
            return "The little key that opens a closet in Draynor Manor? I think you can afford to get rid of it.";
        case Obj.rubber_tube:
            return "You aren't going to need that rubber tube again.";
        case Obj.oil_can:
            return "No need to keep that oil can.";
        case Obj.knights_portrait:
            return "That's a nice picture of Sir Vyvin, but you don't really need it.";
        case Obj.blurite_ore:
            return "Blurite ore's handy for making ceremonial swords, but you've already done that quest. Members can make crossbows and bolts out of it, but it has no other use.";
        case Obj.faladian_sword:
            return "You don't really need a copy of Sir Vyvin's sword, although it's a fairly nice weapon.";
        case Obj.chest_key:
            return "I see you've got the key to One-Eyed Hector's chest. That's not much use to you.";
        case Obj.piratemessage:
            return "You've already found the pirate's treasure, so you can get rid of the pirate's message.";
        case Obj.pirate_casket:
            return "You've already found the pirate's treasure, so you can get rid of the pirate's casket.";
        case Obj.piratetreasure_apron:
            return "You've already found the pirate's treasure, so you can get rid of the pirate's apron.";
        case Obj.obj_2418:
            return "You aren't going to need to get back into Prince Ali's cell.";
        case Obj.obj_2419:
        case Obj.obj_2421:
            return "You don't need a wig. Your head looks fine.";
        case Obj.obj_2423:
            return "I can't imagine why you've kept the imprint of Lady Keli's key.";
        case Obj.obj_2424:
            return "If you want to change your appearance, go to the Makeover Mage. You don't need this skin paste.";
        case Obj.skull:
            return "I suggest you get rid of the skull. It's unhygienic.";
        case Obj.obj_755:
            return "You have a message from Juliet to Romeo. There's no point in keeping that now that they've split up.";
        case Obj.cadava:
            return "A potion made from cadava berries? There's not much you can do with one of those.";
        case Obj.cadavaberries:
            return "If you get rid of those cadava berries, you'll still be able to pick more near Varrock, and you'll save bank space.";
        case Obj.obj_290:
            return "Sedridor's research into the mysteries of the runes is very interesting, but you don't need it.";
        case Obj.obj_291:
            return "Aubury's notes won't be of any further use to you. You can't even read them!";
        case Obj.intelligence_report:
            return "You won't need Jonny the Beard's intelligence report now that you've found the Shield of Arrav.";
        case Obj.arravshield1:
        case Obj.arravshield2:
            return "You don't need to keep bits of the Shield of Arrav now that you've completed that quest.";
        case Obj.obj_769:
            return "You can get rid of the little certificate from the Museum of Varrock. You've already been rewarded for taking one to the King.";
        case Obj.stake:
            return "Now that you've slain Count Draynor, you don't need that stake. It's not much use against other vampyres.";
        case Obj.rats_tail:
            return "Ugh... A rat's tail! Get rid of it!";
        case Obj.swept_ointment:
            return "I don't think you'll need the broom ointment.";
        case Obj.swept_newt:
            return "That newt doesn't look very useful.";
        case Obj.swept_hetty_label_newts:
            return "You probably won't need the 'Newts' label.";
        case Obj.swept_hetty_label_toads:
            return "You probably won't need the 'Toads' label.";
        case Obj.swept_hetty_label_newts_and_toads:
            return "You certainly won't need the 'Newts & Toads' label.";
        case Obj.swept_wand:
            return "Betty's wand? I don't think you should be messing around with that.";
        case Obj.swept_slate:
            return "There's no point in hanging on to that slate.";
        case Obj.swept_puzzle2_reptile:
            return "You shouldn't be keeping that reptile in there.";
        case Obj.swept_puzzle2_blackbird:
            return "You shouldn't be keeping that blackbird in there.";
        case Obj.swept_puzzle2_bat:
            return "You shouldn't be keeping that bat in there.";
        case Obj.swept_puzzle2_spider:
            return "You shouldn't be keeping that spider in there.";
        case Obj.swept_puzzle2_rat:
            return "You shouldn't be keeping that rat in there.";
        case Obj.swept_puzzle2_snail:
            return "You shouldn't be keeping that snail in there.";
        case Obj.obj_9589:
        case Obj.obj_9590:
            return "You don't need to keep the dossier from the White Knight.";
        case Obj.bkfortress_cauldron_broken:
            return "You completed the Black Knights' fortress; you don't need this old cauldron anymore.";
        case Obj.obj_522:
        case Obj.obj_523:
        case Obj.obj_524:
        case Obj.obj_525:
        case Obj.obj_12546:
            return "You have completed the druidic ritual. You don't need the enchanted meat any longer.";
        case Obj.obj_2409:
            return "You don't need the witch's door key any longer.";
        case Obj.witches_diary:
            return "You don't need to keep the witch's diary. You can get it from the bookshelf again, if you need to.";
        case Obj.magnet:
            return "You don't need the magnet. You opened the witch's back door.";
        case Obj.obj_2411:
            return "You don't really need the witch's shed key any more.";
        case Obj.grim_beans:
        case Obj.grim_golden_goblin:
        case Obj.grim_griffin_feather:
        case Obj.grim_musicsheet:
        case Obj.grim_pendant:
        case Obj.grim_shrinking_potion:
        case Obj.grim_shrink_recipe:
        case Obj.obj_11203:
            return "You don't need that grim looking item.";
        case Obj.obj_1584:
            return "You've already given the id papers to Grip. This must be a forgery!";
        case Obj.scorpioncagefull:
        case Obj.scorpioncageempty:
        case Obj.scorpioncagea:
        case Obj.scorpioncageb:
        case Obj.scorpioncagec:
        case Obj.scorpioncageab:
        case Obj.scorpioncageac:
        case Obj.scorpioncagebc:
            return "You don't need that scorpion cage anymore.";
        case Obj.obj_773:
        case Obj.obj_774:
            return "You've obtained Avan's part of the crest. You don't need the perfect ruby jewellery.";
        case Obj.ardougne_book:
            return "You've already read from the Ardougne tourist guide.";
        case Obj.tribal_totem:
        case Obj.tribal_totem_label:
            return "You've finished the Tribal Totem quest. Why do you still have this?";
        case Obj.childs_blanket:
            return "You've given this blanket to the monk already. Did you steal it back again?";
        case Obj.ikov_lever:
            return "You already fixed the lever in The Temple of Ikov.";
        case Obj.whitecog:
        case Obj.blackcog:
        case Obj.bluecog:
        case Obj.redcog:
            return "You've finished the Clock Tower quest. You don't need that cog.";
        case Obj.holy_table_napkin:
            return "You completed the Holy Grail quest. You don't need Sir Galahad's table napkin.";
        case Obj.grail_bell:
            return "You completed the Holy Grail quest. You don't need the grail bell anymore.";
        case Obj.magic_golden_feather:
            return "You completed the Holy Grail quest. You have no need of King Arthur's golden feather.";
        case Obj.holy_grail:
            return "You completed the Holy Grail quest. Why do you have the grail?";
        case Obj.orb_of_protection:
        case Obj.orbs_of_protection:
            return "You have finished with Tree Gnome Village. You don't need the orbs.";
        case Obj.khali_brew:
            return "You already got the keys from the lazy guard. You don't need the brew.";
        case Obj.khazard_cellkeys:
            return "You have already used the keys from the lazy guard.";
        case Obj.hazeel_scroll:
            return "You already completed the Hazeel Cult Quest; no need to hang onto one of those scrolls.";
        case Obj.carnilleanchestkey:
            return "You have already opened the chest in the Carnillean household.";
        case Obj.scruffy_note:
            return "You have already made Bravek a hangover cure. You don't need his scrawled note.";
        case Obj.warrant:
            return "You have no need of a warrant to the plague house.";
        case Obj.turnip_book:
            return "You have already given this book to Ted Rehnison. You don't need it.";
        case Obj.elena_picture:
            return "You have already shown Elena's picture to Jethick.";
        case Obj.seasluginv:
            return "Yuck! A sea slug! Get rid of it!";
        case Obj.seaslug_torch:
            return "A sea slug torch... Fascinating! You don't need it; lit, unlit, smouldering or otherwise.";
        case Obj.obj_292:
            return "You have completed the Waterfall quest, so you don't need the book about Baxtorian.";
        case Obj.baxtorian_key_waterfall_quest:
            return "You have completed the Waterfall quest, so you don't need this key.";
        case Obj.glarials_urn_full_waterfall_quest:
        case Obj.glarials_urn_empty_waterfall_quest:
            return "You have finished the Waterfall quest, so you certainly don't need that urn; empty or full.";
        case Obj.mournerkeytw:
            return "You've freed Elena already, so you don't need the key.";
        case Obj.birdfeed:
        case Obj.pigeoncage:
        case Obj.pigeons:
            return "You have already distracted the guards with the pigeons.";
        case Obj.distillator:
            return "You've already retreived Elena's distillator.";
        case Obj.ethenea:
        case Obj.liquid_honey:
        case Obj.sulphuric_broline:
        case Obj.plaguesample:
        case Obj.touch_paper:
            return "Guidor has already tested the plague sample. you don't need that any more.";
        case Obj.grandtree_barksample:
            return "You have given the bark sample to Hazelmere already.";
        case Obj.grandtree_translationbook:
            return "You have already translated the ancient message told to you by Hazelmere.";
        case Obj.grandtree_journal:
            return "You have completed the Grand Tree quest. You have no need of Glough's Journal.";
        case Obj.grandtree_scroll:
            return "You have completed the Grand Tree quest. You have no need of Hazelmere's scroll.";
        case Obj.grandtree_daconiarock:
            return "You have completed the Grand Tree quest. You don't need this rock.";
        case Obj.grandtree_gloughskey:
            return "You have already searched the Glough's chest. You have no possible use for the key.";
        case Obj.grandtree_invasionplans:
            return "You have already given the invasion plans to the King.";
        case Obj.grandtree_order:
            return "You have completed the Grand Tree quest. You don't need to hold on to this lumber order.";
        case Obj.grandtree_twigt:
        case Obj.grandtree_twigu:
        case Obj.grandtree_twigz:
        case Obj.grandtree_twigo:
            return "You have already opened the watchtower entrance; you don't need twigs.";
        case Obj.caveorb1:
        case Obj.caveorb2:
        case Obj.caveorb3:
        case Obj.caveorb4:
        case Obj.caveorb4dot:
            return "The orbs are pretty, but you have already found your way down the well in the underground pass.";
        case Obj.caverailing:
            return "Railings... Useful for poking undead in cages, I guess, but of no value otherwise.";
        case Obj.cave_unicorn_horn:
        case Obj.paladinbadge1:
        case Obj.paladinbadge2:
        case Obj.paladinbadge3:
        case Obj.upass_journal:
            return "You have already passed the gate of Zamorak. You don't need this.";
        case Obj.obj_1494:
            return "You have killed Iban. You have little use for his journal.";
        case Obj.ibansshadow:
            return "You have already done all you can with Iban's shadow.";
        case Obj.obj_1497:
        case Obj.obj_1498:
        case Obj.obj_1499:
        case Obj.ibansdove:
        case Obj.ibans_ashes:
        case Obj.upassdwarfbrew:
            return "You have completed the four tasks with the doll.";
        case Obj.lens:
        case Obj.lens_mould:
            return "The professor has already fixed his telescope. You don't need this.";
        case Obj.thbedobinkey:
            return "You have already opened the Captain's chest with the copied key.";
        case Obj.tentipineapple:
            return "A pineapple! How wonderful... You don't need it.";
        case Obj.thminebarrel_empty:
            return "You have already returned Ana to the Shantay Pass. You don't need to carry the barrel around.";
        case Obj.thanainabarrel:
            return "You have already returned Ana to the Shantay Pass. You don't need to carry the barrel around... or Ana.";
        case Obj.thprotodart:
            break;
        case Obj.obj_1855:
            return "You don't need that rock unless you plan on being caught by the guards agasin.";
        case Obj.tourtrap_qip_sailing_book:
            return "The book on sailing is rather dull.";
        case Obj.fingernails:
        case Obj.watchtowerrobe:
        case Obj.watchtowerarmour:
        case Obj.watchtowerdagger:
        case Obj.watch_eye_patch:
            return "You have already given evidence to the wizard.";
        case Obj.relicpart1:
        case Obj.relicpart2:
        case Obj.relicpart3:
            return "You have already received the ogre relic. You don't need these relic parts.";
        case Obj.powering_crystal1:
        case Obj.powering_crystal2:
        case Obj.powering_crystal3:
        case Obj.powering_crystal4:
            return "You have already used the powering crystals.";
        case Obj.rockcake:
        case Obj.ogretooth:
        case Obj.stolen_gold:
        case Obj.toban_key:
        case Obj.ogre_potion:
        case Obj.magic_ogre_potion:
        case Obj.shaman_robe:
            return "You have already received the powering crystals from this item.";
        case Obj.mcannonremains:
            return "You have already returned the dwarf remains to Captain Lawgof.";
        case Obj.mcannontoolkit:
            return "You have already returned the dwarven toolkit to Captain Lawgof.";
        case Obj.murderfingerprint1:
            return "You have already solved the murder mystery. You don't need this fingerprint.";
        case Obj.thkaramjamap:
        case Obj.thkaramjamapcomp:
            return "You have already presented the Radimus notes.";
        case Obj.thtotempolegift:
            return "You have already presented the gilded totem.";
        case Obj.scrawled_note1:
        case Obj.scrawled_note2:
        case Obj.scrawled_note3:
        case Obj.goldbowlpic:
        case Obj.shamans_tome:
            return "You have freed Ungadulu from possession. You don't have any use for the scrawled notes, books, tomes or pictures of dirty old bowls.";
        case Obj.elem1_qip_rockremains:
            return "What are you going to do with that rock?";
        case Obj.elemental_workshop_lava_bowl:
        case Obj.elemental_workshop_lava_bowl_full:
            return "You do not need the Elemental workshop bowl.";
        case Obj.obj_2953:
        case Obj.obj_2954:
            return "You have doused the vampyre's coffin already. You don't need this old bucket of stale water.";
        case Obj.filliman_journal:
            return "You don't need Filliman's Journal.";
        case Obj.obj_3102:
        case Obj.obj_3103:
            return "You have already recovered the combination for Denulf.";
        case Obj.obj_3104:
            return "You have already recovered the secret way map for Denulf.";
        case Obj.obj_3109:
        case Obj.obj_3110:
        case Obj.obj_3113:
        case Obj.obj_3112:
        case Obj.obj_3111:
            return "You don't need those coloured cannonballs";
        case Obj.regicide_quest_kings_summons:
        case Obj.regicide_iorwerth_message:
            return "You don't need the king's summons or messages.";
        case Obj.regicide_crystal_pendant:
            return "You can get rid of the crystal pendant. It has served it's purpose.";
        case Obj.eadgar_dirty_druid_robe:
            return "You don't need that dirty old druid's robe.";
        case Obj.eadgar_fake_man:
            return "Argh! Is that a man in your backpack? Wait...no! It's a fake man, you crafty so-and-so. Still, you don't need it.";
        case Obj.serum_book:
            return "You have already sold the apothecary this book.";
        case Obj.frisd_reciept:
            return "You've already given King Sorvott's decree to Burgher.";
        case Obj.frisd_taxbag_empty:
        case Obj.frisd_taxbag_light:
        case Obj.frisd_taxbag_normal:
        case Obj.frisd_taxbag_hefty:
        case Obj.frisd_taxbag_bulging:
            return "You have already collected King Sorvott IV's window taxes.";
        case Obj.frisr_trollkinghead:
            return "You have already handed in the troll's talking head to the Burgher.";
        case Obj.horror_diary1:
        case Obj.horror_diary2:
        case Obj.horror_diary3:
            return "You have completed the Horror from the Deep quest. You probably don't need this book.";
        case Obj.misc_awful_anthem:
        case Obj.misc_good_anthem:
            return "You have already given the Etceteria anthem to Queen Sigrid.";
        case Obj.misc_treaty:
            return "You have already given the treaty to King Vargas to sign.";
        case Obj.damp_tinderbox:
            return "A damp tinderbox; not at all useful for anything.";
        case Obj.fenk_cane:
        case Obj.fenk_brush0:
        case Obj.fenk_brush1:
        case Obj.fenk_brush2:
        case Obj.fenk_brush3:
            return "You already retrieved the lightning conductor mould from the chimney. You don't need this brush.";
        case Obj.fenk_letter:
            return "You don't need the dusty old letter from the clock.";
        case Obj.roving_old_consecration_seed:
        case Obj.roving_new_consecration_seed:
            return "You have already planted this seed for Eluned.";
        case Obj.ectoplasm_puddle:
            return "Yuck! An ectoplasm puddle.";
        case Obj.ahoy_robes_of_necrovarus:
        case Obj.ahoy_book_of_haricanto:
        case Obj.ahoy_translation_manual:
        case Obj.ahoy_bone_key:
            return "You have already given that to the crone.";
        case Obj.ahoy_chest_key:
            return "You have already made the toy boat. You don't need this key.";
        case Obj.favour_jungleforesteraxe_blunt:
            return "You already have an axe that's been sharpened by Brian. You don't need this blunt one.";
        case Obj.mdaughter_mud:
            return "You have already spread enough mud over that poor tree.";
        case Obj.mdaughter_broken_stick:
            return "A broken stick. Really? You kept a broken stick?";
        case Obj.dwarf_rock_book:
            return "You have already retrieved the schematic from that book.";
        case Obj.feud_fib_hint:
        case Obj.feud_nos_note:
            return "You have already solved the safe combination.";
        case Obj.basket_for_snake:
            return "You have already caught the snake with this basket.";
        case Obj.golem_letter:
        case Obj.golem_notes:
            return "You have already found out about the golem. You don't need the note or letter.";
        case Obj.golem_statuettekey:
            return "You have already retrieved the statuette from the display case.";
        case Obj.golem_pen:
            return "You have already reprogrammed the golem. You don't need this pen.";
        case Obj.golem_golemkey:
            return "You have already opened the golem's head. You don't need this key.";
        case Obj.ics_little_linen:
            return "You don't need more linen for mummification, however much you might like to.";
        case Obj.ics_little_bookofembalming:
            return "You don't need the book on embalming.";
        case Obj.zogre_sithik_portrait_good:
        case Obj.zogre_sithik_portrait_bad:
        case Obj.zogre_portrait_book:
            return "You have already shown the portrait to Zavistic Rarve.";
        case Obj.mourning_soap:
            return "You have already washed the mourner's top.";
        case Obj.mourning_book1:
        case Obj.mourning_book2:
        case Obj.mourning_book3:
        case Obj.mourning_book4:
            return "You have finished the Mourning's End quest. You don't need the mourner's books.";
        case Obj.mourning_gnome_key:
        case Obj.mourning_excavation_key:
            return "You have finished the Mourning's End quest. You don't need that key.";
        case Obj.twocats_chores:
        case Obj.twocats_recipe:
            return "You have already completed all the chores for Bob.";
        default:
            return "You should get rid of the " + ocName(intArg0);
    }
    return "";
}
