/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1156

function cs2_1156(): void {
    if (detailGetStereo() == 0) {
        ifSetGraphic(Graphic.radio_buttons_0, Component.interface_429.component_429_16);
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_429.component_429_14);
    } else {
        ifSetGraphic(Graphic.radio_buttons_0, Component.interface_429.component_429_14);
        ifSetGraphic(Graphic.radio_buttons_1, Component.interface_429.component_429_16);
    }
}
