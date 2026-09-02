/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,updatemodel]

function updatemodel(intArg0: number): void {
    if (intArg0 == 0) {
        ifSetModel(enumOp(type_int, type_model, Enum.champions_banner_if_numeral, varbit_champions_defeated_count), Component.interface_84.component_84_19);
    } else {
        ifSetModel(enumOp(type_int, type_model, Enum.champions_banner_if_model, intArg0), Component.interface_84.component_84_19);
    }
}
