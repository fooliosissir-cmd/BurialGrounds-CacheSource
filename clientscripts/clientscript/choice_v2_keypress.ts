/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,choice_v2_keypress]

function choice_v2_keypress(intArg0: number, intArg1: number): void {
    if (intArg0 == 16 || intArg1 == 49) {
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_3);
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_12);
        ifResumePauseButton(Component.interface_1188.component_1188_11);
    } else if ((intArg0 == 17 || intArg1 == 50) && ifGetHide(Component.interface_1188.component_1188_13) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_24);
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_25);
        ifResumePauseButton(Component.interface_1188.component_1188_13);
    } else if ((intArg0 == 18 || intArg1 == 51) && ifGetHide(Component.interface_1188.component_1188_14) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_29);
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_30);
        ifResumePauseButton(Component.interface_1188.component_1188_14);
    } else if ((intArg0 == 19 || intArg1 == 52) && ifGetHide(Component.interface_1188.component_1188_15) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_34);
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_35);
        ifResumePauseButton(Component.interface_1188.component_1188_15);
    } else if ((intArg0 == 20 || intArg1 == 53) && ifGetHide(Component.interface_1188.component_1188_16) == 0) {
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_39);
        ifSetColour(colour(0xDB9000), Component.interface_1188.component_1188_40);
        ifResumePauseButton(Component.interface_1188.component_1188_16);
    }
}
