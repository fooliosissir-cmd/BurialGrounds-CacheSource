/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4810

function cs2_4810(): void {
    let int0: number = 1;

    ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_391);
    int0 = int0 + 13;
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_418);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_418);

    if (ifGetHeight(Component.interface_1258.component_1258_406) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_392);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_392);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_406);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_406);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_392);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_406);
    }

    if (ifGetHeight(Component.interface_1258.component_1258_394) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_393);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_393);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_394);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_394);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_393);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_394);
    }
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_430);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_430);
    ifSetScrollSize(0, int0, Component.interface_1258.component_1258_390);

    if (ifGetHide(Component.interface_1258.component_1258_390) == 0) {
        proc_scrollbar_vertical(Component.interface_1258.component_1258_238, Component.interface_1258.component_1258_390, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    int0 = 1;
    ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_319);
    int0 = int0 + 13;
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_350);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_350);

    if (ifGetHeight(Component.interface_1258.component_1258_336) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_320);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_320);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_336);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_336);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_320);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_336);
    }

    if (ifGetHeight(Component.interface_1258.component_1258_322) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_321);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_321);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_322);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_322);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_321);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_322);
    }
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_364);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_364);
    ifSetScrollSize(0, int0, Component.interface_1258.component_1258_318);

    if (ifGetHide(Component.interface_1258.component_1258_318) == 0) {
        proc_scrollbar_vertical(Component.interface_1258.component_1258_238, Component.interface_1258.component_1258_318, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    int0 = 1;
    ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_241);
    int0 = int0 + 13;
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_276);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_276);

    if (ifGetHeight(Component.interface_1258.component_1258_260) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_242);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_242);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_260);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_260);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_242);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_260);
    }

    if (ifGetHeight(Component.interface_1258.component_1258_244) > 0) {
        ifSetHide(false, Component.interface_1258.component_1258_243);
        ifSetPosition(4, int0, 0, 0, Component.interface_1258.component_1258_243);
        int0 = int0 + 13;
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_244);
        int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_244);
    } else {
        ifSetHide(true, Component.interface_1258.component_1258_243);
        ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_244);
    }
    ifSetPosition(0, int0, 0, 0, Component.interface_1258.component_1258_292);
    int0 = int0 + 1 + ifGetHeight(Component.interface_1258.component_1258_292);
    ifSetScrollSize(0, int0, Component.interface_1258.component_1258_240);

    if (ifGetHide(Component.interface_1258.component_1258_240) == 0) {
        proc_scrollbar_vertical(Component.interface_1258.component_1258_238, Component.interface_1258.component_1258_240, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
}
