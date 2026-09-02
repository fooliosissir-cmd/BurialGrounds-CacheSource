/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6242

function cs2_6242(): void {
    let int0: number = ifGetTrans(Component.interface_1285.component_1285_27);

    if (int0 >= 243) {
        ifSetHide(true, Component.interface_1285.component_1285_25);
        ifSetOnTimer(noHook(""), Component.interface_1285.component_1285_5);
    } else {
        ifSetTrans(int0 + 11, Component.interface_1285.component_1285_26);
        ifSetTrans(int0 + 11, Component.interface_1285.component_1285_27);
        ifSetTrans(int0 + 11, Component.interface_1285.component_1285_28);
    }
}
