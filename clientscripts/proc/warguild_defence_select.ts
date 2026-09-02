/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,warguild_defence_select]

function proc_warguild_defence_select(): void {
    cs2_4247();

    switch (varbit_warguild_defence_type) {
        case 0:
            ifSetHide(false, Component.interface_411.component_411_39);
            cs2_4161(Component.interface_411.component_411_39, 0);
            break;
        case 1:
            ifSetHide(false, Component.interface_411.component_411_12);
            cs2_4161(Component.interface_411.component_411_12, 0);
            break;
        case 2:
            ifSetHide(false, Component.interface_411.component_411_21);
            cs2_4161(Component.interface_411.component_411_21, 0);
            break;
        case 3:
            ifSetHide(false, Component.interface_411.component_411_30);
            cs2_4161(Component.interface_411.component_411_30, 0);
            break;
    }
}
