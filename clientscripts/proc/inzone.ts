/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,inzone]

function inzone(intArg0: coord, intArg1: coord, intArg2: coord): number {
    if (coordX(intArg2) >= min(coordX(intArg0), coordX(intArg1)) && coordZ(intArg2) >= min(coordZ(intArg0), coordZ(intArg1)) && coordY(intArg2) >= min(coordY(intArg0), coordY(intArg1)) && coordX(intArg2) <= max(coordX(intArg0), coordX(intArg1)) && coordZ(intArg2) <= max(coordZ(intArg0), coordZ(intArg1)) && coordY(intArg2) <= max(coordY(intArg0), coordY(intArg1))) {
        return 1;
    }
    return 0;
}
