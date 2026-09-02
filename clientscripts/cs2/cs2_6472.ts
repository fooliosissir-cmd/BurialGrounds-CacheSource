/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6472

function cs2_6472(intArg0: boolean): void {
    let int1: number = 0;
    let int2: Enum = Enum.enum_5960;
    let int3: Enum = Enum.enum_5961;
    let int4: component = -1;
    let int5: component = -1;

    while (int1 < enumGetoutputcount(int2)) {
        int4 = enumOp(type_int, type_component, int2, int1);
        int5 = enumOp(type_int, type_component, int3, int1);
        ifSetHide(intArg0, int4);
        ifSetHide(intArg0, int5);
        int1 = int1 + 1;
    }
}
