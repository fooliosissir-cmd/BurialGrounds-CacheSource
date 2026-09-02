/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_440

function cs2_440(): void {
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_24);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_25);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_26);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_27);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_28);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1016.component_1016_29);

    switch (varbit_conq_max_turn_time_selection) {
        case 0:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_24);
            break;
        case 1:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_25);
            break;
        case 2:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_26);
            break;
        case 3:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_27);
            break;
        case 4:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_28);
            break;
        case 5:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1016.component_1016_29);
            break;
    }
}
