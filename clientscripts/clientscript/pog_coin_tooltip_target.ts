/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pog_coin_tooltip_target]

function pog_coin_tooltip_target(intArg0: component): void {
    let str0: string = "";

    if (intArg0 == Component.interface_613.component_613_15) {
        str0 = ocName(varp_pog_coin_target1_1_obj);
        if (varp_pog_coin_target1_1_obj == -1) {
            str0 = "Empty";
        }
    } else if (intArg0 == Component.interface_613.component_613_16) {
        str0 = ocName(varp_pog_coin_target1_2_obj);
        if (varp_pog_coin_target1_2_obj == -1) {
            str0 = "Empty";
        }
    } else if (intArg0 == Component.interface_613.component_613_17) {
        str0 = ocName(varp_pog_coin_target2_obj);
        if (varp_pog_coin_target2_obj == -1) {
            str0 = "Empty";
        }
    }
    cs2_39(intArg0, Component.interface_613.component_613_23, str0, 25, 199);
}
