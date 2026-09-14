/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_focus]

function proc_create_focus(intArg0: number, intArg1: number): void {
    if (createConnectReply() == -3) {
        return;
    }

    if (createReply() == -3) {
        return;
    }

    if (createEmailValidateReply() == -3) {
        return;
    }
    let int2: number = varc_loginscreen_focus;
    varc_loginscreen_focus = intArg0;
    varc_175 = clientClock();

    switch (intArg0) {
        case 6:
            if (intArg1 == 1) {
                varc_1099 = stringLength(varcstr_122);
                cs2_3218(Component.interface_673.component_673_99, Component.interface_673.component_673_43, Component.interface_673.component_673_100, varcstr_122, 6);
            }
            break;
        case 14:
            if (intArg1 == 1) {
                varc_1099 = stringLength(varcstr_326);
                cs2_3218(Component.interface_673.component_673_118, Component.interface_673.component_673_119, Component.interface_673.component_673_120, varcstr_326, 14);
            }
            break;
        case 7:
            if (intArg1 == 1) {
                varc_1099 = stringLength(varcstr_124);
                cs2_3218(Component.interface_673.component_673_89, Component.interface_673.component_673_90, Component.interface_673.component_673_91, cs2_2949(varcstr_124), 7);
            }
            break;
        case 8:
            if (intArg1 == 1) {
                varc_1099 = stringLength(varcstr_125);
                cs2_3218(Component.interface_673.component_673_79, Component.interface_673.component_673_80, Component.interface_673.component_673_81, cs2_2949(varcstr_125), 8);
            }
            break;
        case 15:
            if (intArg1 == 1) {
                if (varc_1407 < 1) {
                    varc_1099 = 0;
                    cs2_3218(Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, "", 15);
                } else {
                    varc_1099 = stringLength(tostring(varc_1407));
                    cs2_3218(Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, tostring(varc_1407), 15);
                }
            }
            break;
    }

    if (int2 == 6 && intArg0 != 6) {
        if (compare(varcstr_123, varcstr_122) != 0) {
            cs2_2283(false, true);
        }
    } else if (int2 == 14 && intArg0 != 14) {
        if (compare(varcstr_327, varcstr_326) != 0) {
            cs2_3953(0);
        }
    } else if (int2 == 7 && intArg0 != 7) {
        if (compare(varcstr_328, varcstr_124) != 0) {
            cs2_3228(7, 0, 0);
            if (stringLength(varcstr_125) > 0) {
                cs2_3228(8, 1, 0);
            }
        }
    } else if (int2 == 8 && intArg0 != 8) {
        if (compare(varcstr_329, varcstr_125) != 0) {
            cs2_3228(8, 1, 0);
        }
    } else if (int2 == 15 && intArg0 != 15 && varc_1408 != varc_1407) {
        cs2_3954(0);
    }
}
