/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5356

function cs2_5356(intArg0: number, intArg1: component, intArg2: struct): void {
    if (ccFind(intArg1, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_1);
        ifSetText(structParam(intArg2, Param.param_1994), Component.interface_1143.component_1143_49);
    }
}
