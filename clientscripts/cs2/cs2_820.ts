/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_820

function cs2_820(): void {
    if (varbit_lore_animal_hunger_percent != 101) {
        ifSetText(tostring(varbit_lore_animal_hunger_percent) + "%", Component.interface_663.component_663_19);
        if (varbit_lore_animal_hunger_percent > 74) {
            ifSetColour(colour(0xFF0000), Component.interface_663.component_663_19);
        } else {
            ifSetColour(colour(0xFFFFFF), Component.interface_663.component_663_19);
        }
    } else {
        ifSetText("NA", Component.interface_663.component_663_19);
    }

    if (varbit_lore_animal_size_percent != 101) {
        ifSetText(tostring(varbit_lore_animal_size_percent) + "%", Component.interface_663.component_663_17);
    } else {
        ifSetText("NA", Component.interface_663.component_663_17);
    }
}
