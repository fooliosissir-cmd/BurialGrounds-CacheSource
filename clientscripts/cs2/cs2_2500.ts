/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2500

function cs2_2500(intArg0: component): void {
    let int1: number = 1;

    while (int1 <= 9 || enumOp(type_int, type_component, Enum.enum_2400, int1) != 2949145) {
        if (enumOp(type_int, type_component, Enum.enum_2400, int1) != intArg0) {
            ifSetGraphic(Graphic.radio_buttons_0, enumOp(type_int, type_component, Enum.enum_2400, int1));
        } else {
            ifSetGraphic(Graphic.radio_buttons_1, intArg0);
            varc_837 = int1;
        }
        int1 = int1 + 1;
    }

    if (varc_837 > 0 && varc_837 <= 9) {
        ifSetModel(enumOp(type_int, type_model, Enum.enum_2399, varc_837), Component.interface_45.component_45_39);
    }
}
