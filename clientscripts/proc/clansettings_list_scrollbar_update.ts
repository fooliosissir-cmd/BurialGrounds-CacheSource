/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clansettings_list_scrollbar_update]

function clansettings_list_scrollbar_update(): void {
    let int0: component = Component.interface_1096.component_1096_77;
    let int1: component = Component.interface_1096.component_1096_78;
    let int2: number = 23;
    let int3: number = max(ifGetHeight(int1), (varc_clansettings_clanmate_unfiltered_count / 2 + 1) * int2);
    let int4: number = ifGetScrollY(int1);

    if (int3 > ifGetHeight(Component.interface_1096.component_1096_78)) {
        ifSetScrollSize(ifGetWidth(int1), int3, int1);
        ifSetScrollPos(0, int4, int1);
        ifSetHide(false, int0);
        proc_scrollbar_vertical(int0, int1, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    } else {
        ifSetScrollSize(ifGetWidth(int1), ifGetHeight(int1), int1);
        ifSetScrollPos(0, 0, int1);
        proc_scrollbar_vertical(int0, int1, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
}
