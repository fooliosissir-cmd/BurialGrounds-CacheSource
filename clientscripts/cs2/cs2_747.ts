/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_747

function cs2_747(intArg0: number, intArg1: number, strArg0: string): void {
    if (intArg0 != 1) {
        return;
    }

    if (cs2_5767() == 1) {
        return;
    }

    if (ccFind(Component.interface_18.component_18_29, intArg1) == 1) {
        ccSetText(strArg0);
    }
}
