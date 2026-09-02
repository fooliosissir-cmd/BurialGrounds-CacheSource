/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1168

function cs2_1168(intArg0: number, intArg1: component, strArg0: string): void {
    if (clientClock() % 50 != 0) {
        return;
    }

    if (ccFind(Component.interface_885.component_885_16, intArg0) == 1) {
        ccSetText(strArg0);
    }
}
