/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1457

function cs2_1457(intArg0: number, intArg1: number): void {
    let str0: string = "Withdraw-" + tostring(varp_1249);
    let int2: number = 0;
    let int3: number = 8;
    let int4: number = 5;
    let int5: number = 0;

    while (int2 < intArg0) {
        if (ccFind(Component.interface_762.component_762_95, int2) == 1) {
            ccSetHide(true);
        }
        int2 = int2 + 1;
    }

    while (int2 < intArg1) {
        if (ccFind(Component.interface_762.component_762_95, int2) == 1) {
            cs2_1453(int2, str0);
            ccSetPosition(int3, int4, 0, 0);
            ccSetHide(false);
            int5 = int5 + 1;
            int3 = int3 + 44;
            if (int3 >= 44 * 10) {
                int3 = 8;
                int4 = int4 + 44;
            }
        }
        int2 = int2 + 1;
    }
    let int6: number = invSize(Inv.bank);

    while (int2 < int6) {
        if (ccFind(Component.interface_762.component_762_95, int2) == 1) {
            ccSetHide(true);
        }
        int2 = int2 + 1;
    }
    cs2_1464();
    ifSetHide(false, Component.interface_762.component_762_86);
    ifSetPosition(8 - 2, 5 - 2, 0, 0, Component.interface_762.component_762_86);
    cs2_1458(int5);
}
