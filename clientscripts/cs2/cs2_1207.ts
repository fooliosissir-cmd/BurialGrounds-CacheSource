/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1207

function cs2_1207(intArg0: number, intArg1: number): void {
    if (intArg0 <= 11) {
        ifSetScrollSize(404, 215, Component.interface_275.component_275_5);
        scrollbar_resize(Component.interface_275.component_275_6, Component.interface_275.component_275_5, 0);
    } else {
        ifSetScrollSize(404, intArg0 * 20, Component.interface_275.component_275_5);
        if (intArg1 == 1) {
            scrollbar_resize(Component.interface_275.component_275_6, Component.interface_275.component_275_5, 0);
        } else {
            scrollbar_resize(Component.interface_275.component_275_6, Component.interface_275.component_275_5, intArg0 * 20 - 180);
        }
    }
}
