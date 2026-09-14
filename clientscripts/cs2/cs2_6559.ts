/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6559

function cs2_6559(): void {
    let int0: graphic = -1;
    let int1: graphic = -1;
    let int2: graphic = -1;
    let int3: boolean = false;

    if (varbit_megagames_shop2_bought_obj0 == 1) {
        int3 = true;
        int0 = Graphic.graphic_11724;
        int1 = Graphic.graphic_11725;
        int2 = Graphic.graphic_11726;
    } else {
        int3 = false;
        int0 = Graphic.graphic_11733;
        int1 = Graphic.graphic_11734;
        int2 = Graphic.graphic_11735;
    }
    ifSetGraphic(int0, Component.interface_1317.component_1317_46);
    ifSetOnMouseLeave(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_46, int0]), Component.interface_1317.component_1317_46);
    ifSetOnMouseOver(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_46, int1]), Component.interface_1317.component_1317_46);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_46, int1]), Component.interface_1317.component_1317_46);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_46, int2]), Component.interface_1317.component_1317_46);
    ifSetHide(int3, Component.interface_1317.component_1317_47);

    if (varbit_megagames_shop2_bought_obj8 == 1) {
        int3 = true;
        int0 = Graphic.graphic_11721;
        int1 = Graphic.graphic_11722;
        int2 = Graphic.graphic_11723;
    } else {
        int3 = false;
        int0 = Graphic.graphic_11730;
        int1 = Graphic.graphic_11731;
        int2 = Graphic.graphic_11732;
    }
    ifSetGraphic(int0, Component.interface_1317.component_1317_48);
    ifSetOnMouseLeave(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_48, int0]), Component.interface_1317.component_1317_48);
    ifSetOnMouseOver(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_48, int1]), Component.interface_1317.component_1317_48);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_48, int1]), Component.interface_1317.component_1317_48);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_48, int2]), Component.interface_1317.component_1317_48);
    ifSetHide(int3, Component.interface_1317.component_1317_49);
}
