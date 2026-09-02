/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,inventory_targetmode]

function inventory_targetmode(intArg0: boolean, intArg1: component, intArg2: number): void {
    if (intArg0 == true) {
        if (ccFind(intArg1, intArg2) == 1) {
            ccSetOutline(2);
        }
        varc_inventory_target = 1 + intArg2;
    } else {
        if (ccFind(intArg1, intArg2) == 1) {
            ccSetOutline(1);
        }
        varc_inventory_target = 0;
    }
}
