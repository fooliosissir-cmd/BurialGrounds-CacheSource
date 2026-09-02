/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4065

function cs2_4065(intArg0: component): void {
    cs2_4066();

    switch (intArg0) {
        case Component.interface_1058.component_1058_22:
            ifSetGraphic(Graphic.graphic_4444, Component.interface_1058.component_1058_19);
            ifSetText("Currently selected: Balance tokens - earned through the keg balancing minigame.", Component.interface_1058.component_1058_46);
            ifSetPosition(-160, 13, 1, 0, intArg0);
            if (varbit_warguild_tokens_balance < 200) {
                cs2_4061();
            } else {
                cs2_4062();
            }
            break;
        case Component.interface_1058.component_1058_23:
            ifSetGraphic(Graphic.graphic_4445, Component.interface_1058.component_1058_17);
            ifSetText("Currently selected: Strength tokens - earned through the shot put minigame.", Component.interface_1058.component_1058_46);
            ifSetPosition(-80, 13, 1, 0, intArg0);
            if (varbit_warguild_tokens_strength < 200) {
                cs2_4061();
            } else {
                cs2_4062();
            }
            break;
        case Component.interface_1058.component_1058_24:
            ifSetGraphic(Graphic.graphic_4446, Component.interface_1058.component_1058_15);
            ifSetText("Currently selected: Combat tokens - earned through the animator minigame.", Component.interface_1058.component_1058_46);
            ifSetPosition(0, 13, 1, 0, intArg0);
            if (varbit_warguild_tokens_combat < 200) {
                cs2_4061();
            } else {
                cs2_4062();
            }
            break;
        case Component.interface_1058.component_1058_26:
            ifSetGraphic(Graphic.graphic_4447, Component.interface_1058.component_1058_13);
            ifSetText("Currently selected: Defence tokens - earned through the catapult minigame.", Component.interface_1058.component_1058_46);
            ifSetPosition(80, 13, 1, 0, intArg0);
            if (varbit_warguild_tokens_defence < 200) {
                cs2_4061();
            } else {
                cs2_4062();
            }
            break;
        case Component.interface_1058.component_1058_25:
            ifSetGraphic(Graphic.graphic_4448, Component.interface_1058.component_1058_11);
            ifSetText("Currently selected: Attack tokens - earned through the dummy minigame.", Component.interface_1058.component_1058_46);
            ifSetPosition(160, 13, 1, 0, intArg0);
            if (varbit_warguild_tokens_attack < 200) {
                cs2_4061();
            } else {
                cs2_4062();
            }
            break;
    }
}
