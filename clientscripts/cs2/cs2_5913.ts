/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5913

function cs2_5913(intArg0: number): void {
    let int1: component = Component.interface_1253.component_1253_80;
    let int2: component = Component.interface_1253.component_1253_81;
    let int3: component = Component.interface_1253.component_1253_37;

    intArg0 = intArg0 + 1;

    if (intArg0 >= 50) {
        intArg0 = 0;
    }
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: graphic = -1;
    let int8: number = ifGet2dangle(int1);

    if (intArg0 > 25) {
        int8 = max(61659, int8 - 154);
    } else {
        int8 = min(65535, int8 + 154);
    }
    ifSet2dangle(int8, int1);
    let int9: number = 0;
    let int10: number = 189 - 151;
    let int11: number = intArg0 % 25;
    let int12: number = scale_round(int11, 25, int10);

    if (intArg0 < 25) {
        int9 = 189 - int12;
        if (intArg0 == 0 && ifGetHide(Component.interface_1253.component_1253_38) == 1) {
            soundVorbisVolume(14239, 1, 0, 30);
        }
    } else {
        int9 = 151 + int12;
        if (intArg0 == 26 && ifGetHide(Component.interface_1253.component_1253_38) == 1) {
            soundVorbisVolume(9873, 1, 0, 30);
        }
    }
    ifSetPosition(ifGetX(int2), int9, 0, 0, int2);

    if (intArg0 >= 0 && intArg0 < 18) {
        int5 = 1;
        int5 = 7;
        int7 = Graphic.graphic_9887;
        if (intArg0 == 0 && ifGetHide(Component.interface_1253.component_1253_38) == 1 && ifGetHide(Component.interface_1253.component_1253_37) == 0) {
            switch (random(4)) {
                case 0:
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_yippee), 1, 0, 25);
                    break;
                case 1:
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_yeah), 1, 0, 25);
                    break;
                case 2:
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_woot), 1, 0, 25);
                    break;
                case 3:
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_yay), 1, 0, 25);
                    break;
            }
        }
    } else if (intArg0 >= 18 && intArg0 < 25) {
        int5 = 19;
        int6 = 90;
        int7 = Graphic.graphic_9888;
        if (intArg0 == 19 && ifGetHide(Component.interface_1253.component_1253_38) == 1 && ifGetHide(Component.interface_1253.component_1253_37) == 0) {
            soundVorbisVolume(cs2_5925(Enum.wof_goblin_gasp), 1, 0, 50);
        }
    } else if (intArg0 >= 25 && intArg0 < 37) {
        int5 = 1;
        int6 = 84;
        int7 = Graphic.graphic_9889;
        if (intArg0 == 25 && ifGetHide(Component.interface_1253.component_1253_38) == 1 && ifGetHide(Component.interface_1253.component_1253_37) == 0) {
            soundVorbisVolume(cs2_5925(Enum.wof_goblin_strain), 1, 0, 50);
        }
    } else {
        int5 = 19;
        int6 = 90;
        int7 = Graphic.graphic_9888;
        if (intArg0 == 37 && ifGetHide(Component.interface_1253.component_1253_38) == 1 && ifGetHide(Component.interface_1253.component_1253_37) == 0) {
            soundVorbisVolume(cs2_5925(Enum.wof_goblin_gasp), 1, 0, 50);
        }
    }
    ifSetPosition(int5, int6, 0, 2, int3);
    ifSetGraphic(cs2_6267(int7), int3);
    ifSetOnTimer(hook(cs2_5912, "i", [intArg0]), Component.interface_1253.component_1253_52);
    varc_1802 = intArg0;
}
