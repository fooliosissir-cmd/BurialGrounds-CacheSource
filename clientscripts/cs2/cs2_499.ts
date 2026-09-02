/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_499

function cs2_499(intArg0: number): void {
    let int1: struct = cs2_488(intArg0);
    let int2: component = Component.interface_1012.component_1012_20;

    if (int1 != -1) {
        ifSetText(structParam(int1, Param.conq_command_name), Component.interface_1012.component_1012_27);
        ifSetText(structParam(int1, Param.conq_command_buff_desc), Component.interface_1012.component_1012_28);
        ifSetHide(false, int2);
    } else {
        ifSetHide(true, int2);
    }
}
