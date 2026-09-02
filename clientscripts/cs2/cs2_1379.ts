/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1379

function cs2_1379(): void {
    switch (varbit_zemo_vision) {
        case 1:
            ifSetModelAnim(10439, Component.interface_796.component_796_10);
            break;
        case 2:
            ifSetHide(true, Component.interface_796.component_796_11);
            ifSetHide(false, Component.interface_796.component_796_7);
            break;
        case 3:
            ifSetModelAnim(10439, Component.interface_796.component_796_6);
            break;
        case 4:
            ifSetHide(true, Component.interface_796.component_796_7);
            ifSetHide(false, Component.interface_796.component_796_9);
            break;
        case 5:
            ifSetModelAnim(10443, Component.interface_796.component_796_8);
            break;
        case 6:
            ifSetHide(true, Component.interface_796.component_796_9);
            ifSetHide(false, Component.interface_796.component_796_5);
            break;
        case 7:
            ifSetModelAnim(10437, Component.interface_796.component_796_4);
            break;
        case 8:
            ifSetHide(true, Component.interface_796.component_796_5);
            ifSetHide(true, Component.interface_796.component_796_3);
            ifSetHide(false, Component.interface_796.component_796_30);
            ifSetHide(false, Component.interface_796.component_796_1);
            break;
    }
}
