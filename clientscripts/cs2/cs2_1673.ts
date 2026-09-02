/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1673

function cs2_1673(): void {
    ccDeleteAll(Component.interface_84.component_84_20);
    ccDeleteAll(Component.interface_84.component_84_22);
    ccDeleteAll(Component.interface_84.component_84_21);
    let int0: number = 0;
    let int1: number = 264;
    ifSetPosition(ifGetX(Component.interface_84.component_84_20), int0, 0, 0, Component.interface_84.component_84_20);
    let [int2, int3] = cs2_1674(varbit_champions_reward_followerstate);
    ifSetScrollSize(0, int2, Component.interface_84.component_84_22);
    ifSetScrollPos(0, int3, Component.interface_84.component_84_22);
    int2 = int2 + 4;

    if (int2 > int1) {
        ifSetSize(16, 4, 0, 1, Component.interface_84.component_84_21);
        ifSetSize(20, 4, 1, 1, Component.interface_84.component_84_22);
        if (ccFind(Component.interface_84.component_84_21, 0) == 0) {
            proc_scrollbar_vertical(Component.interface_84.component_84_21, Component.interface_84.component_84_22, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        }
        scrollbar_resize(Component.interface_84.component_84_21, Component.interface_84.component_84_22, ifGetScrollY(Component.interface_84.component_84_22));
    } else {
        ifSetSize(0, 4, 0, 1, Component.interface_84.component_84_21);
        ifSetSize(4, 4, 1, 1, Component.interface_84.component_84_22);
    }

    if (int2 < 111) {
        ifSetSize(350, 111 + 68, 0, 0, Component.interface_84.component_84_0);
    } else if (int2 < int1) {
        ifSetSize(350, int2 + 70, 0, 0, Component.interface_84.component_84_0);
    } else {
        ifSetSize(350, int1 + 70, 0, 0, Component.interface_84.component_84_0);
    }
}
