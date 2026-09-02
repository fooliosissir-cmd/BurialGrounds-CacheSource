/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1177

function cs2_1177(): void {
    if (varp_1414 == 0) {
        return;
    }
    varc_548 = 540;
    ifSetText("10", Component.interface_745.component_745_5);
    ifSetOnTimer(hook(cs2_1178, "", []), Component.interface_745.component_745_5);
}
