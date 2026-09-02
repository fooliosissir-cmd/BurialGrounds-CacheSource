/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2974

function cs2_2974(intArg0: component): void {
    let int1: number = ifGetModelAngleY(intArg0);
    let int2: number = ifGetModelAngleX(intArg0);
    let int3: number = ifGetModelAngleZ(intArg0);
    let int4: number = ifGetModelZoom(intArg0);
    let int5: number = ifGetmodelxof(intArg0);
    let int6: number = ifGetmodelyof(intArg0);
    let int7: number = 0;

    if (int1 == 2047) {
        int7 = 0;
    } else {
        int7 = int1 + 1;
    }
    ifSetModelAngle(int5, int6, int2, int7, int3, int4, intArg0);
}
