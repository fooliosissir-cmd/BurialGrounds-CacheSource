/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2624

function cs2_2624(): void {
    let int0: number = 1;
    let int1: component = -1;

    while (enumOp(type_int, type_component, Enum.enum_2450, int0) != 55705624) {
        int1 = enumOp(type_int, type_component, Enum.enum_2450, int0);
        ifSetText("<col=800000>" + enumOp(type_component, type_string, Enum.enum_2449, int1) + "  " + "<col=000000>" + enumOp(type_component, type_string, Enum.enum_2448, int1), int1);
        int0 = int0 + 1;
    }
}
