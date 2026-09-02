/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4688

function cs2_4688(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;
    let int5: component = -1;
    let int6: component = -1;
    let int7: number = 1;

    while (int7 < 5) {
        switch (int7) {
            case 1:
                int6 = Component.interface_551.component_551_18;
                int0 = varc_1549;
                int1 = enumOp(type_int, type_int, Enum.loy_boost_cost, int7);
                int2 = Component.interface_551.component_551_17;
                int3 = Component.interface_551.component_551_19;
                int4 = Component.interface_551.component_551_15;
                int5 = Component.interface_551.component_551_16;
                break;
            case 2:
                int6 = Component.interface_551.component_551_44;
                int0 = varc_1550;
                int1 = enumOp(type_int, type_int, Enum.loy_boost_cost, int7);
                int2 = Component.interface_551.component_551_43;
                int3 = Component.interface_551.component_551_45;
                int4 = Component.interface_551.component_551_41;
                int5 = Component.interface_551.component_551_42;
                break;
            case 3:
                int6 = Component.interface_551.component_551_58;
                int0 = varc_1551;
                int1 = enumOp(type_int, type_int, Enum.loy_boost_cost, int7);
                int2 = Component.interface_551.component_551_57;
                int3 = Component.interface_551.component_551_59;
                int4 = Component.interface_551.component_551_55;
                int5 = Component.interface_551.component_551_56;
                break;
            case 4:
                int6 = Component.interface_551.component_551_72;
                int0 = varc_1552;
                int1 = enumOp(type_int, type_int, Enum.loy_boost_cost, int7);
                int2 = Component.interface_551.component_551_71;
                int3 = Component.interface_551.component_551_73;
                int4 = Component.interface_551.component_551_69;
                int5 = Component.interface_551.component_551_70;
                break;
            default:
                return;
        }
        if (ifFind(int6) == 1) {
            if (int0 > 0) {
                ccSetHide(false);
                ccSetfill(true);
                ccSetSize(ccGetWidth(), int0 * 26 / 100, 0, 0);
            } else {
                ccSetHide(true);
                ccSetfill(false);
                ccSetSize(ccGetWidth(), 26, 0, 0);
            }
        }
        if (int0 > 0 || varbit_loy_pl_boost_pts < int1) {
            ifSetHide(false, int3);
            ifSetColour(colour(0x7D7D7D), int4);
            ifSetColour(colour(0x7D7D7D), int5);
        } else {
            ifSetColour(colour(0x000000), int2);
            ifSetHide(true, int3);
            ifSetColour(colour(0xEBE0BC), int4);
            ifSetColour(colour(0xEBE0BC), int5);
        }
        int7 = int7 + 1;
    }
}
