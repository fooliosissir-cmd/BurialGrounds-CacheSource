/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6404

function cs2_6404(): void {
    ifSetText("Current points:", Component.interface_1308.component_1308_341);
    ifSetText(tostring(varbit_smki_slayer_points), Component.interface_1308.component_1308_342);
    ifSetPosition(96, 0, 0, 0, Component.interface_1308.component_1308_342);

    if (varbit_smki_slayer_points == 0) {
        ifSetColour(colour(0xB52F10), Component.interface_1308.component_1308_342);
    } else {
        ifSetColour(colour(0xFBF5E6), Component.interface_1308.component_1308_342);
    }
}
