/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3440

function cs2_3440(intArg0: component, intArg1: component): void {
    soundVorbisVolume(6185, 1, 0, 200);

    if (ifGetHide(intArg0) == 1) {
        ifSetHide(false, intArg0);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_3), intArg1);
    } else {
        ifSetHide(true, intArg0);
        ifSetGraphic(gameframe_skin_graphic(Graphic.aif_checkbox_large_5), intArg1);
    }
    cs2_5245();
}
