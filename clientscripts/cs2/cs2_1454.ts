/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1454

function cs2_1454(intArg0: number): void {
    let int1: number = 0;
    let int2: number = ifGetY(Component.interface_762.component_762_95) - 25;
    let int3: number = ifGetY(Component.interface_762.component_762_95) + ifGetHeight(Component.interface_762.component_762_95) - 16;

    if (intArg0 > int2 && intArg0 < int2 + 25) {
        int1 = -4;
    } else if (intArg0 < int3 && intArg0 > int3 - 30) {
        int1 = 4;
    } else {
        varc_189 = 0;
        return;
    }
    varc_189 = varc_189 + 1;

    if (varc_189 > 5) {
        cs2_705(varbit_4893, ifGetScrollY(Component.interface_762.component_762_95) + int1);
        scrollbar_ondrag_doscroll(Component.interface_762.component_762_116, Component.interface_762.component_762_95, ifGetScrollY(Component.interface_762.component_762_95) + int1, 1);
    }
}
