/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2313

function cs2_2313(): void {
    if (ifGetHide(Component.interface_137.component_137_74) == 1) {
        ifSetvflip(true, Component.interface_137.component_137_145);
        ifSetHide(false, Component.interface_137.component_137_74);
        ifSetHide(false, Component.interface_137.component_137_73);
        ifSetHide(false, Component.interface_137.component_137_75);
        ifSetHide(false, Component.interface_137.component_137_67);
    } else {
        ifSetvflip(false, Component.interface_137.component_137_145);
        ifSetHide(true, Component.interface_137.component_137_74);
        ifSetHide(true, Component.interface_137.component_137_73);
        ifSetHide(true, Component.interface_137.component_137_75);
        ifSetHide(true, Component.interface_137.component_137_67);
    }
    ifSetvflip(false, Component.interface_137.component_137_130);
    ifSetHide(true, Component.interface_137.component_137_77);
    ifSetHide(true, Component.interface_137.component_137_76);
    ifSetHide(true, Component.interface_137.component_137_78);
    ifSetHide(true, Component.interface_137.component_137_68);
}
