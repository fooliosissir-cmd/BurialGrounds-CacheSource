/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4756

function cs2_4756(intArg0: component): void {
    let int1: number = scale(16384, 1200, varp_2244);

    int1 = min(max(int1, 0), 16384);
    ifSetSize(int1, 0, 2, 1, Component.interface_642.component_642_90);
    ifSetText(tostring(varp_2244), intArg0);

    if (varp_2244 >= 700) {
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_91);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_93);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_92);
        ifSetModelAnim(2602, Component.interface_642.component_642_96);
    } else if (varp_2244 <= 300) {
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_91);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_93);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_92);
        ifSetModelAnim(2601, Component.interface_642.component_642_96);
    } else {
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_91);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_93);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_92);
        ifSetModelAnim(9804, Component.interface_642.component_642_96);
    }
}
