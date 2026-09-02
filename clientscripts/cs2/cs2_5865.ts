/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5865

function cs2_5865(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): [number, number, number, number, number, number, number, number, number, number] {
    let int11: number = intArg0 % 10;
    let int12: number = intArg0 % 100 - intArg0 % 10;
    let int13: number = intArg0 % 1000 - intArg0 % 100;
    let int14: number = intArg0 % 10000 - intArg0 % 1000;
    let int15: number = intArg0 % 100000 - intArg0 % 10000;
    let int16: number = intArg0 % 1000000 - intArg0 % 100000;
    let int17: number = intArg0 % 10000000 - intArg0 % 1000000;
    let int18: number = intArg0 % 100000000 - intArg0 % 10000000;
    let int19: number = intArg0 % 1000000000 - intArg0 % 100000000;
    let int20: number = (intArg0 - intArg0 % 1000000000) / 1000000000;

    intArg1 = intArg1 + int11;
    intArg2 = intArg2 + int12;
    intArg3 = intArg3 + int13;
    intArg4 = intArg4 + int14;
    intArg5 = intArg5 + int15;
    intArg6 = intArg6 + int16;
    intArg7 = intArg7 + int17;
    intArg8 = intArg8 + int18;
    intArg9 = intArg9 + int19;
    intArg10 = intArg10 + int20;

    if (intArg1 >= 10) {
        intArg1 = intArg1 - 10;
        intArg2 = intArg2 + 10;
    }

    if (intArg2 >= 100) {
        intArg2 = intArg2 - 100;
        intArg3 = intArg3 + 100;
    }

    if (intArg3 >= 1000) {
        intArg3 = intArg3 - 1000;
        intArg4 = intArg4 + 1000;
    }

    if (intArg4 >= 10000) {
        intArg4 = intArg4 - 10000;
        intArg5 = intArg5 + 10000;
    }

    if (intArg5 >= 100000) {
        intArg5 = intArg5 - 100000;
        intArg6 = intArg6 + 100000;
    }

    if (intArg6 >= 1000000) {
        intArg6 = intArg6 - 1000000;
        intArg7 = intArg7 + 1000000;
    }

    if (intArg7 >= 10000000) {
        intArg7 = intArg7 - 10000000;
        intArg8 = intArg8 + 10000000;
    }

    if (intArg8 >= 100000000) {
        intArg8 = intArg8 - 100000000;
        intArg9 = intArg9 + 100000000;
    }

    if (intArg9 >= 1000000000) {
        intArg9 = intArg9 - 1000000000;
        intArg10 = intArg10 + 1;
    }
    return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10];
}
