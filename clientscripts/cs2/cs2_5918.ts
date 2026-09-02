/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5918

function cs2_5918(intArg0: component, intArg1: number): void {
    let int2: number = ifGetWidth(intArg0);
    let int3: number = 150;
    let int4: number = 18;
    let int5: number = 15;
    let int6: number = int3 - int4;
    let int7: number = int6 / int5;

    if (intArg1 == 0) {
        int2 = min(int2 + int7, int3);
        if (int2 == int3) {
            intArg1 = 1;
            ifSetOnTimer(hook(cs2_5918, "Ii", [event_com, intArg1]), intArg0);
            cs2_5914();
            if (varc_1928 == 0) {
                soundVorbisVolume(4282, 1, 0, 255);
            } else if (varc_1928 == 1) {
                soundVorbisVolume(15762, 1, 0, 255);
            }
            soundVorbisVolume(cs2_5925(Enum.wof_goblin_hit), 1, 0, 50);
        }
    } else {
        int2 = max(int2 - int7, int4);
        if (int2 == int4) {
            ifSetOnTimer(noHook(""), intArg0);
        }
    }
    ifSetSize(int2, ifGetHeight(intArg0), 0, 0, intArg0);
}
