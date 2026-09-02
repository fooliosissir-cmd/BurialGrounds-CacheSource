/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mescoord]

function mescoord(intArg0: number): string {
    return tostring(coordY(intArg0)) + "_" + tostring(coordX(intArg0) / 64) + "_" + tostring(coordZ(intArg0) / 64) + "_" + tostring(coordX(intArg0) % 64) + "_" + tostring(coordZ(intArg0) % 64);
}
