/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2335

function cs2_2335(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: component, intArg11: component, intArg12: component, intArg13: component, intArg14: component, intArg15: component, intArg16: number): void {
    if (varbit_godwars2_counter_zaros < 4000) {
        ifSetText(tostring(varbit_godwars2_counter_zaros), intArg15);
    } else {
        ifSetText("Max", intArg15);
    }

    if (varbit_godwars_counter_armadyl < 4000) {
        ifSetText(tostring(varbit_godwars_counter_armadyl), intArg10);
    } else {
        ifSetText("Max", intArg10);
    }

    if (varbit_godwars_counter_bandos < 4000) {
        ifSetText(tostring(varbit_godwars_counter_bandos), intArg11);
    } else {
        ifSetText("Max", intArg11);
    }

    if (varbit_godwars_counter_saradomin < 4000) {
        ifSetText(tostring(varbit_godwars_counter_saradomin), intArg12);
    } else {
        ifSetText("Max", intArg12);
    }

    if (varbit_godwars_counter_zamorak < 4000) {
        ifSetText(tostring(varbit_godwars_counter_zamorak), intArg13);
    } else {
        ifSetText("Max", intArg13);
    }
    let int17: number = parawidth(ifGetText(intArg15), 512, Graphic.p11_full);
    let int18: number = parawidth(ifGetText(intArg10), 512, Graphic.p11_full);
    let int19: number = parawidth(ifGetText(intArg11), 512, Graphic.p11_full);
    let int20: number = parawidth(ifGetText(intArg12), 512, Graphic.p11_full);
    let int21: number = parawidth(ifGetText(intArg13), 512, Graphic.p11_full);
    let int22: number = intArg5;
    int22 = max(int22, intArg16 + 10 + int17);
    int22 = max(int22, intArg6 + 10 + int18);
    int22 = max(int22, intArg7 + 10 + int19);
    int22 = max(int22, intArg8 + 10 + int20);
    int22 = max(int22, intArg9 + 10 + int21);
    ifSetSize(int22, ifGetHeight(intArg0), 0, 0, intArg0);

    if (varbit_godwars2_counter_zaros < 40) {
        ifSetColour(colour(0xFF981F), intArg14);
    } else {
        ifSetColour(colour(0x66FFFF), intArg14);
    }

    if (varbit_godwars_counter_armadyl < 40) {
        ifSetColour(colour(0xFF981F), intArg1);
    } else {
        ifSetColour(colour(0x66FFFF), intArg1);
    }

    if (varbit_godwars_counter_bandos < 40) {
        ifSetColour(colour(0xFF981F), intArg2);
    } else {
        ifSetColour(colour(0x66FFFF), intArg2);
    }

    if (varbit_godwars_counter_saradomin < 40) {
        ifSetColour(colour(0xFF981F), intArg3);
    } else {
        ifSetColour(colour(0x66FFFF), intArg3);
    }

    if (varbit_godwars_counter_zamorak < 40) {
        ifSetColour(colour(0xFF981F), intArg4);
    } else {
        ifSetColour(colour(0x66FFFF), intArg4);
    }
}
