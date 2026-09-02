/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,blast_furnace_bar_stock]

function blast_furnace_bar_stock(): void {
    ifSetText("Bronze: " + tostring(varbit_blast_furnace_bronze_bars), Component.interface_28.component_28_42);

    if (varbit_blast_furnace_bronze_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_44);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_42);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_44);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_42);
    }
    ifSetText("Iron: " + tostring(varbit_blast_furnace_iron_bars), Component.interface_28.component_28_39);

    if (varbit_blast_furnace_iron_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_41);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_39);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_41);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_39);
    }
    ifSetText("Steel: " + tostring(varbit_blast_furnace_steel_bars), Component.interface_28.component_28_37);

    if (varbit_blast_furnace_steel_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_38);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_37);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_38);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_37);
    }
    ifSetText("Mithril: " + tostring(varbit_blast_furnace_mithril_bars), Component.interface_28.component_28_34);

    if (varbit_blast_furnace_mithril_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_35);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_34);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_35);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_34);
    }
    ifSetText("Adamantite: " + tostring(varbit_blast_furnace_adamantite_bars), Component.interface_28.component_28_31);

    if (varbit_blast_furnace_adamantite_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_32);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_31);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_32);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_31);
    }
    ifSetText("Runite: " + tostring(varbit_blast_furnace_runite_bars), Component.interface_28.component_28_28);

    if (varbit_blast_furnace_runite_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_29);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_28);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_29);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_28);
    }
    ifSetText("Silver: " + tostring(varbit_blast_furnace_silver_bars), Component.interface_28.component_28_25);

    if (varbit_blast_furnace_silver_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_26);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_25);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_26);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_25);
    }
    ifSetText("Gold: " + tostring(varbit_blast_furnace_gold_bars), Component.interface_28.component_28_22);

    if (varbit_blast_furnace_gold_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_23);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_22);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_23);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_22);
    }
    ifSetText("Perfect Gold: " + tostring(varbit_blast_furnace_perfect_gold_bars), Component.interface_28.component_28_2);

    if (varbit_blast_furnace_perfect_gold_bars > 0) {
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_4);
        ifSetColour(colour(0xFF981F), Component.interface_28.component_28_2);
    } else {
        ifSetColour(colour(0x999999), Component.interface_28.component_28_4);
        ifSetColour(colour(0x999999), Component.interface_28.component_28_2);
    }
}
