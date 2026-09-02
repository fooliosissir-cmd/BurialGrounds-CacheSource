/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2141

function cs2_2141(): void {
    ccDeleteAll(Component.interface_864.component_864_6);

    if (varp_1469 == -1) {
        return;
    }
    let int0: number = 0;
    let int1: number = 10;
    let int2: number = 0;
    let int3: number = 0;
    let str0: string = "";

    while (int2 != -1) {
        [int2, str0] = cs2_942(int3);
        if (int2 == 1) {
            int1 = int1 + cs2_2142(str0, int0, int1, int3);
            int0 = int0 + 1;
        }
        int3 = int3 + 1;
    }
    ifSetScrollSize(296, int1, Component.interface_864.component_864_6);

    if (int1 > 240) {
        proc_scrollbar_vertical(Component.interface_864.component_864_7, Component.interface_864.component_864_6, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    }
}
