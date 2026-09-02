/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_443

function cs2_443(): void {
    let int0: number = 5;
    let int1: number = 5;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 1;
    let int5: number = 0;
    let int6: number = 1;

    while (int0 < 270) {
        while (int1 < 200) {
            ccCreate(Component.interface_1022.component_1022_19, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int1, int0, 0, 0);
            if (invGetobj(583, int2) != -1) {
                ccSetObject(invGetobj(583, int2), invGetNum(583, int2));
                ccSetOpBase("<col=ff981f>" + ocName(invGetobj(583, int2)));
                ccSetOp(1, "Remove 1");
                ccSetOp(2, "Remove 5");
                ccSetOp(3, "Remove 10");
                ccSetOp(4, "Remove All");
                ccSetOp(5, "Remove X");
                ccSetOp(10, "Examine");
                ccSetOutline(1);
                int3 = int3 + 1;
                if (int3 > 5) {
                    int4 = int4 + 1;
                    int3 = 1;
                }
            }
            ccCreate(Component.interface_1022.component_1022_14, 5, int2);
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(int1, int0, 0, 0);
            if (invotherGetobj(583, int2) != -1) {
                ccSetObject(invotherGetobj(583, int2), invotherGetNum(583, int2));
                ccSetOpBase("<col=ff981f>" + ocName(invotherGetobj(583, int2)));
                ccSetOp(1, "Examine");
                ccSetOutline(1);
                int5 = int5 + 1;
                if (int5 > 5) {
                    int6 = int6 + 1;
                    int5 = 1;
                }
            }
            int1 = int1 + 40;
            int2 = int2 + 1;
        }
        int0 = int0 + 40;
        int1 = 5;
    }
    let int7: number = int4 * 40 + 5;

    if (int7 > ifGetHeight(Component.interface_1022.component_1022_19)) {
        ifSetScrollSize(0, int7, Component.interface_1022.component_1022_19);
        proc_scrollbar_vertical(Component.interface_1022.component_1022_20, Component.interface_1022.component_1022_19, Graphic.graphic_2598, Graphic.graphic_2595, Graphic.graphic_2596, Graphic.graphic_2597, Graphic.graphic_2593, Graphic.graphic_2594);
        ifSetPosition(6, ifGetY(Component.interface_1022.component_1022_19), 0, 0, Component.interface_1022.component_1022_19);
    } else {
        ifSetScrollSize(0, 0, Component.interface_1022.component_1022_19);
        ifSetScrollPos(0, 0, Component.interface_1022.component_1022_19);
        ccDeleteAll(Component.interface_1022.component_1022_20);
        ifSetPosition(16, ifGetY(Component.interface_1022.component_1022_19), 0, 0, Component.interface_1022.component_1022_19);
    }
    let int8: number = int6 * 40 + 5;

    if (int8 > ifGetHeight(Component.interface_1022.component_1022_14)) {
        ifSetScrollSize(0, int8, Component.interface_1022.component_1022_14);
        proc_scrollbar_vertical(Component.interface_1022.component_1022_16, Component.interface_1022.component_1022_14, Graphic.graphic_2598, Graphic.graphic_2595, Graphic.graphic_2596, Graphic.graphic_2597, Graphic.graphic_2593, Graphic.graphic_2594);
        ifSetPosition(6, ifGetY(Component.interface_1022.component_1022_14), 0, 0, Component.interface_1022.component_1022_14);
    } else {
        ifSetScrollSize(0, 0, Component.interface_1022.component_1022_14);
        ifSetScrollPos(0, 0, Component.interface_1022.component_1022_14);
        ccDeleteAll(Component.interface_1022.component_1022_16);
        ifSetPosition(16, ifGetY(Component.interface_1022.component_1022_14), 0, 0, Component.interface_1022.component_1022_14);
    }
}
