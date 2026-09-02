/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stock_offerprice_market]

function stock_offerprice_market(): void {
    if (varp_1109 == -1) {
        varc_85 = 1;
        return;
    }
    let int0: number = varp_1114;

    if (int0 < 0) {
        varc_85 = 1;
    } else {
        varc_85 = varp_1114;
    }
    ifSetText(tostringLocalised(varc_85, 1) + " gp", Component.interface_105.component_105_153);
    cs2_609();
}
