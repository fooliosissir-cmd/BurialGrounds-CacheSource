/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1319

function cs2_1319(): void {
    if (varbit_elemental_if_1 == 1) {
        ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_24);
        varc_inletam = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_24);
        varc_inletam = 0;
    }

    if (varbit_elemental_if_1 == 2) {
        ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_25);
        varc_inletbm = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_25);
        varc_inletbm = 0;
    }

    if (varbit_elemental_if_1 == 3) {
        ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_20);
        varc_inletcm = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_20);
        varc_inletcm = 0;
    }

    if (varbit_elemental_if_1 == 4) {
        ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_21);
        varc_inlet1m = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_21);
        varc_inlet1m = 0;
    }

    if (varbit_elemental_if_1 == 5) {
        ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_22);
        varc_inlet2m = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_22);
        varc_inlet2m = 0;
    }

    if (varbit_elemental_if_1 == 6) {
        ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_23);
        varc_inlet3m = 1;
    } else {
        ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_23);
        varc_inlet3m = 0;
    }
}
