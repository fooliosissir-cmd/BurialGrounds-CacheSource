/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2361

function cs2_2361(intArg0: number): void {
    if (varbit_vkq3_puzz1_select == 0) {
        return;
    }
    let int1: component = enumOp(type_int, type_component, Enum.vkq3_puzz1_anchors, varbit_vkq3_puzz1_select);
    ifSetParamInt(Param.vkq3_linker, intArg0, int1);
}
