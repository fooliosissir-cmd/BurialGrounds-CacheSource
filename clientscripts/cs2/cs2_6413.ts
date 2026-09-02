/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6413

function cs2_6413(): void {
    ifSetText("Current co-op points:", Component.interface_1308.component_1308_341);
    ifSetText(tostring(varbit_ss_points), Component.interface_1308.component_1308_342);
    ifSetPosition(120, 0, 0, 0, Component.interface_1308.component_1308_342);

    if (varbit_smki_slayer_points == 0) {
        ifSetColour(colour(0xB52F10), Component.interface_1308.component_1308_342);
    } else {
        ifSetColour(colour(0xFBF5E6), Component.interface_1308.component_1308_342);
    }

    if (varbit_ss_bought_food == 1) {
        cs2_6414(85721100, 1);
    } else if (varbit_ss_points < 25) {
        cs2_6414(85721100, 0);
    }

    if (testBit(varp_2381, 33 % 32) == 1) {
        cs2_6414(85721560, 1);
    } else if (varbit_ss_points < 50) {
        cs2_6414(85721560, 0);
    }

    if (varbit_ss_bought_potion == 1) {
        cs2_6414(85721581, 1);
    } else if (varbit_ss_points < 75) {
        cs2_6414(85721581, 0);
    }

    if (testBit(varp_2381, 34 % 42) == 1) {
        cs2_6414(85721583, 1);
    } else if (varbit_ss_points < 100) {
        cs2_6414(85721583, 0);
    }
}
