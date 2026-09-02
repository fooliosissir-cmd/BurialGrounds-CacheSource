/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2061

function cs2_2061(intArg0: component): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_2162, varbit_zaros_spellbook);
    let int2: number = enumOp(type_component, type_int, structParam(int1, Param.param_664), intArg0);
    let int3: component = structParam(int1, Param.param_661);
    let str0: string = enumOp(type_int, type_string, structParam(int1, Param.param_665), int2);

    if (int3 != -1) {
        cs2_39(intArg0, int3, str0, 25, 300);
    }

    if (int2 != varc_631) {
        ifSetGraphic(Graphic.graphic_1702, intArg0);
    }
}
