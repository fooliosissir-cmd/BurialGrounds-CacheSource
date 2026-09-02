/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,spinner]

function spinner(intArg0: number, intArg1: number, intArg2: number, intArg3: component): void {
    ifSetModelAngle(0, 0, ifGetModelAngleX(intArg3) + intArg0 & 0x7FF, ifGetModelAngleY(intArg3) + intArg1 & 0x7FF, ifGetModelAngleZ(intArg3) + intArg2 & 0x7FF, ifGetModelZoom(intArg3), intArg3);
}
