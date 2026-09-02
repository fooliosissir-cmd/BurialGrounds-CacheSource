/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2930

function cs2_2930(intArg0: component, intArg1: boolean, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: number, intArg7: number, intArg8: number, intArg9: number): void {
    if (intArg7 < intArg8) {
        intArg7 = intArg7 + 1;
        ifSetOnTimer(hook(cs2_2930, "I1iIIIiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9]), intArg0);
        return;
    }
    let int10: number = ifGetWidth(intArg0);

    if (intArg1 == true) {
        if (int10 - intArg2 < intArg6) {
            ifSetSize(min(int10 + intArg9, intArg6 + intArg2), 31, 0, 0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            ifSetSize(intArg6 + intArg2, 31, 0, 0, intArg0);
        }
        ifSetGraphic(Graphic.login_lobby_button_11, intArg3);
        ifSetGraphic(Graphic.login_lobby_button_10, intArg4);
        ifSetGraphic(Graphic.login_lobby_button_10, intArg5);
    } else {
        if (int10 > 32) {
            ifSetSize(max(int10 - intArg9, 32), 31, 0, 0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            ifSetSize(32, 31, 0, 0, intArg0);
        }
        ifSetGraphic(Graphic.login_lobby_button_9, intArg3);
        ifSetGraphic(Graphic.login_lobby_button_8, intArg4);
        ifSetGraphic(Graphic.login_lobby_button_8, intArg5);
    }
}
