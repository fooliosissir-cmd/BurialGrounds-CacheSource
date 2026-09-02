/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6081

function cs2_6081(): void {
    let int0: obj = invTotal(Inv.inv, varp_currency);
    let int1: number = 0;

    if (varp_shop != -1) {
        ifSetOnTimer(noHook(""), Component.interface_1265.component_1265_90);
        cs2_6107();
        if (varp_currency == Obj.coins) {
            int0 = int0 + invTotal(Inv.inv_623, varp_currency);
        }
        if (int0 == Obj.mcannonremains) {
            ifSetText("None!", Component.interface_1265.component_1265_207);
            ifSetGraphic(Graphic.km_shopitems_0, Component.interface_1265.component_1265_206);
        } else {
            ifSetText(cs2_940(int0), Component.interface_1265.component_1265_207);
            ifSetGraphic(enumOp(type_obj, type_graphic, Enum.enum_200, varp_currency), Component.interface_1265.component_1265_206);
        }
        int1 = parawidth(ifGetText(Component.interface_1265.component_1265_207), ifGetWidth(Component.interface_1265.component_1265_77), Graphic.verdana_11pt_regular);
        int1 = int1 + 2 + ifGetWidth(Component.interface_1265.component_1265_206);
        ifSetSize(int1, 15, 0, 0, Component.interface_1265.component_1265_16);
    }
}
