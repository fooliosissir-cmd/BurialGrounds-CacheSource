/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_477

function cs2_477(intArg0: component): void {
    let int1: number = ifGetX(intArg0);
    let int2: number = ifGetY(intArg0) + ifGetHeight(intArg0);

    if (statBase(0) < 42 || statBase(2) < 42 || statBase(1) < 42 || statBase(3) < 42 || statBase(4) < 42 || statBase(6) < 42 || statBase(5) < 22) {
        if (int1 + ifGetWidth(Component.interface_1011.component_1011_386) >= ifGetX(Component.interface_1011.component_1011_55) + ifGetWidth(Component.interface_1011.component_1011_55)) {
            int1 = ifGetX(intArg0) - (ifGetWidth(Component.interface_1011.component_1011_386) - ifGetWidth(intArg0));
        }
        if (int2 + ifGetHeight(Component.interface_1011.component_1011_386) >= ifGetY(Component.interface_1011.component_1011_55) + ifGetHeight(Component.interface_1011.component_1011_55)) {
            int2 = ifGetY(intArg0) - ifGetHeight(Component.interface_1011.component_1011_386);
        }
        ifSetPosition(int1, int2, 0, 0, Component.interface_1011.component_1011_386);
        ifSetHide(false, Component.interface_1011.component_1011_386);
    }
}
