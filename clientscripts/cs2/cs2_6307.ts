/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6307

function cs2_6307(intArg0: number, intArg1: number): void {
    let int2: number = intArg1 + intArg0 * 25;

    if (clientClock() > int2 + 50) {
        ccDeleteAll(Component.interface_1301.component_1301_3);
        ifSetOnTimer(noHook(""), Component.interface_1301.component_1301_0);
        ifSetOnTimer(noHook(""), Component.interface_1301.component_1301_1);
        ifSetOnTimer(noHook(""), Component.interface_1301.component_1301_2);
        ifSetOnTimer(noHook(""), Component.interface_1301.component_1301_5);
        return;
    }
    let int3: number = 0;
    let int4: number = random(150) + 150;
    let int5: number = random(50) + 150;

    while (int3 < intArg0) {
        if (clientClock() == intArg1 + int3 * 25) {
            ccDeleteAll(Component.interface_1301.component_1301_3);
            ccCreate(Component.interface_1301.component_1301_3, 6, ifGetNextSubId(Component.interface_1301.component_1301_3));
            ccSetSize(121, 114, 0, 0);
            ccSetModel(Model.level_up_fireworks_interface_pink);
            ccSetModelAnim(15754);
            ccSetModelAngle(0, 0, 512, 0, 0, 900 + random(1000));
            int4 = random(150) + 0;
            int5 = random(50) + 150;
            if (random(2) == 1) {
                int4 = int4 * -1;
            }
            ccSetPosition(int4, int5, 1, 0);
        }
        int3 = int3 + 1;
    }
}
