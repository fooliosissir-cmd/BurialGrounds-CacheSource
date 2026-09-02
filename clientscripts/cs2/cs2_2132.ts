/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2132

function cs2_2132(intArg0: component, intArg1: number, intArg2: number, intArg3: component, intArg4: number): void {
    let int5: number = ifGetX(intArg0) + intArg1;
    let int6: number = ifGetY(intArg0) + intArg2;

    if (ifGetX(intArg3) >= int5 && ifGetX(intArg3) < int5 + ifGetWidth(intArg0)) {
        if (ifGetY(intArg3) >= int6 && ifGetY(intArg3) < int6 + ifGetHeight(intArg0)) {
            int5 = int5 - (random(3) + 2);
            int6 = int6 - (random(3) + 2);
            if (intArg4 <= clientClock()) {
                soundSynth(Sound.sound_819, 1, 0);
                intArg4 = clientClock() + 20 + random(40);
            }
        }
    } else if (int5 >= ifGetX(intArg3) && int5 < ifGetX(intArg3) + ifGetWidth(intArg3) && int6 >= ifGetY(intArg3) && int6 < ifGetY(intArg3) + ifGetHeight(intArg3)) {
        int5 = int5 + random(3) + 2;
        int6 = int6 + random(3) + 2;
        if (intArg4 <= clientClock()) {
            soundSynth(Sound.sound_819, 1, 0);
            intArg4 = clientClock() + 20 + random(40);
        }
    }
    int5 = max(int5, 0);
    int6 = max(int6, 0);
    let int7: number = ifGetWidth(ifGetLayer(intArg0)) - ifGetWidth(intArg0);
    int5 = min(int5, int7);
    let int8: number = ifGetHeight(ifGetLayer(intArg0)) - ifGetHeight(intArg0);
    int6 = min(int6, int8);

    if ((int5 <= 0 && intArg1 < 0) || (int5 >= int7 && intArg1 > 0)) {
        intArg1 = 0 - intArg1;
    }

    if ((int6 <= 0 && intArg2 < 0) || (int6 >= int8 && intArg2 > 0)) {
        intArg2 = 0 - intArg2;
    }

    if (intArg1 == 0) {
        intArg1 = random(3) + 1;
    }

    if (intArg2 == 0) {
        intArg2 = random(3) + 1;
    }
    ifSetPosition(int5, int6, 0, 0, intArg0);
    ifSetOnTimer(hook(cs2_2132, "IiiIi", [intArg0, intArg1, intArg2, intArg3, intArg4]), intArg0);
}
