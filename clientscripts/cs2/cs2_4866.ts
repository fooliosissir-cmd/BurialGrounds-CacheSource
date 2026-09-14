/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4866

function cs2_4866(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: component = cs2_4867(intArg0);
    let int7: component = cs2_4868(intArg0);
    let int8: component = cs2_4869(intArg0);
    let int9: component = cs2_4870(intArg0);
    let int10: component = ifGetParentLayer(int7);
    let int11: component = ifGetParentLayer(int10);
    let int12: component = ifGetParentLayer(int11);
    let int13: number = 1;

    if (clanProfileFind() == 1) {
        int13 = pushVarClanBit<2581>();
    }
    let int14: number = cs2_5215(intArg0);
    let int15: number = ifGetWidth(ifGetParentLayer(int7));
    intArg1 = intArg1 / 100;
    intArg5 = max(intArg5, int14);
    let int16: number = intArg1 * int15 / intArg5;
    let int17: number = int14 * int15 / intArg5;
    let int18: number = intArg2 * int15 / intArg5;
    let int19: number = intArg3 * int15 / intArg5;
    let int20: number = intArg1 - (intArg2 + intArg3);
    let int21: number = int20 * int15 / intArg5;
    ifSetText(tostring(intArg1), int6);
    let int22: number = 0;
    ifSetSize(min(int18 - 2, int16), 9, 0, 0, int7);
    ifSetPosition(1, 0, 0, 0, int7);
    ifSetSize(min(int19, int16 - int18), 9, 0, 0, int8);
    ifSetPosition(int18, 0, 0, 0, int8);
    ifSetSize(min(int21 - 2, int16 - (int18 + int19)), 9, 0, 0, int9);
    ifSetPosition(int18 + int19 + 1, 0, 0, 0, int9);
    let int23: graphic = Graphic.aif_resource_target_icons_3;
    let int24: graphic = Graphic.aif_resource_target_icons_0;
    let [int25, int26] = cs2_5223(intArg0);

    if (int25 != -1 && int26 != -1) {
        int17 = int17 + 82;
        int17 = int17 - ifGetWidth(int26) / 2;
        if (pushVarClan<2744>() == intArg0) {
            int23 = Graphic.aif_resource_target_icons_2;
            int24 = Graphic.aif_resource_target_icons_1;
        }
        ifSetHide(true, int25);
        ifSetHide(true, int26);
        if (int14 > 0) {
            ifSetGraphic(int23, int25);
            ifSetGraphic(int24, int26);
            ifSetHide(false, int25);
            ifSetHide(false, int26);
            ifSetPosition(int17, 0, 0, 1, int26);
        }
    }

    if (cs2_5956(intArg0) == 3 || cs2_5956(intArg0) == 2) {
        ifSetHide(false, cs2_5967(intArg0));
        ifSetGraphic(Graphic.aif_clan_loyalty_lock_0, cs2_5967(intArg0));
    } else if (cs2_5956(intArg0) == 1) {
        ifSetHide(false, cs2_5967(intArg0));
        ifSetGraphic(Graphic.aif_clan_loyalty_lock_1, cs2_5967(intArg0));
    } else {
        ifSetHide(true, cs2_5967(intArg0));
    }
    let str0: string = enumOp(type_int, type_string, Enum.clan_resources_int2string, intArg0);
    let str1: string = str0 + "<br>" + "Total : " + tostring(intArg1) + "<br>" + "Upkeep : " + tostring(intArg2) + "<br>" + "Upgrades : " + tostring(intArg3) + "<br>" + "(Upgrades part-paid : " + tostring(intArg4) + ")" + "<br>" + "Surplus : " + tostring(int20);

    if (int14 > 0) {
        str1 = append(str1, "<br>" + "Goal: " + tostring(int14));
    }

    if (pushVarClan<2744>() == intArg0) {
        str1 = append(str1, " (Primary)");
    }
    let int27: number = 2;

    if (ifGetY(int12) > ifGetHeight(ifGetParentLayer(int12)) / 2 - 10) {
        int27 = 0;
    }
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1260.component_1260_324, event_com, -1, str1, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int27, event_mousex, event_mousey]), int12);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1260.component_1260_324]), int12);
}
