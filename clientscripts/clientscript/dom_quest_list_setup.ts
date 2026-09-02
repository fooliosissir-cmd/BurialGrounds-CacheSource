/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_quest_list_setup]

function dom_quest_list_setup(): void {
    let str0: string = "";
    let int0: number = 0;

    if (cs2_2158(varbit_vkq2_quest, 2, 63) == 2) {
        str0 = "<str=f5af44>" + "<col=f5af44>" + "A Void Dance" + "<br>";
        int0 = int0 + 1;
    } else {
        str0 = "A Void Dance" + "<br>";
    }

    if (cs2_2157(varbit_chosen_quest, 110) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Chosen Commander" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Chosen Commander" + "<br>");
    }

    if (cs2_2157(varbit_dwarfrock_quest, 110) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Between a Rock" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Between a Rock" + "<br>");
    }

    if (cs2_2158(varbit_evq_quest, 3, 147) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Blood Runs Deep" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Blood Runs Deep" + "<br>");
    }

    if (cs2_2157(varbit_contact, 130) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Contact!" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Contact!" + "<br>");
    }

    if (cs2_2157(varbit_mah3_main, 240) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Curse of Arrav" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Curse of Arrav" + "<br>");
    }

    if (cs2_2157(varbit_demonslayer_main, 3) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Demon Slayer" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Demon Slayer" + "<br>");
    }

    if (cs2_2157(varbit_deserttreasure, 15) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Desert Treasure" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Desert Treasure" + "<br>");
    }

    if (cs2_2158(varbit_apmeken_master, 10, 315) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Do No Evil" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Do No Evil" + "<br>");
    }

    if (cs2_2157(varp_176, 10) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Dragon Slayer" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Dragon Slayer" + "<br>");
    }

    if (cs2_2157(varbit_dream_prog, 28) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Dream Mentor" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Dream Mentor" + "<br>");
    }

    if (cs2_2157(varp_148, 11) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Family Crest" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Family Crest" + "<br>");
    }

    if (cs2_2157(varp_17, 14) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Fight Arena" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Fight Arena" + "<br>");
    }

    if (cs2_2157(varp_347, 10) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Fremennik Trials" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Fremennik Trials" + "<br>");
    }

    if (cs2_2157(varp_382, 11) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Haunted Mine" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Haunted Mine" + "<br>");
    }

    if (cs2_2157(varp_5, 10) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Holy Grail" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Holy Grail" + "<br>");
    }

    if (cs2_2157(varbit_horrorquest, 10) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Horror from the Deep" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Horror from the Deep" + "<br>");
    }

    if (cs2_2157(varp_139, 75) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Legend's Quest" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Legend's Quest" + "<br>");
    }

    if (cs2_2157(varp_147, 6) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Lost City" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Lost City" + "<br>");
    }

    if (cs2_2157(varbit_love, 150) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Love Story" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Love Story" + "<br>");
    }

    if (cs2_2157(varbit_mom2_main, 60) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Missing my Mummy" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Missing my Mummy" + "<br>");
    }

    if (cs2_2158(varp_365, 1, 9) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Monkey Madness" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Monkey Madness" + "<br>");
    }

    if (cs2_2157(varbit_mdaughter_quest_var, 70) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Mountain Daughter" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Mountain Daughter" + "<br>");
    }

    if (cs2_2157(varbit_myarm, 320) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "My Arm's Big Adventure" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "My Arm's Big Adventure" + "<br>");
    }

    if (cs2_2157(varbit_nom_quest, 12) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Nomad's Requiem" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Nomad's Requiem" + "<br>");
    }

    if (cs2_2157(varbit_hundred_main_quest_var, 5) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Recipe for Disaster" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Recipe for Disaster" + "<br>");
    }

    if (cs2_2157(varbit_agrith_quest, 125) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Shadow of the Storm" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Shadow of the Storm" + "<br>");
    }

    if (cs2_2157(varbit_elidquest, 60) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Spirits of Elid" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Spirits of Elid" + "<br>");
    }

    if (cs2_2157(varp_980, 130) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "The Great Brain Robbery" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "The Great Brain Robbery" + "<br>");
    }

    if (cs2_2157(varbit_mah4_main, 90) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "The Temple at Senntisten" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "The Temple at Senntisten" + "<br>");
    }

    if (cs2_2157(varbit_vkq3_quest, 40) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "The Void Stares Back" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "The Void Stares Back" + "<br>");
    }

    if (cs2_2157(varbit_dillo_quest, 63) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "TokTz-Ket-Dill" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "TokTz-Ket-Dill" + "<br>");
    }

    if (cs2_2157(varp_385, 45) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Troll Romance" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Troll Romance" + "<br>");
    }

    if (cs2_2157(varp_317, 50) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Troll Stronghold" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Troll Stronghold" + "<br>");
    }

    if (cs2_2157(varbit_vampire_quest, 3) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Vampyre Slayer" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Vampyre Slayer" + "<br>");
    }

    if (cs2_2157(varbit_wanted_main, 11) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "Wanted" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "Wanted" + "<br>");
    }

    if (cs2_2157(varbit_luc2_main_quest, 910) == 2) {
        str0 = append(str0, "<str=f5af44>" + "<col=f5af44>" + "While Guthix Sleeps" + "<br>");
        int0 = int0 + 1;
    } else {
        str0 = append(str0, "While Guthix Sleeps" + "<br>");
    }
    ifSetText(str0, Component.interface_1166.component_1166_1);
    ifSetText("Quests completed: " + tostring(int0) + ". You need at least: " + tostring(20), Component.interface_1166.component_1166_2);
}
