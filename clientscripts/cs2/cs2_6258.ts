/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6258

function cs2_6258(): void {
    if (clientClock() % 20 == 0) {
        if (ifGetHide(Component.interface_923.component_923_108) == 0) {
            ifSetHide(true, Component.interface_923.component_923_108);
        } else {
            ifSetHide(false, Component.interface_923.component_923_108);
        }
    }
}
