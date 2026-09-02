/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5208

function cs2_5208(intArg0: number): void {
    switch (intArg0) {
        case 75497500:
            if (varbit_gamecard_skin_choice == 1) {
                ifSetGraphic(Graphic.aif_bronze_icon_button_1_3, Component.interface_1152.component_1152_2);
                ifSetGraphic(Graphic.aif_bronze_icon_button_1_0, Component.interface_1152.component_1152_77);
            }
            break;
        case 75497548:
            if (varbit_gamecard_skin_choice == 0) {
                ifSetGraphic(Graphic.aif_bronze_icon_button_1_3, Component.interface_1152.component_1152_77);
                ifSetGraphic(Graphic.aif_bronze_icon_button_1_0, Component.interface_1152.component_1152_2);
            }
            break;
    }
}
