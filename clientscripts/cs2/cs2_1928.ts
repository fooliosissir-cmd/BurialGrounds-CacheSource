/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1928

function cs2_1928(): void {
    let int0: number = 1;

    while (int0 <= 6) {
        if (int0 == varc_544) {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_2031, int0));
            ifSetColour(colour(0xFFFFFF), enumOp(type_int, type_component, Enum.enum_2030, int0));
            ifSetColour(colour(0xFFFFFF), enumOp(type_int, type_component, Enum.enum_2029, int0));
        } else {
            ifSetHide(true, enumOp(type_int, type_component, Enum.enum_2031, int0));
            ifSetColour(colour(0xC8AA64), enumOp(type_int, type_component, Enum.enum_2030, int0));
            ifSetColour(colour(0xC8AA64), enumOp(type_int, type_component, Enum.enum_2029, int0));
        }
        int0 = int0 + 1;
    }
}
