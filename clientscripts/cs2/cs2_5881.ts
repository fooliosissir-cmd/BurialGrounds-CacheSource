/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5881

function cs2_5881(): void {
    let int0: number = max(0, varc_1800 + varbit_10862 + varbit_wof_earned_spins);

    ifSetText(tostring(int0), Component.interface_1253.component_1253_95);
    ifSetText(tostring(int0), Component.interface_1253.component_1253_161);
    ifSetText(tostring(varbit_10862), Component.interface_1253.component_1253_88);
    ifSetText(tostring(varc_1800), Component.interface_1253.component_1253_89);
    ifSetText(tostring(varbit_wof_earned_spins), Component.interface_1253.component_1253_90);
    ifSetText(tostring(int0), Component.interface_1139.component_1139_6);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_88);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_89);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_90);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_85);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_86);
    ifSetColour(colour(0xD5D9DC), Component.interface_1253.component_1253_87);

    if (varbit_10862 > 0) {
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_88);
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_85);
    } else if (varbit_wof_earned_spins > 0) {
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_90);
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_87);
    } else if (varc_1800 > 0) {
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_89);
        ifSetColour(colour(0xF2B741), Component.interface_1253.component_1253_86);
    }
    let int1: number = 1;

    if (playerMember() == 1) {
        int1 = 2;
    }

    if (varbit_10862 >= int1) {
        ifSetColour(colour(0xE22C2C), Component.interface_1253.component_1253_88);
    }

    if (varc_1800 >= 600) {
        ifSetColour(colour(0xE22C2C), Component.interface_1253.component_1253_89);
    }

    if (varbit_wof_earned_spins >= 10) {
        ifSetColour(colour(0xE22C2C), Component.interface_1253.component_1253_90);
    }
    cs2_1968();
}
