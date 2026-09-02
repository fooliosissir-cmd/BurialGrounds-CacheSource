/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_build_switch_tab]

function clan_build_switch_tab(intArg0: number): void {
    switch (intArg0) {
        case 1:
            ifSetHide(false, Component.interface_1115.component_1115_33);
            ifSetHide(true, Component.interface_1115.component_1115_49);
            ifSetHide(true, Component.interface_1115.component_1115_50);
            ifSetHide(false, Component.interface_1115.component_1115_0);
            ifSetHide(true, Component.interface_1115.component_1115_1);
            ifSetHide(true, Component.interface_1115.component_1115_2);
            ifSetHide(true, Component.interface_1115.component_1115_26);
            ifSetHide(false, Component.interface_1115.component_1115_27);
            ifSetHide(false, Component.interface_1115.component_1115_28);
            break;
        case 2:
            ifSetHide(true, Component.interface_1115.component_1115_33);
            ifSetHide(false, Component.interface_1115.component_1115_49);
            ifSetHide(true, Component.interface_1115.component_1115_50);
            ifSetHide(true, Component.interface_1115.component_1115_0);
            ifSetHide(false, Component.interface_1115.component_1115_1);
            ifSetHide(true, Component.interface_1115.component_1115_2);
            ifSetHide(false, Component.interface_1115.component_1115_26);
            ifSetHide(true, Component.interface_1115.component_1115_27);
            ifSetHide(false, Component.interface_1115.component_1115_28);
            break;
        case 3:
            ifSetHide(true, Component.interface_1115.component_1115_33);
            ifSetHide(true, Component.interface_1115.component_1115_49);
            ifSetHide(false, Component.interface_1115.component_1115_50);
            ifSetHide(true, Component.interface_1115.component_1115_0);
            ifSetHide(true, Component.interface_1115.component_1115_1);
            ifSetHide(false, Component.interface_1115.component_1115_2);
            ifSetHide(false, Component.interface_1115.component_1115_26);
            ifSetHide(false, Component.interface_1115.component_1115_27);
            ifSetHide(true, Component.interface_1115.component_1115_28);
            break;
    }
    cs2_4775();
}
