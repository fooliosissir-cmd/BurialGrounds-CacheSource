/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5894

function cs2_5894(intArg0: number): void {
    let int1: component = Component.interface_1253.component_1253_94;
    let int2: component = cs2_5935(intArg0);

    let [int3, int4] = cs2_6188(intArg0);
    let str0: string = "";
    let int5: number = 0;
    let int6: struct = cs2_5936(intArg0);
    let int7: number = structParam(int6, Param.param_2268);

    switch (int7) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            str0 = cs2_5908(int3) + "<br>" + enumOp(type_obj, type_string, Enum.enum_5704, int3);
            break;
        default:
            str0 = cs2_5908(int3) + "<br>" + enumOp(type_obj, type_string, Enum.enum_5704, int3);
            break;
    }
    ifSetText(str0, Component.interface_1253.component_1253_274);
    ifSetHide(false, Component.interface_1253.component_1253_50);
    let int8: number = ifGetX(int2) - ifGetWidth(int1) / 2 + ifGetWidth(int2) / 2;
    int8 = min(int8, 596);
    int8 = max(int8, 1);
    ifSetPosition(int8, ifGetY(int1), 0, 0, int1);
}
