/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wof_reward_screen_delay]

function wof_reward_screen_delay(intArg0: component, intArg1: number): void {
    let int2: number = intArg1 + 1;
    let int3: number = cs2_5939(varc_1781);

    if (int2 == 1) {
        cs2_5919();
    }

    if (int2 == 80) {
        cs2_5921();
    }

    if (int2 >= 100) {
        ifSetHide(true, Component.interface_1253.component_1253_50);
        ifSetOnTimer(hook(cs2_5904, "I", [event_com]), Component.interface_1253.component_1253_28);
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, Component.interface_1253.component_1253_33);
        ifSetHide(false, Component.interface_1253.component_1253_38);
        varc_1784 = 0;
        cs2_5906();
        if (int2 == 100) {
            switch (cs2_5939(varc_1781)) {
                case 0:
                    soundJingle(504, 100);
                    break;
                case 1:
                    soundJingle(501, 100);
                    break;
                case 2:
                    soundJingle(503, 100);
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_yippee), 1, 0, 50);
                    break;
                case 3:
                    soundJingle(502, 100);
                    soundVorbisVolume(cs2_5925(Enum.wof_goblin_yippee), 1, 0, 50);
                    break;
            }
        }
    } else {
        ifSetOnTimer(hook(wof_reward_screen_delay, "Ii", [event_com, int2]), intArg0);
    }
}
