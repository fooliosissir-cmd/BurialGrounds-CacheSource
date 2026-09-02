/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1456

function cs2_1456(): void {
    let int0: number = 0;
    let int1: number = 8;
    let int2: number = 5;
    let int3: number = 0;
    let int4: number = invSize(95);

    cs2_1464();
    let [int5, int6] = cs2_1467(int3);

    while (int3 <= 9) {
        int0 = int5;
        if (int3 != 0) {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_1611, int3));
            ifSetPosition(int1 - 2, int2 - 2, 0, 0, enumOp(type_int, type_component, Enum.enum_1611, int3));
        }
        while (int0 < int6) {
            if (ccFind(Component.interface_762.component_762_95, int0) == 1) {
                if (invGetNum(95, int0) != 0) {
                    ccSetPosition(int1, int2, 0, 0);
                    ccSetHide(false);
                    int1 = int1 + 44;
                    if (int1 >= 44 * 10) {
                        int1 = 8;
                        int2 = int2 + 44;
                    }
                } else {
                    int0 = 1000;
                }
            }
            int0 = int0 + 1;
        }
        if (int1 != 8) {
            ifSetPosition(int1, int2, 0, 0, enumOp(type_int, type_component, Enum.enum_1612, int3));
            ifSetSize(44 * 10 - int1, 32, 0, 0, enumOp(type_int, type_component, Enum.enum_1612, int3));
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_1612, int3));
            int2 = int2 + 44;
        }
        if (int3 == 0) {
            int3 = 2;
        } else {
            int3 = int3 + 1;
        }
        [int5, int6] = cs2_1467(int3);
        if (int5 == int6) {
            int3 = 100;
        }
        if (enumOp(type_int, type_component, Enum.enum_1610, int3) != -1) {
            ifSetHide(false, enumOp(type_int, type_component, Enum.enum_1610, int3));
            ifSetPosition(0, int2, 0, 0, enumOp(type_int, type_component, Enum.enum_1610, int3));
            int2 = int2 + 15;
            int1 = 0;
        }
    }
    ifSetScrollSize(ifGetWidth(Component.interface_762.component_762_95), int2, Component.interface_762.component_762_95);
    ifSetScrollPos(0, varc_203, Component.interface_762.component_762_95);
    ccDeleteAll(Component.interface_762.component_762_116);

    if (int2 > ifGetHeight(Component.interface_762.component_762_95)) {
        proc_scrollbar_vertical(Component.interface_762.component_762_116, Component.interface_762.component_762_95, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        scrollbar_ondrag_doscroll(Component.interface_762.component_762_116, Component.interface_762.component_762_95, ifGetScrollY(Component.interface_762.component_762_95), 1);
    }
}
