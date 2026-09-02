/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1317

function cs2_1317(): void {
    ifSetModel(Model.quest_elem2_press_if_sparepipe1, Component.interface_262.component_262_0);
    ifSetModel(Model.quest_elem2_press_if_sparepipe2, Component.interface_262.component_262_28);
    ifSetModel(Model.quest_elem2_press_if_sparepipe3, Component.interface_262.component_262_29);

    if (varbit_elemental_if_2 < 1) {
        ifSetModel(-1, Component.interface_262.component_262_29);
    }

    if (varbit_elemental_if_2 < 2) {
        ifSetModel(-1, Component.interface_262.component_262_28);
    }

    if (varbit_elemental_if_2 < 3) {
        ifSetModel(-1, Component.interface_262.component_262_0);
    }
}
