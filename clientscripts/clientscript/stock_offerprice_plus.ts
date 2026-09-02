/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offerprice_plus]

function stock_offerprice_plus(): void {
    if (varp_1109 == -1) {
        return;
    }

    if (varc_85 < 2147483647) {
        varc_85 = varc_85 + 1;
        ifSetText(tostringLocalised(varc_85, 1) + " gp", Component.interface_105.component_105_153);
        cs2_609();
    }
}
