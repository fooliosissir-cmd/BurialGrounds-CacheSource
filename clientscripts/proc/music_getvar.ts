/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_getvar]

function music_getvar(intArg0: number): number {
    switch (intArg0 / 32) {
        case 0:
            return testBit(varp_20, intArg0 & 0x1F);
        case 1:
            return testBit(varp_21, intArg0 & 0x1F);
        case 2:
            return testBit(varp_22, intArg0 & 0x1F);
        case 3:
            return testBit(varp_23, intArg0 & 0x1F);
        case 4:
            return testBit(varp_24, intArg0 & 0x1F);
        case 5:
            return testBit(varp_25, intArg0 & 0x1F);
        case 6:
            return testBit(varp_298, intArg0 & 0x1F);
        case 7:
            return testBit(varp_311, intArg0 & 0x1F);
        case 8:
            return testBit(varp_346, intArg0 & 0x1F);
        case 9:
            return testBit(varp_414, intArg0 & 0x1F);
        case 10:
            return testBit(varp_464, intArg0 & 0x1F);
        case 11:
            return testBit(varp_598, intArg0 & 0x1F);
        case 12:
            return testBit(varp_662, intArg0 & 0x1F);
        case 13:
            return testBit(varp_721, intArg0 & 0x1F);
        case 14:
            return testBit(varp_906, intArg0 & 0x1F);
        case 15:
            return testBit(varp_1009, intArg0 & 0x1F);
        case 16:
            return testBit(varp_1104, intArg0 & 0x1F);
        case 17:
            return testBit(varp_1136, intArg0 & 0x1F);
        case 18:
            return testBit(varp_1180, intArg0 & 0x1F);
        case 19:
            return testBit(varp_1202, intArg0 & 0x1F);
        case 20:
            return testBit(varp_1381, intArg0 & 0x1F);
        case 21:
            return testBit(varp_1394, intArg0 & 0x1F);
        case 22:
            return testBit(varp_1434, intArg0 & 0x1F);
        case 23:
            return testBit(varp_1596, intArg0 & 0x1F);
        case 24:
            return testBit(varp_1618, intArg0 & 0x1F);
        case 25:
            return testBit(varp_1619, intArg0 & 0x1F);
        case 26:
            return testBit(varp_1620, intArg0 & 0x1F);
        case 27:
            return 1;
        case 28:
            return testBit(varp_1864, intArg0 & 0x1F);
        case 29:
            return testBit(varp_1865, intArg0 & 0x1F);
        case 30:
            return testBit(varp_2019, intArg0 & 0x1F);
        case 31:
            return testBit(varp_2246, intArg0 & 0x1F);
        case 32:
            return testBit(varp_2430, intArg0 & 0x1F);
        case 33:
            return testBit(varp_2559, intArg0 & 0x1F);
        case 34:
            return testBit(varp_2632, intArg0 & 0x1F);
    }
    return -1;
}
