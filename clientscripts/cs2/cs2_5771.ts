/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5771

function cs2_5771(): void {
    let int0: struct = varp_2505;
    let str0: string = structParam(int0, Param.task_name);

    mes(str0);
    let str1: string = structParam(int0, Param.task_details);
    mes(str1);
    let int1: graphic = structParam(int0, Param.task_icon);
    ifSetText(str0, Component.interface_1241.component_1241_12);
    ifSetText(str1, Component.interface_1241.component_1241_4);
    ifSetGraphic(int1, Component.interface_1241.component_1241_6);
}
