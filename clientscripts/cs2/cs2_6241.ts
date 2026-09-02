/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6241

function cs2_6241(): void {
    let int0: number = ifGetWidth(Component.interface_1285.component_1285_5);
    let int1: number = max(1, 100 - scale(varc_qbd2_phase_damage, 7500, 100));

    proc_aif_progressbar_set(int1, Component.interface_1285.component_1285_5, -1);
    let int2: number = ifGetWidth(Component.interface_1285.component_1285_5);
    let int3: number = int0 - int2;

    if (int3 > 0) {
        ifSetSize(int3, ifGetHeight(Component.interface_1285.component_1285_25), 0, 0, Component.interface_1285.component_1285_25);
        ifSetTrans(0, Component.interface_1285.component_1285_26);
        ifSetTrans(0, Component.interface_1285.component_1285_27);
        ifSetTrans(0, Component.interface_1285.component_1285_28);
        ifSetPosition(ifGetWidth(Component.interface_1285.component_1285_5), ifGetY(Component.interface_1285.component_1285_25), 0, 0, Component.interface_1285.component_1285_25);
        ifSetHide(false, Component.interface_1285.component_1285_25);
        ifSetOnTimer(hook(cs2_6242, "", []), Component.interface_1285.component_1285_5);
    }
}
