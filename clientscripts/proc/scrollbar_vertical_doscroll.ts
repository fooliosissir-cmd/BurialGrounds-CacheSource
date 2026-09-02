/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_vertical_doscroll]

function scrollbar_vertical_doscroll(intArg0: component, intArg1: component, intArg2: number, intArg3: boolean): void {
    let int4: number = ifGetScrollHeight(intArg1) - ifGetHeight(intArg1);

    if (int4 == 0) {
        int4 = 1;
    }

    if (intArg2 < 0) {
        intArg2 = 0;
    }

    if (intArg2 > int4) {
        intArg2 = int4;
    }
    ifSetScrollPos(0, intArg2, intArg1);

    switch (intArg1) {
        case Component.interface_137.component_137_57:
            varc_7 = intArg2;
            break;
        case Component.interface_300.component_300_15:
            varc_109 = intArg2;
            break;
        case Component.interface_735.component_735_13:
            varc_121 = intArg2;
            break;
        case Component.interface_762.component_762_95:
            cs2_705(varbit_4893, intArg2);
            break;
        case Component.interface_909.component_909_52:
            varc_1122 = intArg2;
            break;
        case Component.interface_912.component_912_20:
            varc_1124 = intArg2;
            break;
        case Component.interface_187.component_187_1:
            varc_88 = intArg2;
            break;
        case Component.clan_field_setup.rules:
            cs2_5082(intArg1);
            break;
    }
    let int5: number = 0;

    if (intArg3 == true) {
        int5 = ifGetHeight(intArg0) - 32 - ccGetHeight();
        ccSetPosition(0, 16 + scale(intArg2, int4, int5), 0, 0);
        if (ccFind<1>(intArg0, 2) == 1) {
            ccSetPosition<1>(0, ccGetY(), 0, 0);
        }
        if (ccFind<1>(intArg0, 3) == 1) {
            ccSetPosition<1>(0, ccGetY() + ccGetHeight() - 5, 0, 0);
        }
    }
}
