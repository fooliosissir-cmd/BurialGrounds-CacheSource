/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1455

function cs2_1455(): void {
    let int0: number = 0;
    let int1: number = invSize(Inv.bank);

    while (int0 < int1) {
        if (ccFind(Component.interface_762.component_762_95, int0) == 1) {
            ccSetHide(true);
        }
        int0 = int0 + 1;
    }
}