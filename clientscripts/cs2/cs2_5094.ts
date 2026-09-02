/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5094

function cs2_5094(): string {
    let int0: number = varc_worldswitcher_pingtimer / 50;
    let int1: number = int0 / 60;
    let int2: number = int1 / 60;

    [int1, int0] = [int1 % 60, int0 % 60];
    let str0: string = "";
    let str1: string = "";

    if (int1 < 10) {
        str1 = "0" + tostring(int1);
    } else {
        str1 = tostring(int1);
    }

    if (int0 < 10) {
        str0 = "0" + tostring(int0);
    } else {
        str0 = tostring(int0);
    }
    return tostring(int2) + ":" + str1 + ":" + str0;
}
