/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loginscreen_keypress]

function loginscreen_keypress(intArg0: number, intArg1: number): void {
    if (varc_loginscreen_focus == 11) {
        return;
    }
    let int2: number = login_getreply();

    switch (varc_loginscreen_focus) {
        case 12:
            return;
        case 2:
            switch (int2) {
                case -3:
                case 21:
                case 1:
                    return;
            }
            if (intArg0 == 13) {
                proc_loginscreen_setactivemenu(11);
                return;
            }
            return;
        case 3:
            switch (int2) {
                case -3:
                case 21:
                case 1:
                    return;
            }
            switch (intArg0) {
                case 13:
                    proc_loginscreen_setactivemenu(11);
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    varc_loginscreen_focus = 4;
                    varc_175 = clientClock();
                    varc_1099 = stringLength(cs2_2949(varcstr_33));
                    cs2_3237(Component.interface_596.component_596_75, Component.interface_596.component_596_76, Component.interface_596.component_596_77, cs2_2949(varcstr_33), 4);
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_32);
                    cs2_3237(Component.interface_596.component_596_69, Component.interface_596.component_596_70, Component.interface_596.component_596_71, varcstr_32, 3);
                    return;
            }
            if ((stringLength(varcstr_32) >= 320 && intArg0 != 85 && intArg0 != 101) || stringLength(removetags(appendChar("", intArg1))) == 0) {
                return;
            }
            [varcstr_32, varc_1099] = cs2_802(varc_1099, varcstr_32, 0, intArg0, intArg1);
            ifSetText(varcstr_32, Component.interface_596.component_596_70);
            cs2_3237(Component.interface_596.component_596_69, Component.interface_596.component_596_70, Component.interface_596.component_596_71, varcstr_32, 3);
            return;
        case 4:
            switch (int2) {
                case -3:
                case 21:
                case 1:
                    return;
            }
            switch (intArg0) {
                case 13:
                    proc_loginscreen_setactivemenu(11);
                    return;
                case 84:
                case 80:
                    if (varc_175 >= clientClock()) {
                        return;
                    }
                    if (intArg0 == 84 && stringLength(varcstr_32) > 0) {
                        proc_login_dologin();
                        return;
                    }
                    varc_loginscreen_focus = 3;
                    varc_175 = clientClock();
                    varc_1099 = stringLength(varcstr_32);
                    cs2_3237(Component.interface_596.component_596_69, Component.interface_596.component_596_70, Component.interface_596.component_596_71, varcstr_32, 3);
                    return;
                case 96:
                case 97:
                case 98:
                case 99:
                case 102:
                case 103:
                    varc_1099 = cs2_1553(intArg0, varc_1099, cs2_2949(varcstr_33));
                    cs2_3237(Component.interface_596.component_596_75, Component.interface_596.component_596_76, Component.interface_596.component_596_77, cs2_2949(varcstr_33), 4);
                    return;
            }
            if (stringLength(varcstr_33) >= 20 && intArg0 != 85 && intArg0 != 101) {
                return;
            }
            [varcstr_33, varc_1099] = cs2_802(varc_1099, varcstr_33, 0, intArg0, intArg1);
            ifSetText(cs2_2949(varcstr_33), Component.interface_596.component_596_76);
            cs2_3237(Component.interface_596.component_596_75, Component.interface_596.component_596_76, Component.interface_596.component_596_77, cs2_2949(varcstr_33), 4);
            return;
        case 5:
            switch (int2) {
                case -3:
                case 1:
                    return;
            }
            if (int2 == 21 && intArg0 == 13) {
                proc_login_hop_abort();
                return;
            } else if (intArg0 == 13) {
                proc_login_popup_close();
                return;
            }
            return;
        case 10:
            cs2_2222(intArg0);
            return;
        case 6:
        case 14:
        case 7:
        case 8:
        case 15:
            create_keyboard_handler(intArg0, intArg1);
            return;
        case 13:
            if (intArg0 == 13) {
                proc_loginscreen_setactivemenu(varc_1091);
                return;
            }
            return;
        case 17:
            if (intArg0 == 84) {
                cs2_2206();
            }
            return;
    }
}
