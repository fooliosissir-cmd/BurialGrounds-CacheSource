/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_elements_chooseposition]

function worldmap_elements_chooseposition(intArg0: coord, intArg1: boolean, intArg2: component, intArg3: number, intArg4: number, intArg5: number, intArg6: number): [number, number] {
    let int7: number = 0;
    let int8: number = 0;

    if (intArg1 == true) {
        int7 = coordX(intArg0);
        int8 = coordZ(intArg0);
    } else {
        [int7, int8] = worldMapGetDisplayCoord(intArg0);
    }
    let int9: number = ifGetWidth(intArg2);
    let int10: number = ifGetHeight(intArg2);
    int7 = scale(int9, intArg5 - intArg6, int7 - intArg6);
    int8 = scale(int10, intArg3 - intArg4, int8 - intArg4);
    int7 = int7 - int9 / 2;
    int8 = int10 / 2 - int8;
    return [int7, int8];
}
