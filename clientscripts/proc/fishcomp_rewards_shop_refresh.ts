/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_rewards_shop_refresh]

function proc_fishcomp_rewards_shop_refresh(): void {
    ifSetText(tostring(varbit_fishcomp_fish_tokens), Component.interface_925.component_925_32);
    ifSetText(tostring(varbit_7285), Component.interface_925.component_925_14);

    if (varbit_fishcomp_reward_shop_item == 0) {
        ifSetHide(true, Component.interface_925.component_925_2);
        ifSetHide(true, Component.interface_925.component_925_1);
    } else {
        ifSetHide(false, Component.interface_925.component_925_2);
        ifSetHide(false, Component.interface_925.component_925_1);
    }
    ifSetObject(varc_1118, varc_1119, Component.interface_925.component_925_29);
    ifSetOpBase(ocName(varc_1118), Component.interface_925.component_925_29);
    ifSetObject(varc_1120, varc_1121, Component.interface_925.component_925_30);
    ifSetOpBase(ocName(varc_1120), Component.interface_925.component_925_30);

    switch (varc_1118) {
        case Obj.cert_raw_shark:
            ifSetText("Shark", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_swordfish:
            ifSetText("Swordfish", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_lobster:
            ifSetText("Lobster", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_tuna:
            ifSetText("Tuna", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_salmon:
            ifSetText("Salmon", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_pike:
            ifSetText("Pike", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_trout:
            ifSetText("Trout", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_herring:
            ifSetText("Herring", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_sardine:
            ifSetText("Sardine", Component.interface_925.component_925_63);
            break;
        case Obj.cert_raw_shrimp:
            ifSetText("Shrimp", Component.interface_925.component_925_63);
            break;
        default:
            ifSetText("", Component.interface_925.component_925_63);
            break;
    }

    switch (varc_1120) {
        case Obj.cert_raw_shark:
            ifSetText("Shark", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_swordfish:
            ifSetText("Swordfish", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_lobster:
            ifSetText("Lobster", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_tuna:
            ifSetText("Tuna", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_salmon:
            ifSetText("Salmon", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_pike:
            ifSetText("Pike", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_trout:
            ifSetText("Trout", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_herring:
            ifSetText("Herring", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_sardine:
            ifSetText("Sardine", Component.interface_925.component_925_64);
            break;
        case Obj.cert_raw_shrimp:
            ifSetText("Shrimp", Component.interface_925.component_925_64);
            break;
        default:
            ifSetText("", Component.interface_925.component_925_64);
            break;
    }
    let [int0, int1, int2, int3, int4, int5, int6, int7] = cs2_6264();

    if (int4 == 0) {
        ifSetText("(Insufficient tokens)", Component.interface_925.component_925_65);
    } else {
        ifSetText(tostring(int4) + " tokens", Component.interface_925.component_925_65);
    }

    if (int4 == 0 || varbit_fishcomp_fish_tokens < int4) {
        ifSetHide(false, Component.interface_925.component_925_176);
    } else {
        ifSetHide(true, Component.interface_925.component_925_176);
    }
    let str0: string = "Noted raw fish appropriate for your Fishing level:" + "<br>";

    if (varbit_fishcomp_reward_shop_item == 1) {
        if (int0 != -1) {
            str0 = str0 + tostring(int1) + "x " + ocName(int0) + "<br>";
        }
        if (int2 != -1) {
            str0 = str0 + tostring(int3) + "x " + ocName(int2) + "<br>";
        }
        ifSetText(str0, Component.interface_925.component_925_197);
        ifSetText("Cost: " + tostring(int4) + " tokens", Component.interface_925.component_925_198);
    }
    let str1: string = "This tackle box holds:" + "<br>";
    let int8: number = 0;
    let int9: number = varbit_fishcomp_reward_tackle_box_level + 1;

    if (cs2_2189(int9, 0) == 1) {
        int8 = int8 + 1;
    }

    if (cs2_2189(int9, 1) == 1) {
        int8 = int8 + 1;
    }

    if (cs2_2189(int9, 2) == 1) {
        int8 = int8 + 1;
    }

    if (cs2_2189(int9, 3) == 1) {
        int8 = int8 + 1;
    }

    if (cs2_2189(int9, 4) == 1) {
        int8 = int8 + 1;
    }

    if (int8 == 1) {
        str1 = str1 + tostring(int8) + " fishing tool" + "<br>";
    } else if (int8 > 0) {
        str1 = str1 + tostring(int8) + " fishing tools" + "<br>";
    }
    let int10: number = 0;

    if (cs2_2189(int9, 5) == 1) {
        int10 = int10 + 1;
    }

    if (cs2_2189(int9, 6) == 1) {
        int10 = int10 + 1;
    }

    if (cs2_2189(int9, 7) == 1) {
        int10 = int10 + 1;
    }

    if (int10 == 1) {
        str1 = str1 + tostring(int10) + " stack of " + tostring(cs2_6261(int9)) + " bait" + "<br>";
    } else if (int10 > 0) {
        str1 = str1 + tostring(int10) + " stacks of " + tostring(cs2_6261(int9)) + " bait" + "<br>";
    }
    let int11: number = 0;

    if (cs2_2189(int9, 8) == 1) {
        int11 = int11 + 1;
    }

    if (cs2_2189(int9, 9) == 1) {
        int11 = int11 + 1;
    }

    if (int11 == 1) {
        str1 = str1 + tostring(int11) + " fishing gloves" + "<br>";
    } else if (int11 > 0) {
        str1 = str1 + tostring(int11) + " fishing gloves" + "<br>";
    }
    let int12: number = 0;

    if (cs2_2189(int9, 10) == 1) {
        int12 = int12 + 1;
    }

    if (int12 == 1) {
        str1 = str1 + tostring(int12) + " stack of " + tostring(cs2_6262(int9)) + " raw fish" + "<br>";
    } else if (int12 > 0) {
        str1 = str1 + tostring(int12) + " stacks of " + tostring(cs2_6262(int9)) + " raw fish" + "<br>";
    }
    str1 = str1 + "The fishing outfit" + "<br>";
    int4 = enumOp(type_int, type_int, Enum.fishcomp_tackle_box_tokens, int9);

    if (varbit_fishcomp_reward_shop_item == 2) {
        ifSetText(str1, Component.interface_925.component_925_197);
        ifSetText("Cost: " + tostring(int4) + " tokens", Component.interface_925.component_925_198);
    }
    ifSetText(tostring(int4) + " tokens", Component.interface_925.component_925_25);
    let int13: number = enumOp(type_int, type_int, Enum.fishcomp_tackle_box_medals, int9);
    ifSetText("Requires " + tostring(int13) + " medals", Component.interface_925.component_925_24);

    if (cs2_259(Obj.fishcomp_tackle_box_01) == 0 && cs2_259(Obj.fishcomp_tackle_box_02) == 0 && cs2_259(Obj.fishcomp_tackle_box_03) == 0 && cs2_259(Obj.fishcomp_tackle_box_04) == 0 && cs2_259(Obj.fishcomp_tackle_box_05) == 0 && varbit_fishcomp_reward_tackle_box_level > 0) {
        ifSetHide(true, Component.interface_925.component_925_185);
    } else if (varbit_fishcomp_fish_tokens < int4 || varbit_7285 < int13 || varbit_fishcomp_reward_tackle_box_level == 5) {
        ifSetHide(false, Component.interface_925.component_925_185);
    } else {
        ifSetHide(true, Component.interface_925.component_925_185);
    }

    switch (varbit_fishcomp_reward_tackle_box_level) {
        case 0:
            ifSetText("Beginner's tackle box", Component.interface_925.component_925_21);
            ifSetObject(Obj.fishcomp_tackle_box_01, -1, Component.interface_925.component_925_188);
            break;
        case 1:
            ifSetText("Basic tackle box", Component.interface_925.component_925_21);
            ifSetObject(Obj.fishcomp_tackle_box_02, -1, Component.interface_925.component_925_188);
            break;
        case 2:
            ifSetText("Standard tackle box", Component.interface_925.component_925_21);
            ifSetObject(Obj.fishcomp_tackle_box_03, -1, Component.interface_925.component_925_188);
            break;
        case 3:
            ifSetText("Professional tackle box", Component.interface_925.component_925_21);
            ifSetObject(Obj.fishcomp_tackle_box_04, -1, Component.interface_925.component_925_188);
            break;
        case 4:
            ifSetText("Champion's tackle box", Component.interface_925.component_925_21);
            ifSetObject(Obj.fishcomp_tackle_box_05, -1, Component.interface_925.component_925_188);
            break;
        case 5:
            ifSetText("Champion's tackle box", Component.interface_925.component_925_21);
            ifSetText("(Purchased)", Component.interface_925.component_925_25);
            ifSetText("", Component.interface_925.component_925_24);
            ifSetObject(Obj.fishcomp_tackle_box_05, -1, Component.interface_925.component_925_188);
            break;
    }
    ifSetModelAngle(0, 0, 250, 1666, 0, 1440, Component.interface_925.component_925_188);
    ifSetObjectNonum(Obj.fishcomp_fishing_outfit_hat, 0, Component.interface_925.component_925_90);

    if (varbit_fishcomp_unlocked_outfit_hat == 1) {
        ifSetText("(Purchased)", Component.interface_925.component_925_91);
    } else {
        if (varbit_fishcomp_reward_shop_item == 3) {
            ifSetText("Cost: " + tostring(140) + " tokens", Component.interface_925.component_925_198);
            ifSetText("Wear this fishing hat to increase the amount of Fishing experience you earn.", Component.interface_925.component_925_197);
        }
        ifSetText(tostring(140) + " tokens", Component.interface_925.component_925_91);
    }

    if (varbit_fishcomp_fish_tokens < 140 && varbit_fishcomp_unlocked_outfit_hat == 0) {
        ifSetHide(false, Component.interface_925.component_925_87);
    } else {
        ifSetHide(true, Component.interface_925.component_925_87);
    }
    ifSetObjectNonum(Obj.fishcomp_fishing_outfit_body, 0, Component.interface_925.component_925_116);

    if (varbit_fishcomp_unlocked_outfit_body == 1) {
        ifSetText("(Purchased)", Component.interface_925.component_925_117);
    } else {
        if (varbit_fishcomp_reward_shop_item == 4) {
            ifSetText("Cost: " + tostring(140) + " tokens", Component.interface_925.component_925_198);
            ifSetText("Wear this fishing jacket to increase the amount of Fishing experience you earn.", Component.interface_925.component_925_197);
        }
        ifSetText(tostring(140) + " tokens", Component.interface_925.component_925_117);
    }

    if (varbit_fishcomp_fish_tokens < 140 && varbit_fishcomp_unlocked_outfit_body == 0) {
        ifSetHide(false, Component.interface_925.component_925_113);
    } else {
        ifSetHide(true, Component.interface_925.component_925_113);
    }
    ifSetObjectNonum(Obj.fishcomp_fishing_outfit_legs, 0, Component.interface_925.component_925_168);

    if (varbit_fishcomp_unlocked_outfit_legs == 1) {
        ifSetText("(Purchased)", Component.interface_925.component_925_169);
    } else {
        if (varbit_fishcomp_reward_shop_item == 5) {
            ifSetText("Cost: " + tostring(140) + " tokens", Component.interface_925.component_925_198);
            ifSetText("Wear these fishing waders to increase the amount of Fishing experience you earn.", Component.interface_925.component_925_197);
        }
        ifSetText(tostring(140) + " tokens", Component.interface_925.component_925_169);
    }

    if (varbit_fishcomp_fish_tokens < 140 && varbit_fishcomp_unlocked_outfit_legs == 0) {
        ifSetHide(false, Component.interface_925.component_925_165);
    } else {
        ifSetHide(true, Component.interface_925.component_925_165);
    }
    ifSetObjectNonum(Obj.fishcomp_fishing_outfit_boots, 0, Component.interface_925.component_925_142);

    if (varbit_fishcomp_unlocked_outfit_boots == 1) {
        ifSetText("(Purchased)", Component.interface_925.component_925_143);
    } else {
        if (varbit_fishcomp_reward_shop_item == 6) {
            ifSetText("Cost: " + tostring(140) + " tokens", Component.interface_925.component_925_198);
            ifSetText("Wear these fishing boots to increase the amount of Fishing experience you earn.", Component.interface_925.component_925_197);
        }
        ifSetText(tostring(140) + " tokens", Component.interface_925.component_925_143);
    }

    if (varbit_fishcomp_fish_tokens < 140 && varbit_fishcomp_unlocked_outfit_boots == 0) {
        ifSetHide(false, Component.interface_925.component_925_139);
    } else {
        ifSetHide(true, Component.interface_925.component_925_139);
    }
}
