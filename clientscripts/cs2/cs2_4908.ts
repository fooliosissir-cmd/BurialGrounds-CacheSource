/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4908

function cs2_4908(intArg0: number): void {
    let int1: number = -1;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = cs2_4950(intArg0);
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: component = -1;
    let int12: struct = -1;
    let int13: graphic = -1;
    let int14: number = 1;

    if (clanProfileFind() == 1) {
        if (varc_clan_stronghold_main_map_next_week == 0) {
            int12 = cs2_5116(pushVarClanBit<2598>(), pushVarClanBit<2580>());
        } else {
            int12 = cs2_5116(pushVarClanBit<2074>(), pushVarClanBit<2580>());
        }
        if (int12 == -1) {
            return;
        }
        if (int6 == 6 || int6 == 5) {
            int5 = cs2_4971(intArg0);
            int13 = cs2_5171(int5);
        } else {
            int13 = cs2_4973(intArg0);
        }
        int4 = cs2_4949(intArg0);
        int7 = cs2_4961(intArg0, 1);
        int8 = cs2_4953(int7);
        if (int8 > 0) {
            int13 = Graphic.aif_clan_building_icons_2;
        }
        int9 = cs2_4961(intArg0, 3);
        int10 = cs2_4953(int9);
        if ((int6 == 6 || int6 == 6 || int6 == 5) && (pushVarClanBit<2148>() == int5 || pushVarClanBit<2165>() == int5 || pushVarClanBit<2182>() == int5)) {
            int13 = Graphic.aif_clan_building_icons_2;
        }
        if (int10 > 0) {
            int13 = Graphic.aif_clan_building_icons_2;
        }
        if (int6 == 5) {
            if (pushVarClanBit<2148>() == int5 || pushVarClanBit<2165>() == int5 || pushVarClanBit<2182>() == int5) {
                ifSetGraphic(Graphic.aif_custom_spot_pins_1_2, cs2_5216(intArg0));
                ifSetOp(2, "", cs2_4972(intArg0));
            } else if (int4 > 0) {
                ifSetGraphic(Graphic.aif_custom_spot_pins_1_0, cs2_5216(intArg0));
                ifSetOp(2, "Reset hotspot to its default state", cs2_4972(intArg0));
            } else {
                ifSetGraphic(Graphic.aif_custom_spot_pins_1_1, cs2_5216(intArg0));
                ifSetOp(2, "", cs2_4972(intArg0));
            }
        }
        int11 = cs2_4972(intArg0);
        if (int11 == -1) {
            return;
        }
        if (ccFind(int11, 0) == 1) {
            ccSetGraphic(int13);
        }
    }
}
