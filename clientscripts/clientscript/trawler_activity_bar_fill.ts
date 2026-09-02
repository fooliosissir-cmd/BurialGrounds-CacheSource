/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trawler_activity_bar_fill]

function trawler_activity_bar_fill(): void {
    let int0: number = scale(varbit_trawler_activity, 1000, 100);

    if (int0 > 100) {
        int0 = 100;
    }
    let int1: number = enumOp(type_int, type_int, Enum.enum_1090, int0);
    let int2: number = enumOp(type_int, type_int, Enum.enum_1091, int0);
    ifSetPosition(40, int1, 2, 0, Component.interface_15.component_15_14);
    ifSetSize(18, int2, 0, 0, Component.interface_15.component_15_14);

    if (int0 < 25) {
        ifSetColour(colour(0xFF9900), Component.interface_15.component_15_14);
    } else {
        ifSetColour(colour(0x006600), Component.interface_15.component_15_14);
    }
}
