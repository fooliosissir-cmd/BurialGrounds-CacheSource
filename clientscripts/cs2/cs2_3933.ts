/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3933

function cs2_3933(intArg0: component, intArg1: colour, intArg2: boolean, intArg3: number, intArg4: component, intArg5: number): void {
    ifSetColour(intArg1, intArg0);

    if (intArg2 == true) {
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3480, intArg3), intArg4);
    } else if (intArg5 == intArg3) {
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_736, intArg3), intArg4);
    } else {
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_735, intArg3), intArg4);
    }
}
