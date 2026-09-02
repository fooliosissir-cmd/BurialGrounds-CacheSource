/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_421

function cs2_421(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 5;
    let int6: number = 5;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;

    if (camGetAngleXa() < intArg0) {
        int9 = intArg0 - camGetAngleXa();
    } else if (camGetAngleXa() > intArg0) {
        int9 = camGetAngleXa() - intArg0;
    }

    if (camGetAngleYa() < intArg1) {
        int8 = intArg1 - camGetAngleYa();
        int7 = 2047 - intArg1 + camGetAngleYa();
        if (int7 > int8) {
            int10 = int8;
            [int5, int6] = cs2_422(int9, int10);
            camForceAngle(camGetAngleXa(), min(camGetAngleYa() + int6, intArg1));
        } else {
            int10 = int7;
            [int5, int6] = cs2_422(int9, int10);
            if (intArg2 == 0) {
                camForceAngle(camGetAngleXa(), max(camGetAngleYa() - int6, 0));
            } else {
                camForceAngle(camGetAngleXa(), max(camGetAngleYa() - int6, intArg1));
            }
            if (camGetAngleYa() == 0 && intArg2 == 0) {
                camForceAngle(camGetAngleXa(), 2047);
                ifSetOnTimer(hook(cs2_421, "iii", [intArg0, intArg1, 1]), Component.conq_scroll_overlay.main_layer);
            }
        }
    } else if (camGetAngleYa() > intArg1) {
        int8 = 2047 - camGetAngleYa() + intArg1;
        int7 = camGetAngleYa() - intArg1;
        if (int7 > int8) {
            int10 = int8;
            [int5, int6] = cs2_422(int9, int10);
            if (intArg2 == 0) {
                camForceAngle(camGetAngleXa(), min(camGetAngleYa() + int6, 2047));
            } else {
                camForceAngle(camGetAngleXa(), min(camGetAngleYa() + int6, intArg1));
            }
            if (camGetAngleYa() == 2047 && intArg2 == 0) {
                camForceAngle(camGetAngleXa(), 0);
                ifSetOnTimer(hook(cs2_421, "iii", [intArg0, intArg1, 1]), Component.conq_scroll_overlay.main_layer);
            }
        } else {
            int10 = int7;
            [int5, int6] = cs2_422(int9, int10);
            camForceAngle(camGetAngleXa(), max(camGetAngleYa() - int6, intArg1));
        }
    } else {
        int4 = 1;
    }

    if (camGetAngleXa() < intArg0) {
        camForceAngle(min(camGetAngleXa() + int5, intArg0), camGetAngleYa());
    } else if (camGetAngleXa() > intArg0) {
        camForceAngle(max(camGetAngleXa() - int5, intArg0), camGetAngleYa());
    } else {
        int3 = 1;
    }

    if (int3 == 1 && int4 == 1) {
        ifSetOnTimer(noHook(""), Component.conq_scroll_overlay.main_layer);
    }
}
