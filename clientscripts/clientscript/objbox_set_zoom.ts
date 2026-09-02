/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objbox_set_zoom]

function objbox_set_zoom(intArg0: obj, intArg1: number): void {
    ifSetObject(intArg0, 0, Component.interface_1189.component_1189_1);
    ifSetModelZoom(intArg1, Component.interface_1189.component_1189_1);
}
