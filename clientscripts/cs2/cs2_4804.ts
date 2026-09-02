/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4804

function cs2_4804(): void {
    let int0: number = clan_custom_slot_disabled(varbit_clan_custom_stronghold_current_slot_varp);

    if (int0 == 1) {
        cs2_4842(1);
        cs2_4842(2);
        cs2_4842(3);
        switch (varbit_clan_custom_stronghold_current_slot_varp) {
            case 1:
                cs2_4846(varbit_clan_custom_slot_1_tier_varp);
                break;
            case 2:
                cs2_4846(varbit_clan_custom_slot_2_tier_varp);
                break;
            case 3:
                cs2_4846(varbit_clan_custom_slot_3_tier_varp);
                break;
        }
    } else {
        cs2_4843(1);
        cs2_4843(2);
        cs2_4843(3);
    }
    cs2_4807();
    let int1: Enum = -1;
    let int2: Enum = -1;
    let int3: Enum = -1;
    let int4: number = -1;
    let int5: number = 0;
    let int6: number = 1;
    let int7: number = 1;
    let int8: number = 0;

    switch (varbit_clan_custom_stronghold_current_slot_varp) {
        case 1:
            int5 = varbit_clan_custom_slot_1_type_varp;
            int8 = varbit_clan_custom_slot_1_resource_id_varp;
            break;
        case 2:
            int5 = varbit_clan_custom_slot_2_type_varp;
            int8 = varbit_clan_custom_slot_2_resource_id_varp;
            break;
        case 3:
            int5 = varbit_clan_custom_slot_3_type_varp;
            int8 = varbit_clan_custom_slot_3_resource_id_varp;
            break;
    }

    if (int5 == 0 && int8 == 0) {
        cs2_4940();
        return;
    } else {
        cs2_4942();
    }
    let int9: Enum = cs2_4825(varbit_clan_custom_stronghold_current_slot_varp);
    let int10: Enum = cs2_4822(varbit_clan_custom_stronghold_current_slot_varp);

    if (int8 == 1) {
        cs2_4846(1);
        ifSetGraphic(-1, Component.interface_1258.component_1258_234);
        ifSetText("Reset Hotspot to its default state", Component.interface_1258.component_1258_235);
        ifSetText("", Component.interface_1258.component_1258_391);
        ifSetText("", Component.interface_1258.component_1258_392);
        ifSetText("", Component.interface_1258.component_1258_393);
        ifSetText("", Component.interface_1258.component_1258_319);
        ifSetText("", Component.interface_1258.component_1258_320);
        ifSetText("", Component.interface_1258.component_1258_321);
        ifSetText("", Component.interface_1258.component_1258_241);
        ifSetText("", Component.interface_1258.component_1258_242);
        ifSetText("", Component.interface_1258.component_1258_243);
        cs2_4805(1, 1);
        cs2_4805(2, 1);
        cs2_4805(3, 1);
        cs2_4805(1, 2);
        cs2_4805(2, 2);
        cs2_4805(3, 2);
        cs2_4805(1, 3);
        cs2_4805(2, 3);
        cs2_4805(3, 3);
    } else {
        if (int9 != -1) {
            ifSetGraphic(enumOp(type_int, type_graphic, int9, int5), Component.interface_1258.component_1258_234);
        }
        if (int10 != -1) {
            ifSetText(enumOp(type_int, type_string, int10, int5), Component.interface_1258.component_1258_235);
        }
        int1 = enumOp(type_int, type_enum, Enum.clan_custom_category_enums, int5);
        if (int1 == -1 && int8 == 0) {
            return;
        }
        while (int6 <= 3) {
            int2 = enumOp(type_int, type_enum, int1, int6);
            if (int2 != -1) {
                while (int7 <= 3) {
                    int3 = enumOp(type_int, type_enum, int2, int7);
                    if (int3 != -1) {
                        cs2_4806(int3, int6, int7, int0, int5);
                    } else {
                        cs2_4805(int6, int7);
                    }
                    int3 = -1;
                    int7 = int7 + 1;
                }
            } else {
                cs2_4842(int6);
            }
            int7 = 1;
            int6 = int6 + 1;
        }
        cs2_4838();
        cs2_4810();
    }
    cs2_4809();
    cs2_4814();
}
