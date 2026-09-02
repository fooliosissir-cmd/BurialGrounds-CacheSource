/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chosen_statue_interface_open]

function chosen_statue_interface_open(): void {
    if (gender() == 1) {
        ifSetHide(false, Component.interface_308.component_308_20);
        ifSetHide(false, Component.interface_308.component_308_22);
        ifSetHide(false, Component.interface_308.component_308_24);
        ifSetHide(false, Component.interface_308.component_308_26);
        ifSetHide(false, Component.interface_308.component_308_28);
        ifSetHide(false, Component.interface_308.component_308_30);
        ifSetHide(false, Component.interface_308.component_308_32);
        ifSetHide(true, Component.interface_308.component_308_19);
        ifSetHide(true, Component.interface_308.component_308_21);
        ifSetHide(true, Component.interface_308.component_308_23);
        ifSetHide(true, Component.interface_308.component_308_25);
        ifSetHide(true, Component.interface_308.component_308_27);
        ifSetHide(true, Component.interface_308.component_308_29);
        ifSetHide(true, Component.interface_308.component_308_31);
    } else {
        ifSetHide(true, Component.interface_308.component_308_20);
        ifSetHide(true, Component.interface_308.component_308_22);
        ifSetHide(true, Component.interface_308.component_308_24);
        ifSetHide(true, Component.interface_308.component_308_26);
        ifSetHide(true, Component.interface_308.component_308_28);
        ifSetHide(true, Component.interface_308.component_308_30);
        ifSetHide(true, Component.interface_308.component_308_32);
        ifSetHide(false, Component.interface_308.component_308_19);
        ifSetHide(false, Component.interface_308.component_308_21);
        ifSetHide(false, Component.interface_308.component_308_23);
        ifSetHide(false, Component.interface_308.component_308_25);
        ifSetHide(false, Component.interface_308.component_308_27);
        ifSetHide(false, Component.interface_308.component_308_29);
        ifSetHide(false, Component.interface_308.component_308_31);
    }
}
