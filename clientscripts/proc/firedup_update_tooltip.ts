/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,firedup_update_tooltip]

function firedup_update_tooltip(intArg0: number): void {
    let str0: string = "";

    switch (intArg0) {
        case 1:
            str0 = enumOp(type_int, type_string, Enum.firedup_report1, varbit_firedup_loc1);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 130]), Component.interface_575.component_575_3);
            break;
        case 2:
            str0 = enumOp(type_int, type_string, Enum.firedup_report2, varbit_firedup_loc2);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 160]), Component.interface_575.component_575_4);
            break;
        case 3:
            str0 = enumOp(type_int, type_string, Enum.firedup_report3, varbit_firedup_loc3);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_5);
            break;
        case 4:
            str0 = enumOp(type_int, type_string, Enum.firedup_report4, varbit_firedup_loc4);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_6);
            break;
        case 5:
            str0 = enumOp(type_int, type_string, Enum.firedup_report5, varbit_firedup_loc5);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_7);
            break;
        case 6:
            str0 = enumOp(type_int, type_string, Enum.firedup_report6, varbit_firedup_loc6);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_8);
            break;
        case 7:
            str0 = enumOp(type_int, type_string, Enum.firedup_report7, varbit_firedup_loc7);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_9);
            break;
        case 8:
            str0 = enumOp(type_int, type_string, Enum.firedup_report8, varbit_firedup_loc8);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_10);
            break;
        case 9:
            str0 = enumOp(type_int, type_string, Enum.firedup_report9, varbit_firedup_loc9);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_11);
            break;
        case 10:
            str0 = enumOp(type_int, type_string, Enum.firedup_report10, varbit_firedup_loc10);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_12);
            break;
        case 11:
            str0 = enumOp(type_int, type_string, Enum.firedup_report11, varbit_firedup_loc11);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_13);
            break;
        case 12:
            str0 = enumOp(type_int, type_string, Enum.firedup_report12, varbit_firedup_loc12);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_14);
            break;
        case 13:
            str0 = enumOp(type_int, type_string, Enum.firedup_report13, varbit_firedup_loc13);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_15);
            break;
        case 14:
            str0 = enumOp(type_int, type_string, Enum.firedup_report14, varbit_firedup_loc14);
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_16);
            break;
    }
    varc_tooltip_built = 0;
}
