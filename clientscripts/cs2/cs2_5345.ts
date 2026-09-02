/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5345

function cs2_5345(): void {
    ifSetHide(true, Component.interface_622.component_622_6);
    ifSetHide(true, Component.interface_622.component_622_7);
    ifSetHide(true, Component.interface_622.component_622_9);
    ifSetHide(true, Component.interface_622.component_622_8);

    switch (mapLang()) {
        case 1:
            ifSetHide(false, Component.interface_622.component_622_9);
            break;
        case 2:
            ifSetHide(false, Component.interface_622.component_622_7);
            break;
        case 3:
            ifSetHide(false, Component.interface_622.component_622_8);
            break;
        default:
            ifSetHide(false, Component.interface_622.component_622_6);
            break;
    }
}
