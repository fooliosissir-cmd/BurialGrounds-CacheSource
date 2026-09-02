/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,login_back_button]

function login_back_button(intArg0: component, intArg1: component, intArg2: component, intArg3: graphic, intArg4: number, strArg0: string): void {
    if (intArg0 != -1) {
        if (intArg4 == 1) {
            ifSetGraphic(Graphic.graphic_2525, intArg0);
        } else {
            ifSetGraphic(Graphic.graphic_2524, intArg0);
        }
    }

    if (intArg1 != -1) {
        if (intArg4 == 1) {
            ifSetText(strArg0, intArg0);
            ifSetColour(colour(0xFAD786), intArg2);
            ifSetSize(stringWidth(strArg0, intArg3) + 23, ifGetHeight(intArg1), 0, 0, intArg1);
        } else {
            ifSetText(strArg0, intArg2);
            ifSetColour(colour(0xE7AC24), intArg2);
            ifSetSize(stringWidth(strArg0, intArg3) + 23, ifGetHeight(intArg1), 0, 0, intArg1);
        }
    }
}
