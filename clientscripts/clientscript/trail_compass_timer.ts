/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trail_compass_timer]

function trail_compass_timer(intArg0: number, intArg1: component, intArg2: component): void {
    let int3: number = 0;

    if (intArg0 > 20000000) {
        intArg0 = 0;
    }

    if (coordZ(coord()) > 6400 || coordZ(coord()) > coordZ(coord(2944, 4479, 0))) {
        ifSetModelAngle(0, 0, 512, (ifGetModelAngleY(intArg1) - 30) % 2047, 40, 275, intArg1);
        ifSetHide(true, intArg2);
    } else if (inzone(coord(2048, 2496, 0), coord(3903, 4159, 3), coord()) == 0) {
        if (intArg0 % 68 > 34) {
            ifSetModelAngle(0, 0, 512, (ifGetModelAngleY(intArg1) - 30) % 2047, 40, 275, intArg1);
        } else {
            ifSetModelAngle(0, 0, 512, (ifGetModelAngleY(intArg1) + 30) % 2047, 40, 275, intArg1);
        }
        ifSetHide(true, intArg2);
    } else if (coordY(coord()) - coordY(varc_1323) > 0) {
        ifSetModelAngle(0, 0, 512, (ifGetModelAngleY(intArg1) + 30) % 2047, 40, 275, intArg1);
        ifSetHide(true, intArg2);
    } else {
        int3 = rough_angle(coordX(coord()), coordZ(coord()), coordX(varc_1323), coordZ(varc_1323));
        if (int3 == -1) {
            ifSetModelAngle(0, 0, 0, 0, 40, 275, intArg1);
            ifSetHide(false, intArg2);
        } else {
            ifSetModelAngle(0, 0, 512, 2047 * int3 / 65535, 40, 275, intArg1);
            ifSetHide(true, intArg2);
        }
    }
    ifSetOnTimer(hook(trail_compass_timer, "iII", [intArg0 + 1, intArg1, intArg2]), intArg1);
}
