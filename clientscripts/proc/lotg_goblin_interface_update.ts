/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lotg_goblin_interface_update]

function lotg_goblin_interface_update(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_69);
        ifSetModel(Model.model_29248, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_69);
    }

    if (intArg0 == 2) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_72);
        ifSetModel(Model.model_29242, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_72);
    }

    if (intArg0 == 3) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_75);
        ifSetModel(Model.model_29237, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_75);
    }

    if (intArg0 == 4) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_78);
        ifSetModel(Model.model_29245, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_78);
    }

    if (intArg0 == 5) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_81);
        ifSetModel(Model.model_29246, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_81);
    }

    if (intArg0 == 6) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11), Component.interface_625.component_625_84);
        ifSetModel(Model.model_29241, Component.interface_625.component_625_39);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10), Component.interface_625.component_625_84);
    }
}
