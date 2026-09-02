/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,choice_v2_keypress_frem]

function choice_v2_keypress_frem(intArg0: number, intArg1: number): void {
    if (intArg0 == 16 && ifGetHide(Component.interface_1193.component_1193_3) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_3);
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_12);
        ifResumePauseButton(Component.interface_1193.component_1193_11);
    } else if (intArg0 == 17 && ifGetHide(Component.interface_1193.component_1193_23) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_23);
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_24);
        ifResumePauseButton(Component.interface_1193.component_1193_13);
    } else if (intArg0 == 18 && ifGetHide(Component.interface_1193.component_1193_28) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_28);
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_29);
        ifResumePauseButton(Component.interface_1193.component_1193_14);
    } else if (intArg0 == 19 && ifGetHide(Component.interface_1193.component_1193_33) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_33);
        ifSetColour(colour(0xDB9000), Component.interface_1193.component_1193_34);
        ifResumePauseButton(Component.interface_1193.component_1193_15);
    }
}
