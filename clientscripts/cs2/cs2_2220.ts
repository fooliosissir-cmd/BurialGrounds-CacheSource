/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2220

function cs2_2220(): void {
    if (varbit_easter10_incubator_status == 1) {
        ifSetHide(true, Component.interface_931.component_931_121);
    } else {
        ifSetHide(false, Component.interface_931.component_931_121);
    }

    if (varbit_easter10_painter_status == 1) {
        ifSetHide(true, Component.interface_931.component_931_122);
    } else {
        ifSetHide(false, Component.interface_931.component_931_122);
    }

    if (varbit_easter10_conveyor_status == 1) {
        ifSetHide(true, Component.interface_931.component_931_123);
    } else {
        ifSetHide(false, Component.interface_931.component_931_123);
    }
    ifSetText(tostring(varc_easter10_nutworkers), Component.interface_931.component_931_154);
    ifSetText(tostring(varc_easter10_chocworkers), Component.interface_931.component_931_148);
    ifSetText(tostring(varc_easter10_fruitworkers), Component.interface_931.component_931_142);
    ifSetText(tostring(varc_easter10_fcworkers), Component.interface_931.component_931_112);
    ifSetText(tostring(varc_easter10_teggworkers), Component.interface_931.component_931_136);
    ifSetText(tostring(varc_easter10_neggworkers), Component.interface_931.component_931_130);
    ifSetText("Total Workers: " + tostring(varc_easter10_totalworkers), Component.interface_931.component_931_155);
    ifSetText(tostring(varp_easter10_resourcegame_totalnuts) + "/15", Component.interface_931.component_931_115);
    ifSetText(tostring(varp_easter10_resourcegame_totalfruit) + "/15", Component.interface_931.component_931_117);
    ifSetText(tostring(varp_easter10_resourcegame_totalchoc) + "/15", Component.interface_931.component_931_116);
    ifSetText(tostring(varp_1689) + "/7", Component.interface_931.component_931_120);
    ifSetText(tostring(varp_1690) + "/7", Component.interface_931.component_931_118);
    ifSetText(tostring(varp_1691) + "/7", Component.interface_931.component_931_119);
    cs2_2221();
    ifSetText("Turn " + tostring(varp_1674) + "/15", Component.interface_931.component_931_20);

    if (varc_easter10_fcrepair == 0) {
        ifSetGraphic(Graphic.warning_icons_1, Component.interface_931.component_931_121);
    } else {
        ifSetGraphic(Graphic.warning_icons_2, Component.interface_931.component_931_121);
    }

    if (varc_easter10_teggrepair == 0) {
        ifSetGraphic(Graphic.warning_icons_1, Component.interface_931.component_931_122);
    } else {
        ifSetGraphic(Graphic.warning_icons_2, Component.interface_931.component_931_122);
    }

    if (varc_easter10_neggrepair == 0) {
        ifSetGraphic(Graphic.warning_icons_1, Component.interface_931.component_931_123);
    } else {
        ifSetGraphic(Graphic.warning_icons_2, Component.interface_931.component_931_123);
    }
}
