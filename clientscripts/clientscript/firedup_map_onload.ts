/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,firedup_map_onload]

function firedup_map_onload(): void {
    let str0: string = enumOp(type_int, type_string, Enum.firedup_map_you_are_here, varbit_firedup_whereami);

    switch (varbit_firedup_whereami) {
        case 1:
            ifSetHide(false, Component.interface_575.component_575_17);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 130]), Component.interface_575.component_575_17);
            break;
        case 2:
            ifSetHide(false, Component.interface_575.component_575_18);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 160]), Component.interface_575.component_575_18);
            break;
        case 3:
            ifSetHide(false, Component.interface_575.component_575_19);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_19);
            break;
        case 4:
            ifSetHide(false, Component.interface_575.component_575_20);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_20);
            break;
        case 5:
            ifSetHide(false, Component.interface_575.component_575_21);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_21);
            break;
        case 6:
            ifSetHide(false, Component.interface_575.component_575_22);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_22);
            break;
        case 7:
            ifSetHide(false, Component.interface_575.component_575_23);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_23);
            break;
        case 8:
            ifSetHide(false, Component.interface_575.component_575_24);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_24);
            break;
        case 9:
            ifSetHide(false, Component.interface_575.component_575_25);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_25);
            break;
        case 10:
            ifSetHide(false, Component.interface_575.component_575_26);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_26);
            break;
        case 11:
            ifSetHide(false, Component.interface_575.component_575_27);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_27);
            break;
        case 12:
            ifSetHide(false, Component.interface_575.component_575_28);
            ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_575.component_575_2, str0, 25, 200]), Component.interface_575.component_575_28);
            break;
        default:
            return;
    }
    varc_tooltip_built = 0;

    switch (varbit_firedup_whereami) {
        case 1:
            if (varbit_firedup_bird1 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 2:
            if (varbit_firedup_bird2 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 3:
            if (varbit_firedup_bird3 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 4:
            if (varbit_firedup_bird4 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 5:
            if (varbit_firedup_bird5 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 6:
            if (varbit_firedup_bird6 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 7:
            if (varbit_firedup_bird7 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 8:
            if (varbit_firedup_bird8 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 9:
            if (varbit_firedup_bird9 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 10:
            if (varbit_firedup_bird10 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 11:
            if (varbit_firedup_bird11 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        case 12:
            if (varbit_firedup_bird12 == 1) {
                cs2_804();
            } else {
                firedup_map_info(varbit_firedup_whereami);
            }
            break;
        default:
            return;
    }
}
