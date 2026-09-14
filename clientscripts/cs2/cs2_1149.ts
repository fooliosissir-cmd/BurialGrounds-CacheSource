/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1149

function cs2_1149(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: number, intArg6: number, intArg7: number, intArg8: number): void {
    if (intArg1 == intArg0) {
        ifSetColour(colour(0xEBE0BC), intArg4);
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_736, intArg0), intArg3);
        ifSetOnMouseOver(hook(cs2_3933, "Ii1iIi", [intArg4, colour(0xEBE0BC), true, intArg0, intArg3, intArg1]), intArg2);
        ifSetOnMouseLeave(hook(cs2_3933, "Ii1iIi", [intArg4, colour(0xB2AA9F), false, intArg0, intArg3, intArg1]), intArg2);
        ifSetOnClick(noHook(""), intArg2);
    } else {
        ifSetColour(colour(0xB2AA9F), intArg4);
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_735, intArg0), intArg3);
        ifSetOnMouseOver(hook(cs2_3933, "Ii1iIi", [intArg4, colour(0xEBE0BC), true, intArg0, intArg3, intArg1]), intArg2);
        ifSetOnMouseLeave(hook(cs2_3933, "Ii1iIi", [intArg4, colour(0xB2AA9F), false, intArg0, intArg3, intArg1]), intArg2);
        ifSetOnClick(hook(graphics_options_setwindowmode, "iiiii", [intArg0, intArg5, intArg6, intArg7, intArg8]), intArg2);
    }
}
