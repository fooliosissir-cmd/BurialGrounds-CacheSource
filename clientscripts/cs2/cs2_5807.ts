/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5807

function cs2_5807(): void {
    if (ifGetHide(Component.interface_917.component_917_166) == 1) {
        ifSetHide(false, Component.interface_917.component_917_166);
        ifSetHide(true, Component.interface_917.component_917_167);
    } else {
        ifSetHide(true, Component.interface_917.component_917_166);
        ifSetHide(false, Component.interface_917.component_917_167);
    }
}
