/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6522

function cs2_6522(): void {
    let int0: struct = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_top_card);
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_middle_card);
    let int2: struct = enumOp(type_int, type_struct, Enum.enum_974, varbit_megagames_bottom_card);

    ifSetHide(false, Component.interface_1302.component_1302_20);
    ifSetGraphic(structParam(int0, Param.param_2557), Component.interface_1302.component_1302_23);
    ifSetGraphic(structParam(int1, Param.param_2557), Component.interface_1302.component_1302_29);
    ifSetGraphic(structParam(int2, Param.param_2557), Component.interface_1302.component_1302_15);
    ifSetGraphic(cs2_6523(structParam(int0, Param.param_2563)), Component.interface_1302.component_1302_22);
    ifSetGraphic(cs2_6523(structParam(int1, Param.param_2563)), Component.interface_1302.component_1302_28);
    ifSetGraphic(cs2_6523(structParam(int2, Param.param_2563)), Component.interface_1302.component_1302_14);
    let int3: graphic = -1;
    let int4: graphic = -1;
    let int5: graphic = -1;

    switch (structParam(int0, Param.param_2558)) {
        case 1:
            int3 = Graphic.graphic_11645;
            break;
        case 2:
            int3 = Graphic.graphic_11648;
            break;
        case 3:
            int3 = Graphic.graphic_11651;
            break;
    }

    switch (structParam(int1, Param.param_2558)) {
        case 1:
            int4 = Graphic.graphic_11645;
            break;
        case 2:
            int4 = Graphic.graphic_11648;
            break;
        case 3:
            int4 = Graphic.graphic_11651;
            break;
    }

    switch (structParam(int2, Param.param_2558)) {
        case 1:
            int5 = Graphic.graphic_11645;
            break;
        case 2:
            int5 = Graphic.graphic_11648;
            break;
        case 3:
            int5 = Graphic.graphic_11651;
            break;
    }

    if (int3 != -1) {
        ifSetHide(false, Component.interface_1302.component_1302_24);
        ifSetGraphic(int3, Component.interface_1302.component_1302_24);
    } else {
        ifSetHide(true, Component.interface_1302.component_1302_24);
    }

    if (int4 != -1) {
        ifSetHide(false, Component.interface_1302.component_1302_30);
        ifSetGraphic(int4, Component.interface_1302.component_1302_30);
    } else {
        ifSetHide(true, Component.interface_1302.component_1302_30);
    }

    if (int5 != -1) {
        ifSetHide(false, Component.interface_1302.component_1302_21);
        ifSetGraphic(int5, Component.interface_1302.component_1302_21);
    } else {
        ifSetHide(true, Component.interface_1302.component_1302_21);
    }
}
