/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_549

function cs2_549(): void {
    if (varbit_lotg_connectors_1 == 15) {
        soundSynth(Sound.sound_4020, 1, 0);
        return;
    }
    varbit_lotg_connectors_1 = varbit_lotg_connectors_1 + 1;
    let int0: number = (15 - varbit_lotg_connectors_1) * 6;
    ifSetPosition(0, int0, 0, 0, Component.interface_624.component_624_15);
    ifSetText(tostring(varbit_lotg_connectors_1), Component.interface_624.component_624_70);
    soundSynth(Sound.sound_4026, 1, 0);
}
