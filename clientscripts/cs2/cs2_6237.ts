/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6237

function cs2_6237(): void {
    let int0: number = ifGetTrans(Component.interface_1285.component_1285_34);

    if (int0 >= 243) {
        ifSetHide(true, Component.interface_1285.component_1285_34);
        ifSetOnTimer(noHook(""), Component.interface_1285.component_1285_33);
    } else {
        ifSetTrans(int0 + 2, Component.interface_1285.component_1285_34);
    }
}
