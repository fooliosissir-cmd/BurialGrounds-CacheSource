/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_buy_pane]

function objreq_buy_pane(): void {
    let int0: number = invTotal(Inv.inv, varc_743);
    let int1: number = invTotal(Inv.inv_623, varc_743);
    let str0: string = "Cost:";
    let int2: number = -1;

    if (varc_744 == 0) {
        str0 = "None available";
    } else if (varc_744 == -1) {
        str0 = "Free sample!";
    } else {
        int2 = varc_744;
    }
    ifSetText(str0, Component.interface_449.component_449_24);

    if (2147483647 - int0 - int1 > 0) {
        int0 = int0 + int1;
    } else {
        int0 = 2147483647;
    }

    if (int2 > int0) {
        ifSetColour(colour(0xFF0000), Component.interface_449.component_449_25);
    } else {
        ifSetColour(varc_1241, Component.interface_449.component_449_25);
    }

    if (int2 > -1) {
        ifSetObjectAlwaysNum(varc_743, int2, Component.interface_449.component_449_23);
    } else {
        ifSetObjectNonum(-1, -1, Component.interface_449.component_449_23);
    }

    if (varc_744 == -1) {
        ifSetText("Take", Component.interface_449.component_449_22);
        ifSetOp(1, "Take 1", Component.interface_449.component_449_21);
        ifSetOp(2, "Take 5", Component.interface_449.component_449_21);
        ifSetOp(3, "Take 10", Component.interface_449.component_449_21);
        ifSetOp(4, "Take 50", Component.interface_449.component_449_21);
    } else {
        ifSetText("Buy", Component.interface_449.component_449_22);
        ifSetOp(1, "Buy 1", Component.interface_449.component_449_21);
        ifSetOp(2, "Buy 5", Component.interface_449.component_449_21);
        ifSetOp(3, "Buy 10", Component.interface_449.component_449_21);
        ifSetOp(4, "Buy 50", Component.interface_449.component_449_21);
    }
}
