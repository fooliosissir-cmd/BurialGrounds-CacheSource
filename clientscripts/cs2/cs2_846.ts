/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_846

function cs2_846(intArg0: number, intArg1: number): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_1354, intArg0);
    let int3: component = enumOp(type_int, type_component, Enum.enum_1355, intArg0);
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = ifGetX(int2);
    let int7: number = ifGetY(int2);
    let int8: number = ifGetX(int3);
    let int9: number = ifGetY(int3);
    let int10: number = ifGetModelAngleY(int2);
    let int11: number = 15 * 18 + 65;
    let int12: number = 11 * 18 + -2;
    let int13: number = 0;
    let int14: number = 0;

    if (intArg0 != 10) {
        if (intArg1 == 0 && int6 > 65) {
            int13 = int13 - 18;
            soundSynth(Sound.sound_4503, 1, 0);
        } else if (intArg1 == 1 && int6 < int11 - 1) {
            int13 = int13 + 18;
            soundSynth(Sound.sound_4503, 1, 0);
        } else if (intArg1 == 2 && int7 > -2) {
            int14 = int14 - 18;
            soundSynth(Sound.sound_4503, 1, 0);
        } else if (intArg1 == 3 && int7 < int12) {
            int14 = int14 + 18;
            soundSynth(Sound.sound_4503, 1, 0);
        }
        int6 = int6 + int13 + int4;
        int7 = int7 + int14 + int5;
        int8 = int8 + int13 + int4;
        int9 = int9 + int14 + int5;
        ifSetPosition(int6, int7, 0, 0, int2);
        ifSetPosition(int8, int9, 0, 0, int3);
    }
}
