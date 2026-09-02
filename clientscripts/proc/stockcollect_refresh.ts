/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,stockcollect_refresh]

function proc_stockcollect_refresh(): void {
    cs2_662(0);
    cs2_662(1);
    cs2_662(2);
    cs2_662(3);
    cs2_662(4);
    cs2_662(5);
    let int0: obj = invGetobj(540, 0);

    if (int0 == -1) {
        ifSetHide(true, Component.interface_109.component_109_45);
        ifSetSize(ifGetWidth(Component.interface_109.component_109_1), 225, 0, 0, Component.interface_109.component_109_1);
        ifSetSize(ifGetWidth(Component.interface_109.component_109_1), 225, 0, 0, Component.interface_109.component_109_0);
        return;
    }
    ifSetHide(false, Component.interface_109.component_109_45);
    ifSetSize(ifGetWidth(Component.interface_109.component_109_1), 305, 0, 0, Component.interface_109.component_109_1);
    ifSetSize(ifGetWidth(Component.interface_109.component_109_1), 305, 0, 0, Component.interface_109.component_109_0);
    ifSetObject(int0, -1, Component.interface_109.component_109_58);
    ifSetOpBase("<col=ff9040>" + ocName(int0) + "</col>", Component.interface_109.component_109_58);
    let str0: string = "Lent item";
    let str1: string = "Still on loan";
    ifSetText(str0, Component.interface_109.component_109_57);

    if (varp_1267 != -1 || varp_1269 > 0) {
        ifSetTrans(200, Component.interface_109.component_109_58);
        ifSetColour(colour(0xFF0000), Component.interface_109.component_109_59);
        ifSetOp(1, "Demand", Component.interface_109.component_109_58);
    } else {
        ifSetTrans(0, Component.interface_109.component_109_58);
        ifSetColour(colour(0x00DF00), Component.interface_109.component_109_59);
        str1 = "Available";
        ifSetOp(1, "Reclaim", Component.interface_109.component_109_58);
    }
    ifSetText(str1, Component.interface_109.component_109_59);
    ifSetSize(max(max(stringWidth(str0, Graphic.p12_full), stringWidth(str1, Graphic.p11_full)), ifGetWidth(Component.interface_109.component_109_58)) + 30, ifGetHeight(Component.interface_109.component_109_45), 0, 0, Component.interface_109.component_109_45);
}
