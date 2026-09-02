/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3434

function cs2_3434(intArg0: number): void {
    if (varc_1280 == 1) {
        return;
    }

    if (varc_1278 != intArg0) {
        soundSynth(Sound.sound_9439, 1, 0);
    }
    varc_1278 = intArg0;
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_54.component_54_16);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_54.component_54_17);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_54.component_54_18);

    if (varc_1278 == 1) {
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_54.component_54_16);
    } else if (varc_1278 == 2) {
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_54.component_54_17);
    } else if (varc_1278 == 3) {
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_54.component_54_18);
    } else {
        varc_1278 = 1;
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_54.component_54_16);
    }
}
