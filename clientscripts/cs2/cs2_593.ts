/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_593

function cs2_593(intArg0: number): void {
    let int1: number = enumOp(type_int, type_inv, Enum.stockmarket_collectinv, varp_1112);
    let int2: obj = invGetobj(int1, 0);

    ifSetObject(int2, invGetNum(int1, 0), Component.interface_105.component_105_206);
    ifClearops(Component.interface_105.component_105_206);

    if (int2 != -1) {
        if (ocCert(int2) != int2) {
            if (invGetNum(int1, 0) > 1) {
                ifSetOp(1, "Collect-notes", Component.interface_105.component_105_206);
                ifSetOp(2, "Collect-items", Component.interface_105.component_105_206);
            } else {
                ifSetOp(1, "Collect-items", Component.interface_105.component_105_206);
                ifSetOp(2, "Collect-notes", Component.interface_105.component_105_206);
            }
        } else {
            ifSetOp(1, "Collect", Component.interface_105.component_105_206);
        }
        ifSetOpBase(ocName(int2), Component.interface_105.component_105_206);
    } else {
        ifSetOpBase("", Component.interface_105.component_105_206);
    }
    let int3: obj = invGetobj(int1, 1);
    ifSetObject(int3, invGetNum(int1, 1), Component.interface_105.component_105_208);
    ifClearops(Component.interface_105.component_105_208);

    if (int3 != -1) {
        if (ocCert(int3) != int3) {
            if (invGetNum(int1, 1) > 1) {
                ifSetOp(1, "Collect-notes", Component.interface_105.component_105_208);
                ifSetOp(2, "Collect-items", Component.interface_105.component_105_208);
            } else {
                ifSetOp(1, "Collect-items", Component.interface_105.component_105_208);
                ifSetOp(2, "Collect-notes", Component.interface_105.component_105_208);
            }
        } else {
            ifSetOp(1, "Collect", Component.interface_105.component_105_208);
        }
        ifSetOpBase(ocName(int3), Component.interface_105.component_105_208);
    } else {
        ifSetOpBase("", Component.interface_105.component_105_208);
    }
    ifSetOnInvTransmit(hook(stockmarket_oninvtransmit, "Y", [], [int1]), Component.interface_105.component_105_197);
    let int4: number = stockmarketGetoffertype(intArg0);
    let int5: number = stockmarketGetoffercount(intArg0);
    let int6: number = stockmarketGetoffercompletedcount(intArg0);
    let int7: number = stockmarketGetoffercompletedgold(intArg0);
    let str0: string = tostringLocalised(int6, 1);
    let str1: string = tostringLocalised(int7, 1);
    ccDeleteAll(Component.interface_105.component_105_199);

    if (ifFind(Component.interface_105.component_105_199) == 1) {
        if (stockmarketIsofferadding(intArg0) == 1) {
            ccCreate<1>(Component.interface_105.component_105_199, 4, 0);
            ccSetPosition<1>(0, 0, 0, 0);
            ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetColour<1>(colour(0xDBD884));
            ccSetText<1>("Submitting offer...");
            ccSetTextAlign<1>(1, 1, 0);
        } else {
            cs2_652(0, 0, ccGetWidth(), ccGetHeight(), intArg0, Component.interface_105.component_105_199, 0, Component.interface_105.component_105_210, 2);
        }
    }

    if (stockmarketIsofferfinished(intArg0) == 1) {
        if (int4 == 0) {
            ifSetText("You bought a total of " + "<col=cc9900>" + str0 + "</col>" + "<br>" + "for a total price of " + "<col=cc9900>" + str1 + "</col>" + " gp.", Component.interface_105.component_105_198);
        } else {
            ifSetText("You sold a total of " + "<col=cc9900>" + str0 + "</col>" + "<br>" + "for a total price of " + "<col=cc9900>" + str1 + "</col>" + " gp.", Component.interface_105.component_105_198);
        }
        ifSetHide(true, Component.interface_105.component_105_200);
    } else {
        if (int4 == 0) {
            ifSetText("You have bought a total of " + "<col=cc9900>" + str0 + "</col>" + " so far" + "<br>" + "for a total price of " + "<col=cc9900>" + str1 + "</col>" + " gp.", Component.interface_105.component_105_198);
        } else {
            ifSetText("You have sold a total of " + "<col=cc9900>" + str0 + "</col>" + " so far" + "<br>" + "for a total price of " + "<col=cc9900>" + str1 + "</col>" + " gp.", Component.interface_105.component_105_198);
        }
        ifSetHide(false, Component.interface_105.component_105_200);
    }
}
