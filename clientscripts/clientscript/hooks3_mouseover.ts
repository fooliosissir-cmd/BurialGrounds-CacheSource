/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,hooks3_mouseover]

function hooks3_mouseover(intArg0: component): void {
    if (varbit_hooks3_selectedability < 1) {
        switch (intArg0) {
            case Component.interface_1153.component_1153_7:
                if (varbit_hooks3_consumed_air > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_26:
                if (varbit_hooks3_consumed_mind > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_28:
                if (varbit_hooks3_consumed_water > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_30:
                if (varbit_hooks3_consumed_earth > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_32:
                if (varbit_hooks3_consumed_fire > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_34:
                if (varbit_hooks3_consumed_body > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_1_0, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_81:
                if (varbit_hooks3_consumed_cosmic > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_5:
                if (varbit_hooks3_consumed_chaos > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_84:
                if (varbit_hooks3_consumed_astral > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_86:
                if (varbit_hooks3_consumed_nature > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_88:
                if (varbit_hooks3_consumed_law > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_90:
                if (varbit_hooks3_consumed_death > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_92:
                if (varbit_hooks3_consumed_blood > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            case Component.interface_1153.component_1153_94:
                if (varbit_hooks3_consumed_soul > 0) {
                    ifSetGraphic(Graphic.aif_wickhood_button_2_2, intArg0);
                } else {
                    return;
                }
                break;
            default:
                return;
        }
        return;
    }
}
