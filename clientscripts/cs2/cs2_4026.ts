/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4026

function cs2_4026(intArg0: number): void {
    switch (intArg0) {
        case 0:
            if (ifGetHide(Component.interface_917.component_917_57) == 1) {
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_26);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_28);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_1), Component.interface_917.component_917_27);
            }
            if (ifGetHide(Component.interface_917.component_917_58) == 1) {
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_22);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_24);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_1), Component.interface_917.component_917_23);
            }
            if (ifGetHide(Component.interface_917.component_917_56) == 1) {
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_18);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_20);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_1), Component.interface_917.component_917_19);
            }
            if (ifGetHide(Component.interface_917.component_917_62) == 1) {
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_14);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_0), Component.interface_917.component_917_16);
                ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_1), Component.interface_917.component_917_15);
            }
            break;
        case 1:
            if (ifGetHide(Component.interface_917.component_917_57) == 0) {
                return;
            }
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_26);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_28);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_3), Component.interface_917.component_917_27);
            break;
        case 2:
            if (ifGetHide(Component.interface_917.component_917_58) == 0) {
                return;
            }
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_22);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_24);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_3), Component.interface_917.component_917_23);
            break;
        case 3:
            if (ifGetHide(Component.interface_917.component_917_56) == 0) {
                return;
            }
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_18);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_20);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_3), Component.interface_917.component_917_19);
            break;
        case 4:
            if (ifGetHide(Component.interface_917.component_917_62) == 0) {
                return;
            }
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_14);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_2), Component.interface_917.component_917_16);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_3), Component.interface_917.component_917_15);
            break;
    }
}
