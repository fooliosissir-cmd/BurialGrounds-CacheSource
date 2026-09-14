/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_create_text_input]

function clan_create_text_input(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: component): void {
    varcstr_348 = ifGetText(intArg0);

    switch (intArg3) {
        case 84:
            if (compare("", varcstr_348) != 0) {
                proc_clan_create_return();
            }
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (keyheldShift() == 0) {
                return;
            }
            cs2_1553(intArg3, varc_1504, varcstr_348);
            break;
        case 85:
            if (stringLength(varcstr_348) > 0) {
                varcstr_348 = subString(varcstr_348, 0, stringLength(varcstr_348) - 1);
            }
            break;
        default:
            if (stringLength(varcstr_348) < 20) {
                varcstr_348 = add_to_inputstring(varcstr_348, 0, intArg3, intArg2);
            }
            break;
    }
    varc_1504 = cs2_1552(varc_1504, varcstr_348, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_1504, ifGetY(intArg4), 0, 0, intArg4);
    ifSetText(tostring(stringLength(varcstr_348)) + "/20", intArg1);

    if (stringLength(varcstr_348) >= 15) {
        ifSetColour(colour(0xDD0000), intArg1);
    } else {
        ifSetColour(colour(0x1F1D19), intArg1);
    }
    ifSetText(varcstr_348, intArg0);
}
