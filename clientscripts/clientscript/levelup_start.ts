/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,levelup_start]

function levelup_start(): void {
    let int0: number = 0;

    if (varc_1756 == 0) {
        ifSetHide(true, Component.interface_1216.component_1216_11);
        return;
    }
    ifSetPosition(0, 0, 1, 0, Component.interface_1216.component_1216_11);
    ifSetGraphic(enumOp(type_int, type_graphic, Enum.stat2icon, varc_1756), Component.interface_1216.component_1216_15);
    ifSetTrans(0, Component.interface_1216.component_1216_15);
    ifSetTrans(0, Component.interface_1216.component_1216_5);
    ifSetTrans(0, Component.interface_1216.component_1216_6);
    ifSetTrans(0, Component.interface_1216.component_1216_4);
    ifSetTrans(0, Component.interface_1216.component_1216_7);
    ifSetTrans(255, Component.interface_1216.component_1216_12);
    ifSetTrans(255, Component.interface_1216.component_1216_14);
    ifSetTrans(255, Component.interface_1216.component_1216_13);
    ifSetTrans(0, Component.interface_1216.component_1216_9);
    ifSetTrans(0, Component.interface_1216.component_1216_8);
    ifSetHide(true, Component.interface_1216.component_1216_2);
    ifSetHide(true, Component.interface_1216.component_1216_17);
    ifSetHide(true, Component.interface_1216.component_1216_1);
    let int1: number = 0;
    let int2: stat = enumOp(type_int, type_stat, Enum.int_to_stat, varc_1756);
    ifSetGraphic(Graphic.graphic_9233, Component.interface_1216.component_1216_8);
    ifSetGraphic(Graphic.graphic_9240, Component.interface_1216.component_1216_4);
    ifSetGraphic(Graphic.graphic_9239, Component.interface_1216.component_1216_5);
    ifSetGraphic(Graphic.graphic_9241, Component.interface_1216.component_1216_6);
    ifSet2dangle(0, Component.interface_1216.component_1216_9);

    switch (mapLang()) {
        case 1:
            ifSetSize(240, 33, 0, 0, Component.interface_1216.component_1216_10);
            ifSetGraphic(Graphic.graphic_9242, Component.interface_1216.component_1216_7);
            break;
        case 2:
            ifSetSize(240, 33, 0, 0, Component.interface_1216.component_1216_10);
            ifSetGraphic(Graphic.graphic_9243, Component.interface_1216.component_1216_7);
            break;
        case 3:
            ifSetSize(220, 33, 0, 0, Component.interface_1216.component_1216_10);
            ifSetGraphic(Graphic.graphic_9244, Component.interface_1216.component_1216_7);
            break;
        default:
            ifSetSize(150, 33, 0, 0, Component.interface_1216.component_1216_10);
            ifSetGraphic(Graphic.graphic_9245, Component.interface_1216.component_1216_7);
            break;
    }

    if (enumOp(type_stat, type_stat, Enum.stat_f2p_list, int2) == -1) {
        ifSetGraphic(Graphic.graphic_9263, Component.interface_1216.component_1216_8);
        ifSetGraphic(Graphic.graphic_9257, Component.interface_1216.component_1216_4);
        ifSetGraphic(Graphic.graphic_9256, Component.interface_1216.component_1216_5);
        ifSetGraphic(Graphic.graphic_9258, Component.interface_1216.component_1216_6);
        switch (mapLang()) {
            case 1:
                ifSetSize(240, 33, 0, 0, Component.interface_1216.component_1216_10);
                ifSetGraphic(Graphic.graphic_9259, Component.interface_1216.component_1216_7);
                break;
            case 2:
                ifSetSize(240, 33, 0, 0, Component.interface_1216.component_1216_10);
                ifSetGraphic(Graphic.graphic_9260, Component.interface_1216.component_1216_7);
                break;
            case 3:
                ifSetSize(220, 33, 0, 0, Component.interface_1216.component_1216_10);
                ifSetGraphic(Graphic.graphic_9261, Component.interface_1216.component_1216_7);
                break;
            default:
                ifSetSize(150, 33, 0, 0, Component.interface_1216.component_1216_10);
                ifSetGraphic(Graphic.graphic_9262, Component.interface_1216.component_1216_7);
                break;
        }
    }
    let int3: number = statBase(int2);
    ifSetHide(false, Component.interface_1216.component_1216_12);
    ifSetHide(false, Component.interface_1216.component_1216_13);
    ifSetHide(false, Component.interface_1216.component_1216_14);

    if (int3 < 10) {
        ifSetPosition(0, 45, 1, 0, Component.interface_1216.component_1216_12);
        ifSetHide(true, Component.interface_1216.component_1216_14);
        ifSetHide(true, Component.interface_1216.component_1216_13);
        cs2_517(int3, Component.interface_1216.component_1216_12);
    } else if (int3 < 100) {
        ifSetPosition(-10, 45, 1, 0, Component.interface_1216.component_1216_12);
        ifSetPosition(10, 45, 1, 0, Component.interface_1216.component_1216_14);
        cs2_517(int3 / 10, Component.interface_1216.component_1216_12);
        cs2_517(int3 % 10, Component.interface_1216.component_1216_14);
        ifSetHide(true, Component.interface_1216.component_1216_13);
    } else {
        ifSetPosition(-20, 45, 1, 0, Component.interface_1216.component_1216_12);
        ifSetPosition(0, 45, 1, 0, Component.interface_1216.component_1216_13);
        ifSetPosition(20, 45, 1, 0, Component.interface_1216.component_1216_14);
        cs2_517(int3 / 100, Component.interface_1216.component_1216_12);
        cs2_517((int3 - 100) / 10, Component.interface_1216.component_1216_13);
        cs2_517(int3 % 10, Component.interface_1216.component_1216_14);
    }

    if (int3 == 99 || int3 == 120) {
        ifSetHide(false, Component.interface_1216.component_1216_2);
        ifSetModel(Model.model_32143, Component.interface_1216.component_1216_1);
        int0 = 8;
    } else {
        ifSetModel(Model.model_32167, Component.interface_1216.component_1216_1);
    }

    if (enumOp(type_stat, type_stat, Enum.stat_f2p_list, int2) == -1) {
        int1 = 1;
    }
    ifSetOnTimer(hook(cs2_3336, "iiii", [clientClock() + 100, clientClock() + 200, clientClock() + 500, varc_1756]), Component.interface_1216.component_1216_16);
    ifSetHide(false, Component.interface_1216.component_1216_11);
    ifSetHide(true, Component.interface_1213.component_1213_2);
    ifSetHide(true, Component.interface_1213.component_1213_4);
    let int4: number = random(150);
    let int5: number = random(50);

    if (int3 % 10 == 0) {
        int0 = 4;
    }

    if (int0 > 0) {
        ifSetOnTimer(hook(cs2_337, "ii", [int0, clientClock() + 25]), Component.interface_1216.component_1216_8);
    }
    varc_1756 = 0;
}
