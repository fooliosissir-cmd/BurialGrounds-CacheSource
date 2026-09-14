/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,wom2_populate]

function wom2_populate(intArg0: component, intArg1: component): void {
    let int2: number = 36 / 4;
    let int3: number = 0;
    let int4: obj = -1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: inv = enumOp(type_int, type_inv, Enum.int_to_invtype, varbit_wom2_varbit_invtype);
    let int9: number = 0;

    while (int3 < invSize(int8)) {
        if (ccFind(intArg0, int3) == 1) {
            int4 = invGetobj(int8, int3);
            int5 = invTotal(int8, int4);
            if (int4 != -1 && cs2_4733(int3) == 1 && int5 > 0) {
                int9 = int9 + int5;
                if (int7 + 36 >= ifGetWidth(intArg0)) {
                    int7 = 0;
                    int6 = int6 + int2 + 36;
                }
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int7, int6, 0, 0);
                ccSetHide(false);
                ccSetObject(int4, int5);
                ccSetGraphicShadow(3355443);
                ccSetOutline(1);
                ccSetOp(1, "Delete");
                ccSetOp(10, "Examine");
                ccSetOpBase("<col=ff9040>" + ocName(int4));
                int7 = int7 + int2 + 36;
                ccSetOnOp(hook(wom2_onop, "Iii", [event_com, event_comsubid, event_opindex]));
                ccSetOnMouseOver(hook(wom2_onmouseover, "Ii", [event_com, event_comsubid]));
                ccSetOnMouseLeave(hook(wom2_onmouseleave, "Ii", [event_com, event_comsubid]));
            } else {
                ccSetSize(0, 0, 0, 0);
                ccSetPosition(0, 0, 0, 0);
                ccSetHide(true);
                ccSetOnOp(noHook(""));
            }
        }
        int3 = int3 + 1;
    }
    let int10: number = 0;

    if (int9 == 1) {
        int10 = 1;
    }
    ifSetText("Found " + "<col=ffff80>" + tostring(int9) + "</col>" + " " + textSwitch(int10, "item", "items") + " of junk in your " + enumOp(type_inv, type_string, Enum.invtype_to_string, int8), Component.interface_1144.component_1144_22);

    if (int7 > 0) {
        int6 = int6 + 32;
    }

    if (int6 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int6, intArg0);
        ifSetPosition(-8, ifGetY(intArg0), 1, 0, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        if (ccFind(intArg1, 1) == 1) {
            scrollbar_vertical_doscroll(intArg1, intArg0, ifGetScrollY(intArg0), true);
        }
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ifSetScrollPos(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetPosition(0, ifGetY(intArg0), 1, 0, intArg0);
    }
}
