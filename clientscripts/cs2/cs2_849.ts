/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_849

function cs2_849(intArg0: number, intArg1: number): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_1354, intArg0);
    let int3: component = enumOp(type_int, type_component, Enum.enum_1355, intArg0);
    let int4: component = enumOp(type_int, type_component, Enum.enum_1358, intArg0);
    let int5: number = cs2_853(intArg0);
    let int6: number = cs2_854(intArg0);
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = ifGetX(int2);
    let int12: number = ifGetY(int2);
    let int13: number = ifGetX(int3);
    let int14: number = ifGetY(int3);
    let int15: number = ifGetModelAngleY(int2);

    if (intArg0 != 10) {
        soundSynth(Sound.sound_4503, 1, 0);
        if (intArg1 == 0) {
            int15 = int15 + 512;
            if (int15 >= 2047) {
                int15 = 0;
            }
        } else {
            int15 = int15 - 512;
            if (int15 < 0) {
                int15 = 2047;
            }
        }
        ifSetModelAngle(0, 0, 512, int15, 0, 3500, int2);
        ifSetModelAngle(0, 0, 512, int15, 0, 3500, int3);
        ifSetModelAngle(0, 0, 512, int15, 0, 3500, int4);
        if (cs2_850(int5) != cs2_850(int6)) {
            if (int15 == 512 || int15 == 1536) {
                int9 = 9;
                int10 = 9;
            } else {
                int9 = -9;
                int10 = -9;
            }
            int11 = int11 + int9 + int7;
            int12 = int12 + int10 + int8;
            int13 = int13 + int9 + int7;
            int14 = int14 + int10 + int8;
        }
        ifSetPosition(int11, int12, 0, 0, int2);
        ifSetPosition(int13, int14, 0, 0, int3);
    }
}
