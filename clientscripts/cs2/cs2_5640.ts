/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5640

function cs2_5640(intArg0: number): number {
    varc_1408 = varc_1407;

    if (varc_1407 < 1) {
        create_error("Please enter your age, in years, here.", Component.interface_673.component_673_48);
        return 0;
    } else if (varc_1407 > 120) {
        create_error("Please check the age entered and try again.", Component.interface_673.component_673_48);
        return 0;
    }
    ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_48);
    ifSetHide(true, Component.interface_673.component_673_124);
    ifSetHide(true, Component.interface_673.component_673_30);

    if (intArg0 == 1) {
        proc_create_focus(6, 1);
    }
    return 1;
}
