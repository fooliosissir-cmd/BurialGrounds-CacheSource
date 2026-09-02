/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5948

function cs2_5948(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: graphic = -1;
    let int4: number = intArg2;

    if (intArg1 == 0 && intArg2 == 0) {
        switch (random(4)) {
            case 0:
                soundVorbisVolume(cs2_5925(Enum.wof_goblin_yippee), 1, 0, 20);
                break;
            case 1:
                soundVorbisVolume(cs2_5925(Enum.wof_goblin_yeah), 1, 0, 20);
                break;
            case 2:
                soundVorbisVolume(cs2_5925(Enum.wof_goblin_woot), 1, 0, 20);
                break;
            case 3:
                soundVorbisVolume(cs2_5925(Enum.wof_goblin_yay), 1, 0, 20);
                break;
        }
    }

    if (intArg2 <= 0) {
        switch (intArg1) {
            case 1:
                int3 = Graphic.graphic_9862;
                int4 = 15;
                break;
            case 2:
                int3 = Graphic.graphic_9861;
                int4 = 5;
                break;
            default:
                int3 = Graphic.graphic_9860;
                int4 = 5;
                break;
        }
        intArg1 = intArg1 + 1;
        if (intArg1 >= 3) {
            intArg1 = 0;
        }
        if (int3 != -1) {
            ifSetGraphic(int3, Component.interface_1252.component_1252_4);
        }
    } else {
        int4 = intArg2 - 1;
    }
    ifSetOnTimer(hook(cs2_5948, "Iii", [intArg0, intArg1, int4]), intArg0);
}
