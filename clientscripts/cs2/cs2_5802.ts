/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5802

function cs2_5802(): void {
    let int0: number = ifGetX(Component.interface_746.component_746_8) - ifGetX(Component.interface_746.component_746_9);
    let int1: number = ifGetY(Component.interface_746.component_746_8) - ifGetY(Component.interface_746.component_746_9);
    let int2: number = ifGetWidth(Component.interface_746.component_746_8) - ifGetWidth(Component.interface_746.component_746_9);
    let int3: number = ifGetHeight(Component.interface_746.component_746_8) - ifGetHeight(Component.interface_746.component_746_9);
    let int4: number = 15;
    let int5: number = max(int0 / int4, 35);
    let int6: number = max(int1 / int4, 15);
    let int7: number = max(int2 / int4, 15);
    let int8: number = max(int3 / int4, 15);
    let int9: number = max(ifGetX(Component.interface_746.component_746_9), ifGetX(Component.interface_746.component_746_8) - int5);
    let int10: number = max(ifGetY(Component.interface_746.component_746_9), ifGetY(Component.interface_746.component_746_8) - int6);
    let int11: number = max(ifGetWidth(Component.interface_746.component_746_9), ifGetWidth(Component.interface_746.component_746_8) - int7);
    let int12: number = max(ifGetHeight(Component.interface_746.component_746_9), ifGetHeight(Component.interface_746.component_746_8) - int8);

    if (int0 < 40 && int1 < 5) {
        ifSetHide(true, Component.interface_746.component_746_8);
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_8);
    } else {
        ifSetPosition(int9, int10, 0, 0, Component.interface_746.component_746_8);
        ifSetSize(int11, int12, 0, 0, Component.interface_746.component_746_8);
    }
}
