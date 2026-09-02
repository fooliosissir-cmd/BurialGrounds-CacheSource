/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6306

function cs2_6306(): void {
    ifSetHide(false, Component.interface_1301.component_1301_0);
    ifSetHide(false, Component.interface_1301.component_1301_1);
    ifSetHide(false, Component.interface_1301.component_1301_2);
    ifSetHide(false, Component.interface_1301.component_1301_5);
    ifSetHide(false, Component.interface_1301.component_1301_3);

    if (getWindowMode() == 1) {
        ifSetPosition(-35, 0, 1, 0, Component.interface_1301.component_1301_6);
    } else {
        ifSetPosition(0, 0, 1, 0, Component.interface_1301.component_1301_6);
    }
    ifSetTrans(0, Component.interface_1301.component_1301_0);
    ifSetTrans(0, Component.interface_1301.component_1301_1);
    ifSetTrans(0, Component.interface_1301.component_1301_2);
    ifSetTrans(0, Component.interface_1301.component_1301_5);
    ifSetHide(true, Component.interface_1301.component_1301_8);
    ifSetHide(true, Component.interface_1301.component_1301_9);
    ifSetHide(true, Component.interface_1301.component_1301_7);

    switch (mapLang()) {
        case 1:
            ifSetGraphic(Graphic.graphic_11410, Component.interface_1301.component_1301_0);
            ifSetGraphic(Graphic.graphic_11411, Component.interface_1301.component_1301_1);
            ifSetGraphic(Graphic.graphic_11412, Component.interface_1301.component_1301_2);
            ifSetGraphic(Graphic.graphic_11413, Component.interface_1301.component_1301_5);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_11414, Component.interface_1301.component_1301_0);
            ifSetGraphic(Graphic.graphic_11415, Component.interface_1301.component_1301_1);
            ifSetGraphic(Graphic.graphic_11416, Component.interface_1301.component_1301_2);
            ifSetGraphic(Graphic.graphic_11417, Component.interface_1301.component_1301_5);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_11418, Component.interface_1301.component_1301_0);
            ifSetGraphic(Graphic.graphic_11419, Component.interface_1301.component_1301_1);
            ifSetGraphic(Graphic.graphic_11420, Component.interface_1301.component_1301_2);
            ifSetGraphic(Graphic.graphic_11421, Component.interface_1301.component_1301_5);
            break;
    }
    ifSetHide(false, Component.interface_1301.component_1301_8);
    ifSetModel(Model.model_32143, Component.interface_1301.component_1301_7);
    let int0: number = 8;
    ifSetOnTimer(hook(cs2_6308, "iii", [clientClock() + 100, clientClock() + 200, clientClock() + 500]), Component.interface_1301.component_1301_6);
    ifSetHide(false, Component.interface_1301.component_1301_4);
    let int1: number = random(150);
    let int2: number = random(50);
    ifSetOnTimer(hook(cs2_6307, "ii", [int0, clientClock() + 25]), Component.interface_1301.component_1301_0);
    ifSetOnTimer(hook(cs2_6307, "ii", [int0, clientClock() + 25]), Component.interface_1301.component_1301_1);
    ifSetOnTimer(hook(cs2_6307, "ii", [int0, clientClock() + 25]), Component.interface_1301.component_1301_2);
    ifSetOnTimer(hook(cs2_6307, "ii", [int0, clientClock() + 25]), Component.interface_1301.component_1301_5);
}
