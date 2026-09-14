/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_keyboard_handler]

function create_keyboard_handler(intArg0: number, intArg1: number): void {
    if (createConnectReply() == -3) {
        return;
    }

    if (createReply() == -3) {
        return;
    }

    if (createEmailValidateReply() == -3) {
        return;
    }
    let str0: string = "";
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    switch (varc_loginscreen_focus) {
        case 6:
            switch (intArg0) {
                case 13:
                    cs2_2206();
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 80 && keyheldShift() == 1) {
                        proc_create_focus(15, 1);
                    } else {
                        proc_create_focus(14, 1);
                    }
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_122);
                    cs2_3218(Component.interface_673.component_673_99, Component.interface_673.component_673_43, Component.interface_673.component_673_100, varcstr_122, 6);
                    return;
            }
            if (stringLength(varcstr_122) >= 320 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            if (stringIndexofChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+-/=?^_.{}~@", intArg1, 0) != -1 || intArg0 == 85 || intArg0 == 101) {
                [varcstr_122, varc_1099] = cs2_802(varc_1099, varcstr_122, 3, intArg0, intArg1);
                ifSetText(varcstr_122, Component.interface_673.component_673_43);
                cs2_3218(Component.interface_673.component_673_99, Component.interface_673.component_673_43, Component.interface_673.component_673_100, varcstr_122, 6);
            }
            return;
        case 14:
            switch (intArg0) {
                case 13:
                    cs2_2206();
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 80 && keyheldShift() == 1) {
                        proc_create_focus(6, 1);
                    } else {
                        proc_create_focus(7, 1);
                    }
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_326);
                    cs2_3218(Component.interface_673.component_673_118, Component.interface_673.component_673_119, Component.interface_673.component_673_120, varcstr_326, 14);
                    return;
            }
            if (stringLength(varcstr_326) >= 320 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            if (stringIndexofChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+-/=?^_.{}~@", intArg1, 0) != -1 || intArg0 == 85 || intArg0 == 101) {
                [varcstr_326, varc_1099] = cs2_802(varc_1099, varcstr_326, 3, intArg0, intArg1);
                ifSetText(varcstr_326, Component.interface_673.component_673_119);
                cs2_3218(Component.interface_673.component_673_118, Component.interface_673.component_673_119, Component.interface_673.component_673_120, varcstr_326, 14);
            }
            return;
        case 7:
            switch (intArg0) {
                case 13:
                    cs2_2206();
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 80 && keyheldShift() == 1) {
                        proc_create_focus(14, 1);
                    } else {
                        proc_create_focus(8, 1);
                    }
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_124);
                    cs2_3218(Component.interface_673.component_673_89, Component.interface_673.component_673_90, Component.interface_673.component_673_91, cs2_2949(varcstr_124), 7);
                    return;
            }
            if (stringLength(varcstr_124) > 20 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            [varcstr_124, varc_1099] = cs2_802(varc_1099, varcstr_124, 0, intArg0, intArg1);
            ifSetText(cs2_2949(varcstr_124), Component.interface_673.component_673_90);
            cs2_3218(Component.interface_673.component_673_89, Component.interface_673.component_673_90, Component.interface_673.component_673_91, cs2_2949(varcstr_124), 7);
            return;
        case 8:
            switch (intArg0) {
                case 13:
                    cs2_2206();
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 80 && keyheldShift() == 1) {
                        proc_create_focus(7, 1);
                    } else {
                        proc_create_focus(15, 1);
                    }
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_125);
                    cs2_3218(Component.interface_673.component_673_79, Component.interface_673.component_673_80, Component.interface_673.component_673_81, cs2_2949(varcstr_125), 8);
                    return;
            }
            if (stringLength(varcstr_125) > 20 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            [varcstr_125, varc_1099] = cs2_802(varc_1099, varcstr_125, 0, intArg0, intArg1);
            ifSetText(cs2_2949(varcstr_125), Component.interface_673.component_673_80);
            cs2_3218(Component.interface_673.component_673_79, Component.interface_673.component_673_80, Component.interface_673.component_673_81, cs2_2949(varcstr_125), 8);
            return;
        case 15:
            switch (intArg0) {
                case 13:
                    cs2_2206();
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 80 && keyheldShift() == 1) {
                        proc_create_focus(8, 1);
                    } else if (intArg0 == 84 && stringLength(varcstr_122) > 0 && stringLength(varcstr_326) > 0 && stringLength(varcstr_124) > 0 && stringLength(varcstr_125) > 0 && varc_1407 != 0) {
                        cs2_2967(0);
                        return;
                    } else {
                        proc_create_focus(6, 1);
                    }
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, tostring(varc_1407));
                    cs2_3218(Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, tostring(varc_1407), 15);
                    return;
            }
            if (stringLength(tostring(varc_1407)) >= 3 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            if (stringLength(tostring(varc_1407)) == 3) {
                int3 = varc_1407 / 100;
                int4 = (varc_1407 - int3 * 100) / 10;
                int5 = varc_1407 - (int3 * 100 + int4 * 10);
            } else if (stringLength(tostring(varc_1407)) == 2) {
                int3 = varc_1407 / 10;
                int4 = varc_1407 - int3 * 10;
            }
            if (charIsnumeric(intArg1) == 1) {
                int2 = stringIndexofChar("0123456789", intArg1, 0);
                if (varc_1407 < 1) {
                    varc_1407 = int2;
                } else {
                    varc_1407 = varc_1407 * 10 + int2;
                }
                varc_1099 = stringLength(tostring(varc_1407));
            } else if (intArg0 == 85) {
                if (varc_1099 >= 3) {
                    varc_1407 = varc_1407 / 10;
                } else if (varc_1099 == 2) {
                    if (stringLength(tostring(varc_1407)) == 3) {
                        varc_1407 = int3 * 10 + int5;
                    } else if (stringLength(tostring(varc_1407)) == 2) {
                        varc_1407 = varc_1407 / 10;
                    } else {
                        varc_1407 = 0;
                        varc_1099 = 0;
                    }
                } else if (varc_1099 == 1) {
                    if (stringLength(tostring(varc_1407)) == 3) {
                        varc_1407 = varc_1407 - int3 * 100;
                    } else if (stringLength(tostring(varc_1407)) == 2) {
                        varc_1407 = varc_1407 - int3 * 10;
                    } else {
                        varc_1407 = 0;
                        varc_1099 = 0;
                    }
                } else {
                    return;
                }
                varc_1099 = max(varc_1099 - 1, 0);
            } else if (intArg0 == 101) {
                if (varc_1099 >= 3) {
                    return;
                } else if (varc_1099 == 2) {
                    if (stringLength(tostring(varc_1407)) == 3) {
                        varc_1407 = varc_1407 / 10;
                    } else {
                        varc_1099 = stringLength(tostring(varc_1407));
                    }
                } else if (varc_1099 == 1) {
                    if (stringLength(tostring(varc_1407)) == 3) {
                        varc_1407 = int3 * 10 + int5;
                    } else if (stringLength(tostring(varc_1407)) == 2) {
                        varc_1407 = varc_1407 / 10;
                    } else {
                        return;
                    }
                } else if (stringLength(tostring(varc_1407)) == 3) {
                    varc_1407 = varc_1407 - int3 * 100;
                } else if (stringLength(tostring(varc_1407)) == 2) {
                    varc_1407 = int4;
                } else {
                    varc_1407 = 0;
                }
            }
            if (varc_1407 < 1) {
                ifSetText("", Component.interface_673.component_673_42);
                cs2_3218(Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, "", 15);
            } else {
                ifSetText(tostring(varc_1407), Component.interface_673.component_673_42);
                cs2_3218(Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, tostring(varc_1407), 15);
            }
            return;
    }
}
