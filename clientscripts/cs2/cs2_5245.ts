/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5245

function cs2_5245(): void {
    let int0: number = 0;
    let int1: number = 0;

    if (ifGetGraphic(Component.interface_1128.component_1128_4) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 20;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_106) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 20;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_144) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 30;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_181) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 28;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_218) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 24;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_255) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 26;
        int1 = int1 + 20;
    }

    if (ifGetGraphic(Component.interface_1128.component_1128_292) == gameframe_skin_graphic(Graphic.aif_checkbox_large_3)) {
        int0 = int0 + 200;
        int1 = int1 + 200;
    }

    if (varbit_sc_points < int0 || varbit_sc_points < int1) {
        ifSetColour(colour(0xFF0000), Component.interface_1128.component_1128_13);
    } else {
        ifSetColour(colour(0xA88D65), Component.interface_1128.component_1128_13);
    }
}
