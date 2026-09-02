/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2137

function cs2_2137(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: component, intArg6: number): void {
    if (ccFind(intArg5, intArg6) == 1) {
        ccSetModelAngle(intArg3, intArg4, ccGetModelAngleX() + intArg0 & 0x7FF, ccGetModelAngleY() + intArg1 & 0x7FF, ccGetModelAngleZ() + intArg2 & 0x7FF, ccGetModelZoom());
    }
}
