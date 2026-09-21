/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1480

function cs2_1480(intArg0: number): void {
    if (intArg0 == -1) {
        varc_1691 = -1;
        varc_1692 = -1;
        deltooltip_action(Component.interface_762.component_762_99);
        return;
    }
    varc_1691 = invGetobj(Inv.bank, intArg0);
    varc_1692 = -1;

    if (varc_188 == 1) {
        cs2_569(Component.interface_762.component_762_95, intArg0, Component.interface_762.component_762_99, "Item is in tab " + tostring(cs2_1468(intArg0)), 25, 150);
    }
}
