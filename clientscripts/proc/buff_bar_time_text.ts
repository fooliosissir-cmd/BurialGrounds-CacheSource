/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,buff_bar_time_text]

function buff_bar_time_text(intArg0: number): string {
    if (intArg0 < 60) {
        return tostring(intArg0);
    }
    let int1: number = intArg0 / 60;
    let int2: number = intArg0 % 60;

    if (int2 < 10) {
        return tostring(int1) + ":0" + tostring(int2);
    }
    return tostring(int1) + ":" + tostring(int2);
}
