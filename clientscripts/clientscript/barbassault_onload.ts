/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,barbassault_onload]

function barbassault_onload(): void {
    if (varbit_barbassult_rolelevel_att == 1) {
        ifSetModel(Model.model_20522, Component.interface_473.component_473_43);
        ifSetText("Attacker level up to 2", Component.interface_473.component_473_44);
        ifSetText("+20 bonus damage", Component.interface_473.component_473_46);
        ifSetText("200 Attacker Honour Points", Component.interface_473.component_473_45);
        if (varbit_3256 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_45);
        }
    } else if (varbit_barbassult_rolelevel_att == 2) {
        ifSetModel(Model.model_20523, Component.interface_473.component_473_43);
        ifSetText("Attacker level up to 3", Component.interface_473.component_473_44);
        ifSetText("+30 bonus damage", Component.interface_473.component_473_46);
        ifSetText("300 Attacker Honour Points", Component.interface_473.component_473_45);
        if (varbit_3256 > 299) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_45);
        }
    } else if (varbit_barbassult_rolelevel_att == 3) {
        ifSetModel(Model.model_20524, Component.interface_473.component_473_43);
        ifSetText("Attacker level up to 4", Component.interface_473.component_473_44);
        ifSetText("+40 bonus damage", Component.interface_473.component_473_46);
        ifSetText("400 Attacker Honour Points", Component.interface_473.component_473_45);
        if (varbit_3256 > 399) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_45);
        }
    } else if (varbit_barbassult_rolelevel_att == 4) {
        ifSetModel(Model.model_20525, Component.interface_473.component_473_43);
        ifSetText("Attacker level up to 5", Component.interface_473.component_473_44);
        ifSetText("+50 bonus damage", Component.interface_473.component_473_46);
        ifSetText("500 Attacker Honour Points", Component.interface_473.component_473_45);
        if (varbit_3256 > 499) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_45);
        }
    } else if (varbit_barbassult_rolelevel_att == 5) {
        ifSetModel(Model.model_20525, Component.interface_473.component_473_43);
        ifSetText("Attacker level up complete", Component.interface_473.component_473_44);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_46);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_45);
    } else {
        varbit_barbassult_rolelevel_att = 1;
        ifSetModel(Model.model_20522, Component.interface_473.component_473_43);
        ifSetText("Attacker level up to 2", Component.interface_473.component_473_44);
        ifSetText("+20 bonus damage", Component.interface_473.component_473_46);
        ifSetText("200 Attacker Honour Points", Component.interface_473.component_473_45);
        if (varbit_3256 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_45);
        }
    }

    if (varbit_barbassult_rolelevel_def == 1) {
        ifSetModel(Model.model_20531, Component.interface_473.component_473_50);
        ifSetText("Defender level up to 2", Component.interface_473.component_473_51);
        ifSetText("Lure range 5", Component.interface_473.component_473_53);
        ifSetText("200 Defender Honour Points", Component.interface_473.component_473_52);
        if (varbit_3263 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_52);
        }
    } else if (varbit_barbassult_rolelevel_def == 2) {
        ifSetModel(Model.model_20532, Component.interface_473.component_473_50);
        ifSetText("Defender level up to 3", Component.interface_473.component_473_51);
        ifSetText("Lure range 6", Component.interface_473.component_473_53);
        ifSetText("300 Defender Honour Points", Component.interface_473.component_473_52);
        if (varbit_3263 > 299) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_52);
        }
    } else if (varbit_barbassult_rolelevel_def == 3) {
        ifSetModel(Model.model_20533, Component.interface_473.component_473_50);
        ifSetText("Defender level up to 4", Component.interface_473.component_473_51);
        ifSetText("Lure range 8", Component.interface_473.component_473_53);
        ifSetText("400 Defender Honour Points", Component.interface_473.component_473_52);
        if (varbit_3263 > 399) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_52);
        }
    } else if (varbit_barbassult_rolelevel_def == 4) {
        ifSetModel(Model.model_20534, Component.interface_473.component_473_50);
        ifSetText("Defender level up to 5", Component.interface_473.component_473_51);
        ifSetText("Lure range 10", Component.interface_473.component_473_53);
        ifSetText("500 Defender Honour Points", Component.interface_473.component_473_52);
        if (varbit_3263 > 499) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_52);
        }
    } else if (varbit_barbassult_rolelevel_def == 5) {
        ifSetModel(Model.model_20534, Component.interface_473.component_473_50);
        ifSetText("Defender level up complete", Component.interface_473.component_473_51);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_53);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_52);
    } else {
        varbit_barbassult_rolelevel_def = 1;
        ifSetModel(Model.model_20531, Component.interface_473.component_473_50);
        ifSetText("Defender level up to 2", Component.interface_473.component_473_51);
        ifSetText("Lure range 5", Component.interface_473.component_473_53);
        ifSetText("200 Defender Honour Points", Component.interface_473.component_473_52);
        if (varbit_3263 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_52);
        }
    }

    if (varbit_barbassult_rolelevel_col == 1) {
        ifSetModel(Model.model_20526, Component.interface_473.component_473_57);
        ifSetText("Collector level up to 2", Component.interface_473.component_473_58);
        ifSetText("Egg conversion", Component.interface_473.component_473_60);
        ifSetText("200 Collector Honour Points", Component.interface_473.component_473_59);
        if (varbit_3261 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_59);
        }
    } else if (varbit_barbassult_rolelevel_col == 2) {
        ifSetModel(Model.model_20527, Component.interface_473.component_473_57);
        ifSetText("Collector level up to 3", Component.interface_473.component_473_58);
        ifSetText("Egg convert success (80%)", Component.interface_473.component_473_60);
        ifSetText("300 Collector Honour Points", Component.interface_473.component_473_59);
        if (varbit_3261 > 299) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_59);
        }
    } else if (varbit_barbassult_rolelevel_col == 3) {
        ifSetModel(Model.model_20528, Component.interface_473.component_473_57);
        ifSetText("Collector level up to 4", Component.interface_473.component_473_58);
        ifSetText("Egg convert success (90%)", Component.interface_473.component_473_60);
        ifSetText("400 Collector Honour Points", Component.interface_473.component_473_59);
        if (varbit_3261 > 399) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_59);
        }
    } else if (varbit_barbassult_rolelevel_col == 4) {
        ifSetModel(Model.model_20529, Component.interface_473.component_473_57);
        ifSetText("Collector level up to 5", Component.interface_473.component_473_58);
        ifSetText("Egg convert success (100%)", Component.interface_473.component_473_60);
        ifSetText("500 Collector Honour Points", Component.interface_473.component_473_59);
        if (varbit_3261 > 499) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_59);
        }
    } else if (varbit_barbassult_rolelevel_col == 5) {
        ifSetModel(Model.model_20529, Component.interface_473.component_473_57);
        ifSetText("Collector level up complete", Component.interface_473.component_473_58);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_60);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_59);
    } else {
        varbit_barbassult_rolelevel_col = 1;
        ifSetModel(Model.model_20526, Component.interface_473.component_473_57);
        ifSetText("Collector level up to 2", Component.interface_473.component_473_58);
        ifSetText("Egg conversion", Component.interface_473.component_473_60);
        ifSetText("200 Collector Honour Points", Component.interface_473.component_473_59);
        if (varbit_3261 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_59);
        }
    }

    if (varbit_barbassult_rolelevel_heal == 1) {
        ifSetModel(Model.model_20538, Component.interface_473.component_473_64);
        ifSetText("Healer level up to 2", Component.interface_473.component_473_65);
        ifSetText("Heal 150 points, more run energy", Component.interface_473.component_473_67);
        ifSetText("200 Healer Honour Points", Component.interface_473.component_473_66);
        if (varbit_3262 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_66);
        }
    } else if (varbit_barbassult_rolelevel_heal == 2) {
        ifSetModel(Model.model_20539, Component.interface_473.component_473_64);
        ifSetText("Healer level up to 3", Component.interface_473.component_473_65);
        ifSetText("Heal 200 points, more run energy", Component.interface_473.component_473_67);
        ifSetText("300 Healer Honour Points", Component.interface_473.component_473_66);
        if (varbit_3262 > 299) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_66);
        }
    } else if (varbit_barbassult_rolelevel_heal == 3) {
        ifSetModel(Model.model_20540, Component.interface_473.component_473_64);
        ifSetText("Healer level up to 4", Component.interface_473.component_473_65);
        ifSetText("Heal 250 points, more run energy", Component.interface_473.component_473_67);
        ifSetText("400 Healer Honour Points", Component.interface_473.component_473_66);
        if (varbit_3262 > 399) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_66);
        }
    } else if (varbit_barbassult_rolelevel_heal == 4) {
        ifSetModel(Model.model_20541, Component.interface_473.component_473_64);
        ifSetText("Healer level up to 5", Component.interface_473.component_473_65);
        ifSetText("Heal 350 points, more run energy", Component.interface_473.component_473_67);
        ifSetText("500 Healer Honour Points", Component.interface_473.component_473_66);
        if (varbit_3262 > 499) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_66);
        }
    } else if (varbit_barbassult_rolelevel_heal == 5) {
        ifSetModel(Model.model_20541, Component.interface_473.component_473_64);
        ifSetText("Healer level up complete", Component.interface_473.component_473_65);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_67);
        ifSetText(" - Mastered - ", Component.interface_473.component_473_66);
    } else {
        varbit_barbassult_rolelevel_heal = 1;
        ifSetModel(Model.model_20538, Component.interface_473.component_473_64);
        ifSetText("Healer level up to 2", Component.interface_473.component_473_65);
        ifSetText("Heal 150 points and even more run energy", Component.interface_473.component_473_67);
        ifSetText("200 Healer Honour Points", Component.interface_473.component_473_66);
        if (varbit_3262 > 199) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_66);
        }
    }

    if (varbit_3256 > 274 && varbit_3263 > 274 && varbit_3261 > 274 && varbit_3262 > 274) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_128);
    }

    if (varbit_3256 > 274 && varbit_3263 > 274 && varbit_3261 > 274 && varbit_3262 > 274) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_121);
    }

    if (varbit_3256 > 274 && varbit_3263 > 274 && varbit_3261 > 274 && varbit_3262 > 274) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_114);
    }

    if (varbit_3256 > 274 && varbit_3263 > 274 && varbit_3261 > 274 && varbit_3262 > 274) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_107);
    }

    if (varbit_3256 > 374 && varbit_3263 > 374 && varbit_3261 > 374 && varbit_3262 > 374) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_100);
    }

    if (varbit_3256 > 374 && varbit_3263 > 374 && varbit_3261 > 374 && varbit_3262 > 374) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_93);
    }

    if (varbit_3256 > 99 && varbit_3263 > 99 && varbit_3261 > 99 && varbit_3262 > 99) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_87);
    }

    if (varbit_3256 > 149 && varbit_3263 > 149 && varbit_3261 > 149 && varbit_3262 > 149) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_81);
    }

    if (pouch_total(Obj.coins, 95000) > 0) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_212);
    }

    if (varbit_barbassault_armour_get_granite == 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_95);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_102);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_109);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_116);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_123);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_130);
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_214);
    }

    if (varbit_3256 > 9 || varbit_3263 > 9 || varbit_3261 > 9 || varbit_3262 > 9) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_206);
    }

    if (varbit_3256 > 19 || varbit_3263 > 19 || varbit_3261 > 19 || varbit_3262 > 19) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_200);
    }

    if (varbit_3256 > 29 || varbit_3263 > 29 || varbit_3261 > 29 || varbit_3262 > 29) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_194);
    }

    if (invTotal(Inv.inv, Obj.barbassault_horn) < 1 && invTotal(Inv.bank, Obj.barbassault_horn) < 1 && invTotal(Inv.worn, Obj.barbassault_horn) < 1 && invTotal(Inv.inv_530, Obj.barbassault_horn) < 1 && invTotal(Inv.inv, Obj.barbassault_master_horn) < 1 && invTotal(Inv.bank, Obj.barbassault_master_horn) < 1 && invTotal(Inv.worn, Obj.barbassault_master_horn) < 1 && invTotal(Inv.inv_530, Obj.barbassault_master_horn) < 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_219);
    }

    if (varbit_barbassult_rolelevel_att == 5 || varbit_barbassult_rolelevel_def == 5 || varbit_barbassult_rolelevel_col == 5 || varbit_barbassult_rolelevel_heal == 5) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_183);
    }

    if (invTotal(Inv.inv, Obj.barbassault_master_horn) < 1 && invTotal(Inv.bank, Obj.barbassault_master_horn) < 1 && invTotal(Inv.worn, Obj.barbassault_master_horn) < 1 && invTotal(Inv.inv_530, Obj.barbassault_master_horn) < 1 && (invTotal(Inv.inv, Obj.barbassault_horn) > 0 || invTotal(Inv.bank, Obj.barbassault_horn) > 0 || invTotal(Inv.worn, Obj.barbassault_horn) > 0 || invTotal(Inv.inv_530, Obj.barbassault_horn) > 0)) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_184);
    }

    if (varbit_3256 > 389 && varbit_3263 > 389 && varbit_3261 > 389 && varbit_3262 > 389) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_146);
    }

    if (invTotal(Inv.inv, Obj.trident) > 0 || invTotal(Inv.worn, Obj.trident) > 0) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_140);
    }
    let int0: number = 0;

    if (invTotal(Inv.inv, Obj.abyssal_whip) > 0 || invTotal(Inv.inv, Obj.darkbow) > 0) {
        int0 = 1;
    }

    if (varbit_barbassault_unlocked_paint_white == 0) {
        if (varbit_3256 > 49 || varbit_3263 > 49 || varbit_3261 > 49 || varbit_3262 > 49) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_162);
        }
    } else if (int0 == 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_162);
    }

    if (varbit_barbassault_unlocked_paint_green == 0) {
        if (varbit_3256 > 49 || varbit_3263 > 49 || varbit_3261 > 49 || varbit_3262 > 49) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_156);
        }
    } else if (int0 == 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_156);
    }

    if (varbit_barbassault_unlocked_paint_yellow == 0) {
        if (varbit_3256 > 49 || varbit_3263 > 49 || varbit_3261 > 49 || varbit_3262 > 49) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_174);
        }
    } else if (int0 == 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_174);
    }

    if (varbit_barbassault_unlocked_paint_blue == 0) {
        if (varbit_3256 > 49 || varbit_3263 > 49 || varbit_3261 > 49 || varbit_3262 > 49) {
            ifSetColour(colour(0x00FF00), Component.interface_473.component_473_168);
        }
    } else if (int0 == 1) {
        ifSetColour(colour(0x00FF00), Component.interface_473.component_473_168);
    }

    if (varbit_barbassault_unlocked_paint_white == 1) {
        ifSetText("Carrying a valid weapon", Component.interface_473.component_473_162);
        ifSetText("Use Penance Egg Paint (White)", Component.interface_473.component_473_161);
    }

    if (varbit_barbassault_unlocked_paint_green == 1) {
        ifSetText("Carrying a valid weapon", Component.interface_473.component_473_156);
        ifSetText("Use Penance Egg Paint (Green)", Component.interface_473.component_473_155);
    }

    if (varbit_barbassault_unlocked_paint_blue == 1) {
        ifSetText("Carrying a valid weapon", Component.interface_473.component_473_168);
        ifSetText("Use Penance Egg Paint (Blue)", Component.interface_473.component_473_167);
    }

    if (varbit_barbassault_unlocked_paint_yellow == 1) {
        ifSetText("Carrying a valid weapon", Component.interface_473.component_473_174);
        ifSetText("Use Penance Egg Paint (Yellow)", Component.interface_473.component_473_173);
    }
    ifSetObject(Obj.barbassault_egg_04, -1, Component.interface_473.component_473_172);
    ifSetObject(Obj.barbassault_egg_01, -1, Component.interface_473.component_473_154);
    ifSetObject(Obj.obj_15705, -1, Component.interface_473.component_473_160);
    ifSetObject(Obj.barbassault_egg_03, -1, Component.interface_473.component_473_166);
    ifSetText(tostring(varbit_3256), Component.interface_473.component_473_9);
    ifSetText(tostring(varbit_3263), Component.interface_473.component_473_10);
    ifSetText(tostring(varbit_3261), Component.interface_473.component_473_11);
    ifSetText(tostring(varbit_3262), Component.interface_473.component_473_12);
}
