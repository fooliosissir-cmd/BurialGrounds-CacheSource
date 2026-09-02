/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1084

function cs2_1084(intArg0: number, intArg1: component, intArg2: number): void {
    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_1550, intArg0 + 1)) == 1) {
        return;
    }

    if (ccFind(intArg1, intArg2) == 1) {
        ccSetHide(true);
    }
}
