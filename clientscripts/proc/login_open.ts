/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_open]

function login_open(intArg0: number): void {
    let int1: number = login_getreply();

    if ((int1 == -3 && intArg0 != 13) || int1 == 21 || int1 == 1) {
        return;
    }
    ifSetText(varcstr_32, Component.interface_596.component_596_70);
    ifSetText(cs2_2949(varcstr_33), Component.interface_596.component_596_76);

    if (stringLength(varcstr_32) > 0) {
        varc_loginscreen_focus = 4;
    } else {
        varc_loginscreen_focus = 3;
    }

    if (varc_loginscreen_focus == 3) {
        varc_1099 = stringLength(varcstr_32);
        cs2_3237(Component.interface_596.component_596_69, Component.interface_596.component_596_70, Component.interface_596.component_596_71, varcstr_32, 3);
    } else {
        varc_1099 = stringLength(cs2_2949(varcstr_33));
        cs2_3237(Component.interface_596.component_596_75, Component.interface_596.component_596_76, Component.interface_596.component_596_77, cs2_2949(varcstr_33), 4);
    }
    ifSetHide(false, Component.interface_744.component_744_26);
    ifSetHide(false, Component.interface_596.component_596_5);
    cs2_3964();
}
