/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1318

function cs2_1318(intArg0: number): void {
    if (intArg0 == 17170456) {
        if (varc_inletam == 0) {
            ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_24);
            varc_inletam = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_24);
            varc_inletam = 0;
        }
    } else if (intArg0 == 17170457) {
        if (varc_inletbm == 0) {
            ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_25);
            varc_inletbm = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_25);
            varc_inletbm = 0;
        }
    } else if (intArg0 == 17170452) {
        if (varc_inletcm == 0) {
            ifSetModel(Model.quest_elem2_press_if_inleta_highlight, Component.interface_262.component_262_20);
            varc_inletcm = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inleta, Component.interface_262.component_262_20);
            varc_inletcm = 0;
        }
    } else if (intArg0 == 17170453) {
        if (varc_inlet1m == 0) {
            ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_21);
            varc_inlet1m = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_21);
            varc_inlet1m = 0;
        }
    } else if (intArg0 == 17170454) {
        if (varc_inlet2m == 0) {
            ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_22);
            varc_inlet2m = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_22);
            varc_inlet2m = 0;
        }
    } else if (intArg0 == 17170455) {
        if (varc_inlet3m == 0) {
            ifSetModel(Model.quest_elem2_press_if_inlet1_highlight, Component.interface_262.component_262_23);
            varc_inlet3m = 1;
        } else {
            ifSetModel(Model.quest_elem2_press_if_inlet1, Component.interface_262.component_262_23);
            varc_inlet3m = 0;
        }
    }
}
