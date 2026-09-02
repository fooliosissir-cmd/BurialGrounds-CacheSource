/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5804

function cs2_5804(): void {
    ifSetHide(false, Component.interface_917.component_917_103);

    if (varbit_task_priority_mode == 1) {
        ifSetHide(false, Component.interface_917.component_917_152);
    } else {
        ifSetHide(true, Component.interface_917.component_917_152);
    }
    cs2_4253();

    if (varbit_8579 == 1) {
        ifSetHide(false, Component.interface_917.component_917_160);
        ifSetHide(true, Component.interface_917.component_917_161);
    } else {
        ifSetHide(true, Component.interface_917.component_917_160);
        ifSetHide(false, Component.interface_917.component_917_161);
    }

    if (varbit_8580 == 1) {
        ifSetHide(false, Component.interface_917.component_917_162);
        ifSetHide(true, Component.interface_917.component_917_163);
    } else {
        ifSetHide(true, Component.interface_917.component_917_162);
        ifSetHide(false, Component.interface_917.component_917_163);
    }

    if (varc_1429 == 1) {
        ifSetHide(false, Component.interface_917.component_917_166);
        ifSetHide(true, Component.interface_917.component_917_167);
    } else {
        ifSetHide(true, Component.interface_917.component_917_166);
        ifSetHide(false, Component.interface_917.component_917_167);
    }

    if (varbit_10617 == 1) {
        ifSetHide(false, Component.interface_917.component_917_170);
        ifSetHide(true, Component.interface_917.component_917_171);
    } else {
        ifSetHide(true, Component.interface_917.component_917_170);
        ifSetHide(false, Component.interface_917.component_917_171);
    }

    if (varbit_10618 == 1) {
        ifSetHide(false, Component.interface_917.component_917_174);
        ifSetHide(true, Component.interface_917.component_917_175);
    } else {
        ifSetHide(true, Component.interface_917.component_917_174);
        ifSetHide(false, Component.interface_917.component_917_175);
    }
}
