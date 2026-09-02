/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mob_locator_onload]

function mob_locator_onload(): void {
    ifSetHide(false, Component.interface_844.component_844_10);
    ifSetHide(true, Component.interface_844.component_844_11);
    ifSetGraphic(Graphic.bank_tabs_2, Component.interface_844.component_844_51);
    ifSetGraphic(Graphic.bank_tabs_3, Component.interface_844.component_844_49);
    ifSetObjectNonum(Obj.copper_ore, 1, Component.interface_844.component_844_52);
    ifSetObjectNonum(Obj.logs, 1, Component.interface_844.component_844_50);
    proc_mob_locator_resource_setup();
}
