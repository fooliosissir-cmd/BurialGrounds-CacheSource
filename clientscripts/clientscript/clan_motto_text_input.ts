/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_motto_text_input]

function clan_motto_text_input(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: component): void {
    varcstr_345 = ifGetText(intArg0);

    switch (intArg3) {
        case 84:
            proc_clan_motto_return();
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (keyheldAlt() == 0) {
                return;
            }
            cs2_1553(intArg3, varc_1496, varcstr_345);
            break;
        case 85:
            if (stringLength(varcstr_345) > 0) {
                varcstr_345 = subString(varcstr_345, 0, stringLength(varcstr_345) - 1);
            }
            break;
        default:
            if (stringLength(varcstr_345) < 80) {
                varcstr_345 = add_to_inputstring(varcstr_345, 0, intArg3, intArg2);
            }
            break;
    }
    varc_1496 = cs2_1552(varc_1496, varcstr_345, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_1496, ifGetY(intArg4), 0, 0, intArg4);
    ifSetText(tostring(stringLength(varcstr_345)) + "/80", intArg1);

    if (stringLength(varcstr_345) >= 70) {
        ifSetColour(colour(0xDD0000), intArg1);
    } else {
        ifSetColour(colour(0x1F1D19), intArg1);
    }
    ifSetText(varcstr_345, intArg0);
}
