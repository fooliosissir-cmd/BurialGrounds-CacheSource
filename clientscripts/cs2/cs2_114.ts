/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_114

function cs2_114(): void {
    ifSetOnVarcTransmit(hook(cs2_1302, "Y", [], [168, 747]), Component.interface_548.component_548_14);
    ifSetOnVarcTransmit(hook(cs2_1302, "Y", [], [168, 747]), Component.interface_746.component_746_32);

    if (getWindowMode() >= 2) {
        ifSetOnVarTransmit(hook(cs2_117, "Y", [], [1021]), Component.interface_746.component_746_57);
        cs2_1309(1);
    } else {
        ifSetOnVarTransmit(hook(cs2_117, "Y", [], [1021]), Component.interface_548.component_548_111);
        cs2_2756();
        cs2_1312(1);
    }
}
