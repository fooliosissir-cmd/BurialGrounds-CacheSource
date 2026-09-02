/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,easter09_nut_check]

function easter09_nut_check(intArg0: model): void {
    let int1: number = clientClock();

    switch (intArg0) {
        case Model.model_32826:
        case Model.model_32828:
        case Model.model_32820:
            varc_767 = 0;
            ifSetHide(false, Component.interface_306.component_306_25);
            ifSetText("Incorrect", Component.interface_306.component_306_26);
            soundSynth(Sound.sound_6424, 1, 0);
            ifSetColour(colour(0xFF0000), Component.interface_306.component_306_26);
            ifSetOnTimer(hook(cs2_2327, "i", [int1]), Component.interface_306.component_306_25);
            break;
        default:
            varc_767 = varc_767 + 1;
            if (varc_767 == 10) {
                ifSetHide(false, Component.interface_306.component_306_27);
                ifSetOp(1, "Train", Component.interface_306.component_306_29);
                ifSetOnClick(noHook(""), Component.interface_306.component_306_23);
            } else {
                ifSetHide(false, Component.interface_306.component_306_25);
                ifSetText("Correct", Component.interface_306.component_306_26);
                soundSynth(Sound.sound_6423, 1, 0);
                ifSetColour(colour(0x00FF00), Component.interface_306.component_306_26);
                ifSetOnTimer(hook(cs2_2327, "i", [int1]), Component.interface_306.component_306_25);
            }
            break;
    }
    ifSetText("Correct: " + tostring(varc_767) + "/" + tostring(10), Component.interface_306.component_306_3);
    soundSynth(Sound.sound_6423, 1, 0);
}
