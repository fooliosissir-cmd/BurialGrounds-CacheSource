/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6112

function cs2_6112(intArg0: number, intArg1: number, intArg2: component, intArg3: component): void {
    let str0: string = tostring(intArg0);
    let str1: string = tostring(intArg1);

    if (intArg2 == Component.interface_1265.component_1265_142 || intArg2 == Component.interface_1265.component_1265_143) {
        str0 = append(append(tostring(intArg0 / 10), "."), tostring(intArg0 % 10));
        str1 = append(append(tostring(intArg1 / 10), "."), tostring(intArg1 % 10));
    }
    ifSetText(str0, intArg2);
    ifSetText("(" + str1 + ")", intArg3);
    let int4: colour = colour(0x00FF00);
    let int5: colour = colour(0xFF0000);

    if (intArg2 == Component.interface_1265.component_1265_165) {
        int4 = colour(0xFF0000);
        int5 = colour(0x00FF00);
    }

    if (intArg0 > intArg1) {
        ifSetColour(int4, intArg2);
    } else if (intArg0 < intArg1) {
        ifSetColour(int5, intArg2);
    } else {
        ifSetColour(colour(0xFFFFFF), intArg2);
    }
}
