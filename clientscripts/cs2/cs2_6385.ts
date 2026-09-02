/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6385

function cs2_6385(): void {
    let int0: graphic = -1;

    if (mapLang() == 0) {
        int0 = Graphic.graphic_11621;
    } else if (mapLang() == 1) {
        int0 = Graphic.graphic_11623;
    } else if (mapLang() == 2) {
        int0 = Graphic.graphic_11622;
    } else if (mapLang() == 3) {
        int0 = Graphic.graphic_11625;
    }
    ifSetGraphic(int0, Component.interface_396.component_396_11);
    cs2_6387();
    let str0: string = "Cooking - " + enumOp(type_int, type_string, Enum.pre_megagame_flavour_names, varbit_pre_olympic_current_food_1) + ", " + enumOp(type_int, type_string, Enum.pre_megagame_flavour_names, varbit_pre_olympic_current_food_2) + " and " + enumOp(type_int, type_string, Enum.pre_megagame_flavour_names, varbit_pre_olympic_current_food_3);
    ifSetText(str0, Component.interface_396.component_396_18);
}
