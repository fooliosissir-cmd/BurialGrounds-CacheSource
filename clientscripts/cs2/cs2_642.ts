/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_642

function cs2_642(intArg0: component): void {
    ifSetGraphic(Graphic.grand_exchange_buy_sell_icon_0, intArg0);
    let int1: number = 0;

    while (int1 < 6) {
        deltooltip_action(cs2_626(int1));
        int1 = int1 + 1;
    }
}
