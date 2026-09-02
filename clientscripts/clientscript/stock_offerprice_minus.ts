/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offerprice_minus]

function stock_offerprice_minus(): void {
    if (varp_1109 == -1) {
        return;
    }
    varc_85 = max(varc_85 - 1, 1);
    ifSetText(tostringLocalised(varc_85, 1) + " gp", Component.interface_105.component_105_153);
    cs2_609();
}
