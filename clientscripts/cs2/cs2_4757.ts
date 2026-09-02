/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4757

function cs2_4757(intArg0: component): void {
    let int1: number = scale(16384, 1600, varp_2245);

    int1 = min(max(int1, 0), 16384);
    ifSetSize(int1, 0, 2, 1, Component.interface_642.component_642_123);
    ifSetText(tostring(varp_2245), intArg0);

    if (varp_2245 <= 300) {
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_124);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_126);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_125);
        ifSetModelAnim(2601, Component.interface_642.component_642_104);
    } else {
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_124);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_126);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_125);
        ifSetModelAnim(9804, Component.interface_642.component_642_104);
    }
}
