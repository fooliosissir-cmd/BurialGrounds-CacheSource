/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4755

function cs2_4755(intArg0: component): void {
    let int1: number = scale(16384, 900, varp_2243);

    int1 = min(max(int1, 0), 16384);
    ifSetSize(int1, 0, 2, 1, Component.interface_642.component_642_66);
    ifSetText(tostring(varp_2243), intArg0);

    if (varp_2243 >= 700) {
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_67);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_69);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_68);
        ifSetModelAnim(2602, Component.interface_642.component_642_38);
    } else if (varp_2243 <= 300) {
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_67);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_69);
        ifSetColour(colour(0xFF2266), Component.interface_642.component_642_68);
        ifSetModelAnim(2601, Component.interface_642.component_642_38);
    } else {
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_67);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_69);
        ifSetColour(colour(0xFFFFFF), Component.interface_642.component_642_68);
        ifSetModelAnim(9804, Component.interface_642.component_642_38);
    }
}
