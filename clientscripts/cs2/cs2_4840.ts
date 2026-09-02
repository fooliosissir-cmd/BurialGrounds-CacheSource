/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4840

function cs2_4840(): void {
    let int0: number = 0;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            int0 = varbit_clan_custom_slot_1_tier_varp;
            break;
        case 2:
            int0 = varbit_clan_custom_slot_2_tier_varp;
            break;
        case 3:
            int0 = varbit_clan_custom_slot_3_tier_varp;
            break;
    }

    if (int0 == 0) {
        return;
    }
    let int1: component = -1;
    let int2: component = -1;
    let int3: component = -1;
    let [int4, int5, int6, int7, int8, int9] = cs2_4841(varbit_clan_custom_stronghold_current_slot_varp);
    let int10: graphic = enumOp(type_int, type_graphic, Enum.clan_resources_int2graphic, int4);
    let int11: graphic = enumOp(type_int, type_graphic, Enum.clan_resources_int2graphic, int6);
    let int12: graphic = enumOp(type_int, type_graphic, Enum.clan_resources_int2graphic, int8);

    switch (int0) {
        case 1:
            if (int5 > 0) {
                ifSetText(tostring(int5), Component.interface_1258.component_1258_50);
            } else {
                ifSetText("", Component.interface_1258.component_1258_50);
            }
            int1 = Component.interface_1258.component_1258_47;
            int2 = Component.interface_1258.component_1258_48;
            int3 = Component.interface_1258.component_1258_49;
            break;
        case 2:
            if (int5 > 0) {
                ifSetText(tostring(int5), Component.interface_1258.component_1258_59);
            } else {
                ifSetText("", Component.interface_1258.component_1258_59);
            }
            if (int7 > 0) {
                ifSetText(tostring(int7), Component.interface_1258.component_1258_60);
            } else {
                ifSetText("", Component.interface_1258.component_1258_60);
            }
            int1 = Component.interface_1258.component_1258_56;
            int2 = Component.interface_1258.component_1258_57;
            int3 = Component.interface_1258.component_1258_58;
            break;
        case 3:
            if (int5 > 0) {
                ifSetText(tostring(int5), Component.interface_1258.component_1258_68);
            } else {
                ifSetText("", Component.interface_1258.component_1258_68);
            }
            if (int7 > 0) {
                ifSetText(tostring(int7), Component.interface_1258.component_1258_70);
            } else {
                ifSetText("", Component.interface_1258.component_1258_70);
            }
            if (int9 > 0) {
                ifSetText(tostring(int9), Component.interface_1258.component_1258_69);
            } else {
                ifSetText("", Component.interface_1258.component_1258_69);
            }
            int1 = Component.interface_1258.component_1258_65;
            int2 = Component.interface_1258.component_1258_66;
            int3 = Component.interface_1258.component_1258_67;
            break;
        default:
            return;
    }
    ifSetGraphic(int10, int1);
    ifSetGraphic(int11, int2);
    ifSetGraphic(int12, int3);
}
