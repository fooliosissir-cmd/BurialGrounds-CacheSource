/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mob_locator_switch_tab]

function mob_locator_switch_tab(intArg0: number): void {
    ifSetHide(true, Component.interface_844.component_844_10);
    ifSetHide(true, Component.interface_844.component_844_11);
    ifSetGraphic(Graphic.bank_tabs_3, Component.interface_844.component_844_51);
    ifSetGraphic(Graphic.bank_tabs_3, Component.interface_844.component_844_49);

    switch (intArg0) {
        case 55312435:
            ifSetHide(false, Component.interface_844.component_844_10);
            ifSetGraphic(Graphic.bank_tabs_2, Component.interface_844.component_844_51);
            break;
        case 55312433:
            ifSetHide(false, Component.interface_844.component_844_11);
            ifSetGraphic(Graphic.bank_tabs_2, Component.interface_844.component_844_49);
            break;
    }
}
