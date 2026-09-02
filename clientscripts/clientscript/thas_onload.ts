/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,thas_onload]

function thas_onload(): void {
    if (varbit_deserttreasure < 15) {
        ifSetGraphic(Graphic.graphic_10130, Component.interface_1092.component_1092_7);
    }

    if (varbit_lunar_quest_main < 190) {
        ifSetGraphic(Graphic.graphic_10131, Component.interface_1092.component_1092_39);
    }

    if (varbit_thas_active_al_kharid == 0) {
        ifSetGraphic(Graphic.graphic_10129, Component.interface_1092.component_1092_40);
    }

    if (varbit_thas_active_ardougne == 0) {
        ifSetGraphic(Graphic.graphic_10120, Component.interface_1092.component_1092_41);
    }

    if (varbit_thas_active_burthorpe == 0) {
        ifSetGraphic(Graphic.graphic_10122, Component.interface_1092.component_1092_42);
    }

    if (varbit_thas_active_catherby == 0) {
        ifSetGraphic(Graphic.graphic_10123, Component.interface_1092.component_1092_43);
    }

    if (varbit_thas_active_draynor == 0) {
        ifSetGraphic(Graphic.graphic_10126, Component.interface_1092.component_1092_44);
    }

    if (varbit_thas_active_edgeville == 0) {
        ifSetGraphic(Graphic.graphic_10128, Component.interface_1092.component_1092_45);
    }

    if (varbit_thas_active_falador == 0) {
        ifSetGraphic(Graphic.graphic_10119, Component.interface_1092.component_1092_46);
    }

    if (varbit_thas_active_lumbridge == 0) {
        ifSetGraphic(Graphic.graphic_10117, Component.interface_1092.component_1092_47);
    }

    if (varbit_thas_active_port_sarim == 0) {
        ifSetGraphic(Graphic.graphic_10125, Component.interface_1092.component_1092_48);
    }

    if (varbit_thas_active_seers == 0) {
        ifSetGraphic(Graphic.graphic_10124, Component.interface_1092.component_1092_49);
    }

    if (varbit_thas_active_taverley == 0) {
        ifSetGraphic(Graphic.graphic_10121, Component.interface_1092.component_1092_50);
    }

    if (varbit_thas_active_varrock == 0) {
        ifSetGraphic(Graphic.graphic_10118, Component.interface_1092.component_1092_51);
    }

    if (varbit_thas_active_yanille == 0) {
        ifSetGraphic(Graphic.graphic_10127, Component.interface_1092.component_1092_52);
    }
}
