/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5945

function cs2_5945(intArg0: number, intArg1: number): void {
    let int2: component = Component.interface_1252.component_1252_2;
    let int3: component = Component.interface_1252.component_1252_0;
    let int4: number = max(1, ifGetWidth(int2));
    let int5: number = max(1, ifGetHeight(int2));

    varc_1787 = max(1, intArg0);
    varc_1788 = max(1, intArg1);
    varc_1787 = min(varc_1787, int4 - ifGetWidth(int3));
    varc_1788 = min(varc_1788, int5 - ifGetHeight(int3));
    ifSetPosition(scale(varc_1787, int4, 16384), scale(varc_1788, int5, 16384), 3, 3, int3);
}
