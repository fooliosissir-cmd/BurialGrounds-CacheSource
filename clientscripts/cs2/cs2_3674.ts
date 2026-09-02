/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3674

function cs2_3674(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.login_lobby_button_6, Component.interface_1004.component_1004_90);
        ifSetGraphic(Graphic.login_lobby_button_7, Component.interface_1004.component_1004_91);
        ifSetGraphic(Graphic.login_lobby_button_6, Component.interface_1004.component_1004_92);
    } else {
        ifSetGraphic(Graphic.login_lobby_button_2, Component.interface_1004.component_1004_90);
        ifSetGraphic(Graphic.login_lobby_button_3, Component.interface_1004.component_1004_91);
        ifSetGraphic(Graphic.login_lobby_button_2, Component.interface_1004.component_1004_92);
    }
}
