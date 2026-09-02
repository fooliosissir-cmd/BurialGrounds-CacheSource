/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6387

function cs2_6387(): void {
    let int0: number = 0;
    let int1: graphic = Graphic.graphic_11756;
    let str0: string = "";

    ccDeleteAll(Component.interface_396.component_396_6);
    ccDeleteAll(Component.interface_396.component_396_7);

    while (int0 < 18) {
        if (int0 != varbit_pre_olympic_cooking_ingredient_1 && int0 != varbit_pre_olympic_cooking_ingredient_2 && int0 != varbit_pre_olympic_cooking_ingredient_3 && int0 != varbit_pre_olympic_cooking_ingredient_4) {
            cs2_6388(11 + int0 % 3 * 46, 10 + int0 / 3 * 40, int0, enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, int0), Component.interface_396.component_396_6, Component.interface_396.component_396_7);
            ccSetOp(1, "Add");
            ccHookMouseExit(hook(cs2_735, "IIid", [Component.interface_396.component_396_14, Component.interface_396.component_396_6, int0, int1]));
            ccSetOnMouseOver(hook(cs2_5334, "IiIsii", [Component.interface_396.component_396_7, int0, Component.interface_396.component_396_14, ocName(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, int0)), 25, 180]));
        } else {
            cs2_6388(11 + int0 % 3 * 46, 10 + int0 / 3 * 40, int0, -1, Component.interface_396.component_396_6, Component.interface_396.component_396_7);
        }
        int0 = int0 + 1;
    }
    let int2: number = 2;
    let int3: number = 40;
    let int4: number = 56;

    if (statBase(7) > 39) {
        int2 = 4;
        int3 = 25;
        int4 = 26;
    } else if (statBase(7) > 19) {
        int2 = 3;
        int3 = 25;
    }
    cs2_6388(26, int3, 0, enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Component.interface_396.component_396_9, Component.interface_396.component_396_10);
    ccSetOp(1, "Remove");
    cs2_6388(86, int3, 1, enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Component.interface_396.component_396_9, Component.interface_396.component_396_10);
    ccSetOp(1, "Remove");

    if (int2 > 2) {
        cs2_6388(int4, int3 + 50, 2, enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Component.interface_396.component_396_9, Component.interface_396.component_396_10);
        ccSetOp(1, "Remove");
    }

    if (int2 > 3) {
        cs2_6388(86, int3 + 50, 3, enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Component.interface_396.component_396_9, Component.interface_396.component_396_10);
        ccSetOp(1, "Remove");
    }
    cs2_6389(varbit_pre_olympic_cooking_ingredient_1, varbit_pre_olympic_cooking_ingredient_2, varbit_pre_olympic_cooking_ingredient_3, varbit_pre_olympic_cooking_ingredient_4);
}
