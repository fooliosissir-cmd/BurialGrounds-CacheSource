/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_283

function cs2_283(): void {
    let int0: number = scale(varp_1380, 1000, 100);
    let int1: number = enumOp(type_int, type_int, Enum.enum_706, int0);
    let int2: number = enumOp(type_int, type_int, Enum.enum_707, int0);

    ifSetPosition(15, int1, 2, 0, Component.interface_834.component_834_74);
    ifSetSize(14, int2, 0, 0, Component.interface_834.component_834_74);

    if (int0 < 25) {
        ifSetColour(colour(0xFF9623), Component.interface_834.component_834_74);
    } else {
        ifSetColour(colour(0x048306), Component.interface_834.component_834_74);
    }
}
