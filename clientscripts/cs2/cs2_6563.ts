/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6563

function cs2_6563(intArg0: component): void {
    let int1: number = ifGetY(intArg0);
    let int2: number = ifGetX(intArg0);
    let int3: number = ifGetTrans(Component.interface_1319.component_1319_0);

    ifSetTrans(min(255, int3 + 1), Component.interface_1319.component_1319_0);
    ifSetTrans(min(255, int3 - 5), Component.interface_1319.component_1319_2);
}
