/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_popup_tooltip]

function xp_popup_tooltip(intArg0: component): void {
    let int1: stat = -1;

    switch (intArg0) {
        case Component.interface_1213.component_1213_30:
            int1 = 0;
            break;
        case Component.interface_1213.component_1213_31:
            int1 = 2;
            break;
        case Component.interface_1213.component_1213_32:
            int1 = 1;
            break;
        case Component.interface_1213.component_1213_33:
            int1 = 4;
            break;
        case Component.interface_1213.component_1213_34:
            int1 = 5;
            break;
        case Component.interface_1213.component_1213_35:
            int1 = 6;
            break;
        case Component.interface_1213.component_1213_36:
            int1 = 3;
            break;
        case Component.interface_1213.component_1213_37:
            int1 = 16;
            break;
        case Component.interface_1213.component_1213_38:
            int1 = 15;
            break;
        case Component.interface_1213.component_1213_39:
            int1 = 17;
            break;
        case Component.interface_1213.component_1213_40:
            int1 = 12;
            break;
        case Component.interface_1213.component_1213_41:
            int1 = 9;
            break;
        case Component.interface_1213.component_1213_42:
            int1 = 14;
            break;
        case Component.interface_1213.component_1213_43:
            int1 = 13;
            break;
        case Component.interface_1213.component_1213_44:
            int1 = 10;
            break;
        case Component.interface_1213.component_1213_45:
            int1 = 7;
            break;
        case Component.interface_1213.component_1213_46:
            int1 = 11;
            break;
        case Component.interface_1213.component_1213_47:
            int1 = 8;
            break;
        case Component.interface_1213.component_1213_48:
            int1 = 20;
            break;
        case Component.interface_1213.component_1213_49:
            int1 = 18;
            break;
        case Component.interface_1213.component_1213_50:
            int1 = 19;
            break;
        case Component.interface_1213.component_1213_51:
            int1 = 21;
            break;
        case Component.interface_1213.component_1213_52:
            int1 = 22;
            break;
        case Component.interface_1213.component_1213_53:
            int1 = 23;
            break;
        case Component.interface_1213.component_1213_54:
            int1 = 24;
            break;
        default:
            ifSetHide(true, Component.interface_1213.component_1213_4);
            return;
    }
    let str0: string = append(enumOp(type_stat, type_string, Enum.stat_to_string, int1), ": " + tostring(stat(int1)) + "/" + tostring(statBase(int1)) + "<br>");
    str0 = append(str0, "Current Xp: " + tostringLocalised(statVisibleXp(int1), 1) + "<br>");
    str0 = append(str0, "Next level: " + tostringLocalised(enumOp(type_int, type_int, Enum.xp_for_level, statBase(int1) + 1), 1) + "<br>");
    str0 = append(str0, "Remainder: " + tostringLocalised(enumOp(type_int, type_int, Enum.xp_for_level, statBase(int1) + 1) - statVisibleXp(int1), 1));
    let int2: number = parawidth(str0, 512, ifGetfontmetrics(Component.interface_1213.component_1213_6)) + 8;
    let int3: number = paraheight(str0, 512, ifGetfontmetrics(Component.interface_1213.component_1213_6)) * 12 + 8;
    ifSetSize(int2, int3, 0, 0, Component.interface_1213.component_1213_4);
    ifSetText(str0, Component.interface_1213.component_1213_6);
    ifSetHide(false, Component.interface_1213.component_1213_4);
    ifSetPosition(ifGetX(Component.interface_1213.component_1213_2) + ifGetX(intArg0) + ifGetWidth(intArg0), ifGetY(intArg0) + ifGetHeight(intArg0), 0, 0, Component.interface_1213.component_1213_4);
    ifSetOnTimer(hook(cs2_5679, "II", [event_com, intArg0]), Component.interface_1213.component_1213_4);
}
