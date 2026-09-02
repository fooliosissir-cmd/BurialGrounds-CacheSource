/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_498

function cs2_498(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: struct = -1;

    if (intArg0 == varc_1372 && intArg1 == varc_1373 && intArg2 == varc_1374 && intArg3 == varc_1375 && intArg4 == varc_1376 && intArg5 == varc_1377) {
        return;
    } else {
        ifSetOnVarcTransmit(hook(cs2_498, "iiiiiiY", [varc_1372, varc_1373, varc_1374, varc_1375, varc_1376, varc_1377], [1372, 1373, 1374, 1375, 1376, 1377]), Component.interface_1012.component_1012_0);
    }

    if (varc_1367 != -1) {
        int6 = varc_1372 + varc_1373 + varc_1374 + varc_1375 + varc_1376 + varc_1377;
        if (int6 == 0) {
            ifSetHide(true, Component.interface_1012.component_1012_14);
            ifSetHide(false, Component.interface_1012.component_1012_29);
        } else {
            ifSetHide(false, Component.interface_1012.component_1012_14);
            ifSetHide(true, Component.interface_1012.component_1012_29);
        }
        if (int6 == 1) {
            ifSetHide(false, Component.interface_1012.component_1012_15);
            ifSetPosition(82, ifGetY(Component.interface_1012.component_1012_15), 0, 0, Component.interface_1012.component_1012_15);
            if (varc_1372 == 1) {
                int13 = Struct.conq_command_battle_cry;
            } else if (varc_1373 == 1) {
                int13 = Struct.conq_command_stoicism;
            } else if (varc_1374 == 1) {
                int13 = Struct.conq_command_bloodlust;
            } else if (varc_1375 == 1) {
                int13 = Struct.conq_command_chastise;
            } else if (varc_1376 == 1) {
                int13 = Struct.conq_command_vigilance;
            } else {
                int13 = Struct.conq_command_shield_wall;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_15);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_15);
            ifSetHide(true, Component.interface_1012.component_1012_16);
            ifSetHide(true, Component.interface_1012.component_1012_17);
            ifSetHide(true, Component.interface_1012.component_1012_18);
            ifSetHide(true, Component.interface_1012.component_1012_19);
        } else if (int6 == 2) {
            ifSetHide(false, Component.interface_1012.component_1012_15);
            ifSetPosition(50, ifGetY(Component.interface_1012.component_1012_15), 0, 0, Component.interface_1012.component_1012_15);
            if (varc_1372 == 1) {
                int13 = Struct.conq_command_battle_cry;
            } else if (varc_1373 == 1) {
                int13 = Struct.conq_command_stoicism;
                int8 = 1;
            } else if (varc_1374 == 1) {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            } else if (varc_1375 == 1) {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            } else {
                int13 = Struct.conq_command_vigilance;
                int11 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_15);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_15);
            ifSetHide(false, Component.interface_1012.component_1012_16);
            ifSetPosition(115, ifGetY(Component.interface_1012.component_1012_16), 0, 0, Component.interface_1012.component_1012_16);
            if (varc_1373 == 1 && int8 == 0) {
                int13 = Struct.conq_command_stoicism;
            } else if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
            } else if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
            } else if (varc_1376 == 1 && int11 == 0) {
                int13 = Struct.conq_command_vigilance;
            } else {
                int13 = Struct.conq_command_shield_wall;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_16);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_16);
            ifSetHide(true, Component.interface_1012.component_1012_17);
            ifSetHide(true, Component.interface_1012.component_1012_18);
            ifSetHide(true, Component.interface_1012.component_1012_19);
        } else if (int6 == 3) {
            ifSetHide(false, Component.interface_1012.component_1012_15);
            ifSetPosition(30, ifGetY(Component.interface_1012.component_1012_15), 0, 0, Component.interface_1012.component_1012_15);
            if (varc_1372 == 1) {
                int13 = Struct.conq_command_battle_cry;
            } else if (varc_1373 == 1) {
                int13 = Struct.conq_command_stoicism;
                int8 = 1;
            } else if (varc_1374 == 1) {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            } else {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_15);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_15);
            ifSetHide(false, Component.interface_1012.component_1012_16);
            ifSetPosition(80, ifGetY(Component.interface_1012.component_1012_16), 0, 0, Component.interface_1012.component_1012_16);
            if (varc_1373 == 1 && int8 == 0) {
                int13 = Struct.conq_command_stoicism;
            } else if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            } else if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            } else {
                int13 = Struct.conq_command_vigilance;
                int11 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_16);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_16);
            ifSetHide(false, Component.interface_1012.component_1012_17);
            ifSetPosition(130, ifGetY(Component.interface_1012.component_1012_17), 0, 0, Component.interface_1012.component_1012_17);
            if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
            } else if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
            } else if (varc_1376 == 1 && int11 == 0) {
                int13 = Struct.conq_command_vigilance;
            } else {
                int13 = Struct.conq_command_shield_wall;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_17);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_17);
            ifSetHide(true, Component.interface_1012.component_1012_18);
            ifSetHide(true, Component.interface_1012.component_1012_19);
        } else if (int6 == 4) {
            ifSetHide(false, Component.interface_1012.component_1012_15);
            ifSetPosition(18, ifGetY(Component.interface_1012.component_1012_15), 0, 0, Component.interface_1012.component_1012_15);
            if (varc_1372 == 1) {
                int13 = Struct.conq_command_battle_cry;
            } else if (varc_1373 == 1) {
                int13 = Struct.conq_command_stoicism;
                int8 = 1;
            } else {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_15);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_15);
            ifSetHide(false, Component.interface_1012.component_1012_16);
            ifSetPosition(61, ifGetY(Component.interface_1012.component_1012_16), 0, 0, Component.interface_1012.component_1012_16);
            if (varc_1373 == 1 && int8 == 0) {
                int13 = Struct.conq_command_stoicism;
            } else if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            } else {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_16);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_16);
            ifSetHide(false, Component.interface_1012.component_1012_17);
            ifSetPosition(104, ifGetY(Component.interface_1012.component_1012_17), 0, 0, Component.interface_1012.component_1012_17);
            if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
            } else if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            } else {
                int13 = Struct.conq_command_vigilance;
                int11 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_17);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_17);
            ifSetHide(false, Component.interface_1012.component_1012_18);
            ifSetPosition(147, ifGetY(Component.interface_1012.component_1012_18), 0, 0, Component.interface_1012.component_1012_18);
            if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
            } else if (varc_1376 == 1 && int11 == 0) {
                int13 = Struct.conq_command_vigilance;
            } else {
                int13 = Struct.conq_command_shield_wall;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_18);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_18);
            ifSetHide(true, Component.interface_1012.component_1012_19);
        } else {
            ifSetHide(false, Component.interface_1012.component_1012_15);
            ifSetPosition(11, ifGetY(Component.interface_1012.component_1012_15), 0, 0, Component.interface_1012.component_1012_15);
            if (varc_1372 == 1) {
                int13 = Struct.conq_command_battle_cry;
            } else {
                int13 = Struct.conq_command_stoicism;
                int8 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_15);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_15);
            ifSetHide(false, Component.interface_1012.component_1012_16);
            ifSetPosition(47, ifGetY(Component.interface_1012.component_1012_16), 0, 0, Component.interface_1012.component_1012_16);
            if (varc_1373 == 1 && int8 == 0) {
                int13 = Struct.conq_command_stoicism;
            } else {
                int13 = Struct.conq_command_bloodlust;
                int9 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_16);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_16);
            ifSetHide(false, Component.interface_1012.component_1012_17);
            ifSetPosition(83, ifGetY(Component.interface_1012.component_1012_17), 0, 0, Component.interface_1012.component_1012_17);
            if (varc_1374 == 1 && int9 == 0) {
                int13 = Struct.conq_command_bloodlust;
            } else {
                int13 = Struct.conq_command_chastise;
                int10 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_17);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_17);
            ifSetHide(false, Component.interface_1012.component_1012_18);
            ifSetPosition(119, ifGetY(Component.interface_1012.component_1012_18), 0, 0, Component.interface_1012.component_1012_18);
            if (varc_1375 == 1 && int10 == 0) {
                int13 = Struct.conq_command_chastise;
            } else {
                int13 = Struct.conq_command_vigilance;
                int11 = 1;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_18);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_18);
            ifSetHide(false, Component.interface_1012.component_1012_19);
            ifSetPosition(155, ifGetY(Component.interface_1012.component_1012_19), 0, 0, Component.interface_1012.component_1012_19);
            if (varc_1376 == 1 && int11 == 0) {
                int13 = Struct.conq_command_vigilance;
            } else {
                int13 = Struct.conq_command_shield_wall;
            }
            ifSetGraphic(structParam(int13, Param.conq_command_icon), Component.interface_1012.component_1012_19);
            ifSetOnMouseOver(hook(cs2_499, "i", [structParam(int13, Param.conq_command_id)]), Component.interface_1012.component_1012_19);
        }
    }
}
