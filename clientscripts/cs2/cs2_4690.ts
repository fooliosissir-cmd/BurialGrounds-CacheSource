/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4690

function cs2_4690(intArg0: number, intArg1: number): void {
    let int2: colour = colour(0xEBE0BC);
    let int3: number = 0;
    let int4: component = -1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;

    switch (intArg0) {
        case 36110345:
            int3 = varc_1549;
            int4 = Component.interface_551.component_551_15;
            int6 = varc_1549;
            int7 = enumOp(type_int, type_int, Enum.loy_boost_cost, 1);
            break;
        case 36110369:
            int3 = varc_1550;
            int4 = Component.interface_551.component_551_41;
            int6 = varc_1550;
            int7 = enumOp(type_int, type_int, Enum.loy_boost_cost, 2);
            break;
        case 36110383:
            int3 = varc_1551;
            int4 = Component.interface_551.component_551_55;
            int6 = varc_1551;
            int7 = enumOp(type_int, type_int, Enum.loy_boost_cost, 3);
            break;
        case 36110397:
            int3 = varc_1552;
            int4 = Component.interface_551.component_551_69;
            int6 = varc_1552;
            int7 = enumOp(type_int, type_int, Enum.loy_boost_cost, 4);
            break;
        default:
            return;
    }

    if (int6 == 0 && varbit_loy_pl_boost_pts >= int7) {
        if (intArg1 == 1) {
            int2 = colour(0xFFFFFF);
        }
        ifSetColour(int2, int4);
    }
}
