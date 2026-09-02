/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6525

function cs2_6525(): void {
    let int0: boolean = true;
    let int1: graphic = Graphic.graphic_11718;
    let int2: graphic = Graphic.graphic_11719;
    let int3: graphic = Graphic.graphic_11720;

    ifSetGraphic(int1, Component.interface_1317.component_1317_29);
    hookMouseExit(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_29, int1]), Component.interface_1317.component_1317_29);
    hookMouseEnter(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_29, int2]), Component.interface_1317.component_1317_29);
    ifSetOnRelease(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_29, int2]), Component.interface_1317.component_1317_29);
    ifSetOnClick(hook(graphic_swapper, "Id", [Component.interface_1317.component_1317_29, int3]), Component.interface_1317.component_1317_29);
    ifSetHide(int0, Component.interface_1317.component_1317_30);
    cs2_6559();

    if (mapLang() == 0) {
        int1 = Graphic.graphic_11740;
    } else if (mapLang() == 1) {
        int1 = Graphic.graphic_11742;
    } else if (mapLang() == 2) {
        int1 = Graphic.graphic_11743;
    } else if (mapLang() == 3) {
        int1 = Graphic.graphic_11741;
    }
    ifSetGraphic(int1, Component.interface_1307.component_1307_74);
    let int4: number = 0;

    while (int4 <= 25) {
        cs2_6556(int4);
        int4 = 1 + int4;
    }
}
