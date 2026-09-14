/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_621

function cs2_621(): void {
    let int0: number = 0;
    let str0: string = "null";

    cs2_622();

    if (varp_1112 == -1 || (stockmarketIsofferempty(varp_1112) == 1 && varp_1113 == -1)) {
        deltooltip_action(Component.interface_105.component_105_210);
        ifSetHide(false, Component.interface_105.component_105_17);
        cs2_628();
        ifSetOnInvTransmit(noHook(""), Component.interface_105.component_105_197);
        varc_stock_offerprice_timer = 0;
        varc_stock_offercount_timer = 0;
    } else {
        while (int0 < 6) {
            deltooltip_action(cs2_626(int0));
            int0 = int0 + 1;
        }
        if (stockmarketIsofferempty(varp_1112) == 0) {
            ifSetHide(false, Component.interface_105.component_105_127);
            ifSetHide(false, Component.interface_105.component_105_197);
            cs2_594(stockmarketGetoffertype(varp_1112), stockmarketGetofferitem(varp_1112), stockmarketGetoffercount(varp_1112), stockmarketGetofferprice(varp_1112));
            cs2_593(varp_1112);
            if (stockmarketGetoffertype(varp_1112) == 0) {
                str0 = "Maximum total cost of purchase";
            } else {
                str0 = "Minimum total value of sale";
            }
            ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [Component.interface_105.component_105_185, Component.interface_105.component_105_210, str0, 25, 300]), Component.interface_105.component_105_185);
            str0 = tostringLocalised(stockmarketGetoffercount(varp_1112) * stockmarketGetofferprice(varp_1112), 1);
            ifSetText(str0 + " gp", Component.interface_105.component_105_185);
        } else {
            ifSetHide(false, Component.interface_105.component_105_127);
            ifSetHide(false, Component.interface_105.component_105_154);
            if (varp_1113 == 0) {
                ifSetHide(false, Component.interface_105.component_105_188);
                if (varp_1109 != -1) {
                    ifSetHide(true, Component.interface_105.component_105_191);
                    ifSetHide(true, Component.interface_105.component_105_192);
                } else {
                    ifSetHide(false, Component.interface_105.component_105_191);
                    ifSetHide(false, Component.interface_105.component_105_192);
                }
                str0 = "Maximum total cost of purchase";
            } else {
                ifSetHide(false, Component.interface_105.component_105_193);
                if (varp_1109 != -1) {
                    ifSetHide(true, Component.interface_105.component_105_195);
                } else {
                    ifSetHide(false, Component.interface_105.component_105_195);
                }
                str0 = "Minimum total value of sale";
            }
            ifSetOnMouseRepeat(hook(cs2_649, "IIsii", [Component.interface_105.component_105_185, Component.interface_105.component_105_210, str0, 25, 300]), Component.interface_105.component_105_185);
            if (varp_1111 > 0) {
                if (varp_1110 > 2147483647 / varp_1111) {
                    ifSetText("Too high!", Component.interface_105.component_105_185);
                } else {
                    str0 = tostringLocalised(varp_1110 * varp_1111, 1);
                    ifSetText(str0 + " gp", Component.interface_105.component_105_185);
                }
            } else {
                ifSetText("0 gp", Component.interface_105.component_105_185);
            }
            cs2_594(varp_1113, varp_1109, varp_1110, varp_1111);
        }
    }
}
