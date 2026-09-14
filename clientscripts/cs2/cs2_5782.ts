/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5782

function cs2_5782(): void {
    let int0: struct = -1;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = -1;
    let int4: component = -1;
    let int5: number = 0;
    let int6: number = -1;
    let int7: component = -1;
    let int8: number = -1;
    let int9: component = -1;
    let int10: component = -1;
    let int11: number = -1;
    let int12: number = 0;
    let str0: string = "null";

    ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3491, varbit_8575), Component.interface_1056.component_1056_108);

    if (varbit_task_priority_mode == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8698), Component.interface_1056.component_1056_108);
    }

    while (int2 < 6) {
        switch (int2) {
            case 0:
                int1 = varbit_8587;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8587);
                int4 = Component.interface_1056.component_1056_61;
                int9 = Component.interface_1056.component_1056_98;
                int7 = Component.interface_1056.component_1056_97;
                int10 = Component.interface_1056.component_1056_96;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8587, 1, event_opindex]), int10);
                break;
            case 1:
                int1 = varbit_8588;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8588);
                int4 = Component.interface_1056.component_1056_139;
                int9 = Component.interface_1056.component_1056_141;
                int7 = Component.interface_1056.component_1056_140;
                int10 = Component.interface_1056.component_1056_137;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8588, 2, event_opindex]), int10);
                break;
            case 2:
                int1 = varbit_8589;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8589);
                int4 = Component.interface_1056.component_1056_144;
                int9 = Component.interface_1056.component_1056_146;
                int7 = Component.interface_1056.component_1056_145;
                int10 = Component.interface_1056.component_1056_142;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8589, 3, event_opindex]), int10);
                break;
            case 3:
                int1 = varbit_8590;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8590);
                int4 = Component.interface_1056.component_1056_149;
                int9 = Component.interface_1056.component_1056_151;
                int7 = Component.interface_1056.component_1056_150;
                int10 = Component.interface_1056.component_1056_147;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8590, 4, event_opindex]), int10);
                break;
            case 4:
                int1 = varbit_8591;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8591);
                int4 = Component.interface_1056.component_1056_154;
                int9 = Component.interface_1056.component_1056_156;
                int7 = Component.interface_1056.component_1056_155;
                int10 = Component.interface_1056.component_1056_152;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8591, 5, event_opindex]), int10);
                break;
            case 5:
                int1 = varbit_8592;
                int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8592);
                int4 = Component.interface_1056.component_1056_160;
                int9 = Component.interface_1056.component_1056_162;
                int7 = Component.interface_1056.component_1056_161;
                int10 = Component.interface_1056.component_1056_157;
                ifSetOnOp(hook(cs2_3976, "iii", [varbit_8592, 6, event_opindex]), int10);
                break;
        }
        if (varbit_8577 == int2 + 1 && cs2_3999(varbit_8576) == 0) {
            int1 = varbit_8576;
            int0 = enumOp(type_int, type_struct, Enum.enum_3483, varbit_8576);
            ifSetOnOp(hook(cs2_3976, "iii", [varbit_8576, int12, event_opindex]), int10);
        }
        int0 = task_get_data(structParam(int0, Param.param_1268));
        str0 = " -" + "<br>";
        str0 = append(structParam(int0, Param.task_name), str0);
        str0 = append(str0, structParam(int0, Param.task_details));
        if (varbit_tutorial_version == 3 && (varp_tutorial < 1000 || varbit_tutorial3_postquest < 5)) {
            str0 = structParam(int0, Param.task_name);
        }
        if (int0 != -1) {
            cs2_5796(int1, 1, int4, -1, -1, int9, -1, int7);
            if (cs2_3999(int1) == 1) {
                ifSetOnMouseRepeat(noHook(""), int10);
                ifSetOp(1, "", int10);
                ifSetOp(2, "", int10);
            } else {
                ifSetOnMouseRepeat(hook(cs2_3981, "Is", [int10, str0]), int10);
                ifSetOp(1, "Summary", int10);
                if (varp_tutorial < 1000 || varbit_task_priority_mode == 1) {
                    ifSetOp(2, "", int10);
                } else {
                    ifSetOp(2, "Pin/Unpin Task", int10);
                }
            }
        }
        int2 = int2 + 1;
    }
    ifSetHide(false, Component.interface_1056.component_1056_107);
    ifSetHide(false, Component.interface_1056.component_1056_108);
    cs2_3975();
}
