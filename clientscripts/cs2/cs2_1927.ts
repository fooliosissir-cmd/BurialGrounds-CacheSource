/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1927

function cs2_1927(intArg0: component): void {
    let int1: number = 1;

    while (int1 <= 6) {
        if (int1 == enumOp(type_component, type_int, Enum.enum_2027, intArg0) || int1 == varc_544) {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_2031, int1));
            ifSetColour(colour(0xFFFFFF), enumOp(type_int, type_component, Enum.enum_2030, int1));
            ifSetColour(colour(0xFFFFFF), enumOp(type_int, type_component, Enum.enum_2029, int1));
        } else {
            ifSetHide(true, enumOp(type_int, type_component, Enum.enum_2031, int1));
            ifSetColour(colour(0xC8AA64), enumOp(type_int, type_component, Enum.enum_2030, int1));
            ifSetColour(colour(0xC8AA64), enumOp(type_int, type_component, Enum.enum_2029, int1));
        }
        int1 = int1 + 1;
    }
}
