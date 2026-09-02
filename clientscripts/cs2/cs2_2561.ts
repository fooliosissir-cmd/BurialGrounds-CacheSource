/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2561

function cs2_2561(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    if (varc_844 == 0) {
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_863.component_863_27);
        ifSetGraphic(Graphic.radio_buttons_0, Component.interface_863.component_863_28);
    } else {
        ifSetGraphic(Graphic.radio_buttons_0, Component.interface_863.component_863_27);
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_863.component_863_28);
    }

    if (varc_844 == 0) {
        if (varc_845 == 1) {
            ifSetText("Dwarf", Component.interface_863.component_863_57);
            int0 = 175;
            int1 = 5300;
            int2 = 60;
        } else if (varc_845 == 2) {
            ifSetText("Goblin", Component.interface_863.component_863_57);
            int0 = 175;
            int1 = 4800;
            int2 = 110;
        } else if (varc_845 == 3) {
            ifSetText("Elf", Component.interface_863.component_863_57);
            int0 = 225;
            int1 = 4800;
            int2 = 60;
        }
    } else if (varc_844 == 1) {
        if (varc_845 == 1) {
            ifSetText("Dwarf", Component.interface_863.component_863_57);
            int0 = 350;
            int1 = 10100;
            int2 = 60;
        } else if (varc_845 == 2) {
            ifSetText("Goblin", Component.interface_863.component_863_57);
            int0 = 350;
            int1 = 9600;
            int2 = 110;
        } else if (varc_845 == 3) {
            ifSetText("Elf", Component.interface_863.component_863_57);
            int0 = 400;
            int1 = 9600;
            int2 = 60;
        }
    }
    let int3: number = 100;
    ifSetText(tostring_spacer(int3, ","), Component.interface_863.component_863_15);
    ifSetText(tostring(int0), Component.interface_863.component_863_5);
    ifSetText(tostring(int1), Component.interface_863.component_863_7);
    ifSetText(tostring(int2), Component.interface_863.component_863_9);
    ifSetText(enumOp(type_int, type_string, Enum.enum_2386, varc_845), Component.interface_863.component_863_58);

    if (varc_845 == 1 && varc_844 == 0) {
        ifSetModel(Model.model_47798, Component.interface_863.component_863_34);
    } else if (varc_845 == 2 && varc_844 == 0) {
        ifSetModel(Model.model_47794, Component.interface_863.component_863_34);
    } else if (varc_845 == 3 && varc_844 == 0) {
        ifSetModel(Model.model_47792, Component.interface_863.component_863_34);
    } else if (varc_845 == 1 && varc_844 == 1) {
        ifSetModel(Model.model_47786, Component.interface_863.component_863_34);
    } else if (varc_845 == 2 && varc_844 == 1) {
        ifSetModel(Model.model_47787, Component.interface_863.component_863_34);
    } else if (varc_845 == 3 && varc_844 == 1) {
        ifSetModel(Model.model_47796, Component.interface_863.component_863_34);
    }
    varc_839 = varbit_mob_invest;
    varc_846 = varbit_mob_current_total_offer;
}
