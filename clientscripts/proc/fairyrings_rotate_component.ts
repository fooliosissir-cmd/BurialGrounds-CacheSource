/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fairyrings_rotate_component]

function fairyrings_rotate_component(intArg0: component, intArg1: number): void {
    let int2: number = ifGetModelAngleZ(intArg0);

    if (int2 != intArg1) {
        ifSetModelAngle(0, 0, ifGetModelAngleX(intArg0), ifGetModelAngleY(intArg0), cs2_967(int2, intArg1), ifGetModelZoom(intArg0), intArg0);
        varc_125 = clientClock();
    }
}
