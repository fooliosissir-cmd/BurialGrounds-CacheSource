/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_397

function cs2_397(): void {
    if (varc_743 == -1 && varp_1109 != -1) {
        if (pouch_total(Obj.coins, varp_1111 * varp_1110) == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_449.component_449_25);
        } else {
            ifSetColour(varc_1241, Component.interface_449.component_449_25);
        }
    }
}
