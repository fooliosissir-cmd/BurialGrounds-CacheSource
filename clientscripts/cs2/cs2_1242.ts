/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1242

function cs2_1242(intArg0: component): void {
    ifSetGraphic(Graphic.magni_glass_0, intArg0);
    ifSetOnClick(hook(cs2_1950, "I", [event_com]), intArg0);
    let int1: coord = moveCoord(0, coordX(coord()) - coordX(coord()) % 64 + 13, 0, coordZ(coord()) - coordZ(coord()) % 64 + 23);
    camFollowcoord(int1);
    camLookat(int1, 25, 100, 10);
    camMoveto(moveCoord(int1, 11, 0, 0), 2600, 100, 10);
}
