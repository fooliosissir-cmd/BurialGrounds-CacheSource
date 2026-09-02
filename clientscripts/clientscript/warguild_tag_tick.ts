/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,warguild_tag_tick]

function warguild_tag_tick(): void {
    if (varbit_warguild_tagged_1st == 0) {
        ifSetHide(true, Component.interface_1057.component_1057_35);
    } else {
        ifSetHide(false, Component.interface_1057.component_1057_35);
    }

    if (varbit_warguild_tagged_2nd == 0) {
        ifSetHide(true, Component.interface_1057.component_1057_36);
    } else {
        ifSetHide(false, Component.interface_1057.component_1057_36);
    }

    if (varbit_warguild_tagged_3rd == 0) {
        ifSetHide(true, Component.interface_1057.component_1057_37);
    } else {
        ifSetHide(false, Component.interface_1057.component_1057_37);
    }

    if (varbit_warguild_tagged_4th == 0) {
        ifSetHide(true, Component.interface_1057.component_1057_38);
    } else {
        ifSetHide(false, Component.interface_1057.component_1057_38);
    }

    if (varbit_warguild_tagged_5th == 0) {
        ifSetHide(true, Component.interface_1057.component_1057_39);
    } else {
        ifSetHide(false, Component.interface_1057.component_1057_39);
    }
}
