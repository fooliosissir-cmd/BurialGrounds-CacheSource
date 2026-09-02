/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_676

function cs2_676(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = (ifGetWidth(Component.interface_645.component_645_16) - 36 * 10) / (10 - 1);
    let int4: number = (ifGetHeight(Component.interface_645.component_645_16) - 128) / 3;

    while (int1 == 0) {
        if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) != 11760) {
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11846) {
                int2 = int2 + 2;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11858) {
                int2 = int2 + 4;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11864) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11872) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 19520) {
                int2 = int2 + 5;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11902) {
                int2 = int2 + 8;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11908) {
                int2 = int2 + 7;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11926) {
                int2 = int2 + 8;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11942) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11967) {
                int2 = int2 + 7;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 14525) {
                int2 = int2 + 9;
            }
            ccCreate(Component.interface_645.component_645_16, 5, int0);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition((36 + int3) * (int2 % 10), int2 / 10 * (32 + int4), 0, 0);
            ccSetObject(enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1), -1);
            ccSetOpBase("<col=ff981f>" + ocName(enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1)));
            ccSetOp(1, "Components");
            ccSetOp(2, "Exchange");
            ccSetOp(3, "Examine");
            ccSetGraphicShadow(3355443);
            ccSetOutline(1);
            int0 = int0 + 1;
            int2 = int2 + 1;
        } else {
            int1 = 1;
        }
    }
    let int5: number = int0;
    int0 = 0;
    int2 = 0;
    int1 = 0;

    while (int1 == 0) {
        if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) != 11760) {
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11846) {
                int2 = int2 + 2;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11858) {
                int2 = int2 + 4;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11864) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11872) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 19520) {
                int2 = int2 + 5;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11902) {
                int2 = int2 + 8;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11908) {
                int2 = int2 + 7;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11926) {
                int2 = int2 + 8;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11942) {
                int2 = int2 + 6;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 11967) {
                int2 = int2 + 7;
            }
            if (enumOp(type_int, type_obj, Enum.enum_1087, int0 + 1) == 14525) {
                int2 = int2 + 9;
            }
            ccCreate(Component.interface_645.component_645_16, 5, int5);
            ccSetSize(12, 6, 0, 0);
            ccSetPosition((36 + int3) * (int2 % 10), int2 / 10 * (32 + int4), 0, 0);
            ccSetGraphic(Graphic.shop_infinity_icon);
        } else {
            int1 = 1;
        }
        int0 = int0 + 1;
        int2 = int2 + 1;
        int5 = int5 + 1;
    }
}
