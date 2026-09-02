/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_553

function cs2_553(): void {
    if (varbit_lotg_connectors_3 == 15) {
        soundSynth(Sound.sound_4020, 1, 0);
        return;
    }
    varbit_lotg_connectors_3 = varbit_lotg_connectors_3 + 1;
    let int0: number = (15 - varbit_lotg_connectors_3) * 6;
    ifSetPosition(0, int0, 0, 0, Component.interface_624.component_624_19);
    ifSetText(tostring(varbit_lotg_connectors_3), Component.interface_624.component_624_72);
    soundSynth(Sound.sound_4026, 1, 0);
}
