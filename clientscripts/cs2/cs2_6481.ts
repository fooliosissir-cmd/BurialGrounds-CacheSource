/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6481

function cs2_6481(intArg0: component, intArg1: number): void {
    if (intArg0 == -1) {
        return;
    }
    varc_1964 = intArg0;
    varc_1965 = intArg1;
    let int2: component = Component.interface_1311.component_1311_167;

    if (ccFind(intArg0, intArg1) == 1) {
        varc_1966 = ccGetParentLayer();
        ifSetSize(ccGetWidth(), ccGetHeight(), 0, 0, int2);
        ifSetPosition(ccGetX(), ccGetY() + ifGetY(ccGetParentLayer()), 0, 0, int2);
    }
}
