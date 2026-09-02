/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2923

function cs2_2923(intArg0: component, intArg1: component, intArg2: number, intArg3: component, intArg4: component, intArg5: component): void {
    if (varp_102 > 0) {
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg1);
        ifSetOp(1, "Use cure (p)", intArg1);
    } else if (varp_456 > 0) {
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg1);
        ifSetOp(1, "Use cure (d)", intArg1);
    } else {
        ifSetHide(false, intArg0);
        ifSetHide(true, intArg1);
        ifClearops(intArg1);
    }
    let int6: number = 3;
    let int7: number = 24;
    ifSetSize(0, int6 + (int7 - scale(varbit_lifepoints, cs2_2916(), int7)), 1, 0, intArg3);
    ifSetSize(0, int6 + (int7 - scale(maxlifepoints(), cs2_2916(), int7)), 1, 0, intArg4);
    ifSetText(tostring(varbit_lifepoints), intArg5);
    let int8: number = scale(varbit_lifepoints, cs2_2916(), 100);

    if (int8 > 75) {
        ifSetColour(colour(0x00FF00), intArg5);
    } else if (int8 > 50) {
        ifSetColour(colour(0xFFFF00), intArg5);
    } else if (int8 > 25) {
        ifSetColour(colour(0xFF981F), intArg5);
    } else {
        ifSetColour(colour(0xFF0000), intArg5);
    }
    cs2_2654();
}
