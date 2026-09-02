/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2139

function cs2_2139(intArg0: number, intArg1: component, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (ccFind(intArg1, 3) == 1) {
        ccSetModelAngle(intArg3, intArg4, ccGetModelAngleX() + 25 & 0x7FF, ccGetModelAngleY() + 25 & 0x7FF, ccGetModelAngleZ() + 25 & 0x7FF, ccGetModelZoom());
    }
}
