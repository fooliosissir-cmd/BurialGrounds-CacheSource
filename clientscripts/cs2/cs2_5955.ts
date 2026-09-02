/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5955

function cs2_5955(): void {
    if (clientClock() < varc_1092) {
        return;
    }
    varc_1092 = clientClock() + 5;

    switch (ifGetGraphic(Component.interface_1255.component_1255_1)) {
        case Graphic.loading_wheel_1_0:
            ifSetGraphic(Graphic.loading_wheel_1_1, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_1:
            ifSetGraphic(Graphic.loading_wheel_1_2, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_2:
            ifSetGraphic(Graphic.loading_wheel_1_3, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_3:
            ifSetGraphic(Graphic.loading_wheel_1_4, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_4:
            ifSetGraphic(Graphic.loading_wheel_1_5, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_5:
            ifSetGraphic(Graphic.loading_wheel_1_6, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_6:
            ifSetGraphic(Graphic.loading_wheel_1_7, Component.interface_1255.component_1255_1);
            break;
        case Graphic.loading_wheel_1_7:
            ifSetGraphic(Graphic.loading_wheel_1_0, Component.interface_1255.component_1255_1);
            break;
        default:
            ifSetGraphic(Graphic.loading_wheel_1_0, Component.interface_1255.component_1255_1);
            break;
    }
}
