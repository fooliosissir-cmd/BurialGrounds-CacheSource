/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2992

function cs2_2992(): void {
    if (varbit_ecosystem_basic_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_25);
        ifSetHide(false, Component.interface_311.component_311_26);
        ifSetHide(true, Component.interface_311.component_311_57);
        ifSetHide(true, Component.interface_311.component_311_59);
    }

    if (varbit_ecosystem_amphibian_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_9);
        ifSetHide(false, Component.interface_311.component_311_10);
    }

    if (varbit_ecosystem_carrion_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_5);
        ifSetHide(false, Component.interface_311.component_311_6);
    }

    if (varbit_ecosystem_draconic_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_1);
        ifSetHide(false, Component.interface_311.component_311_2);
    }

    if (varbit_ecosystem_aquatic_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_13);
        ifSetHide(false, Component.interface_311.component_311_14);
    }

    if (varbit_ecosystem_igneous_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_21);
        ifSetHide(false, Component.interface_311.component_311_22);
    }

    if (varbit_ecosystem_carniverous_found == 0) {
        ifSetHide(true, Component.interface_311.component_311_17);
        ifSetHide(false, Component.interface_311.component_311_18);
    }
}
