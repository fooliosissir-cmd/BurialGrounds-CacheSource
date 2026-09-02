/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6390

function cs2_6390(): void {
    let int0: graphic = -1;
    let int1: graphic = -1;
    let int2: graphic = -1;
    let int3: boolean = false;

    if (mapLang() == 0) {
        int0 = Graphic.graphic_11740;
    } else if (mapLang() == 1) {
        int0 = Graphic.graphic_11742;
    } else if (mapLang() == 2) {
        int0 = Graphic.graphic_11743;
    } else if (mapLang() == 3) {
        int0 = Graphic.graphic_11741;
    }
    ifSetGraphic(int0, Component.interface_1307.component_1307_74);

    if (varbit_11651 == 1) {
        int3 = true;
        int0 = Graphic.graphic_11718;
        int1 = Graphic.graphic_11719;
        int2 = Graphic.graphic_11720;
    } else {
        int3 = false;
        int0 = Graphic.graphic_11727;
        int1 = Graphic.graphic_11728;
        int2 = Graphic.graphic_11729;
    }
    ifSetGraphic(int0, Component.interface_1307.component_1307_28);
    hookMouseExit(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_28, int0]), Component.interface_1307.component_1307_28);
    hookMouseEnter(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_28, int1]), Component.interface_1307.component_1307_28);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_28, int1]), Component.interface_1307.component_1307_28);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_28, int2]), Component.interface_1307.component_1307_28);
    ifSetHide(int3, Component.interface_1307.component_1307_29);

    if (varbit_11652 == 1) {
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
    ifSetGraphic(int0, Component.interface_1307.component_1307_45);
    hookMouseExit(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_45, int0]), Component.interface_1307.component_1307_45);
    hookMouseEnter(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_45, int1]), Component.interface_1307.component_1307_45);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_45, int1]), Component.interface_1307.component_1307_45);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_45, int2]), Component.interface_1307.component_1307_45);
    ifSetHide(int3, Component.interface_1307.component_1307_46);

    if (varbit_11653 == 1) {
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
    ifSetGraphic(int0, Component.interface_1307.component_1307_47);
    hookMouseExit(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_47, int0]), Component.interface_1307.component_1307_47);
    hookMouseEnter(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_47, int1]), Component.interface_1307.component_1307_47);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_47, int1]), Component.interface_1307.component_1307_47);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1307.component_1307_47, int2]), Component.interface_1307.component_1307_47);
    ifSetHide(int3, Component.interface_1307.component_1307_48);
    ccDeleteAll(Component.interface_1307.component_1307_36);
}
