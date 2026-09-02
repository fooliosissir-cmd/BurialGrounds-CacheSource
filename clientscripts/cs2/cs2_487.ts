/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_487

function cs2_487(): void {
    ifSetGraphic(Graphic.graphic_3263, Component.interface_1015.component_1015_95);
    ifSetGraphic(Graphic.graphic_3263, Component.interface_1015.component_1015_89);
    ifSetGraphic(Graphic.graphic_3263, Component.interface_1015.component_1015_83);
    ifSetGraphic(Graphic.graphic_3263, Component.interface_1015.component_1015_77);

    switch (varbit_conq_current_command_purchase_slot) {
        case 1:
            ifSetGraphic(Graphic.graphic_3265, Component.interface_1015.component_1015_95);
            break;
        case 2:
            ifSetGraphic(Graphic.graphic_3265, Component.interface_1015.component_1015_89);
            break;
        case 3:
            ifSetGraphic(Graphic.graphic_3265, Component.interface_1015.component_1015_83);
            break;
        case 4:
            ifSetGraphic(Graphic.graphic_3265, Component.interface_1015.component_1015_77);
            break;
        default:
            return;
    }
}
