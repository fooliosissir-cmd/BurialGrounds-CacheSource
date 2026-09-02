/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5801

function cs2_5801(): void {
    let int0: number = ifGetWidth(Component.interface_746.component_746_10);
    let int1: number = ifGetHeight(Component.interface_746.component_746_9);

    ifSetPosition(ifGetX(Component.interface_746.component_746_10), ifGetY(Component.interface_746.component_746_10), 0, 0, Component.interface_746.component_746_8);
    ifSetSize(int0, int1, 0, 0, Component.interface_746.component_746_8);
    ifSetHide(false, Component.interface_746.component_746_8);
    ifSetOnTimer(hook(cs2_5802, "", []), Component.interface_746.component_746_8);
}
