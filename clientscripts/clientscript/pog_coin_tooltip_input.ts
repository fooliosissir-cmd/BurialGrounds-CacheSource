/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pog_coin_tooltip_input]

function pog_coin_tooltip_input(intArg0: component): void {
    let str0: string = "";

    if (intArg0 == Component.interface_613.component_613_9) {
        str0 = ocName(varp_pog_coin_display1_obj);
        if (varp_pog_coin_display1_obj == -1) {
            str0 = "Empty";
        }
    } else if (intArg0 == Component.interface_613.component_613_10) {
        str0 = ocName(varp_pog_coin_display2_1_obj);
        if (varp_pog_coin_display2_1_obj == -1) {
            str0 = "Empty";
        }
    } else if (intArg0 == Component.interface_613.component_613_11) {
        str0 = ocName(varp_pog_coin_display2_2_obj);
        if (varp_pog_coin_display2_2_obj == -1) {
            str0 = "Empty";
        }
    }
    cs2_39(intArg0, Component.interface_613.component_613_24, str0, 25, 199);
}
