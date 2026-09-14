/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1234

function cs2_1234(intArg0: number): void {
    if (keyheldShift() == 1) {
        return;
    }

    if (varc_173 != 1) {
        switch (intArg0) {
            case 1:
                camIncX();
                break;
            case 2:
                camDecX();
                break;
            case 3:
                camIncY();
                break;
            case 4:
                camDecY();
                break;
        }
    }
}
