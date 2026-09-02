/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1141

function cs2_1141(): void {
    if (cs2_1431() == 1) {
        if (getWindowMode() < 2) {
            ifSetOnTimer(hook(cs2_1175, "", []), Component.interface_548.component_548_30);
        } else {
            ifSetOnTimer(hook(cs2_1175, "", []), Component.interface_746.component_746_18);
        }
    }
}
