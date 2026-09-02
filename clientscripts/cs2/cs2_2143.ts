/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2143

function cs2_2143(intArg0: component, intArg1: number): void {
    let int2: Enum = Enum.enum_1093;

    if (gender() == 1) {
        int2 = Enum.enum_3872;
    }
    let int3: number = 0;

    while (int3 <= enumGetoutputcount(int2)) {
        if (ccFind(intArg0, int3) == 1) {
            if (player_prefix_check(int3) == 1) {
                ccSetColour(colour(0x11FF00));
            } else {
                ccSetColour(colour(0xFF1100));
            }
        }
        int3 = 1 + int3;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetColour(colour(0xFFFFFF));
    }
}
