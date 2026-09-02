/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,farming_tools_side]

function farming_tools_side(intArg0: component, intArg1: component, intArg2: obj, intArg3: boolean): void {
    let int4: number = enumOp(type_obj, type_int, Enum.enum_5331, intArg2);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: obj = -1;

    switch (intArg2) {
        case Obj.secateurs:
            if (intArg3 == true) {
                ifSetOnInvTransmit(hook(farming_tools_side, "IIo1Y", [intArg0, intArg1, intArg2, false], [93, 94]), intArg0);
            }
            int5 = invTotal(Inv.worn, Obj.fairy_enchanted_secateurs) + invTotal(Inv.inv, Obj.fairy_enchanted_secateurs);
            if (int5 > 0) {
                intArg2 = Obj.fairy_enchanted_secateurs;
            }
            int5 = int5 + invTotal(Inv.inv, Obj.secateurs);
            break;
        case Obj.watering_can_dummy:
            if (intArg3 == true) {
                ifSetOnInvTransmit(hook(farming_tools_side, "IIo1Y", [intArg0, intArg1, intArg2, false], [93]), intArg0);
            }
            [int6, int8] = [1, enumGetoutputcount(Enum.farming_tools_wateringcan)];
            while (int6 <= int8) {
                int9 = enumOp(type_int, type_obj, Enum.farming_tools_wateringcan, int6);
                if (int9 != -1 && int9 != Obj.watering_can_dummy) {
                    int7 = invTotal(Inv.inv, int9);
                    if (int7 > 0) {
                        [intArg2, int5] = [int9, int5 + int7];
                    }
                }
                int6 = int6 + 1;
            }
            break;
        case Obj.polypore_neem_oil:
            if (intArg3 == true) {
                ifSetOnInvTransmit(hook(farming_tools_side, "IIo1Y", [intArg0, intArg1, intArg2, false], [93]), intArg0);
            }
            [int5, int4] = [min(invTotal(Inv.inv, Obj.polypore_neem_oil), 1), 1];
            break;
        case -1:
            return;
        default:
            if (intArg3 == true) {
                ifSetOnInvTransmit(hook(farming_tools_side, "IIo1Y", [intArg0, intArg1, intArg2, false], [93]), intArg0);
            }
            int5 = invTotal(Inv.inv, intArg2);
            break;
    }

    if (int4 > 1) {
        ifSetObjectAlwaysNum(intArg2, int5, intArg0);
    } else if (int5 > 0) {
        ifSetObject(intArg2, int5, intArg0);
    } else {
        ifSetObjectNonum(intArg2, int5, intArg0);
    }
    ifSetOpBase("<col=ff9040>" + ocName(intArg2), intArg0);
    let int10: graphic = Graphic.graphic_6014;
    let int11: graphic = Graphic.graphic_6015;

    if (int5 > 0) {
        ifSetTrans(0, intArg0);
        ifSetGraphic(int10, intArg1);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int11]), intArg1);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg1);
    } else {
        ifSetTrans(175, intArg0);
        ifSetGraphic(Graphic.graphic_6016, intArg1);
        ifClearscripthooks(intArg1);
    }
}
