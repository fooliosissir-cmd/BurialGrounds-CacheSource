/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3977

function cs2_3977(intArg0: number): void {
    deltooltip_action(Component.interface_1056.component_1056_131);

    if (intArg0 == 0 && varp_tutorial < 1000) {
        intArg0 = 4094;
    }

    if (cs2_3999(intArg0) == 1) {
        return;
    }
    let str0: string = "";
    let str1: string = "";
    let int1: struct = task_get_data(intArg0);
    let int2: number = (structParam(int1, Param.task_set) - 1) * 5 + structParam(int1, Param.param_1272);
    let int3: struct = enumOp(type_int, type_struct, Enum.enum_3494, int2);
    cs2_5796(intArg0, 1, Component.interface_1056.component_1056_130, Component.interface_1056.component_1056_88, Component.interface_1056.component_1056_124, Component.interface_1056.component_1056_129, Component.interface_1056.component_1056_128, -1);

    if (int1 != -1) {
        if (structParam(int1, Param.param_1270) != 4094) {
            str0 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int1, Param.param_1270)), Param.param_951);
        } else {
            str0 = structParam(int1, Param.task_rewards);
        }
        ifSetTextFont(Graphic.verdana_11pt_regular, Component.interface_1056.component_1056_124);
        ifSetTextAlign(0, 0, 13, Component.interface_1056.component_1056_124);
        str1 = "Task area: " + enumOp(type_int, type_string, Enum.enum_3487, structParam(int1, Param.task_area));
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_1056.component_1056_131, str1, 45, 135]), Component.interface_1056.component_1056_128);
        str1 = "Task difficulty: " + enumOp(type_int, type_string, Enum.enum_3488, structParam(int1, Param.param_1272));
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_1056.component_1056_131, str1, 45, 135]), Component.interface_1056.component_1056_129);
    }
    let str2: string = "";

    if (compare(str0, "") == 0 && varp_tutorial == 1000 && structParam(int1, Param.task_optional) == 0) {
        str0 = "Completing this Task will earn you coins. The more Tasks you complete, the more any Task is worth.";
    }
    ifSetHide(true, Component.interface_1056.component_1056_73);
    ifSetHide(true, Component.interface_1056.component_1056_74);
    ifSetHide(true, Component.interface_1056.component_1056_75);
    ifSetHide(true, Component.interface_1056.component_1056_76);
    ifSetHide(true, Component.interface_1056.component_1056_77);
    ifSetHide(true, Component.interface_1056.component_1056_78);
    ifSetHide(true, Component.interface_1056.component_1056_79);
    ifSetHide(true, Component.interface_1056.component_1056_80);
    ifSetHide(true, Component.interface_1056.component_1056_81);
    ifSetHide(true, Component.interface_1056.component_1056_82);
    ifSetHide(true, Component.interface_1056.component_1056_83);
    ifSetHide(true, Component.interface_1056.component_1056_84);
    ifSetHide(true, Component.interface_1056.component_1056_163);
    ifSetHide(true, Component.interface_1056.component_1056_164);
    ifSetHide(true, Component.interface_1056.component_1056_165);
    ifSetHide(true, Component.interface_1056.component_1056_166);
    let int4: number = 10;
    let int5: number = 0;
    let int6: number = 15;
    let [int7, str3, int8] = task_requirements(intArg0);

    if (mapLang() == 1 || mapLang() == 3 || mapLang() == 2) {
        ifSetHide(true, Component.interface_1056.component_1056_116);
        ifSetHide(true, Component.interface_1056.component_1056_136);
    } else {
        if (mapLang() == 0) {
            ifSetText("    Pin", Component.interface_1056.component_1056_115);
            ifSetText("     Back", Component.interface_1056.component_1056_135);
        }
        ifSetHide(false, Component.interface_1056.component_1056_116);
        ifSetHide(false, Component.interface_1056.component_1056_136);
    }

    if (compare(structParam(int1, Param.task_step_1), "") != 0) {
        if (structParam(int1, Param.task_step_1_arrow) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(1, int4, structParam(int1, Param.task_step_1), Component.interface_1056.component_1056_73, int5, Component.interface_1056.component_1056_74, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.task_step_2), "") != 0) {
        if (structParam(int1, Param.task_step_2_arrow) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(2, int4, structParam(int1, Param.task_step_2), Component.interface_1056.component_1056_75, int5, Component.interface_1056.component_1056_76, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.task_step_3), "") != 0) {
        if (structParam(int1, Param.task_step_3_arrow) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(3, int4, structParam(int1, Param.task_step_3), Component.interface_1056.component_1056_77, int5, Component.interface_1056.component_1056_78, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.task_step_4), "") != 0) {
        if (structParam(int1, Param.task_step_4_arrow) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(4, int4, structParam(int1, Param.task_step_4), Component.interface_1056.component_1056_79, int5, Component.interface_1056.component_1056_80, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.task_step_5), "") != 0) {
        if (structParam(int1, Param.param_1286) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(5, int4, structParam(int1, Param.task_step_5), Component.interface_1056.component_1056_81, int5, Component.interface_1056.component_1056_82, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.param_1279), "") != 0) {
        if (structParam(int1, Param.param_1287) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(6, int4, structParam(int1, Param.param_1279), Component.interface_1056.component_1056_83, int5, Component.interface_1056.component_1056_84, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.param_1280), "") != 0) {
        if (structParam(int1, Param.param_1288) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(7, int4, structParam(int1, Param.param_1280), Component.interface_1056.component_1056_163, int5, Component.interface_1056.component_1056_164, Component.interface_1056.component_1056_118);
    }

    if (compare(structParam(int1, Param.param_1281), "") != 0) {
        if (structParam(int1, Param.param_1289) != -1) {
            int5 = intArg0;
        } else {
            int5 = 4094;
        }
        int4 = cs2_3978(8, int4, structParam(int1, Param.param_1281), Component.interface_1056.component_1056_165, int5, Component.interface_1056.component_1056_166, Component.interface_1056.component_1056_118);
    }
    int4 = max(int4, ifGetHeight(Component.interface_1056.component_1056_118));
    ifSetScrollSize(0, int4, Component.interface_1056.component_1056_118);
    proc_scrollbar_vertical(Component.interface_1056.component_1056_119, Component.interface_1056.component_1056_118, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);

    if (int4 > ifGetHeight(Component.interface_1056.component_1056_118)) {
        ifSetHide(false, Component.interface_1056.component_1056_119);
    } else {
        ifSetHide(true, Component.interface_1056.component_1056_119);
    }
    ifSetHide(true, Component.interface_1056.component_1056_63);
    ifSetHide(true, Component.interface_1056.component_1056_64);
    ifSetHide(true, Component.interface_1056.component_1056_65);
    ifSetHide(true, Component.interface_1056.component_1056_66);
    ifSetHide(true, Component.interface_1056.component_1056_67);
    ifSetHide(true, Component.interface_1056.component_1056_68);
    ifSetHide(true, Component.interface_1056.component_1056_69);
    ifSetHide(true, Component.interface_1056.component_1056_70);
    int4 = cs2_3978(0, 10, str0, Component.interface_1056.component_1056_62, 4094, -1, Component.interface_1056.component_1056_71);

    if (int3 != -1 && int3 != Struct.struct_1645) {
        int4 = cs2_3978(0, int4, structParam(int3, Param.task_details), Component.interface_1056.component_1056_63, 4094, -1, Component.interface_1056.component_1056_71);
        int4 = cs2_3978(0, int4, structParam(int3, Param.task_rewards), Component.interface_1056.component_1056_64, 4094, -1, Component.interface_1056.component_1056_71);
        if (compare(structParam(int3, Param.task_step_1), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.task_step_1), Component.interface_1056.component_1056_65, 4094, -1, Component.interface_1056.component_1056_71);
        }
        if (compare(structParam(int3, Param.task_step_2), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.task_step_2), Component.interface_1056.component_1056_66, 4094, -1, Component.interface_1056.component_1056_71);
        }
        if (compare(structParam(int3, Param.task_step_3), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.task_step_3), Component.interface_1056.component_1056_67, 4094, -1, Component.interface_1056.component_1056_71);
        }
        if (compare(structParam(int3, Param.task_step_4), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.task_step_4), Component.interface_1056.component_1056_68, 4094, -1, Component.interface_1056.component_1056_71);
        }
        if (compare(structParam(int3, Param.task_step_5), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.task_step_5), Component.interface_1056.component_1056_69, 4094, -1, Component.interface_1056.component_1056_71);
        }
        if (compare(structParam(int3, Param.param_1279), "") != 0) {
            int4 = cs2_3978(0, int4, structParam(int3, Param.param_1279), Component.interface_1056.component_1056_70, 4094, -1, Component.interface_1056.component_1056_71);
        }
    }
    int4 = max(int4, ifGetHeight(Component.interface_1056.component_1056_71));
    ifSetScrollSize(0, int4, Component.interface_1056.component_1056_71);
    proc_scrollbar_vertical(Component.interface_1056.component_1056_91, Component.interface_1056.component_1056_71, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);

    if (int4 > ifGetHeight(Component.interface_1056.component_1056_71)) {
        ifSetHide(false, Component.interface_1056.component_1056_91);
    } else {
        ifSetHide(true, Component.interface_1056.component_1056_91);
    }
    let str4: string = "";
    let int9: number = 5;

    if (structParam(int1, Param.task_area) == 60) {
        ifSetHide(true, Component.interface_1056.component_1056_85);
        ifSetHide(true, Component.interface_1056.component_1056_125);
        if (varp_tutorial < 135 && varbit_tut4_used == 0) {
            ifSetHide(true, Component.interface_1056.component_1056_87);
        } else {
            ifSetHide(false, Component.interface_1056.component_1056_87);
        }
    } else {
        ifSetHide(false, Component.interface_1056.component_1056_87);
        if (task_get_progress(intArg0) == 2 || (varbit_task_priority_mode == 1 && varbit_10700 != intArg0) || cs2_3999(intArg0) == 1 || intArg0 == varbit_8576) {
            ifSetHide(true, Component.interface_1056.component_1056_85);
        } else {
            ifSetHide(false, Component.interface_1056.component_1056_85);
        }
        if (varbit_10700 == intArg0) {
            ifSetHide(false, Component.interface_1056.component_1056_125);
        }
    }
    ifSetSize(0, 15 + int4, 1, 0, Component.interface_1056.component_1056_92);
}
