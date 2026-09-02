/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6468

function cs2_6468(intArg0: number, intArg1: number): number {
    let int2: Enum = Enum.enum_5960;
    let int3: Enum = Enum.enum_5961;
    let int4: component = enumOp(type_int, type_component, int2, intArg0);
    let int5: component = enumOp(type_int, type_component, int3, intArg0);

    if (int4 == -1 || int5 == -1) {
        return intArg1;
    }

    if (ifGetNextSubId(int4) > 0 && ifGetNextSubId(int5) > 0) {
        ifSetPosition(0, intArg1, 0, 0, int4);
        intArg1 = intArg1 + ifGetHeight(int4);
        if (ifGetHide(int5) == 0) {
            ifSetPosition(0, intArg1, 0, 0, int5);
            intArg1 = intArg1 + ifGetHeight(int5);
        }
    } else {
        ifSetHide(true, int4);
        ifSetHide(true, int5);
    }
    return intArg1;
}
