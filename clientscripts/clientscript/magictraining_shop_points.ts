/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,magictraining_shop_points]

function magictraining_shop_points(): void {
    ifSetText(tostring(varbit_magictraining_tele_points), Component.interface_197.component_197_8);
    ifSetText(tostring(varbit_magictraining_grave_points), Component.interface_197.component_197_11);
    ifSetText(tostring(varbit_magictraining_ench_points), Component.interface_197.component_197_9);
    ifSetText(tostring(varbit_magictraining_alchem_points), Component.interface_197.component_197_10);
}
