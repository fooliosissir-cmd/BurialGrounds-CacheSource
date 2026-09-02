/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2621

function cs2_2621(): void {
    if (ifGetHide(Component.interface_850.component_850_1) == 0) {
        ifSetHide(true, Component.interface_850.component_850_1);
        ifSetHide(false, Component.interface_850.component_850_47);
        ifSethflip(false, Component.interface_850.component_850_50);
    } else {
        ifSetHide(false, Component.interface_850.component_850_1);
        ifSetHide(true, Component.interface_850.component_850_47);
        ifSethflip(true, Component.interface_850.component_850_50);
    }
}
