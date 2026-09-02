/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_165

function cs2_165(intArg0: component, intArg1: number): void {
    let int2: number = cs2_166(intArg1);

    if (int2 == 7) {
        ifSetGraphic(Graphic.graphic_833, intArg0);
        ifSetColour(colour(0xFF0000), enumOp(type_int, type_component, Enum.enum_688, intArg1));
    } else if (int2 == 6) {
        ifSetGraphic(Graphic.graphic_834, intArg0);
        ifSetColour(colour(0x00FF00), enumOp(type_int, type_component, Enum.enum_688, intArg1));
    } else {
        ifSetGraphic(Graphic.graphic_943, intArg0);
        ifSetColour(colour(0xCCCCCC), enumOp(type_int, type_component, Enum.enum_688, intArg1));
    }
}
