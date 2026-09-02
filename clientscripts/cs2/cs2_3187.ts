/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3187

function cs2_3187(intArg0: component, intArg1: component, intArg2: boolean, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    let int7: number = stringWidth(ifGetText(intArg1), Graphic.welcome_font_tiny);

    ifSetOnTimer(hook(cs2_3188, "I1iIIII", [intArg0, intArg2, int7, intArg3, intArg4, intArg5, intArg6]), intArg0);
}
