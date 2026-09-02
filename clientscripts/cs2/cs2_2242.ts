/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2242

function cs2_2242(): void {
    soundSynth(Sound.sound_8727, 3, 0);
    ifSetText("Turns taken score: " + tostring(varp_1674) + " x 101 = " + tostring(varp_1674 * 101), Component.interface_927.component_927_22);
    ifSetText("Resources spare: " + tostring(varp_easter10_resourcegame_totalfruit + varp_easter10_resourcegame_totalnuts + varp_easter10_resourcegame_totalchoc) + " x -10 = -" + tostring((varp_easter10_resourcegame_totalfruit + varp_easter10_resourcegame_totalnuts + varp_easter10_resourcegame_totalchoc) * 10), Component.interface_927.component_927_26);

    if (varp_1674 < 16) {
        ifSetText("Completed within turn limit: -100", Component.interface_927.component_927_27);
    } else {
        ifSetText("Not completed within turn limit: 0", Component.interface_927.component_927_27);
    }
    ifSetText("Workers employed: " + tostring(varp_easter10_resourcegame_totalworkers) + " x -10 = -" + tostring(varp_easter10_resourcegame_totalworkers * 10), Component.interface_927.component_927_28);
    ifSetText("Turns taken: " + tostring(varp_1674), Component.interface_927.component_927_32);

    if (varbit_easter10_incubator_status == 0) {
        ifSetText("Oven not repaired: 50", Component.interface_927.component_927_23);
    } else {
        ifSetText("Oven repaired: 0", Component.interface_927.component_927_23);
    }

    if (varbit_easter10_conveyor_status == 0) {
        ifSetText("Conveyor not repaired: 50", Component.interface_927.component_927_24);
    } else {
        ifSetText("Conveyor repaired: 0", Component.interface_927.component_927_24);
    }

    if (varbit_easter10_painter_status == 0) {
        ifSetText("Painter not repaired: 50", Component.interface_927.component_927_25);
    } else {
        ifSetText("Painter repaired: 0", Component.interface_927.component_927_25);
    }
    let int0: number = varp_1674 * 101;

    if (varbit_easter10_painter_status == 0) {
        int0 = int0 + 50;
    }

    if (varbit_easter10_incubator_status == 0) {
        int0 = int0 + 50;
    }

    if (varbit_easter10_conveyor_status == 0) {
        int0 = int0 + 50;
    }
    int0 = int0 - (varp_easter10_resourcegame_totalfruit + varp_easter10_resourcegame_totalnuts + varp_easter10_resourcegame_totalchoc) * 10;

    if (varp_1674 < 16) {
        int0 = int0 - 100;
    }
    int0 = int0 - varp_easter10_resourcegame_totalworkers * 10;

    if (int0 < 0) {
        int0 = 0;
    }

    if (int0 > 32768) {
        int0 = 32768;
    }

    if (int0 == varbit_easter10_resourcegame_score) {
        ifSetText("Final score: " + tostring(int0) + " (New best score)", Component.interface_927.component_927_31);
    } else {
        ifSetText("Final score: " + tostring(int0), Component.interface_927.component_927_31);
    }
}
