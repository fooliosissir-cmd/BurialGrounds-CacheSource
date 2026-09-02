/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_special_setup]

function dom_special_setup(): void {
    if (varbit_dom_allow_spectators == 0) {
        ifSetHide(true, Component.interface_1170.component_1170_160);
        ifSetHide(false, Component.interface_1170.component_1170_161);
    } else {
        ifSetHide(false, Component.interface_1170.component_1170_160);
        ifSetHide(true, Component.interface_1170.component_1170_161);
    }

    if (varbit_dom_skip_taunt == 0) {
        ifSetHide(true, Component.interface_1170.component_1170_233);
        ifSetHide(false, Component.interface_1170.component_1170_234);
    } else {
        ifSetHide(false, Component.interface_1170.component_1170_233);
        ifSetHide(true, Component.interface_1170.component_1170_234);
    }

    if (varbit_dom_skip_victory == 0) {
        ifSetHide(true, Component.interface_1170.component_1170_236);
        ifSetHide(false, Component.interface_1170.component_1170_237);
    } else {
        ifSetHide(false, Component.interface_1170.component_1170_236);
        ifSetHide(true, Component.interface_1170.component_1170_237);
    }
    varc_tooltip_built = 0;
    ifSetHide(true, Component.interface_1170.component_1170_140);

    if (varbit_dom_achieve_special_1 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_50);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_50);
    }

    if (varbit_dom_achieve_special_2 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_52);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_52);
    }

    if (varbit_dom_achieve_special_3 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_53);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_53);
    }

    if (varbit_dom_achieve_special_4 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_54);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_54);
    }

    if (varbit_dom_achieve_special_5 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_55);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_55);
    }

    if (varbit_dom_achieve_special_6 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_56);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_56);
    }

    if (varbit_dom_achieve_special_7 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_57);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_57);
    }

    if (varbit_dom_achieve_special_8 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_58);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_58);
    }

    if (varbit_dom_achieve_special_9 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_59);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_59);
    }

    if (varbit_dom_achieve_special_10 == 1) {
        ifSetHide(false, Component.interface_1170.component_1170_60);
    } else {
        ifSetHide(true, Component.interface_1170.component_1170_60);
    }
}
