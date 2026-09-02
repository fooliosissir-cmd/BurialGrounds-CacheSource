/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5939

function cs2_5939(intArg0: number): number {
    let int1: number = 0;

    if (intArg0 == varbit_11155 - 1) {
        int1 = 3;
    } else {
        switch (intArg0) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 10:
            case 12:
                int1 = 0;
                break;
            case 2:
            case 6:
            case 9:
            case 11:
                int1 = 1;
                break;
            case 0:
            case 4:
            case 8:
                int1 = 2;
                break;
        }
    }
    return int1;
}
