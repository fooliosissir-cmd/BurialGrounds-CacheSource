/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1457

function cs2_1457(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: number = intArg0;

    while (int3 < intArg1) {
        if (ccFind(Component.interface_762.component_762_95, int3) == 1) {
            ccSetPosition(44 * (int2 % 10) + 8, int2 / 10 * 44 + 5, 0, 0);
            ccSetHide(false);
            int2 = int2 + 1;
        }
        int3 = int3 + 1;
    }
    cs2_1464();
    ifSetHide(false, Component.interface_762.component_762_86);
    ifSetPosition(8 - 2, 5 - 2, 0, 0, Component.interface_762.component_762_86);
    cs2_1458(int2);
}
