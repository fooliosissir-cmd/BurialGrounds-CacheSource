/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3188

function cs2_3188(intArg0: component, intArg1: boolean, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    let int7: number = ifGetWidth(intArg0);

    if (intArg1 == true) {
        if (int7 - intArg2 < 55) {
            ifSetSize(min(int7 + 5, 55 + intArg2), 31, 0, 0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            ifSetSize(55 + intArg2, 31, 0, 0, intArg0);
        }
        ifSetGraphic(Graphic.login_lobby_button_11, intArg3);
        ifSetGraphic(Graphic.login_lobby_button_10, intArg4);
        ifSetGraphic(Graphic.login_lobby_button_10, intArg5);
        ifSetGraphic(Graphic.graphic_2614, intArg6);
    } else {
        if (int7 > 38) {
            ifSetSize(max(int7 - 5, 38), 31, 0, 0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
            ifSetSize(38, 31, 0, 0, intArg0);
        }
        ifSetGraphic(Graphic.login_lobby_button_9, intArg3);
        ifSetGraphic(Graphic.login_lobby_button_8, intArg4);
        ifSetGraphic(Graphic.login_lobby_button_8, intArg5);
        ifSetGraphic(Graphic.graphic_2613, intArg6);
    }
}
