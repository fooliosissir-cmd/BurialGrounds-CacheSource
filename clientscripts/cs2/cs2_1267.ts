/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1267

function cs2_1267(): void {
    ccDeleteAll(Component.interface_309.component_309_1);
    cs2_1088(Component.interface_309.component_309_1, 22);
    ccDeleteAll(Component.interface_309.component_309_9);
    cs2_333(Component.interface_309.component_309_9, colour(0x483F33), colour(0x302922), 0, 0);
    cs2_2647(Component.interface_309.component_309_9);
    ccDeleteAll(Component.interface_309.component_309_12);
    cs2_333(Component.interface_309.component_309_12, colour(0x483F33), colour(0x302922), 0, 0);
    player_kit_player_create(Component.interface_309.component_309_12, 380, 100);
    cs2_2647(Component.interface_309.component_309_12);
    let str0: string = "Choose a hairstyle";

    if (gender() == 1) {
        ifSetSize(ifGetWidth(Component.interface_309.component_309_8), ifGetHeight(Component.interface_309.component_309_13), 0, 0, Component.interface_309.component_309_13);
        ifSetHide(true, Component.interface_309.component_309_5);
        ifSetOnVarcTransmit(hook(cs2_2789, "Y", [], [1008, 1015]), Component.interface_309.component_309_1);
        ifSetOnVarTransmit(noHook(""), Component.interface_309.component_309_1);
    } else {
        ifSetSize(ifGetWidth(Component.interface_309.component_309_8) - (ifGetWidth(Component.interface_309.component_309_5) + 5), ifGetHeight(Component.interface_309.component_309_13), 0, 0, Component.interface_309.component_309_13);
        ifSetHide(false, Component.interface_309.component_309_5);
        varc_774 = int_to_bool(varbit_player_kit_beard_viewing);
        ifSetGraphic(Graphic.player_kit_fancy_4, Component.interface_309.component_309_6);
        ifSetGraphic(Graphic.player_kit_fancy_off_3, Component.interface_309.component_309_7);
        ifSetOnOp(hook(cs2_2830, "i1", [event_opindex, false]), Component.interface_309.component_309_6);
        ifSetOnOp(hook(cs2_2830, "i1", [event_opindex, true]), Component.interface_309.component_309_7);
        ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_309.component_309_22, str0, 25, 512]), Component.interface_309.component_309_6);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_309.component_309_22]), Component.interface_309.component_309_6);
        str0 = "Choose your facial hair";
        ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_309.component_309_22, str0, 25, 512]), Component.interface_309.component_309_7);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_309.component_309_22]), Component.interface_309.component_309_7);
        ifSetOnVarcTransmit(hook(cs2_2789, "Y", [], [1008, 1009, 1015]), Component.interface_309.component_309_1);
        ifSetOnVarTransmit(hook(cs2_2736, "Y", [], [1057]), Component.interface_309.component_309_1);
    }
    ccDeleteAll(Component.interface_309.component_309_13);
    cs2_333(Component.interface_309.component_309_13, colour(0x483F33), colour(0x302922), 0, 0);
    ccCreate(Component.interface_309.component_309_13, 6, ifGetNextSubId(Component.interface_309.component_309_13));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPlayerHeadSelf();
    ccSetModelAngle(5, 15, 40, 1870, 0, 2400);
    ccSetModelAnim(9804);
    cs2_2647(Component.interface_309.component_309_13);
    ccDeleteAll(Component.interface_309.component_309_15);
    cs2_2647(Component.interface_309.component_309_15);
    cs2_2790();
}
