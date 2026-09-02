/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_437

function cs2_437(): void {
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_42);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_43);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_44);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_45);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_46);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_1022.component_1022_47);

    switch (varbit_conq_max_turn_time_selection) {
        case 0:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_42);
            break;
        case 1:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_43);
            break;
        case 2:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_44);
            break;
        case 3:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_45);
            break;
        case 4:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_46);
            break;
        case 5:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_1022.component_1022_47);
            break;
    }
}
