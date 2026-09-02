/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,gravestone_plaque_setup]

function gravestone_plaque_setup(intArg0: component, intArg1: component): void {
    ifSetTextFont(Graphic.barbassault_font, intArg1);
    ifSetTextAlign(1, 1, 0, intArg1);

    if (varbit_gravestone_transmit == 0) {
        ifSetModel(Model.model_30184, intArg0);
        ifSetModelAngle(0, 0, 0, 0, 0, 365, intArg0);
        ifSetPosition(2, 84, 0, 0, intArg0);
        ifSetSize(509, 156, 0, 0, intArg0);
        ifSetPosition(15, 89, 0, 0, intArg1);
        ifSetSize(487, 143, 0, 0, intArg1);
        ifSetColour(rgb_to_hex(43, 26, 11), intArg1);
    } else if (varbit_gravestone_transmit == 1) {
        ifSetModel(Model.model_30183, intArg0);
        ifSetModelAngle(0, 0, 0, 0, 0, 344, intArg0);
        ifSetPosition(3, 90, 0, 0, intArg0);
        ifSetSize(509, 156, 0, 0, intArg0);
        ifSetPosition(4, 88, 0, 0, intArg1);
        ifSetSize(506, 139, 0, 0, intArg1);
        ifSetColour(rgb_to_hex(85, 85, 65), intArg1);
    }
}
