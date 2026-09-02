/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5612

function cs2_5612(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    if (clientClock() > intArg4) {
        intArg4 = clientClock() + 50;
        if (intArg3 == 1) {
            if (intArg2 + 5 <= 120) {
                intArg2 = intArg2 + 5;
            } else {
                intArg2 = 120;
                intArg3 = 0;
            }
        } else if (intArg2 - 5 >= 0) {
            intArg2 = intArg2 - 5;
        } else {
            intArg2 = 0;
            intArg3 = 1;
        }
        ifSetModelTint(intArg1, 3, 50, intArg2, intArg0);
    }

    if (clientClock() % 1000 < 500) {
        ifSetModelAngle(0, 0, ifGetModelAngleX(intArg0) + intArg5 & 0x7FF, ifGetModelAngleY(intArg0) + intArg6 & 0x7FF, ifGetModelAngleZ(intArg0) + 0 & 0x7FF, ifGetModelZoom(intArg0), intArg0);
    } else {
        ifSetModelAngle(0, 0, ifGetModelAngleX(intArg0) + intArg6 & 0x7FF, ifGetModelAngleY(intArg0) + intArg5 & 0x7FF, ifGetModelAngleZ(intArg0) + 0 & 0x7FF, ifGetModelZoom(intArg0), intArg0);
    }
    ifSetOnTimer(hook(cs2_5612, "Iiiiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6]), intArg0);
}
