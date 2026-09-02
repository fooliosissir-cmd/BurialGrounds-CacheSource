/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_552

function cs2_552(): void {
    if (varbit_lotg_connectors_2 == 0) {
        soundSynth(Sound.sound_4020, 1, 0);
        return;
    }
    varbit_lotg_connectors_2 = varbit_lotg_connectors_2 - 1;
    let int0: number = (15 - varbit_lotg_connectors_2) * 6;
    ifSetPosition(0, int0, 0, 0, Component.interface_624.component_624_17);
    ifSetText(tostring(varbit_lotg_connectors_2), Component.interface_624.component_624_71);
    soundSynth(Sound.sound_4026, 1, 0);
}
