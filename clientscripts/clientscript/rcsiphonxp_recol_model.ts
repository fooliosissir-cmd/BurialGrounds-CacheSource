/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_recol_model]

function rcsiphonxp_recol_model(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: component = -1;

    while (int2 < enumGetoutputcount(Enum.rcsiphonxp_recol_iterator)) {
        int3 = enumOp(type_int, type_component, Enum.rcsiphonxp_recol_iterator, int2);
        if (int3 != -1 && ccFind(int3, 1) == 1) {
            if (intArg1 == int2) {
                ccSetGraphic(Graphic.km_colourpickerbox_1);
            } else {
                ccSetGraphic(Graphic.km_colourpickerbox_0);
            }
        }
        int2 = int2 + 1;
        int3 = -1;
    }
    let int4: struct = enumOp(type_int, type_struct, Enum.rcsiphonxp_hue_to_struct, intArg1);

    if (int4 == -1) {
        return;
    }
    ifSetRecol(1, 62904, structParam(int4, Param.rcsiphonxp_recolour_colour1), Component.interface_1273.component_1273_21);
    ifSetRecol(2, 62894, structParam(int4, Param.rcsiphonxp_recolour_colour2), Component.interface_1273.component_1273_21);
    ifSetRecol(3, 62884, structParam(int4, Param.rcsiphonxp_recolour_colour3), Component.interface_1273.component_1273_21);
    ifSetRecol(4, 62874, structParam(int4, Param.rcsiphonxp_recolour_colour4), Component.interface_1273.component_1273_21);
    ifSetRecol(1, 62904, structParam(int4, Param.rcsiphonxp_recolour_colour1), Component.interface_1273.component_1273_22);
    ifSetRecol(2, 62894, structParam(int4, Param.rcsiphonxp_recolour_colour2), Component.interface_1273.component_1273_22);
    ifSetRecol(3, 62884, structParam(int4, Param.rcsiphonxp_recolour_colour3), Component.interface_1273.component_1273_22);
    ifSetRecol(4, 62874, structParam(int4, Param.rcsiphonxp_recolour_colour4), Component.interface_1273.component_1273_22);
    ifSetRecol(1, 62904, structParam(int4, Param.rcsiphonxp_recolour_colour1), Component.interface_1273.component_1273_23);
    ifSetRecol(2, 62894, structParam(int4, Param.rcsiphonxp_recolour_colour2), Component.interface_1273.component_1273_23);
    ifSetRecol(3, 62884, structParam(int4, Param.rcsiphonxp_recolour_colour3), Component.interface_1273.component_1273_23);
    ifSetRecol(4, 62874, structParam(int4, Param.rcsiphonxp_recolour_colour4), Component.interface_1273.component_1273_23);
    ifSetRecol(1, 62904, structParam(int4, Param.rcsiphonxp_recolour_colour1), Component.interface_1273.component_1273_24);
    ifSetRecol(2, 62894, structParam(int4, Param.rcsiphonxp_recolour_colour2), Component.interface_1273.component_1273_24);
    ifSetRecol(3, 62884, structParam(int4, Param.rcsiphonxp_recolour_colour3), Component.interface_1273.component_1273_24);
    ifSetRecol(4, 62874, structParam(int4, Param.rcsiphonxp_recolour_colour4), Component.interface_1273.component_1273_24);
}
