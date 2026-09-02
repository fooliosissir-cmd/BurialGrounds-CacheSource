/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_info]

function objreq_info(): void {
    ccDeleteAll(Component.interface_449.component_449_8);
    varc_objreq_lines = 0;
    let int0: obj = invTotal(Inv.inv, varc_743);
    let int1: obj = -1;

    if (2147483647 - invTotal(Inv.inv, Obj.coins) - invTotal(Inv.inv_623, Obj.coins) > 0) {
        int1 = invTotal(Inv.inv, Obj.coins) + invTotal(Inv.inv_623, Obj.coins);
    } else {
        int1 = 2147483647;
    }
    ifSetColour(varc_1241, Component.interface_449.component_449_2);
    ifSetColour(varc_1241, Component.interface_449.component_449_14);
    ifSetColour(varc_1241, Component.interface_449.component_449_22);
    ifSetColour(varc_1241, Component.interface_449.component_449_24);

    if (varc_743 != -1) {
        if (varc_743 == Obj.coins) {
            int0 = int1;
        }
        objreq_buy_pane();
        ifSetHide(false, Component.interface_449.component_449_15);
        ifSetSize(16384, 147, 2, 0, Component.interface_449.component_449_6);
    } else {
        ifSetObjectNonum(-1, -1, Component.interface_449.component_449_23);
        ifSetHide(true, Component.interface_449.component_449_15);
        ifSetSize(16384, 187, 2, 0, Component.interface_449.component_449_6);
        if (varp_1109 != -1 && pouch_total(Obj.coins, varp_1111 * varp_1110) == 0) {
            ifSetColour(colour(0xFF0000), Component.interface_449.component_449_25);
        } else {
            ifSetColour(varc_1241, Component.interface_449.component_449_25);
        }
    }

    if (varc_743 == -1) {
        switch (int1) {
            case Obj.mcannonremains:
                ifSetText("You have no coins.", Component.interface_449.component_449_25);
                break;
            case Obj.mcannontoolkit:
                ifSetText("You have one coin.", Component.interface_449.component_449_25);
                break;
            case 2147483647:
                ifSetText("You have more than " + cs2_940(int1) + " coins!", Component.interface_449.component_449_25);
                break;
            default:
                ifSetText("You have " + cs2_940(int1) + " coins.", Component.interface_449.component_449_25);
                break;
        }
    } else {
        switch (int0) {
            case Obj.mcannonremains:
                ifSetText("You have no " + enumOp(type_obj, type_string, Enum.enum_62, varc_743) + ".", Component.interface_449.component_449_25);
                break;
            case Obj.mcannontoolkit:
                ifSetText("You have one " + enumOp(type_obj, type_string, Enum.currency_singular, varc_743) + ".", Component.interface_449.component_449_25);
                break;
            case 2147483647:
                ifSetText("You have more than " + cs2_940(int0) + " " + enumOp(type_obj, type_string, Enum.enum_62, varc_743) + "!", Component.interface_449.component_449_25);
                break;
            default:
                ifSetText("You have " + cs2_940(int0) + " " + enumOp(type_obj, type_string, Enum.enum_62, varc_743) + ".", Component.interface_449.component_449_25);
                break;
        }
    }
    let int2: number = 181;
    let int3: number = objreq_info_draw(int2);

    if (int3 > ifGetHeight(Component.interface_449.component_449_8)) {
        int2 = 165;
        ccDeleteAll(Component.interface_449.component_449_8);
        int3 = objreq_info_draw(int2);
    } else {
        ccDeleteAll(Component.interface_449.component_449_9);
    }
    ifSetScrollSize(int2, int3, Component.interface_449.component_449_8);
    ifSetSize(int2, 6, 0, 1, Component.interface_449.component_449_8);
    ifSetScrollPos(0, 0, Component.interface_449.component_449_8);

    if (int3 > ifGetHeight(Component.interface_449.component_449_8)) {
        proc_scrollbar_vertical(Component.interface_449.component_449_9, Component.interface_449.component_449_8, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    }
}
