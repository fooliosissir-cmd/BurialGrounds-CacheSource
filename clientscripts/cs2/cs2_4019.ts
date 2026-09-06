/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4019

function cs2_4019(intArg0: number): void {
    switch (intArg0) {
        case 0:
            ifSetHide(false, Component.interface_917.component_917_57);
            ifSetHide(true, Component.interface_917.component_917_58);
            ifSetHide(true, Component.interface_917.component_917_56);
            ifSetHide(true, Component.interface_917.component_917_62);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_26);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_28);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_5), Component.interface_917.component_917_27);
            break;
        case 1:
            ifSetHide(true, Component.interface_917.component_917_57);
            ifSetHide(false, Component.interface_917.component_917_58);
            ifSetHide(true, Component.interface_917.component_917_56);
            ifSetHide(true, Component.interface_917.component_917_62);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_22);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_24);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_5), Component.interface_917.component_917_23);
            break;
        case 2:
            ifSetHide(true, Component.interface_917.component_917_57);
            ifSetHide(true, Component.interface_917.component_917_58);
            ifSetHide(false, Component.interface_917.component_917_56);
            ifSetHide(true, Component.interface_917.component_917_62);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_18);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_20);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_5), Component.interface_917.component_917_19);
            break;
        case 3:
            ifSetHide(true, Component.interface_917.component_917_57);
            ifSetHide(true, Component.interface_917.component_917_58);
            ifSetHide(true, Component.interface_917.component_917_56);
            ifSetHide(false, Component.interface_917.component_917_62);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_14);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_4), Component.interface_917.component_917_16);
            ifSetGraphic(gameframe_skin_graphic(Graphic.task_tab_5), Component.interface_917.component_917_15);
            break;
    }
    cs2_4026(0);
}
