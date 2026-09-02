/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5785

function cs2_5785(intArg0: number): void {
    let int1: number = 98;
    let int2: struct = task_get_data(intArg0);

    if (int2 == -1) {
        return;
    }
    cs2_5796(intArg0, 0, Component.interface_1224.component_1224_6, Component.interface_1224.component_1224_5, Component.interface_1224.component_1224_1, -1, -1, -1);
    let str0: string = structParam(int2, Param.param_2225);
    let int3: number = 15 * paraheight(str0, 144, Graphic.verdana_11pt_regular);
    ifSetText(str0, Component.interface_1224.component_1224_0);
    ifSetSize(ifGetWidth(Component.interface_1224.component_1224_2), min(int3, int1), 0, 0, Component.interface_1224.component_1224_2);

    if (int3 < int1) {
        ifSetHide(true, Component.interface_1224.component_1224_4);
        ifSetSize(3, 0, 1, 1, Component.interface_1224.component_1224_3);
    } else {
        int3 = int3 + 5;
        ifSetScrollSize(0, max(int3, ifGetHeight(Component.interface_1224.component_1224_3)), Component.interface_1224.component_1224_3);
        ifSetScrollPos(0, 0, Component.interface_1224.component_1224_3);
        ifSetSize(ifGetWidth(Component.interface_1224.component_1224_4) + 4, 0, 1, 1, Component.interface_1224.component_1224_3);
        ifSetHide(false, Component.interface_1224.component_1224_4);
        proc_scrollbar_vertical(Component.interface_1224.component_1224_4, Component.interface_1224.component_1224_3, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    ifSetSize(ifGetWidth(Component.interface_1224.component_1224_7), min(261, int3 + 155), 0, 0, Component.interface_1224.component_1224_7);
    ifSetSize(190, 261, 0, 0, Component.interface_746.component_746_9);
}
