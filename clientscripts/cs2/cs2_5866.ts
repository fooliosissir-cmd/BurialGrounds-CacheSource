/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5866

function cs2_5866(): void {
    let int0: struct = enumOp(type_int, type_struct, Enum.enum_2252, varp_1385);

    if (int0 == -1 || structParam(int0, Param.param_694) != 1) {
        ifSetHide(true, Component.interface_1245.component_1245_332);
        ccDeleteAll(Component.interface_1245.component_1245_332);
        ifSetHide(true, Component.interface_1245.component_1245_333);
        ccDeleteAll(Component.interface_1245.component_1245_333);
        ifSetHide(true, Component.interface_1245.component_1245_334);
        ccDeleteAll(Component.interface_1245.component_1245_334);
        ifSetHide(true, Component.interface_1245.component_1245_335);
    } else {
        ifSetHide(false, Component.interface_1245.component_1245_332);
        cs2_5867(Component.interface_1245.component_1245_332, Struct.struct_2750);
        ifSetHide(false, Component.interface_1245.component_1245_333);
        cs2_5867(Component.interface_1245.component_1245_333, Struct.struct_2751);
        ifSetHide(false, Component.interface_1245.component_1245_334);
        cs2_5867(Component.interface_1245.component_1245_334, Struct.struct_2752);
        ifSetHide(false, Component.interface_1245.component_1245_335);
    }
}
