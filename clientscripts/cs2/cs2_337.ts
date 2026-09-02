/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_337

function cs2_337(intArg0: number, intArg1: number): void {
    let int2: number = intArg1 + intArg0 * 25;

    if (clientClock() > int2 + 50) {
        ccDeleteAll(Component.interface_1216.component_1216_0);
        ifSetOnTimer(noHook(""), Component.interface_1216.component_1216_8);
        return;
    }
    let int3: number = 0;
    let int4: number = random(150);
    let int5: number = random(50);

    while (int3 < intArg0) {
        if (clientClock() == intArg1 + int3 * 25) {
            ccDeleteAll(Component.interface_1216.component_1216_0);
            ccCreate(Component.interface_1216.component_1216_0, 6, ifGetNextSubId(Component.interface_1216.component_1216_0));
            ccSetSize(121, 114, 0, 0);
            ccSetModel(Model.level_up_fireworks_interface_pink);
            ccSetModelAnim(15754);
            ccSetModelAngle(0, 0, 512, 0, 0, 900 + random(1000));
            int4 = random(150);
            int5 = random(50);
            if (random(2) == 1) {
                int4 = int4 * -1;
            }
            ccSetPosition(int4, int5, 1, 0);
        }
        int3 = int3 + 1;
    }
}
