/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_266

function cs2_266(): void {
    ifSetHide(true, Component.interface_923.component_923_2);
    ifSetHide(true, Component.interface_923.component_923_68);
    ifSetHide(true, Component.interface_923.component_923_73);

    if (varc_fishcomp_client_weight_1 == 0) {
        ifSetHide(true, Component.interface_923.component_923_3);
        ifSetText("", Component.interface_923.component_923_66);
    } else {
        ifSetHide(false, Component.interface_923.component_923_3);
        ifSetText("1", Component.interface_923.component_923_66);
    }

    if (varc_fishcomp_client_weight_2 == 0) {
        ifSetHide(true, Component.interface_923.component_923_69);
        ifSetText("", Component.interface_923.component_923_71);
    } else {
        ifSetHide(false, Component.interface_923.component_923_69);
        ifSetText("2", Component.interface_923.component_923_71);
    }

    if (varc_fishcomp_client_weight_3 == 0) {
        ifSetHide(true, Component.interface_923.component_923_74);
        ifSetText("", Component.interface_923.component_923_76);
    } else {
        ifSetHide(false, Component.interface_923.component_923_74);
        ifSetText("3", Component.interface_923.component_923_76);
    }

    if (varc_fishcomp_client_weight_1 == 0 && varc_fishcomp_client_weight_2 == 0 && varc_fishcomp_client_weight_3 == 0) {
        ifSetOnTimer(hook(cs2_6258, "", []), Component.interface_923.component_923_109);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_923.component_923_109);
        ifSetHide(false, Component.interface_923.component_923_108);
    }
}
