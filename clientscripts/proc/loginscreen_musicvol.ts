/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_musicvol]

function loginscreen_musicvol(intArg0: component, intArg1: component): void {
    ifSetdraggable(intArg0, -1, intArg1);
    let int2: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);
    let int3: number = scale(detailGetMusicVol(), 255, int2);
    ifSetPosition(int3, 0, 0, 0, intArg1);
}
