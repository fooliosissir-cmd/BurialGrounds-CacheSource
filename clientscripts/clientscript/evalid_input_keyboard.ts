/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,evalid_input_keyboard]

function evalid_input_keyboard(intArg0: number, intArg1: number, intArg2: component, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 0;

    switch (intArg0) {
        case 84:
            cs2_6203();
            return;
        case 13:
            return;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            if (varc_1920 == 1) {
                varc_1921 = cs2_6200(intArg0, varc_1921, varcstr_evalid_input_1);
                cs2_6199(Component.interface_906.component_906_361, Component.interface_906.component_906_362, varcstr_evalid_input_1);
            } else if (varc_1920 == 2) {
                varc_1922 = cs2_6200(intArg0, varc_1922, varcstr_evalid_input_2);
                cs2_6199(Component.interface_906.component_906_368, Component.interface_906.component_906_369, varcstr_evalid_input_2);
            }
            return;
        case 80:
            if (varc_1920 == 1) {
                varc_1920 = 2;
                [int4, int5] = ifGetcharposatindex(stringLength(varcstr_evalid_input_2), Component.interface_906.component_906_368);
                cs2_6198(int4, int5, Component.interface_906.component_906_368, Component.interface_906.component_906_369);
            } else if (varc_1920 == 2) {
                varc_1920 = 1;
                [int4, int5] = ifGetcharposatindex(stringLength(varcstr_evalid_input_1), Component.interface_906.component_906_361);
                cs2_6198(int4, int5, Component.interface_906.component_906_361, Component.interface_906.component_906_362);
            }
            break;
        case -1:
        case 85:
        case 101:
            if (charIsprintable(intArg1) == 1 || intArg0 == 85 || intArg0 == 101) {
                if (stringIndexofChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+-/=?^_.{}~@", intArg1, 0) == -1 && intArg0 != 85 && intArg0 != 101) {
                    return;
                }
                if (intArg1 == 60) {
                    return;
                }
                if (varc_1920 == 1) {
                    [varcstr_evalid_input_1, varc_1921] = cs2_802(varc_1921, varcstr_evalid_input_1, intArg3, intArg0, intArg1);
                    ifSetText(varcstr_evalid_input_1, intArg2);
                    cs2_6199(Component.interface_906.component_906_361, Component.interface_906.component_906_362, varcstr_evalid_input_1);
                    return;
                } else if (varc_1920 == 2) {
                    [varcstr_evalid_input_2, varc_1922] = cs2_802(varc_1922, varcstr_evalid_input_2, intArg3, intArg0, intArg1);
                    ifSetText(varcstr_evalid_input_2, intArg2);
                    cs2_6199(Component.interface_906.component_906_368, Component.interface_906.component_906_369, varcstr_evalid_input_2);
                    return;
                }
            }
            return;
    }
}
