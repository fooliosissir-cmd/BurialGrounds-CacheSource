/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_qfc_text_input]

function clan_qfc_text_input(intArg0: component, intArg1: number, intArg2: number, intArg3: component): void {
    varcstr_qfc_input_varc = ifGetText(intArg0);

    switch (intArg2) {
        case 84:
            proc_clan_qfc_return(1);
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
            cs2_1553(intArg2, varc_qfc_input_caret_varc, varcstr_qfc_input_varc);
            break;
        case 85:
            if (stringLength(varcstr_qfc_input_varc) > 0) {
                varcstr_qfc_input_varc = subString(varcstr_qfc_input_varc, 0, stringLength(varcstr_qfc_input_varc) - 1);
            }
            break;
        default:
            if (intArg2 == 67 && keyheldShift() == 1) {
                cs2_4367();
                return;
            }
            if (stringLength(varcstr_qfc_input_varc) < 13) {
                varcstr_qfc_input_varc = add_to_inputstring(varcstr_qfc_input_varc, 0, intArg2, intArg1);
            }
            break;
    }
    varc_qfc_input_caret_varc = cs2_1552(varc_qfc_input_caret_varc, varcstr_qfc_input_varc, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_qfc_input_caret_varc, ifGetY(intArg3), 0, 0, intArg3);
    ifSetText(varcstr_qfc_input_varc, intArg0);
}
