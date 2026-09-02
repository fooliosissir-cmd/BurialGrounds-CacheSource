/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2592

function cs2_2592(intArg0: component): void {
    soundSynth(Sound.sound_6784, 1, 0);

    if (ifGetGraphic(intArg0) == Graphic.warning_icons_1) {
        ifSetGraphic(Graphic.warning_icons_2, intArg0);
    } else {
        ifSetGraphic(Graphic.warning_icons_1, intArg0);
    }
}
