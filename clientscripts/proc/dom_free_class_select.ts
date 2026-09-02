/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_free_class_select]

function proc_dom_free_class_select(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    varc_dom_free_current_thumbnail = 0;
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_28);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_27);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_26);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_25);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_24);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_23);
    ifSetText("Please select a monster.", Component.interface_1168.component_1168_101);
    ifSetText("", Component.interface_1168.component_1168_2);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_77);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_80);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_82);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_81);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_83);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_84);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_85);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_97);
    varc_dom_free_current_tab_client = intArg0;

    if (intArg0 == 1) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_77);
        int1 = 1;
        int2 = 2;
        int3 = 3;
        int4 = 4;
        int5 = 5;
        int6 = 6;
    } else if (intArg0 == 2) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_80);
        int1 = 7;
        int2 = 8;
        int3 = 9;
        int4 = 10;
        int5 = 11;
        int6 = 12;
    } else if (intArg0 == 3) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_82);
        int1 = 13;
        int2 = 14;
        int3 = 15;
        int4 = 16;
        int5 = 17;
        int6 = 18;
    } else if (intArg0 == 4) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_81);
        int1 = 19;
        int2 = 20;
        int3 = 21;
        int4 = 22;
        int5 = 23;
        int6 = 24;
    } else if (intArg0 == 5) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_83);
        int1 = 25;
        int2 = 26;
        int3 = 27;
        int4 = 28;
        int5 = 29;
        int6 = 30;
    } else if (intArg0 == 6) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_84);
        int1 = 31;
        int2 = 32;
        int3 = 33;
        int4 = 34;
        int5 = 35;
        int6 = 36;
    } else if (intArg0 == 7) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_85);
        int1 = 37;
        int2 = 38;
        int3 = 39;
        int4 = 40;
        int5 = 41;
        int6 = 42;
    } else if (intArg0 == 8) {
        ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_97);
        int1 = 43;
        int2 = 44;
        int3 = 45;
        int4 = 46;
        int5 = 47;
        int6 = 48;
    }
    let int7: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int1);
    let int8: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int2);
    let int9: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int3);
    let int10: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int4);
    let int11: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int5);
    let int12: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int6);
    let str0: string = structParam(int7, Param.param_2095);
    let str1: string = structParam(int8, Param.param_2095);
    let str2: string = structParam(int9, Param.param_2095);
    let str3: string = structParam(int10, Param.param_2095);
    let str4: string = structParam(int11, Param.param_2095);
    let str5: string = structParam(int12, Param.param_2095);
    let int13: graphic = structParam(int7, Param.param_2101);
    let int14: graphic = structParam(int8, Param.param_2101);
    let int15: graphic = structParam(int9, Param.param_2101);
    let int16: graphic = structParam(int10, Param.param_2101);
    let int17: graphic = structParam(int11, Param.param_2101);
    let int18: graphic = structParam(int12, Param.param_2101);
    ifSetGraphic(int13, Component.interface_1168.component_1168_17);
    ifSetGraphic(int14, Component.interface_1168.component_1168_18);
    ifSetGraphic(int15, Component.interface_1168.component_1168_19);
    ifSetGraphic(int16, Component.interface_1168.component_1168_20);
    ifSetGraphic(int17, Component.interface_1168.component_1168_21);
    ifSetGraphic(int18, Component.interface_1168.component_1168_22);

    if (cs2_5451(int1) == 1) {
        dom_free_create_name(0, str0, Component.interface_1168.component_1168_30, Component.interface_1168.component_1168_31, 1);
    } else {
        dom_free_create_name(0, str0, Component.interface_1168.component_1168_30, Component.interface_1168.component_1168_31, 2);
    }

    if (cs2_5451(int2) == 1) {
        dom_free_create_name(0, str1, Component.interface_1168.component_1168_32, Component.interface_1168.component_1168_33, 1);
    } else {
        dom_free_create_name(0, str1, Component.interface_1168.component_1168_32, Component.interface_1168.component_1168_33, 2);
    }

    if (cs2_5451(int3) == 1) {
        dom_free_create_name(0, str2, Component.interface_1168.component_1168_34, Component.interface_1168.component_1168_35, 1);
    } else {
        dom_free_create_name(0, str2, Component.interface_1168.component_1168_34, Component.interface_1168.component_1168_35, 2);
    }

    if (cs2_5451(int4) == 1) {
        dom_free_create_name(0, str3, Component.interface_1168.component_1168_36, Component.interface_1168.component_1168_37, 1);
    } else {
        dom_free_create_name(0, str3, Component.interface_1168.component_1168_36, Component.interface_1168.component_1168_37, 2);
    }

    if (cs2_5451(int5) == 1) {
        dom_free_create_name(0, str4, Component.interface_1168.component_1168_38, Component.interface_1168.component_1168_39, 1);
    } else {
        dom_free_create_name(0, str4, Component.interface_1168.component_1168_38, Component.interface_1168.component_1168_39, 2);
    }

    if (cs2_5451(int6) == 1) {
        dom_free_create_name(0, str5, Component.interface_1168.component_1168_40, Component.interface_1168.component_1168_41, 1);
    } else {
        dom_free_create_name(0, str5, Component.interface_1168.component_1168_40, Component.interface_1168.component_1168_41, 2);
    }
}
