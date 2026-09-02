/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_753

function cs2_753(): void {
    if (varbit_lore_animal_hunger_percent != 101) {
        ifSetText(tostring(varbit_lore_animal_hunger_percent) + "%", Component.interface_662.component_662_48);
        if (varbit_lore_animal_hunger_percent > 74) {
            ifSetColour(colour(0xFF0000), Component.interface_662.component_662_48);
        } else {
            ifSetColour(colour(0xFFFFFF), Component.interface_662.component_662_48);
        }
    } else {
        ifSetText("NA", Component.interface_662.component_662_48);
    }

    if (varbit_lore_animal_size_percent != 101) {
        ifSetText(tostring(varbit_lore_animal_size_percent) + "%", Component.interface_662.component_662_45);
        ifSetText(tostring(varbit_lore_animal_size_percent) + "%", Component.interface_662.component_662_46);
    } else {
        ifSetText("NA", Component.interface_662.component_662_45);
        ifSetText("NA", Component.interface_662.component_662_46);
    }
}
