/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6389

function cs2_6389(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;

    if (varbit_pre_olympic_cooking_ingredient_1 < 18) {
        int4 = int4 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_sweet);
        int5 = int5 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_spicy);
        int6 = int6 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_fruity);
        int7 = int7 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_sour);
        int8 = int8 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_bitter);
        int9 = int9 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_savoury);
    }

    if (varbit_pre_olympic_cooking_ingredient_2 < 18) {
        int4 = int4 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_sweet);
        int5 = int5 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_spicy);
        int6 = int6 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_fruity);
        int7 = int7 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_sour);
        int8 = int8 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_bitter);
        int9 = int9 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_savoury);
    }

    if (varbit_pre_olympic_cooking_ingredient_3 < 18) {
        int4 = int4 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_sweet);
        int5 = int5 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_spicy);
        int6 = int6 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_fruity);
        int7 = int7 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_sour);
        int8 = int8 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_bitter);
        int9 = int9 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_savoury);
    }

    if (varbit_pre_olympic_cooking_ingredient_4 < 18) {
        int4 = int4 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_sweet);
        int5 = int5 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_spicy);
        int6 = int6 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_fruity);
        int7 = int7 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_sour);
        int8 = int8 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_bitter);
        int9 = int9 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_savoury);
    }
    ccDeleteAll(Component.interface_396.component_396_13);
    let int10: number = 392;
    let int11: number = 342;
    let int12: number = 200;
    ccCreate(Component.interface_396.component_396_13, 9, 0);
    ccSetSize(0, int4 * int10 / 100, 0, 0);
    ccSetPosition(0, (0 - int4 * int10 / 100) / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(4);
    ccSetlinedirection(0);
    ccCreate(Component.interface_396.component_396_13, 9, 1);
    ccSetSize(0, int7 * int10 / 100, 0, 0);
    ccSetPosition(0, int7 * int10 / 100 / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(4);
    ccSetlinedirection(0);
    ccCreate(Component.interface_396.component_396_13, 9, 2);
    ccSetSize(int5 * int11 / 100, int5 * int12 / 100, 0, 0);
    ccSetPosition(int5 * int11 / 100 / 2, 0 - int5 * int12 / 100 / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(3);
    ccSetlinedirection(1);
    ccCreate(Component.interface_396.component_396_13, 9, 3);
    ccSetSize(int6 * int11 / 100, int6 * int12 / 100, 0, 0);
    ccSetPosition(int6 * int11 / 100 / 2, int6 * int12 / 100 / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(3);
    ccSetlinedirection(0);
    ccCreate(Component.interface_396.component_396_13, 9, 4);
    ccSetSize(int8 * int11 / 100, int8 * int12 / 100, 0, 0);
    ccSetPosition(0 - int8 * int11 / 100 / 2, int8 * int12 / 100 / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(3);
    ccSetlinedirection(1);
    ccCreate(Component.interface_396.component_396_13, 9, 5);
    ccSetSize(int9 * int11 / 100, int9 * int12 / 100, 0, 0);
    ccSetPosition(0 - int9 * int11 / 100 / 2, 0 - int9 * int12 / 100 / 2, 1, 1);
    ccSetColour(colour(0x4F9900));
    ccSetlinewid(3);
    ccSetlinedirection(0);
    ccCreate(Component.interface_396.component_396_13, 5, 6);
    ccSetPosition(0, 0 - int4 * int10 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    ccCreate(Component.interface_396.component_396_13, 5, 7);
    ccSetPosition(0, int7 * int10 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    ccCreate(Component.interface_396.component_396_13, 5, 8);
    ccSetPosition(int5 * int11 / 100, 0 - int5 * int12 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    ccCreate(Component.interface_396.component_396_13, 5, 9);
    ccSetPosition(int6 * int11 / 100, int6 * int12 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    ccCreate(Component.interface_396.component_396_13, 5, 10);
    ccSetPosition(0 - int8 * int11 / 100, int8 * int12 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    ccCreate(Component.interface_396.component_396_13, 5, 11);
    ccSetPosition(0 - int9 * int11 / 100, 0 - int9 * int12 / 100, 1, 1);
    ccSetSize(13, 13, 0, 0);
    ccSetGraphic(Graphic.graphic_11626);
    let int13: number = 0;

    if (varbit_pre_olympic_current_food_1 == 0 || varbit_pre_olympic_current_food_2 == 0 || varbit_pre_olympic_current_food_3 == 0) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_sweet);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_sweet);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_sweet);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_sweet);
    }

    if (varbit_pre_olympic_current_food_1 == 1 || varbit_pre_olympic_current_food_2 == 1 || varbit_pre_olympic_current_food_3 == 1) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_savoury);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_savoury);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_savoury);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_savoury);
    }

    if (varbit_pre_olympic_current_food_1 == 2 || varbit_pre_olympic_current_food_2 == 2 || varbit_pre_olympic_current_food_3 == 2) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_bitter);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_bitter);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_bitter);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_bitter);
    }

    if (varbit_pre_olympic_current_food_1 == 3 || varbit_pre_olympic_current_food_2 == 3 || varbit_pre_olympic_current_food_3 == 3) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_sour);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_sour);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_sour);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_sour);
    }

    if (varbit_pre_olympic_current_food_1 == 4 || varbit_pre_olympic_current_food_2 == 4 || varbit_pre_olympic_current_food_3 == 4) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_fruity);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_fruity);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_fruity);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_fruity);
    }

    if (varbit_pre_olympic_current_food_1 == 5 || varbit_pre_olympic_current_food_2 == 5 || varbit_pre_olympic_current_food_3 == 5) {
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_1), Param.pre_megagame_spicy);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_2), Param.pre_megagame_spicy);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_3), Param.pre_megagame_spicy);
        int13 = int13 + ocParam(enumOp(type_int, type_obj, Enum.pre_megagame_ingredients_list, varbit_pre_olympic_cooking_ingredient_4), Param.pre_megagame_spicy);
    }
    ifSetText(tostring(int13), Component.interface_396.component_396_12);
}
