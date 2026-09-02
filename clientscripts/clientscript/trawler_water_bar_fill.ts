/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trawler_water_bar_fill]

function trawler_water_bar_fill(): void {
    let int0: number = 0;

    switch (varc_816) {
        case 0:
            return;
        case 1:
            int0 = varc_817;
            break;
        case 2:
            int0 = scale(varc_817, 125, 100);
            break;
        case 3:
            int0 = scale(varc_817, 150, 100);
            break;
        default:
            int0 = scale(varc_817, 175, 100);
            break;
    }

    if (int0 > 100) {
        int0 = 100;
    }
    let int1: number = enumOp(type_int, type_int, Enum.enum_1090, int0);
    let int2: number = enumOp(type_int, type_int, Enum.enum_1091, int0);
    ifSetPosition(91, int1, 2, 0, Component.interface_15.component_15_11);
    ifSetSize(18, int2, 0, 0, Component.interface_15.component_15_11);
}
