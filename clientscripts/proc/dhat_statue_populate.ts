/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dhat_statue_populate]

function dhat_statue_populate(intArg0: number): void {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";
    let str4: string = "";

    if (varc_1520 > 2000000) {
        str1 = "over " + tostringLocalised(2000000, 1);
    } else {
        str1 = tostringLocalised(varc_1520, 1);
    }
    let int1: number = min(2147483647, 1000 * varc_1520 / max(1, varc_1521) / 1000);
    let int2: number = 1000 * varc_1520 / max(1, varc_1521) % 1000;

    if (int2 == 0) {
        str0 = tostring(int1);
    } else {
        str0 = append(tostring(int1), ".");
        if (int2 < 100) {
            str0 = append(str0, "0");
        }
        if (int2 < 10) {
            str0 = append(str0, "0");
        }
        str0 = append(str0, tostring(int2));
        if (int2 % 10 == 0) {
            str0 = subString(str0, 0, stringLength(str0) - 2);
        }
        if (int2 % 100 == 0) {
            str0 = subString(str0, 0, stringLength(str0) - 2);
        }
    }
    let str5: string = tostringLocalised(varc_1522, 1);

    if (intArg0 == 0) {
        if (varc_1520 > 2000) {
            str4 = "Behold " + varcstr_127 + ", champion of " + str1 + " bouts in the Duel Arena!";
        } else if (varc_1520 == 1) {
            str4 = "Here stands " + varcstr_127 + ", once victor of a duel.";
        } else {
            str4 = "Here stands " + varcstr_127 + ", victor of " + str1 + " duels.";
        }
        str2 = varcstr_127 + " defeats " + str0 + " opponents for every loss!";
        if (varc_1522 > 250) {
            str5 = "over " + tostringLocalised(250, 1);
        }
        str3 = varcstr_127 + " has vanquished " + tostringLocalised(varc_1522, 1) + " opponents in a row.";
    } else if (intArg0 == 1) {
        if (varc_1520 > 2000) {
            str4 = "Behold " + varcstr_127 + ", taker of " + str1 + " heads in the Wilderness!";
        } else {
            str4 = "Here stands " + varcstr_127 + ", who has killed " + str1 + " opponents in the Wilderness.";
        }
        str2 = "Vanquisher of " + str0 + " foes for every fall!";
        if (varc_1522 > 250) {
            str5 = "Over " + tostringLocalised(250, 1);
        }
        str3 = str5 + " victims in succession have rendered their souls to " + varcstr_127 + ".";
    }
    ifSetText(str4, Component.interface_21.component_21_1);
    ifSetText(str3, Component.interface_21.component_21_3);
    ifSetText(str2, Component.interface_21.component_21_2);
    ifSetText("Highest value Wilderness kill:" + "<br>" + tostringLocalised(varp_2185, 1) + " coins.", Component.interface_21.component_21_4);
    ifSetHide(false, Component.interface_21.component_21_18);
    ifSetHide(false, Component.interface_21.component_21_49);
    ifSetHide(true, Component.interface_21.component_21_2);
    ifSetHide(true, Component.interface_21.component_21_3);

    if (varc_1524 == 1) {
        ifSetHide(false, Component.interface_21.component_21_2);
        if (varc_1522 > 1) {
            ifSetHide(false, Component.interface_21.component_21_3);
        }
    }
    ifSetHide(true, Component.interface_21.component_21_4);

    if (intArg0 == 1 && varp_2185 > 0) {
        ifSetHide(false, Component.interface_21.component_21_4);
    }
    let int3: number = ifGetHeight(Component.interface_21.component_21_17);
    ifSetPosition(ifGetX(Component.interface_21.component_21_18), ifGetY(Component.interface_21.component_21_4), 0, 0, Component.interface_21.component_21_18);

    if (ifGetHide(Component.interface_21.component_21_4) == 1) {
        ifSetHide(true, Component.interface_21.component_21_18);
        ifSetPosition(ifGetX(Component.interface_21.component_21_3), 0, 0, 2, Component.interface_21.component_21_3);
        ifSetPosition(ifGetX(Component.interface_21.component_21_2), ifGetHeight(Component.interface_21.component_21_3), 0, 2, Component.interface_21.component_21_2);
    } else {
        int3 = int3 - ifGetHeight(Component.interface_21.component_21_4);
    }
    ifSetPosition(ifGetX(Component.interface_21.component_21_18), ifGetY(Component.interface_21.component_21_2), 0, 0, Component.interface_21.component_21_49);

    if (ifGetHide(Component.interface_21.component_21_3) == 0) {
        int3 = int3 - (ifGetHeight(Component.interface_21.component_21_3) + ifGetHeight(Component.interface_21.component_21_2));
    } else {
        ifSetHide(true, Component.interface_21.component_21_49);
    }
    ifSetSize(ifGetWidth(Component.interface_21.component_21_1), int3, 0, 0, Component.interface_21.component_21_1);
}
