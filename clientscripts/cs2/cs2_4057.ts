/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4057

function cs2_4057(intArg0: component): void {
    if (varc_1432 == 1 || ifGetHide(Component.interface_1058.component_1058_10) == 0) {
        return;
    }

    if (ifGetHide(Component.interface_1058.component_1058_10) == 1 && ifGetHide(Component.interface_1058.component_1058_9) == 1) {
        ifSetHide(false, Component.interface_1058.component_1058_10);
        ifSetPosition(0, 1 - ifGetHeight(Component.interface_1058.component_1058_10), 1, 0, Component.interface_1058.component_1058_10);
        varc_1432 = 1;
        ifClearops(Component.interface_1058.component_1058_2);
        ifClearops(Component.interface_1058.component_1058_3);
        ifSetOnTimer(hook(cs2_4059, "II", [Component.interface_1058.component_1058_10, intArg0]), intArg0);
    } else {
        varc_1432 = 1;
        ifClearops(Component.interface_1058.component_1058_2);
        ifClearops(Component.interface_1058.component_1058_3);
        ifSetOnTimer(hook(cs2_4058, "III", [Component.interface_1058.component_1058_9, Component.interface_1058.component_1058_10, intArg0]), intArg0);
    }
    ifSetGraphic(Graphic.graphic_4465, Component.interface_1058.component_1058_32);
    ifSetGraphic(Graphic.graphic_2657, Component.interface_1058.component_1058_33);
    ifSetGraphic(Graphic.graphic_2657, Component.interface_1058.component_1058_34);
    ifSetGraphic(Graphic.graphic_4464, Component.interface_1058.component_1058_36);
    ifSetGraphic(Graphic.graphic_2659, Component.interface_1058.component_1058_37);
    ifSetGraphic(Graphic.graphic_2659, Component.interface_1058.component_1058_38);

    if (varbit_warguild_tokens_strength < 200 && varbit_warguild_tokens_defence < 200 && varbit_warguild_tokens_attack < 200 && varbit_warguild_tokens_combat < 200 && varbit_warguild_tokens_balance < 200) {
        cs2_4061();
    } else {
        cs2_4062();
    }
    varc_1431 = 1;
}
