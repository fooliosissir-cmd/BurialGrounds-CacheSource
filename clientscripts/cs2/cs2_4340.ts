/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4340

function cs2_4340(intArg0: number, intArg1: number, intArg2: component, intArg3: component): void {
    let int4: number = intArg0 / 60 / 24;
    let int5: number = intArg0 - int4 * 24 * 60;
    let int6: number = int5 / 60;
    let int7: number = int5 % 60;
    let str0: string = "";

    if (int6 < 10) {
        str0 = "0" + tostring(int6);
    } else {
        str0 = tostring(int6);
    }
    let str1: string = "";

    if (int7 < 10) {
        str1 = "0" + tostring(int7);
    } else {
        str1 = tostring(int7);
    }
    ifSetText(str0 + ":" + str1, intArg2);
    ifSetOnTimer(hook(clan_run_time, "iiiII", [int6, int7, intArg1, intArg2, intArg3]), intArg2);
    [str0, str1] = clan_time_tostring(intArg1, int6, int7);
    ifSetText(str0 + ":" + str1, intArg3);
}
