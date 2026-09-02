/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_864

function cs2_864(intArg0: component, intArg1: boolean, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: boolean, intArg7: number, intArg8: number, intArg9: number, intArg10: number): void {
    let int11: number = 0;

    if (intArg6 == true) {
        int11 = stringWidth(ifGetText(intArg5), Graphic.welcome_font_small);
    } else {
        int11 = ifGetWidth(intArg5);
    }

    if (intArg1 == false && ifGetWidth(intArg0) - int11 < intArg7) {
        ifSetOnTimer(hook(loginscreen_options_button, "I1IIII1iiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]), intArg2);
        return;
    }
    ifSetOnTimer(noHook(""), intArg2);
    ifSetOnTimer(hook(cs2_2930, "I1iIIIiiii", [intArg0, intArg1, int11, intArg2, intArg3, intArg4, intArg7, intArg8, intArg9, intArg10]), intArg0);
}
