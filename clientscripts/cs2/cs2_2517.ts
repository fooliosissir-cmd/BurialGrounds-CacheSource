/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2517

function cs2_2517(): void {
    let int0: number = varc_847 * enumOp(type_int, type_int, Enum.enum_2454, 1);
    let int1: number = varc_848 * enumOp(type_int, type_int, Enum.enum_2454, 2);
    let int2: number = varc_849 * enumOp(type_int, type_int, Enum.enum_2454, 3);
    let int3: number = varc_850 * enumOp(type_int, type_int, Enum.enum_2454, 4);
    let int4: number = varc_851 * enumOp(type_int, type_int, Enum.enum_2454, 5);

    ifSetText(tostring_spacer(int0, ","), Component.interface_654.component_654_11);
    ifSetText(tostring_spacer(int1, ","), Component.interface_654.component_654_60);
    ifSetText(tostring_spacer(int2, ","), Component.interface_654.component_654_52);
    ifSetText(tostring_spacer(int3, ","), Component.interface_654.component_654_44);
    ifSetText(tostring_spacer(int4, ","), Component.interface_654.component_654_69);
    let int5: number = int0 + int1;
    int5 = int5 + int2;
    int5 = int5 + int3;
    int5 = int5 + int4;
    ifSetText(tostring_spacer(int5, ","), Component.interface_654.component_654_74);
    let int6: number = varc_839 - int5;
    ifSetText(tostring_spacer(int6, ","), Component.interface_654.component_654_77);
}
