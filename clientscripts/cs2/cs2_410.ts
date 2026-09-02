/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_410

function cs2_410(intArg0: number): void {
    if (varc_1361 == intArg0) {
        return;
    }
    ifSetOnVarcTransmit(hook(cs2_410, "iY", [varc_1361], [1361]), Component.interface_1010.component_1010_6);

    if (varc_conq_current_team == varbit_conq_team) {
        ifSetHide(false, Component.interface_1010.component_1010_33);
        ifSetHide(true, Component.interface_1010.component_1010_24);
    }

    if (varc_1361 == 0) {
        ifSetColour(colour(0xFF981F), Component.interface_1010.component_1010_12);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_13);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_14);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_15);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_16);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_17);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_18);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_19);
    } else if (varc_1361 == 1) {
        if (varbit_conq_is_active_player == 1) {
            if (random(2) == 0) {
                soundVorbisVolume(3436, 1, 0, 255);
            } else {
                soundVorbisVolume(3438, 1, 0, 255);
            }
        }
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_12);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_13);
        ifSetColour(colour(0xFF981F), Component.interface_1010.component_1010_14);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_15);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_16);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_17);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_18);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_19);
    } else if (varc_1361 == 2) {
        if (varbit_conq_is_active_player == 1) {
            soundVorbisVolume(3437, 1, 0, 255);
        }
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_12);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_13);
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_14);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_15);
        ifSetColour(colour(0xFF981F), Component.interface_1010.component_1010_16);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_17);
        ifSetColour(colour(0x969664), Component.interface_1010.component_1010_18);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_19);
    } else {
        if (varbit_conq_is_active_player == 1) {
            soundVorbisVolume(3441, 1, 0, 255);
        }
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_12);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_13);
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_14);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_15);
        ifSetColour(colour(0x00C800), Component.interface_1010.component_1010_16);
        ifSetGraphic(Graphic.km_tickbox_1, Component.interface_1010.component_1010_17);
        ifSetColour(colour(0xFF981F), Component.interface_1010.component_1010_18);
        ifSetGraphic(Graphic.km_tickbox_0, Component.interface_1010.component_1010_19);
    }
}
