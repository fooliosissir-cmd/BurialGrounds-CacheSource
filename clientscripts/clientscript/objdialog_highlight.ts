/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objdialog_highlight]

function objdialog_highlight(intArg0: number, intArg1: obj): void {
    if (ccFind(Component.interface_389.component_389_4, 0) == 1) {
        ccSetPosition(0, 15 * (intArg0 - 1), 0, 0);
        ccSetSize(ifGetWidth(Component.interface_389.component_389_4), 15, 0, 0);
        ccSetColour(colour(0x000000));
        ccSetTrans(220);
        ccSetfill(true);
    }
    ifSetObject(intArg1, -1, Component.interface_389.component_389_15);
}
