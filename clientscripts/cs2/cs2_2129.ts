/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2129

function cs2_2129(intArg0: component, intArg1: component, intArg2: component): void {
    switch (intArg1) {
        case Component.interface_420.component_420_12:
        case Component.interface_420.component_420_13:
        case Component.interface_420.component_420_14:
        case Component.interface_420.component_420_15:
        case Component.interface_420.component_420_16:
        case Component.interface_420.component_420_17:
        case Component.interface_420.component_420_18:
        case Component.interface_420.component_420_19:
            ifSetPosition(ifGetX(intArg1), ifGetY(intArg1), 0, 0, intArg0);
            soundSynth(Sound.sound_5507, 1, 0);
            break;
        default:
            ifSetPosition(ifGetX(intArg2), ifGetY(intArg2), 0, 0, intArg0);
            break;
    }
}
