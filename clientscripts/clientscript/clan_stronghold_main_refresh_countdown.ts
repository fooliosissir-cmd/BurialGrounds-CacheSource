/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_stronghold_main_refresh_countdown]

function clan_stronghold_main_refresh_countdown(): void {
    let int0: component = -1;
    let int1: component = -1;
    let int2: component = -1;

    switch (varbit_clan_stronghold_main_map_mode) {
        case 0:
            int0 = Component.interface_1259.component_1259_189;
            int1 = Component.interface_1259.component_1259_183;
            int2 = Component.interface_1259.component_1259_47;
            break;
        case 1:
        case 3:
        case 4:
            int0 = Component.interface_1261.component_1261_375;
            int1 = Component.interface_1261.component_1261_369;
            int2 = Component.interface_1261.component_1261_141;
            break;
        case 2:
        case 5:
            int0 = Component.interface_1258.component_1258_623;
            int1 = Component.interface_1258.component_1258_617;
            int2 = Component.interface_1258.component_1258_135;
            break;
        case 6:
            int0 = Component.interface_1260.component_1260_318;
            int1 = Component.interface_1260.component_1260_312;
            int2 = Component.interface_1260.component_1260_102;
            break;
    }
    let str0: string = "";

    if (varc_1557 == 0 && varc_1558 < 6 && varc_1558 == 0 && varc_1559 < 20) {
    }

    if (varc_1557 == 0 && varc_1558 == 0 && varc_1559 == 0) {
        ifSetText("Due!", int1);
        return;
    }

    if (varc_1557 > 0) {
        str0 = append(str0, tostring(varc_1557) + "d ");
    }

    if (varc_1558 > 0) {
        str0 = append(str0, tostring(varc_1558) + "h ");
    }

    if (varc_1559 > 0) {
        str0 = append(str0, tostring(varc_1559) + "m");
    }
    ifSetText(str0, int1);
    let str1: string = "";

    if (clanProfileFind() == 1) {
        ifSetText(tostring(pushVarClan<2136>()), int0);
        if (cs2_4786(pushVarClanBit<2580>() - pushVarClanBit<2633>()) == 1) {
            ifSetColour(colour(0x28C851), int0);
            str1 = "Sufficient full members have visited to allow all upkeep and upgrades.";
        } else if (cs2_4787(pushVarClanBit<2580>() - pushVarClanBit<2633>()) == 1) {
            if (pushVarClanBit<2580>() == 7) {
                ifSetColour(colour(0x28C851), int0);
                str1 = "Sufficient full members have visited to allow all upkeep and upgrades.";
            } else {
                ifSetColour(colour(0xD0C420), int0);
                str1 = "Sufficient full members have visited to allow all upkeep, but not to upgrade your citadel.";
            }
        } else if (pushVarClan<2136>() > 4) {
            ifSetColour(colour(0xC4312D), int0);
            str1 = "More full members must visit your citadel to allow you to perform upkeep on it.";
        } else {
            ifSetColour(colour(0xC4312D), int0);
            str1 = "More full members must visit your citadel to avoid losing access to it next build tick.";
        }
        ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, event_com, -1, str1, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), int2);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), int2);
    }
}
