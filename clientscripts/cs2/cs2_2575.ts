/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2575

function cs2_2575(): void {
    let int0: number = 0;

    while (int0 < enumGetoutputcount(Enum.enum_2428)) {
        ifSetColour(colour(0x666666), enumOp(type_int, type_component, Enum.enum_2428, int0));
        int0 = int0 + 1;
    }
    ifSetColour(colour(0xFF0033), enumOp(type_int, type_component, Enum.enum_2428, varc_929));
}
