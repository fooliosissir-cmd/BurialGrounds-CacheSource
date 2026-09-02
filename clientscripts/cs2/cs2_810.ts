/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_810

function cs2_810(): void {
    if (mapMembers() == 1) {
        ifSetHide(false, Component.interface_747.component_747_5);
        ifSetHide(false, Component.interface_747.component_747_0);
        ifSetHide(false, Component.interface_747.component_747_2);
        ifSetHide(false, Component.interface_747.component_747_1);
        ifSetHide(false, Component.interface_747.component_747_8);
        cs2_817(23);
        ifSetHide(false, Component.interface_747.component_747_7);
        ifSetColour(cs2_805(23), Component.interface_747.component_747_7);
        ifSetText(tostring(stat(23)), Component.interface_747.component_747_7);
    } else {
        ifSetHide(true, Component.interface_747.component_747_5);
        ifSetHide(true, Component.interface_747.component_747_0);
        ifSetHide(true, Component.interface_747.component_747_7);
        ifSetHide(true, Component.interface_747.component_747_2);
        ifSetHide(true, Component.interface_747.component_747_1);
        ifSetHide(true, Component.interface_747.component_747_8);
    }
}
