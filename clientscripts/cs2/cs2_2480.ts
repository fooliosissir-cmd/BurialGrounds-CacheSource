/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2480

function cs2_2480(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = (ifGetWidth(Component.interface_41.component_41_15) - 36 * 10) / (10 - 1);
    let int3: number = (ifGetHeight(Component.interface_41.component_41_15) - 128) / 3;

    ccDeleteAll(Component.interface_41.component_41_15);
    ccDeleteAll(Component.interface_881.component_881_0);

    while (int1 == 0) {
        if (enumOp(type_int, type_obj, varc_875, int0) != 11760) {
            ccCreate(Component.interface_41.component_41_15, 5, int0);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition((36 + int2) * (int0 % 10), int0 / 10 * (32 + int3), 0, 0);
            ccSetObject(enumOp(type_int, type_obj, varc_875, int0), -1);
            ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, varc_875, int0)));
            ccSetOp(1, "Value");
            ccSetOp(2, "Buy 1");
            ccSetOp(3, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            ccCreate(Component.interface_881.component_881_0, 5, int0);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(42 * (int0 % 4), int0 / 4 * 42, 0, 0);
            ccSetObject(enumOp(type_int, type_obj, varc_875, int0), invTotal(Inv.inv, enumOp(type_int, type_obj, varc_875, int0)));
            ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, varc_875, int0)));
            ccSetOp(1, "Value");
            ccSetOp(2, "Sell 1");
            ccSetOp(3, "Sell X");
            ccSetOp(4, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int0 = int0 + 1;
        } else {
            int1 = 1;
        }
    }
    let int4: number = int0;
    int0 = 0;
    int1 = 0;

    while (int1 == 0) {
        if (enumOp(type_int, type_obj, varc_875, int0) != 11760) {
            ccCreate(Component.interface_41.component_41_15, 5, int4);
            ccSetSize(12, 6, 0, 0);
            ccSetPosition((36 + int2) * (int0 % 10), int0 / 10 * (32 + int3), 0, 0);
            ccSetGraphic(Graphic.shop_infinity_icon);
        } else {
            int1 = 1;
        }
        int0 = int0 + 1;
        int4 = int4 + 1;
    }
    ifSetText(tostring_spacer(varp_1448, ","), Component.interface_41.component_41_17);
}
