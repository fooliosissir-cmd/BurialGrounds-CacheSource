/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5538

function cs2_5538(intArg0: component): void {
    let str0: string = "";
    let int1: number = 0;
    let int2: obj = -1;

    switch (intArg0) {
        case Component.interface_1178.component_1178_2:
            int1 = varc_1806;
            break;
        case Component.interface_1178.component_1178_3:
            int1 = varc_1807;
            break;
        case Component.interface_1178.component_1178_4:
            int1 = varc_1808;
            break;
        case Component.interface_1178.component_1178_5:
            int1 = varc_1809;
            break;
        case Component.interface_1178.component_1178_6:
            int1 = varc_1810;
            break;
        case Component.interface_1178.component_1178_30:
        case Component.interface_1178.tiered_tool_model:
            int1 = varc_1808;
            break;
    }

    int2 = toolbelt_tier_obj(varc_1725, int1);
    switch (varc_1725) {
        case 1:
            if (int2 != -1) {
                str0 = ocName(int2);
            } else {
                str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5350, int1));
            }
            break;
        case 2:
            str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5353, int1));
            break;
        case 3:
            str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5356, int1));
            break;
        case 4:
            if (int2 != -1) {
                str0 = ocName(int2);
            } else {
                str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5359, int1));
            }
            break;
        case 11:
            if (int1 == 1) {
                str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5732, varbit_toolbelt_rand_pickaxe));
            } else if (int1 == 2) {
                str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5733, varbit_toolbelt_rand_hatchet));
            } else {
                str0 = ocName(enumOp(type_int, type_obj, Enum.enum_5731, int1));
            }
            break;
        case 12:
            str0 = ocName(enumOp(type_int, type_obj, Enum.toolbelt_rand_keys_objects, int1));
            break;
    }

    if (int1 > 0 && int1 <= cs2_5550()) {
        cs2_1163(intArg0, -1, Component.interface_1178.component_1178_0, str0, 25, 190);
    }
}
