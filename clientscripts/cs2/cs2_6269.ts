/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6269

function cs2_6269(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: number = 255;
    let int4: number = 4;
    let int5: number = ifGetTrans(intArg0);

    if (intArg1 == 255) {
        int5 = int5 + int4;
        if (int5 >= int3) {
            int5 = int3;
            intArg1 = 0;
        }
    } else {
        int5 = int5 - int4;
        if (int5 <= int2) {
            int5 = int2;
            intArg1 = 255;
        }
    }
    ifSetTrans(int5, intArg0);
    ifSetOnTimer(hook(cs2_6269, "Ii", [event_com, intArg1]), intArg0);
}
