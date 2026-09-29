/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_resize]

function proc_login_resize(): void {
    let int0: number = 0;

    if (getWindowMode() < 2) {
        ifSetPosition(150, 16, 1, 1, Component.interface_596.component_596_5);
        ifSetPosition(0, 16, 1, 1, Component.interface_596.component_596_6);
        ifSetSize(0, 0, 1, 1, Component.interface_744.component_744_16);
        ifSetPosition(0, 12, 1, 0, Component.interface_744.component_744_23);
    } else {
        ifSetPosition(170, 0, 1, 1, Component.interface_596.component_596_5);
        ifSetPosition(0, 0, 1, 1, Component.interface_596.component_596_6);
        ifSetSize(956, 503, 0, 0, Component.interface_744.component_744_16);
        int0 = ifGetY(Component.interface_744.component_744_16);
        int0 = int0 - ifGetHeight(Component.interface_744.component_744_23);
        int0 = int0 / 2;
        ifSetPosition(0, max(int0, 0), 1, 0, Component.interface_744.component_744_23);
    }
    let int1: number = 2;
    let int2: number = ifGetX(Component.interface_744.component_744_99) + ifGetX(Component.interface_744.component_744_16);
    int2 = int2 - (ifGetWidth(Component.interface_744.component_744_81) + int1);
    let int3: number = ifGetY(Component.interface_744.component_744_101) + ifGetY(Component.interface_744.component_744_16);
    int3 = int3 + int1;
    int3 = int3 + ifGetHeight(Component.interface_744.component_744_101);
    ifSetPosition(int2, int3, 0, 0, Component.interface_744.component_744_81);
    int2 = ifGetX(Component.interface_744.component_744_81);
    int2 = int2 + ifGetWidth(Component.interface_744.component_744_81);
    int2 = ifGetWidth(Component.interface_744.component_744_17) - int2;
    ifSetPosition(int2, int3, 2, 0, Component.interface_744.component_744_81);

    if (detailGetMaxScreenSize() == 2 && getWindowMode() != 1) {
        ifSetPosition(9, 57, 2, 0, Component.interface_744.component_744_81);
        ifSetSize(800, 503, 0, 0, Component.interface_744.component_744_16);
    } else if (ifGetWidth(Component.interface_744.component_744_81) + ifGetX(Component.interface_744.component_744_81) > ifGetWidth(Component.interface_744.component_744_17)) {
        ifSetPosition(5, 5, 2, 0, Component.interface_744.component_744_81);
    }

    if (varc_986 == 0) {
        ifSetPosition(5, 5, 2, 0, Component.interface_744.component_744_81);
    }
}
